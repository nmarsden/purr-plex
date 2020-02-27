import React, { useState } from 'react';
import GameDimensionsProvider from './components/gameDimensionsProvider/GameDimensionsProvider';
import Grid from './components/grid/Grid';
import DraggablePiece from './components/draggablePiece/DraggablePiece';
import {
  calcCompleted,
  CalcCompletedResult,
  calculatePlaceable,
  GridPos,
  pickRandomShape,
  PieceData,
  Placeable,
  removeCompleted,
} from './components/piece/Piece';
import Score from './components/score/Score';
import PointsMessage, { PointsMessageData } from './components/pointsMessage/PointsMessage';
import NewGameButton from './components/newGameButton/NewGameButton';
import HighScore from './components/highScore/HighScore';
import ThemeButton from './components/themeButton/ThemeButton';
import ThemeModal from './components/themeModal/ThemeModal';
import ThemeProvider from './components/themeProvider/ThemeProvider';
import useLocalStorage from './hooks/useLocalStorage/UseLocalStorage';

const initialShape = pickRandomShape();
const initialPlacedPieces:PieceData[] = [];

// FOR TESTING (replace above code with this)
// const initialShape = '3B_I_1';
// const initialPlacedPieces:PieceData[] = [
//   { gridX: 2, gridY: 0, shape: '3B_I_2' },
//   { gridX: 1, gridY: 3, shape: '3B_I_2' },
//   { gridX: 2, gridY: 6, shape: '3B_I_2' },
//   { gridX: 5, gridY: 0, shape: '3B_I_2' },
//   { gridX: 4, gridY: 3, shape: '3B_I_2' },
//   { gridX: 5, gridY: 6, shape: '3B_I_2' },
//   { gridX: 8, gridY: 1, shape: '2B_I_2' },
//   { gridX: 7, gridY: 3, shape: '3B_I_2' },
//   { gridX: 8, gridY: 6, shape: '3B_I_2' }
// ];

let placeable:Placeable = calculatePlaceable(initialShape, initialPlacedPieces);

function App() {
  const [placedPieces, setPlacedPieces] = useState<PieceData[]>(initialPlacedPieces);
  const [hoverPiece, setHoverPiece] = useState<PieceData | null>();
  const [completedBlocks, setCompletedBlocks] = useState<PieceData[]>([]);
  const [completableBlocks, setCompletableBlocks] = useState<PieceData[]>([]);
  const [nextShape, setNextShape] = useState<string>(initialShape);
  const [previousScore, setPreviousScore] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [pointsMessageData, setPointsMessageData] = useState<PointsMessageData>({ isShown:false });
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [highScore, setHighScore] = useLocalStorage('highScore', 0);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);

  const isPlaceable = (isInsideGrid:boolean, gridX:number, gridY:number): boolean => {
    return isInsideGrid && placeable.gridFlags[gridX][gridY];
  };

  const updateNextShape = (placedPieces:PieceData[]) => {
    const shape = pickRandomShape();
    setNextShape(shape);
    placeable = calculatePlaceable(shape, placedPieces);
  };

  const isGameFinished = ():boolean => {
    return !placeable.isAnyPos;
  };

  const updatePlacedPieces = (newPlacedPiece:PieceData, placedPieces:PieceData[], { completedGridPositions }:CalcCompletedResult) => {
    let newPlacedPieces = [...placedPieces, newPlacedPiece];

    if (completedGridPositions.length > 0) {
      // TODO have removeCompleted also return completedPieces instead of using a '1B' for each completedGridPositions
      newPlacedPieces = removeCompleted(newPlacedPiece, placedPieces, completedGridPositions);
    }
    setPlacedPieces(newPlacedPieces);

    return newPlacedPieces;
  };

  const toBlocks = (gridPositions:GridPos[]):PieceData[] => {
    return gridPositions.map(p => { return { gridX:p.x, gridY:p.y, shape:'1B' }})
  };

  const updateCompletedBlocks = ({ completedGridPositions }:CalcCompletedResult) => {
    if (completedGridPositions.length > 0) {
      setCompletedBlocks(toBlocks(completedGridPositions));
      window.setTimeout(() => { setCompletedBlocks([])}, 500);
    }
  };

  const calcPoints = (placedBlocksKeptCount:number, completedRegionCount:number) => {
    let points = placedBlocksKeptCount;
    let pointsPerBlockCompleted = (completedRegionCount <= 2) ? 2 : 4;
    points += (completedRegionCount * 9 * pointsPerBlockCompleted);
    return points;
  };

  const showPointsMessage = (completedRegionCount: number, completedRegionCenter: GridPos, points: number) => {
    setPointsMessageData({
      gridX: completedRegionCenter.x,
      gridY: completedRegionCenter.y,
      points,
      isCombo: completedRegionCount > 1,
      isShown: true });
    // Hide message after 2 secs
    window.setTimeout(() => { setPointsMessageData({ isShown: false })}, 2000);
  };

  const updateScore = ({ placedBlocksKeptCount, completedRegionCount, completedRegionCenter }:CalcCompletedResult) => {
    setPreviousScore(score);
    const points = calcPoints(placedBlocksKeptCount, completedRegionCount);
    const newScore = score + points;
    setScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
    }
    if (completedRegionCount > 0) {
      showPointsMessage(completedRegionCount, completedRegionCenter, points);
    }
  };

  const onPieceDrag = ({ isInsideGrid, gridX, gridY, shape }:any) => {
    if (isPlaceable(isInsideGrid, gridX, gridY)) {
      const placeablePiece = { gridX, gridY, shape };
      const completable = calcCompleted(placeablePiece, placedPieces);
      setCompletableBlocks(toBlocks(completable.completedGridPositions));
      setHoverPiece(placeablePiece);
    } else {
      setCompletableBlocks([]);
      setHoverPiece(null);
    }
  };

  const onPieceDragStop = ({ isInsideGrid, gridX, gridY, shape }:any) => {
    if (isPlaceable(isInsideGrid, gridX, gridY)) {
      const newPlacedPiece = { gridX, gridY, shape };

      const completed = calcCompleted(newPlacedPiece, placedPieces);
      const newPlacedPieces = updatePlacedPieces(newPlacedPiece, placedPieces, completed);
      updateCompletedBlocks(completed);
      updateScore(completed);
      updateNextShape(newPlacedPieces);
      if (isGameFinished()) {
        setIsGameOver(true);
      }
    }
    setCompletableBlocks([]);
    setHoverPiece(null);
  };

  const initNewGame = () => {
    setPlacedPieces([]);
    updateNextShape([]);
    setPreviousScore(0);
    setScore(0);
    setIsGameOver(false);
  };

  const onNewGameButtonClick = () => {
    initNewGame();
  };

  const onThemeButtonClick = () => {
    setIsThemeModalOpen(true);
  };

  const onThemeModalClose = () => {
    setIsThemeModalOpen(false);
  };

  return (
    <GameDimensionsProvider>
      <ThemeProvider>
        <div>
        <ThemeButton onClick={onThemeButtonClick}/>
        <ThemeModal isOpen={isThemeModalOpen} onClose={onThemeModalClose}/>
        <Score previousScore={previousScore} currentScore={score}/>
        <HighScore highScore={highScore}/>
        <Grid placedPieces={placedPieces} hoverPiece={hoverPiece} completableBlocks={completableBlocks} completedBlocks={completedBlocks}/>
        <DraggablePiece shape={nextShape} onDrag={onPieceDrag} onDragStop={onPieceDragStop} isDisabled={isGameOver}/>
        <PointsMessage pointsMessageData={pointsMessageData}/>
        <NewGameButton isShown={isGameOver} onClick={onNewGameButtonClick}/>
      </div>
      </ThemeProvider>
    </GameDimensionsProvider>
  );
}

export default App;
