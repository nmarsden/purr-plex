(this["webpackJsonppurr-plex"]=this["webpackJsonppurr-plex"]||[]).push([[0],[,,,function(e,t,n){e.exports={modalBackdrop:"ThemeModal_modalBackdrop__3rj6a",container:"ThemeModal_container__FYBe3",arrow:"ThemeModal_arrow__3HJ9y",header:"ThemeModal_header__2vzVs",body:"ThemeModal_body__fniEe",buttonPlain:"ThemeModal_buttonPlain__3QCkq",buttonCat:"ThemeModal_buttonCat__kemmk"}},,,function(e,t,n){e.exports={grid:"Grid_grid__3byWf",row:"Grid_row__3iB0a",cell:"Grid_cell__Gw65o",shadedCell:"Grid_shadedCell__2xhfR"}},function(e,t,n){e.exports={container:"HighScore_container__lUGrY",highScore:"HighScore_highScore__22IAG",cup:"HighScore_cup__1RhXs"}},,function(e,t,n){e.exports={container:"DraggablePiece_container__2WQE4",isPreDragging:"DraggablePiece_isPreDragging__2WEyo"}},function(e,t,n){e.exports={container:"PointsMessage_container__kfyA8",points:"PointsMessage_points__1CcWh",flash:"PointsMessage_flash__3RSoB"}},function(e,t,n){e.exports={container:"NewGameButton_container__5XyCv",button:"NewGameButton_button__vLJP1"}},,function(e,t,n){e.exports={container:"Piece_container__HKwIh",piece:"Piece_piece__21Hob",isCompleted:"Piece_isCompleted__29xdv","fade-out":"Piece_fade-out__1E-gz"}},function(e,t,n){e.exports={block:"Block_block__3k5af",type1a:"Block_type1a__CE7pB",type1b:"Block_type1b__1osI_",type1c:"Block_type1c__19qYn",type1d:"Block_type1d__2h7mH",type2a:"Block_type2a__mNICL",type2b:"Block_type2b__OWzjg",type2c:"Block_type2c__36yJ6",type2d:"Block_type2d__229xO",type2e:"Block_type2e__2_wbq",type2f:"Block_type2f__1h2dF",type3a:"Block_type3a__UjqB1",type3b:"Block_type3b__X-il1",type3c:"Block_type3c__2ONk0",type3d:"Block_type3d__3oMRT",type4a:"Block_type4a__2ba0F",isPreDragging:"Block_isPreDragging__3ZTOG",isDragging:"Block_isDragging__3k0tt",isMuted:"Block_isMuted__xzwBa",isCompletable:"Block_isCompletable__14YK9"}},,function(e,t,n){e.exports={container:"Score_container__1Fd1Q"}},,function(e,t,n){e.exports={palette:"ThemeButton_palette__N1Wqe"}},function(e,t,n){e.exports=n(30)},,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),l=(n(24),n(2)),i=n(1);function f(){var e=window.document.documentElement;return{width:e.clientWidth,height:e.clientHeight}}var s=Object(a.createContext)(null),p=function(e){var t=e.children,n=function(){var e=Object(a.useState)(f()),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){function e(){o(f())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),c=n.width,r=n.height,l=c-2*(c/18),p=r-(r/9+r/2.5),u=Math.floor(l/9),y=Math.floor(p/9),d=Math.min(u,y),h=9*d,g=Math.floor(.3*(r-h)),x=Math.floor(.7*(r-h)),m=g,_=Math.floor((c-h)/2),v={windowWidth:c,windowHeight:r,cellSize:d,gridSize:h,gridLeft:_,gridTop:m,headerHeight:g,footerHeight:x,draggableLeft:Math.floor(_+h/2),draggableTop:Math.floor(m+h+2.2*d),newGameButtonLeft:_,newGameButtonTop:Math.floor(m+h+3.6*d)};return o.a.createElement(s.Provider,{value:v},t)},u=function(){return Object(a.useContext)(s)},y=n(6),d=n.n(y),h=n(4),g=n.n(h),x=n(13),m=n.n(x),_=n(5),v=n(14),b=n.n(v);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var M=o.a.createElement("g",{stroke:"#000",strokeWidth:10},o.a.createElement("g",{stroke:"#000",strokeWidth:10},o.a.createElement("path",{d:"m492.14 15.556c-12.058-5.034-25.859-2.352-35.15 6.834l-65.088 64.349c-41.042-24.673-87.679-37.633-135.9-37.633s-94.855 12.961-135.9 37.633l-65.084-64.348c-9.29-9.185-23.1-11.867-35.158-6.834-12.056 5.033-19.864 16.728-19.864 29.792v235.97c0 119.98 97.649 217.63 217.63 217.63h76.735c119.98 0 217.63-97.649 217.63-217.63v-235.97c0-13.064-7.808-24.759-19.863-29.793zm3.012 265.76c0 97.458-103.32 200.78-200.78 200.78h-76.735c-97.458 0-210.34-103.79-200.78-200.78 0 0-1.0111-178.17 0-243.73 0.12337-7.9996 16.617-2.8104 24 0.2715 26.889 11.224 62.169 61.448 62.169 61.448 6.986 6.907 18.141 7.862 26.22 2.275 19.822-13.706 40.974-23.8 64.123-30.352v24.53c0 11.28-2.855 20.426 8.426 20.426s8.426-9.145 8.426-20.426v-28.435c7.4895-0.732 26.638-5.098 45.787-5.098 19.149 0 38.298 4.366 45.787 5.098v28.436c0 11.28-2.855 20.426 8.426 20.426s8.426-9.145 8.426-20.426v-24.53c23.149 6.553 44.292 16.647 64.114 30.354 8.079 5.587 19.125 4.633 26.112-2.275 0 0 34.921-51.357 62.284-61.45 7.5251-2.7758 24.042-6.2926 24 1.728-0.33435 64.355 0 241.73 0 241.73z",strokeWidth:0}))),w=o.a.createElement("path",{d:"m346.79 341.59c-11.024-2.403-7.904 4.586-10.306 15.608-2.929 13.445-29.063 23.203-42.85 23.203-8.558 0-24.694-1.723-30.322-8.214-0.445-0.513-0.918-28.994-1.407-29.456l35.357-27.113c9.821-9.821 2.865-26.369-11.024-26.369h-60.484c-13.889 0-20.845 16.549-11.024 26.369l33.237 27.116c-0.532 0.496-1.04 26.959-1.522 27.514-5.627 6.491-19.763 10.184-28.322 10.184-13.787 0-41.92-9.774-44.85-23.218-2.402-11.023 2.715-18.017-8.306-15.616-11.022 2.402-18.01-12.719-15.608-1.698 6.99 32.076 35.909 55.355 68.765 55.355 13.516 0 26.582-3.885 37.756-10.994 11.174 7.109 24.24 10.993 37.756 10.993 32.855 0 61.775-23.281 68.765-55.357 2.399-11.023-4.589 4.095-15.611 1.693z"}),S=function(e){var t=e.svgRef,n=e.title,a=E(e,["svgRef","title"]);return o.a.createElement("svg",O({enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512",xmlSpace:"preserve",ref:t},a),n?o.a.createElement("title",null,n):null,M,w,o.a.createElement("path",{d:"m128 227.5c-6.3109-8.0177 36-21 36-21l36 18s-3.8427 11.294-4 11c-5.1039-9.5368-22.191-18.411-33-18-9.7284 0.37007-28.979 17.65-35 10z",color:"#000000",colorRendering:"auto",fillRule:"evenodd",imageRendering:"auto",shapeRendering:"auto",stroke:"#000",strokeWidth:5,style:{blockProgression:"tb",isolation:"auto",mixBlendMode:"normal",textDecorationColor:"#000000",textDecorationLine:"none",textDecorationStyle:"solid",textIndent:0,textTransform:"none",whiteSpace:"normal"}}),o.a.createElement("path",{d:"m384.01 225.5c6.3109-8.0177-36-21-36-21l-36 18s3.8427 11.294 4 11c5.1039-9.5368 22.191-18.411 33-18 9.7284 0.37007 28.979 17.65 35 10z",color:"#000000",colorRendering:"auto",fillRule:"evenodd",imageRendering:"auto",shapeRendering:"auto",stroke:"#000",strokeWidth:5,style:{blockProgression:"tb",isolation:"auto",mixBlendMode:"normal",textDecorationColor:"#000000",textDecorationLine:"none",textDecorationStyle:"solid",textIndent:0,textTransform:"none",whiteSpace:"normal"}}))},B=o.a.forwardRef((function(e,t){return o.a.createElement(S,O({svgRef:t},e))})),k=(n.p,Object(a.createContext)(null)),j=function(e){var t=e.children,n=Object(a.useState)("plain"),c=Object(i.a)(n,2),r=c[0],l=c[1];return o.a.createElement(k.Provider,{value:{value:r,setValue:l}},t)},C=function(){return Object(a.useContext)(k)},z=g.a.bind(b.a),X=function(e){var t,n=e.x,a=e.y,c=e.size,r=e.blockType,l=e.isPreDragging,i=e.isDragging,f=e.isMuted,s=e.isCompletable,p=C(),u={width:"".concat(c+1,"px"),height:"".concat(c+1,"px"),left:"".concat(n-1,"px"),top:"".concat(a-1,"px")},y=z((t={block:!0},Object(_.a)(t,"type".concat(r),!0),Object(_.a)(t,"isPreDragging",l),Object(_.a)(t,"isDragging",i),Object(_.a)(t,"isMuted",f),Object(_.a)(t,"isCompletable",s),t));return o.a.createElement("div",{style:u,className:y},"cat"===p.value?o.a.createElement(B,{style:{width:"100%",height:"100%",padding:"10%"}}):o.a.createElement(o.a.Fragment,null))},P=new Map([["1B",[{offset:{x:0,y:0},type:"4a"}]],["2B_I_1",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"3a"}]],["2B_I_2",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"3b"}]],["3B_I_1",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2e"},{offset:{x:2,y:0},type:"3a"}]],["3B_I_2",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2f"},{offset:{x:0,y:2},type:"3b"}]],["3B_L_1",[{offset:{x:0,y:1},type:"3c"},{offset:{x:1,y:0},type:"3d"},{offset:{x:1,y:1},type:"2b"}]],["3B_L_2",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2a"},{offset:{x:1,y:1},type:"3b"}]],["3B_L_3",[{offset:{x:0,y:0},type:"2d"},{offset:{x:0,y:1},type:"3b"},{offset:{x:1,y:0},type:"3a"}]],["3B_L_4",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2c"},{offset:{x:1,y:1},type:"3a"}]],["4B_O",[{offset:{x:0,y:0},type:"2d"},{offset:{x:0,y:1},type:"2c"},{offset:{x:1,y:0},type:"2a"},{offset:{x:1,y:1},type:"2b"}]],["4B_L_1",[{offset:{x:0,y:1},type:"3c"},{offset:{x:1,y:1},type:"2e"},{offset:{x:2,y:0},type:"3d"},{offset:{x:2,y:1},type:"2b"}]],["4B_L_2",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2a"},{offset:{x:1,y:1},type:"2f"},{offset:{x:1,y:2},type:"3b"}]],["4B_L_3",[{offset:{x:0,y:0},type:"2d"},{offset:{x:0,y:1},type:"3b"},{offset:{x:1,y:0},type:"2e"},{offset:{x:2,y:0},type:"3a"}]],["4B_L_4",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2f"},{offset:{x:0,y:2},type:"2c"},{offset:{x:1,y:2},type:"3a"}]],["4B_J_1",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2e"},{offset:{x:2,y:0},type:"2a"},{offset:{x:2,y:1},type:"3b"}]],["4B_J_2",[{offset:{x:0,y:2},type:"3c"},{offset:{x:1,y:0},type:"3d"},{offset:{x:1,y:1},type:"2f"},{offset:{x:1,y:2},type:"2b"}]],["4B_J_3",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2c"},{offset:{x:1,y:1},type:"2e"},{offset:{x:2,y:1},type:"3a"}]],["4B_J_4",[{offset:{x:0,y:0},type:"2d"},{offset:{x:0,y:1},type:"2f"},{offset:{x:0,y:2},type:"3b"},{offset:{x:1,y:0},type:"3a"}]],["4B_Z_1",[{offset:{x:0,y:1},type:"2d"},{offset:{x:0,y:2},type:"3b"},{offset:{x:1,y:0},type:"3d"},{offset:{x:1,y:1},type:"2b"}]],["4B_Z_2",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2a"},{offset:{x:1,y:1},type:"2c"},{offset:{x:2,y:1},type:"3a"}]],["4B_S_1",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2c"},{offset:{x:1,y:1},type:"2a"},{offset:{x:1,y:2},type:"3b"}]],["4B_S_2",[{offset:{x:0,y:1},type:"3c"},{offset:{x:1,y:0},type:"2d"},{offset:{x:1,y:1},type:"2b"},{offset:{x:2,y:0},type:"3a"}]],["4B_T_1",[{offset:{x:0,y:1},type:"3c"},{offset:{x:1,y:0},type:"3d"},{offset:{x:1,y:1},type:"1c"},{offset:{x:2,y:1},type:"3a"}]],["4B_T_2",[{offset:{x:0,y:1},type:"3c"},{offset:{x:1,y:0},type:"3d"},{offset:{x:1,y:1},type:"1b"},{offset:{x:1,y:2},type:"3b"}]],["4B_T_3",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"1a"},{offset:{x:1,y:1},type:"3b"},{offset:{x:2,y:0},type:"3a"}]],["4B_T_4",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"1d"},{offset:{x:0,y:2},type:"3b"},{offset:{x:1,y:1},type:"3a"}]],["4B_I_1",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2e"},{offset:{x:2,y:0},type:"2e"},{offset:{x:3,y:0},type:"3a"}]],["4B_I_2",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2f"},{offset:{x:0,y:2},type:"2f"},{offset:{x:0,y:3},type:"3b"}]]]),D=function(e,t,n){return(P.get(n)||[]).map((function(n){return{x:e+n.offset.x,y:t+n.offset.y}}))},N=function(e){for(var t=[],n=0;n<9;n++){var a=[];t.push(a);for(var o=0;o<9;o++)a.push(e)}return t},R=function(e){var t=N(!1);return e.forEach((function(e){D(e.gridX,e.gridY,e.shape).forEach((function(e){t[e.x][e.y]=!0}))})),t},T=g.a.bind(m.a),L=function(e){var t=e.x,n=e.y,a=e.shape,c=e.isDraggable,r=e.isPreDragging,l=e.isDragging,i=e.isMuted,f=e.isCompletable,s=e.isCompleted,p=u().cellSize,y=function(e,t,n,a,c,r,l,i){return(P.get(a)||[]).map((function(a,f){return o.a.createElement(X,{key:f,x:e+a.offset.x*n,y:t+a.offset.y*n,size:n,blockType:r?"4a":a.type,isPreDragging:c,isDragging:r,isMuted:l,isCompletable:i})}))}(p*t,p*n,c&&!l?Math.floor(p/2):p,a,r,l,i,f),d=Y(a,p),h={width:"".concat(d.width,"px"),height:"".concat(d.height,"px")},g=T({container:!0,isCompleted:s}),x=T({piece:!0});return o.a.createElement("div",{style:h,className:g},o.a.createElement("div",{style:h,className:x},y))},G=function(){return Array.from(P.keys())[Math.floor(Math.random()*P.size)]},Y=function(e,t){for(var n=(P.get(e)||[]).map((function(e){return e.offset})),a=n[0].x,o=n[0].y,c=n[0].x,r=n[0].y,l=1,i=n.length;l<i;l++){var f=n[l].x,s=n[l].y;a=f<a?f:a,o=s<o?s:o,c=f>c?f:c,r=s>r?s:r}return{width:(c-a+1)*t,height:(r-o+1)*t}},I=function(e,t){for(var n=R(t),a=N(!1),o=!1,c=0;c<9;c++)for(var r=function(t){var r=!0;D(c,t,e).forEach((function(e){r=r&&e.x<9&&e.y<9&&!n[e.x][e.y]})),a[c][t]=r,r&&(o=!0)},l=0;l<9;l++)r(l);return{gridFlags:a,isAnyPos:o}},H=function(e,t){var n=[],a=[0,1,2,3,4,5,6,7,8],o=R([].concat(Object(l.a)(t),[e])),c=[],r=[],i=[],f=0,s=D(e.gridX,e.gridY,e.shape);s.forEach((function(e){if(!c.includes(e.x)&&o[e.x].every((function(e){return e}))){var t=a.map((function(t){return{x:e.x,y:t}}));n.push.apply(n,Object(l.a)(t)),f++,c.push(e.x)}if(!r.includes(e.y)&&a.every((function(t){return o[t][e.y]}))){var s=a.map((function(t){return{x:t,y:e.y}}));n.push.apply(n,Object(l.a)(s)),f++,r.push(e.y)}var p=function(e){for(var t=[],n=3*Math.floor(e.x/3),a=3*Math.floor(e.y/3),o=0;o<3;o++)for(var c=0;c<3;c++)t.push({x:n+o,y:a+c});return t}(e),u=function(e){var t=Math.floor((e.y+1)/3);return 3*Math.floor((e.x+1)/3)+t}(p[0]);!i.includes(u)&&p.every((function(e){var t=e.x,n=e.y;return o[t][n]}))&&(n.push.apply(n,Object(l.a)(p)),f++,i.push(u))}));var p=s.filter((function(e){return!n.some((function(t){return t.x===e.x&&t.y===e.y}))})).length,u=function(e){var t=e.map((function(e){return e.x})),n=e.map((function(e){return e.y})),a=Math.min.apply(Math,Object(l.a)(t)),o=Math.max.apply(Math,Object(l.a)(t)),c=Math.min.apply(Math,Object(l.a)(n)),r=Math.max.apply(Math,Object(l.a)(n));return{x:Math.floor(a+(o-a)/2),y:Math.floor(c+(r-c)/2)}}(n);return{completedGridPositions:n,completedRegionCount:f,completedRegionCenter:u,placedBlocksKeptCount:p}},W=function(e,t){var n=e[t];return e.some((function(e){return e.x===n.x&&e.y===n.y+1||e.x===n.x&&e.y===n.y-1||e.y===n.y&&e.x===n.x+1||e.y===n.y&&e.x===n.x-1}))},F=function(e,t){return e.length===t.length&&e.every((function(e,n){return e.x===t[n].x&&e.y===t[n].y}))},J=function(e,t){return e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:0},V=function(e){for(var t=function(e){return function(e){return e.map((function(e){return{x:e.x,y:e.y}}))}(e).sort(J)}(e),n=0,a=Array.from(P.keys());n<a.length;n++){var o=a[n],c=(P.get(o)||[]).map((function(e){return e.offset}));if(F(t,c))return o}return"UNKNOWN"},A=function(e,t){var n,a,o=[];return function(e){for(var t=[],n=[],a=0;a<e.length;a++)W(e,a)?n.push(e[a]):t.push([e[a]]);return n.length>0&&t.push(n),t}(function(e,t){return e.filter((function(e){return!t.some((function(t){return t.x===e.x&&t.y===e.y}))}))}((P.get(e.shape)||[]).map((function(e){return e.offset})),(n=e.gridX,a=e.gridY,t.map((function(e){return{x:e.x-n,y:e.y-a}}))))).forEach((function(t){var n=function(e,t,n){var a=Math.min.apply(Math,Object(l.a)(n.map((function(e){return e.x})))),o=Math.min.apply(Math,Object(l.a)(n.map((function(e){return e.y}))));return{gridX:e+a,gridY:t+o,shape:V(n.map((function(e){return{x:e.x-a,y:e.y-o}})))}}(e.gridX,e.gridY,t);o.push(n)})),o},q=function(e){var t=e.placedPieces,n=void 0===t?[]:t,a=e.hoverPiece,c=e.completableBlocks,r=void 0===c?[]:c,l=e.completedBlocks,i=void 0===l?[]:l,f=u(),s=f.cellSize,p={left:"".concat(f.gridLeft,"px"),top:"".concat(f.gridTop,"px")},y={width:"".concat(s,"px"),height:"".concat(s,"px")},h=["OOOXXXOOO","OOOXXXOOO","OOOXXXOOO","XXXOOOXXX","XXXOOOXXX","XXXOOOXXX","OOOXXXOOO","OOOXXXOOO","OOOXXXOOO"].map((function(e,t){var n=[];return e.split("").forEach((function(e,t){n.push(o.a.createElement("div",{key:t,style:y,className:"O"===e?d.a.cell:d.a.shadedCell}))})),o.a.createElement("div",{key:t,className:d.a.row},n)}));return o.a.createElement("div",{style:p,className:d.a.grid},h,n.map((function(e,t){return o.a.createElement(L,{key:t,x:e.gridX,y:e.gridY,shape:e.shape})})),a&&o.a.createElement(L,{key:999,x:a.gridX,y:a.gridY,shape:a.shape,isMuted:!0}),r.map((function(e,t){return o.a.createElement(L,{key:100+t,x:e.gridX,y:e.gridY,shape:e.shape,isCompletable:!0})})),i.map((function(e,t){return o.a.createElement(L,{key:200+t,x:e.gridX,y:e.gridY,shape:e.shape,isCompleted:!0})})))},K=n(9),Q=n.n(K),U=n(15),Z=n.n(U),$=g.a.bind(Q.a),ee=function(e){var t=e.shape,n=e.onDrag,c=e.onDragStop,r=e.isDisabled,l=u(),f=Y(t,l.cellSize),s=Y(t,l.cellSize/2),p={x:(f.width-s.width)/2,y:(f.height-s.height)/2},y=Object(a.useState)(!0),d=Object(i.a)(y,2),h=d[0],g=d[1],x=Object(a.useState)(!1),m=Object(i.a)(x,2),_=m[0],v=m[1],b=Object(a.useState)(p),O=Object(i.a)(b,2),E=O[0],M=O[1],w=-2*l.cellSize;_||E.x===p.x||E.y===p.y||M(p);var S={left:"".concat(l.draggableLeft-f.width/2,"px"),top:"".concat(l.draggableTop-f.height/2,"px")},B=$({isPreDragging:h}),k=function(e){var n=e.node.getBoundingClientRect(),a=l.cellSize/2,o=Math.floor((n.left+a-l.gridLeft)/l.cellSize),c=Math.floor((n.top+a-l.gridTop)/l.cellSize);return{isInsideGrid:o>=0&&o<=8&&c>=0&&c<=8,gridX:o,gridY:c,shape:t}};return o.a.createElement("div",{style:S,className:Q.a.container},o.a.createElement(Z.a,{position:E,onStart:function(){g(!0),M({x:0,y:w}),v(!0)},onDrag:function(e,t){g(!1),n(k(t))},onStop:function(e,t){var n=k(t);M(p),v(!1),c(n)},disabled:r},o.a.createElement("div",{className:B},o.a.createElement(L,{x:0,y:0,shape:t,isDraggable:!0,isPreDragging:h,isDragging:_,isMuted:r}))))},te=n(16),ne=n.n(te),ae=n(17),oe=n.n(ae),ce=function(e){var t=e.previousScore,n=e.currentScore,a=u(),c=a.headerHeight,r=a.cellSize,l={height:"".concat(c,"px")},i={height:"".concat(2*r,"px"),fontSize:"".concat(r,"px")};return o.a.createElement("div",{className:ne.a.container,style:l},o.a.createElement("div",{style:i},o.a.createElement(oe.a,{start:t,end:n,duration:1})))},re=n(10),le=n.n(re),ie=function(e){var t=e.pointsMessageData,n=u(),a=n.cellSize,c=n.cellSize/2,r=3*a,l=Math.floor(n.gridTop+t.gridY*a+c-r/2),i=Math.floor(n.gridLeft+t.gridX*a+c-r/2),f={top:"".concat(l,"px"),left:"".concat(i,"px"),width:"".concat(r,"px"),height:"".concat(r,"px")},s=Math.floor(.75*a),p={height:"".concat(s,"px"),fontSize:"".concat(s,"px"),lineHeight:"".concat(s,"px")};return o.a.createElement("div",{className:le.a.container,style:f},t.isShown?o.a.createElement("div",{className:le.a.points,style:p},t.isCombo?o.a.createElement("div",null,"COMBO"):o.a.createElement(o.a.Fragment,null),o.a.createElement("div",null,"+",t.points)):o.a.createElement(o.a.Fragment,null))},fe=n(11),se=n.n(fe),pe=function(e){var t=e.isShown,n=e.onClick,a=u(),c=a.cellSize,r=a.newGameButtonLeft,l=a.newGameButtonTop,i=c,f=a.gridSize,s={top:"".concat(l,"px"),left:"".concat(r,"px"),height:"".concat(i,"px"),width:"".concat(f,"px")},p=.8*c,y=1.2*c,d=5*c,h=Math.floor(.1*y),g={height:"".concat(y,"px"),width:"".concat(d,"px"),borderRadius:"".concat(h,"px"),fontSize:"".concat(p,"px"),lineHeight:"".concat(y,"px")};return o.a.createElement("div",{className:se.a.container,style:s},t?o.a.createElement("div",{className:se.a.button,style:g,onClick:n},"New Game"):o.a.createElement(o.a.Fragment,null))},ue=n(7),ye=n.n(ue);function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function he(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ge=o.a.createElement("g",null,o.a.createElement("path",{d:"M369.75,0h-250.2v44.3h-85.6V110c0,47.2,38.4,85.6,85.6,85.6h1.5c7.9,51.3,47,92.2,97.2,103v70.9h-30.7 c-9.5,0-17.1,7.7-17.1,17.1v22.5h-26.2v80.3h200.9v-80.3h-26.2v-22.5c0-9.5-7.7-17.1-17.1-17.1h-30.7v-70.9 c50.3-10.8,89.3-51.8,97.2-103h1.5c47.2,0,85.6-38.4,85.6-85.6V44.3h-85.6V0H369.75z M119.55,152.3c-23.3,0-42.3-19-42.3-42.3V87.6 h42.3V152.3z M301.45,121.7l-25.7,21.7l8,32.7c1.5,6.1-5.2,11-10.6,7.7l-28.5-17.8l-28.6,17.7c-5.4,3.3-12.1-1.5-10.6-7.7l8-32.7 l-25.6-21.6c-4.8-4.1-2.3-12,4-12.4l33.5-2.4l12.8-31.2c2.4-5.9,10.7-5.9,13.1,0l12.7,31.1l33.5,2.4 C303.75,109.7,306.25,117.6,301.45,121.7z M411.95,87.6V110c0,23.3-18.9,42.3-42.2,42.3V87.6H411.95z"})),xe=o.a.createElement("g",null),me=o.a.createElement("g",null),_e=o.a.createElement("g",null),ve=o.a.createElement("g",null),be=o.a.createElement("g",null),Oe=o.a.createElement("g",null),Ee=o.a.createElement("g",null),Me=o.a.createElement("g",null),we=o.a.createElement("g",null),Se=o.a.createElement("g",null),Be=o.a.createElement("g",null),ke=o.a.createElement("g",null),je=o.a.createElement("g",null),Ce=o.a.createElement("g",null),ze=o.a.createElement("g",null),Xe=function(e){var t=e.svgRef,n=e.title,a=he(e,["svgRef","title"]);return o.a.createElement("svg",de({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 489.4 489.4",style:{enableBackground:"new 0 0 489.4 489.4"},xmlSpace:"preserve",ref:t},a),n?o.a.createElement("title",null,n):null,ge,xe,me,_e,ve,be,Oe,Ee,Me,we,Se,Be,ke,je,Ce,ze)},Pe=o.a.forwardRef((function(e,t){return o.a.createElement(Xe,de({svgRef:t},e))})),De=(n.p,function(e){var t=e.highScore,n=u(),a=n.windowWidth,c=n.gridTop,r=n.gridLeft,l=n.gridSize,i=n.cellSize,f=Math.floor(.75*i),s=Math.floor(c-f),p=Math.floor(a-(r+l)),y={top:"".concat(s,"px"),right:"".concat(p,"px"),height:"".concat(f,"px"),width:"".concat(l,"px")},d=Math.floor(.4*i),h={height:"".concat(d,"px"),width:"".concat(d,"px")},g=Math.floor(.5*i),x={height:"".concat(g,"px"),fontSize:"".concat(g,"px"),lineHeight:"".concat(g,"px")};return o.a.createElement("div",{className:ye.a.container,style:y},o.a.createElement(Pe,{className:ye.a.cup,style:h},t),o.a.createElement("div",{className:ye.a.highScore,style:x},t))}),Ne=n(18),Re=n.n(Ne);function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Le(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Ge=o.a.createElement("g",null,o.a.createElement("path",{d:"M307.6,129.885c-11.453-11.447-23.783-16.778-38.805-16.778c-6.189,0-12.056,0.858-17.729,1.688 c-5.094,0.745-9.905,1.449-14.453,1.45c-8.27,0-14.197-2.397-19.82-8.017c-10.107-10.101-8.545-20.758-6.569-34.25 c2.357-16.096,5.291-36.127-15.101-56.508C183.578,5.932,167.848,0.081,148.372,0.081c-37.296,0-78.367,21.546-99.662,42.829 C17.398,74.205,0.1,115.758,0,159.917c-0.1,44.168,17.018,85.656,48.199,116.82c31.077,31.061,72.452,48.168,116.504,48.171 c0.005,0,0.007,0,0.013,0c44.315,0,86.02-17.289,117.428-48.681c17.236-17.226,32.142-44.229,38.9-70.471 C329.291,173.738,324.517,146.793,307.6,129.885z M309.424,202.764c-6.16,23.915-20.197,49.42-35.763,64.976 c-29.145,29.129-67.833,45.17-108.946,45.169c-0.002,0-0.009,0-0.011,0c-40.849-0.003-79.211-15.863-108.023-44.659 C27.777,239.36,11.908,200.896,12,159.944c0.092-40.962,16.142-79.512,45.191-108.545c19.071-19.061,57.508-39.317,91.18-39.317 c16.18,0,29.056,4.669,38.269,13.877c16.127,16.118,13.981,30.769,11.71,46.28c-2.067,14.116-4.41,30.115,9.96,44.478 c7.871,7.866,16.864,11.529,28.304,11.528c5.421-0.001,10.895-0.802,16.189-1.576c5.248-0.768,10.676-1.562,15.992-1.562 c7.938,0,18.557,1.508,30.322,13.267C317.724,156.971,313.562,186.699,309.424,202.764z"}),o.a.createElement("path",{d:"M142.002,43.531c-1.109,0-2.233,0.065-3.342,0.192c-15.859,1.824-27.33,16.199-25.571,32.042 c1.613,14.631,13.93,25.665,28.647,25.665c1.105,0,2.226-0.065,3.332-0.191c15.851-1.823,27.326-16.191,25.581-32.031 C169.032,54.57,156.716,43.531,142.002,43.531z M143.7,89.317c-0.652,0.075-1.313,0.113-1.963,0.113 c-8.59,0-15.778-6.441-16.721-14.985c-1.032-9.296,5.704-17.729,15.016-18.8c0.655-0.075,1.317-0.114,1.971-0.114 c8.587,0,15.775,6.446,16.72,14.993C159.747,79.816,153.006,88.247,143.7,89.317z"}),o.a.createElement("path",{d:"M102.997,113.64c-1.72-7.512-6.261-13.898-12.784-17.984c-4.597-2.881-9.889-4.404-15.304-4.404 c-10.051,0-19.254,5.079-24.618,13.587c-4.14,6.566-5.472,14.34-3.75,21.888c1.715,7.52,6.261,13.92,12.799,18.018 c4.596,2.88,9.888,4.402,15.303,4.402c10.051,0,19.255-5.078,24.624-13.593C103.401,128.975,104.726,121.193,102.997,113.64z  M89.111,129.16c-3.153,5.001-8.563,7.986-14.469,7.986c-3.158,0-6.246-0.889-8.93-2.57c-3.817-2.393-6.471-6.128-7.472-10.518 c-1.008-4.417-0.227-8.97,2.2-12.819c3.153-5.001,8.562-7.987,14.468-7.987c3.158,0,6.246,0.89,8.933,2.573 c3.806,2.384,6.454,6.11,7.458,10.493C92.312,120.743,91.534,125.306,89.111,129.16z"}),o.a.createElement("path",{d:"M70.131,173.25c-3.275,0-6.516,0.557-9.63,1.654c-15.055,5.301-23.05,21.849-17.821,36.892 c4.032,11.579,14.984,19.358,27.254,19.358c3.276,0,6.517-0.556,9.637-1.652c15.065-5.301,23.053-21.854,17.806-36.896 C93.346,181.029,82.397,173.25,70.131,173.25z M75.589,218.182c-1.836,0.646-3.738,0.973-5.655,0.973 c-7.168,0-13.566-4.543-15.921-11.302c-3.063-8.814,1.636-18.518,10.476-21.63c1.83-0.645,3.729-0.973,5.643-0.973 c7.165,0,13.56,4.542,15.914,11.304C89.12,205.37,84.429,215.072,75.589,218.182z"}),o.a.createElement("path",{d:"M140.817,229.415c-3.071-1.066-6.266-1.606-9.496-1.606c-12.307,0-23.328,7.804-27.431,19.429 c-2.566,7.317-2.131,15.185,1.229,22.151c3.349,6.943,9.204,12.163,16.486,14.696c3.075,1.071,6.274,1.614,9.51,1.614 c12.3,0,23.314-7.811,27.409-19.439c2.574-7.31,2.143-15.175-1.216-22.145C153.958,237.165,148.103,231.945,140.817,229.415z  M147.206,262.275c-2.407,6.834-8.873,11.425-16.091,11.425c-1.888,0-3.759-0.318-5.563-0.947c-4.253-1.48-7.67-4.524-9.623-8.575 c-1.965-4.074-2.219-8.68-0.718-12.957c2.408-6.825,8.883-11.411,16.11-11.411c1.888,0,3.759,0.317,5.561,0.942 c4.248,1.475,7.663,4.52,9.616,8.573C148.46,253.399,148.711,257.998,147.206,262.275z"}),o.a.createElement("path",{d:"M212.332,213.811c-5.466,0-10.81,1.55-15.448,4.479c-13.525,8.521-17.652,26.427-9.193,39.927 c5.315,8.445,14.463,13.488,24.469,13.488c5.458,0,10.796-1.545,15.434-4.464c13.541-8.507,17.663-26.419,9.19-39.926 C231.486,218.86,222.345,213.811,212.332,213.811z M221.205,257.082c-2.725,1.715-5.853,2.622-9.045,2.622 c-5.857,0-11.207-2.946-14.307-7.87c-4.947-7.896-2.513-18.39,5.433-23.395c2.724-1.72,5.852-2.629,9.047-2.629 c5.854,0,11.192,2.944,14.283,7.878C231.577,241.597,229.151,252.09,221.205,257.082z"}),o.a.createElement("path",{d:"M255.384,141.998c-1.06-0.117-2.134-0.176-3.194-0.176c-14.772,0-27.174,11.068-28.846,25.747 c-0.876,7.698,1.297,15.266,6.118,21.311c4.812,6.03,11.686,9.821,19.369,10.676c1.053,0.114,2.12,0.173,3.175,0.173 c14.754,0,27.164-11.067,28.869-25.748c0.886-7.688-1.277-15.247-6.091-21.288C269.97,146.651,263.082,142.853,255.384,141.998z  M268.955,172.602c-1.001,8.624-8.287,15.127-16.948,15.127c-0.621,0-1.251-0.034-1.86-0.101c-4.48-0.498-8.494-2.712-11.303-6.231 c-2.819-3.534-4.089-7.963-3.575-12.47c0.98-8.611,8.255-15.104,16.922-15.104c0.623,0,1.256,0.035,1.875,0.104 c4.498,0.499,8.523,2.717,11.334,6.244C268.209,163.697,269.472,168.114,268.955,172.602z"})),Ye=o.a.createElement("g",null),Ie=o.a.createElement("g",null),He=o.a.createElement("g",null),We=o.a.createElement("g",null),Fe=o.a.createElement("g",null),Je=o.a.createElement("g",null),Ve=o.a.createElement("g",null),Ae=o.a.createElement("g",null),qe=o.a.createElement("g",null),Ke=o.a.createElement("g",null),Qe=o.a.createElement("g",null),Ue=o.a.createElement("g",null),Ze=o.a.createElement("g",null),$e=o.a.createElement("g",null),et=o.a.createElement("g",null),tt=function(e){var t=e.svgRef,n=e.title,a=Le(e,["svgRef","title"]);return o.a.createElement("svg",Te({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 324.99 324.99",style:{enableBackground:"new 0 0 324.99 324.99"},xmlSpace:"preserve",ref:t},a),n?o.a.createElement("title",null,n):null,Ge,Ye,Ie,He,We,Fe,Je,Ve,Ae,qe,Ke,Qe,Ue,Ze,$e,et)},nt=o.a.forwardRef((function(e,t){return o.a.createElement(tt,Te({svgRef:t},e))})),at=(n.p,function(e){var t=e.onClick,n=u(),a=n.windowWidth,c=n.gridTop,r=n.gridLeft,l=n.gridSize,i=n.cellSize,f=Math.floor(c-2.2*i),s=Math.floor(a-(r+l)),p=Math.floor(.8*i),y={top:"".concat(f,"px"),right:"".concat(s,"px"),height:"".concat(p,"px"),width:"".concat(p,"px")};return o.a.createElement(nt,{className:Re.a.palette,style:y,onClick:t}," ")}),ot=n(3),ct=n.n(ot),rt=function(e){var t=e.isOpen,n=e.onClose,a=C(),c=u(),r=c.cellSize,l=c.gridTop,i=c.gridLeft,f=c.gridSize,s=c.windowWidth,p=Math.floor(l-r),y=Math.floor(s-(i+f+.5*r)),d=Math.floor(.4*r),h=Math.floor(.2*r),g=Math.floor(1.2*r),x=-Math.floor(.2*r),m={top:"".concat(p,"px"),right:"".concat(y,"px"),padding:"".concat(d,"px"),boxShadow:"0 0 ".concat(g,"px ").concat(x,"px black"),borderRadius:"".concat(h,"px")},_=Math.floor(.4*r),v={right:"".concat(Math.floor(.5*r),"px"),borderWidth:"".concat(_,"px"),marginLeft:"".concat(_,"px")},b=Math.floor(.5*r),O=Math.floor(1.2*b),E={height:"".concat(O,"px"),fontSize:"".concat(b,"px"),lineHeight:"".concat(b,"px")},M=function(e){return{height:"".concat(r,"px"),width:"".concat(r,"px"),borderRadius:"".concat(Math.floor(.5*r),"px"),margin:"".concat(Math.floor(.2*r),"px"),boxShadow:e?"0 0 0 ".concat(Math.floor(.05*r),"px black"):"none"}},w=function(e){return function(t){a.setValue(e)}};return t?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:ct.a.modalBackdrop,onClick:function(e){n()}}," "),o.a.createElement("div",{className:ct.a.container,style:m},o.a.createElement("div",{className:ct.a.arrow,style:v}," "),o.a.createElement("div",{className:ct.a.header,style:E},"Choose Theme"),o.a.createElement("div",{className:ct.a.body},o.a.createElement("div",{className:ct.a.buttonPlain,style:M("plain"===a.value),onClick:w("plain")}," "),o.a.createElement("div",{className:ct.a.buttonCat,style:M("cat"===a.value),onClick:w("cat")},o.a.createElement(B,{style:{width:"100%",height:"100%",padding:"17%"}}," "))))):o.a.createElement(o.a.Fragment,null)};var lt=G(),it=[],ft=I(lt,it);var st=function(){var e=Object(a.useState)(it),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),f=Object(i.a)(r,2),s=f[0],u=f[1],y=Object(a.useState)([]),d=Object(i.a)(y,2),h=d[0],g=d[1],x=Object(a.useState)([]),m=Object(i.a)(x,2),_=m[0],v=m[1],b=Object(a.useState)(lt),O=Object(i.a)(b,2),E=O[0],M=O[1],w=Object(a.useState)(0),S=Object(i.a)(w,2),B=S[0],k=S[1],C=Object(a.useState)(0),z=Object(i.a)(C,2),X=z[0],P=z[1],N=Object(a.useState)({isShown:!1}),R=Object(i.a)(N,2),T=R[0],L=R[1],Y=Object(a.useState)(!1),W=Object(i.a)(Y,2),F=W[0],J=W[1],V=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),o=Object(i.a)(n,2),c=o[0],r=o[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;r(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("highScore",0),K=Object(i.a)(V,2),Q=K[0],U=K[1],Z=Object(a.useState)(!1),$=Object(i.a)(Z,2),te=$[0],ne=$[1],ae=function(e,t,n){return e&&ft.gridFlags[t][n]},oe=function(e){var t=G();M(t),ft=I(t,e)},re=function(e,t,n){var a=n.completedGridPositions,o=[].concat(Object(l.a)(t),[e]);return a.length>0&&(o=function(e,t,n){var a=[];return[].concat(Object(l.a)(t),[e]).forEach((function(e){var t=D(e.gridX,e.gridY,e.shape),o=t.filter((function(e){return n.some((function(t){return t.x===e.x&&t.y===e.y}))}));if(0===o.length)a.push(e);else if(o.length!==t.length){var c=A(e,o);a.push.apply(a,Object(l.a)(c))}})),a}(e,t,a)),c(o),o},le=function(e){return e.map((function(e){return{gridX:e.x,gridY:e.y,shape:"1B"}}))},fe=function(e){var t=e.placedBlocksKeptCount,n=e.completedRegionCount,a=e.completedRegionCenter;k(X);var o=function(e,t){var n=e;return n+=9*t*(t<=2?2:4)}(t,n),c=X+o;P(c),c>Q&&U(c),n>0&&function(e,t,n){L({gridX:t.x,gridY:t.y,points:n,isCombo:e>1,isShown:!0}),window.setTimeout((function(){L({isShown:!1})}),2e3)}(n,a,o)};return o.a.createElement(p,null,o.a.createElement(j,null,o.a.createElement("div",null,o.a.createElement(at,{onClick:function(){ne(!0)}}),o.a.createElement(rt,{isOpen:te,onClose:function(){ne(!1)}}),o.a.createElement(ce,{previousScore:B,currentScore:X}),o.a.createElement(De,{highScore:Q}),o.a.createElement(q,{placedPieces:n,hoverPiece:s,completableBlocks:_,completedBlocks:h}),o.a.createElement(ee,{shape:E,onDrag:function(e){var t=e.isInsideGrid,a=e.gridX,o=e.gridY,c=e.shape;if(ae(t,a,o)){var r={gridX:a,gridY:o,shape:c},l=H(r,n);v(le(l.completedGridPositions)),u(r)}else v([]),u(null)},onDragStop:function(e){var t=e.isInsideGrid,a=e.gridX,o=e.gridY,c=e.shape;if(ae(t,a,o)){var r={gridX:a,gridY:o,shape:c},l=H(r,n),i=re(r,n,l);!function(e){var t=e.completedGridPositions;t.length>0&&(g(le(t)),window.setTimeout((function(){g([])}),500))}(l),fe(l),oe(i),ft.isAnyPos||J(!0)}v([]),u(null)},isDisabled:F}),o.a.createElement(ie,{pointsMessageData:T}),o.a.createElement(pe,{isShown:F,onClick:function(){c([]),oe([]),k(0),P(0),J(!1)}}))))};r.a.render(o.a.createElement(st,null),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.caa36e99.chunk.js.map