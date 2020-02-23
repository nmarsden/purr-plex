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
  removeCompleted,
} from './components/piece/Piece';
import Score from './components/score/Score';
import PointsMessage, { PointsMessageData } from './components/pointsMessage/PointsMessage';

const initialShape = pickRandomShape();
const initialPlacedPieces:PieceData[] = [];

// FOR TESTING (replace above code with this)
// const initialShape = '3B_I_1';
// const initialPlacedPieces:PieceData[] = [
//   { gridX: 2, gridY: 1, shape: '2B_I_2' },
//   { gridX: 2, gridY: 3, shape: '3B_I_2' },
//   { gridX: 2, gridY: 6, shape: '3B_I_2' }
// ];

let placeable:boolean[][] = calculatePlaceable(initialShape, []);

function App() {
  const [placedPieces, setPlacedPieces] = useState<PieceData[]>(initialPlacedPieces);
  const [hoverPiece, setHoverPiece] = useState<PieceData | null>();
  const [completedBlocks, setCompletedBlocks] = useState<PieceData[]>([]);
  const [nextShape, setNextShape] = useState<string>(initialShape);
  const [previousScore, setPreviousScore] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [pointsMessageData, setPointsMessageData] = useState<PointsMessageData>({ isShown:false });

  const isPlaceable = (isInsideGrid:boolean, gridX:number, gridY:number): boolean => {
    return isInsideGrid && placeable[gridX][gridY];
  };

  const updateNextShape = (placedPieces:PieceData[]) => {
    const shape = pickRandomShape();
    setNextShape(shape);
    placeable = calculatePlaceable(shape, placedPieces);
  };

  const onPieceDrag = ({ isInsideGrid, gridX, gridY, shape }:any) => {
    if (isPlaceable(isInsideGrid, gridX, gridY)) {
      setHoverPiece({ gridX, gridY, shape });
    } else {
      setHoverPiece(null);
    }
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

  const updateCompletedBlocks = ({ completedGridPositions }:CalcCompletedResult) => {
    if (completedGridPositions.length > 0) {
      setCompletedBlocks(completedGridPositions.map(p => { return { gridX:p.x, gridY:p.y, shape:'1B' }}));
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
    setScore(score + points);
    if (completedRegionCount > 0) {
      showPointsMessage(completedRegionCount, completedRegionCenter, points);
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
    }
    setHoverPiece(null);
  };

  return (
    <GameDimensionsProvider>
      <div>
        <Score previousScore={previousScore} currentScore={score}/>
        <Grid placedPieces={placedPieces} hoverPiece={hoverPiece} completedBlocks={completedBlocks}/>
        <DraggablePiece shape={nextShape} onDrag={onPieceDrag} onDragStop={onPieceDragStop}/>
        <PointsMessage pointsMessageData={pointsMessageData}/>
      </div>
    </GameDimensionsProvider>
  );
}

export default App;
