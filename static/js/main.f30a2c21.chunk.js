(this["webpackJsonppurr-plex"]=this["webpackJsonppurr-plex"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={grid:"Grid_grid__3byWf",row:"Grid_row__3iB0a",cell:"Grid_cell__Gw65o",shadedCell:"Grid_shadedCell__2xhfR"}},,function(e,t,n){e.exports={container:"DraggablePiece_container__2WQE4",isPreDragging:"DraggablePiece_isPreDragging__2WEyo"}},function(e,t,n){e.exports={container:"PointsMessage_container__kfyA8",points:"PointsMessage_points__1CcWh",flash:"PointsMessage_flash__3RSoB"}},,function(e,t,n){e.exports={container:"Piece_container__HKwIh",piece:"Piece_piece__21Hob",isCompleted:"Piece_isCompleted__29xdv","fade-out":"Piece_fade-out__1E-gz"}},function(e,t,n){e.exports={block:"Block_block__3k5af",type1a:"Block_type1a__CE7pB",type1b:"Block_type1b__1osI_",type1c:"Block_type1c__19qYn",type1d:"Block_type1d__2h7mH",type2a:"Block_type2a__mNICL",type2b:"Block_type2b__OWzjg",type2c:"Block_type2c__36yJ6",type2d:"Block_type2d__229xO",type2e:"Block_type2e__2_wbq",type2f:"Block_type2f__1h2dF",type3a:"Block_type3a__UjqB1",type3b:"Block_type3b__X-il1",type3c:"Block_type3c__2ONk0",type3d:"Block_type3d__3oMRT",type4a:"Block_type4a__2ba0F",isPreDragging:"Block_isPreDragging__3ZTOG",isDragging:"Block_isDragging__3k0tt",isMuted:"Block_isMuted__xzwBa",isCompletable:"Block_isCompletable__14YK9"}},,function(e,t,n){e.exports={container:"Score_container__1Fd1Q"}},,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),f=n.n(r),i=(n(20),n(2)),c=n(1),y=Object(o.createContext)(null);function s(){var e=window.document.documentElement;return{width:e.clientWidth,height:e.clientHeight}}var p=function(e){var t=e.children,n=function(){var e=Object(o.useState)(s()),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){function e(){a(s())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),r=n.width,f=n.height,i=r-2*(r/18),p=f-(f/18+f/3),l=Math.floor(i/9),u=Math.floor(p/9),x=Math.min(l,u),d=9*x,g=Math.floor(.4*(f-d)),h=Math.floor(.6*(f-d)),_=g,m=Math.floor((r-d)/2),b={cellSize:x,gridSize:d,gridLeft:m,gridTop:_,headerHeight:g,footerHeight:h,draggableLeft:Math.floor(m+d/2),draggableTop:Math.floor(_+d+2.2*x)};return a.a.createElement(y.Provider,{value:b},t)},l=function(){return Object(o.useContext)(y)},u=n(5),x=n.n(u),d=n(3),g=n.n(d),h=n(10),_=n.n(h),m=n(4),b=n(11),O=n.n(b),v=g.a.bind(O.a),B=function(e){var t,n=e.x,o=e.y,r=e.size,f=e.blockType,i=e.isPreDragging,c=e.isDragging,y=e.isMuted,s=e.isCompletable,p={width:"".concat(r+1,"px"),height:"".concat(r+1,"px"),left:"".concat(n-1,"px"),top:"".concat(o-1,"px")},l=v((t={block:!0},Object(m.a)(t,"type".concat(f),!0),Object(m.a)(t,"isPreDragging",i),Object(m.a)(t,"isDragging",c),Object(m.a)(t,"isMuted",y),Object(m.a)(t,"isCompletable",s),t));return a.a.createElement("div",{style:p,className:l})},X=new Map([["1B",[{offset:{x:0,y:0},type:"4a"}]],["2B_I_1",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"3a"}]],["2B_I_2",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"3b"}]],["3B_I_1",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2e"},{offset:{x:2,y:0},type:"3a"}]],["3B_I_2",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2f"},{offset:{x:0,y:2},type:"3b"}]],["3B_L_1",[{offset:{x:0,y:1},type:"3c"},{offset:{x:1,y:0},type:"3d"},{offset:{x:1,y:1},type:"2b"}]],["3B_L_2",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2a"},{offset:{x:1,y:1},type:"3b"}]],["3B_L_3",[{offset:{x:0,y:0},type:"2d"},{offset:{x:0,y:1},type:"3b"},{offset:{x:1,y:0},type:"3a"}]],["3B_L_4",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2c"},{offset:{x:1,y:1},type:"3a"}]],["4B_O",[{offset:{x:0,y:0},type:"2d"},{offset:{x:0,y:1},type:"2c"},{offset:{x:1,y:0},type:"2a"},{offset:{x:1,y:1},type:"2b"}]],["4B_L_1",[{offset:{x:0,y:1},type:"3c"},{offset:{x:1,y:1},type:"2e"},{offset:{x:2,y:0},type:"3d"},{offset:{x:2,y:1},type:"2b"}]],["4B_L_2",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2a"},{offset:{x:1,y:1},type:"2f"},{offset:{x:1,y:2},type:"3b"}]],["4B_L_3",[{offset:{x:0,y:0},type:"2d"},{offset:{x:0,y:1},type:"3b"},{offset:{x:1,y:0},type:"2e"},{offset:{x:2,y:0},type:"3a"}]],["4B_L_4",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2f"},{offset:{x:0,y:2},type:"2c"},{offset:{x:1,y:2},type:"3a"}]],["4B_J_1",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2e"},{offset:{x:2,y:0},type:"2a"},{offset:{x:2,y:1},type:"3b"}]],["4B_J_2",[{offset:{x:0,y:2},type:"3c"},{offset:{x:1,y:0},type:"3d"},{offset:{x:1,y:1},type:"2f"},{offset:{x:1,y:2},type:"2b"}]],["4B_J_3",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2c"},{offset:{x:1,y:1},type:"2e"},{offset:{x:2,y:1},type:"3a"}]],["4B_J_4",[{offset:{x:0,y:0},type:"2d"},{offset:{x:0,y:1},type:"2f"},{offset:{x:0,y:2},type:"3b"},{offset:{x:1,y:0},type:"3a"}]],["4B_Z_1",[{offset:{x:0,y:1},type:"2d"},{offset:{x:0,y:2},type:"3b"},{offset:{x:1,y:0},type:"3d"},{offset:{x:1,y:1},type:"2b"}]],["4B_Z_2",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2a"},{offset:{x:1,y:1},type:"2c"},{offset:{x:2,y:1},type:"3a"}]],["4B_S_1",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2c"},{offset:{x:1,y:1},type:"2a"},{offset:{x:1,y:2},type:"3b"}]],["4B_S_2",[{offset:{x:0,y:1},type:"3c"},{offset:{x:1,y:0},type:"2d"},{offset:{x:1,y:1},type:"2b"},{offset:{x:2,y:0},type:"3a"}]],["4B_T_1",[{offset:{x:0,y:1},type:"3c"},{offset:{x:1,y:0},type:"3d"},{offset:{x:1,y:1},type:"1c"},{offset:{x:2,y:1},type:"3a"}]],["4B_T_2",[{offset:{x:0,y:1},type:"3c"},{offset:{x:1,y:0},type:"3d"},{offset:{x:1,y:1},type:"1b"},{offset:{x:1,y:2},type:"3b"}]],["4B_T_3",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"1a"},{offset:{x:1,y:1},type:"3b"},{offset:{x:2,y:0},type:"3a"}]],["4B_T_4",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"1d"},{offset:{x:0,y:2},type:"3b"},{offset:{x:1,y:1},type:"3a"}]],["4B_I_1",[{offset:{x:0,y:0},type:"3c"},{offset:{x:1,y:0},type:"2e"},{offset:{x:2,y:0},type:"2e"},{offset:{x:3,y:0},type:"3a"}]],["4B_I_2",[{offset:{x:0,y:0},type:"3d"},{offset:{x:0,y:1},type:"2f"},{offset:{x:0,y:2},type:"2f"},{offset:{x:0,y:3},type:"3b"}]]]),M=function(e,t,n){return(X.get(n)||[]).map((function(n){return{x:e+n.offset.x,y:t+n.offset.y}}))},E=function(e){for(var t=[],n=0;n<9;n++){var o=[];t.push(o);for(var a=0;a<9;a++)o.push(e)}return t},j=function(e){var t=E(!1);return e.forEach((function(e){M(e.gridX,e.gridY,e.shape).forEach((function(e){t[e.x][e.y]=!0}))})),t},k=g.a.bind(_.a),S=function(e){var t=e.x,n=e.y,o=e.shape,r=e.isDraggable,f=e.isPreDragging,i=e.isDragging,c=e.isMuted,y=e.isCompletable,s=e.isCompleted,p=l().cellSize,u=function(e,t,n,o,r,f,i,c){return(X.get(o)||[]).map((function(o,y){return a.a.createElement(B,{key:y,x:e+o.offset.x*n,y:t+o.offset.y*n,size:n,blockType:f?"4a":o.type,isPreDragging:r,isDragging:f,isMuted:i,isCompletable:c})}))}(p*t,p*n,r&&!i?Math.floor(p/2):p,o,f,i,c,y),x=C(o,p),d={width:"".concat(x.width,"px"),height:"".concat(x.height,"px")},g=k({container:!0,isCompleted:s}),h=k({piece:!0});return a.a.createElement("div",{style:d,className:g},a.a.createElement("div",{style:d,className:h},u))},w=function(){return Array.from(X.keys())[Math.floor(Math.random()*X.size)]},C=function(e,t){for(var n=(X.get(e)||[]).map((function(e){return e.offset})),o=n[0].x,a=n[0].y,r=n[0].x,f=n[0].y,i=1,c=n.length;i<c;i++){var y=n[i].x,s=n[i].y;o=y<o?y:o,a=s<a?s:a,r=y>r?y:r,f=s>f?s:f}return{width:(r-o+1)*t,height:(f-a+1)*t}},D=function(e,t){for(var n=j(t),o=E(!1),a=0;a<9;a++)for(var r=function(t){var r=!0;M(a,t,e).forEach((function(e){r=r&&e.x<9&&e.y<9&&!n[e.x][e.y]})),o[a][t]=r},f=0;f<9;f++)r(f);return o},P=function(e,t){var n=[],o=[0,1,2,3,4,5,6,7,8],a=j([].concat(Object(i.a)(t),[e])),r=[],f=[],c=[],y=0,s=M(e.gridX,e.gridY,e.shape);s.forEach((function(e){if(!r.includes(e.x)&&a[e.x].every((function(e){return e}))){var t=o.map((function(t){return{x:e.x,y:t}}));n.push.apply(n,Object(i.a)(t)),y++,r.push(e.x)}if(!f.includes(e.y)&&o.every((function(t){return a[t][e.y]}))){var s=o.map((function(t){return{x:t,y:e.y}}));n.push.apply(n,Object(i.a)(s)),y++,f.push(e.y)}var p=function(e){for(var t=[],n=3*Math.floor(e.x/3),o=3*Math.floor(e.y/3),a=0;a<3;a++)for(var r=0;r<3;r++)t.push({x:n+a,y:o+r});return t}(e),l=function(e){var t=Math.floor((e.y+1)/3);return 3*Math.floor((e.x+1)/3)+t}(p[0]);!c.includes(l)&&p.every((function(e){var t=e.x,n=e.y;return a[t][n]}))&&(n.push.apply(n,Object(i.a)(p)),y++,c.push(l))}));var p=s.filter((function(e){return!n.some((function(t){return t.x===e.x&&t.y===e.y}))})).length,l=function(e){var t=e.map((function(e){return e.x})),n=e.map((function(e){return e.y})),o=Math.min.apply(Math,Object(i.a)(t)),a=Math.max.apply(Math,Object(i.a)(t)),r=Math.min.apply(Math,Object(i.a)(n)),f=Math.max.apply(Math,Object(i.a)(n));return{x:Math.floor(o+(a-o)/2),y:Math.floor(r+(f-r)/2)}}(n);return{completedGridPositions:n,completedRegionCount:y,completedRegionCenter:l,placedBlocksKeptCount:p}},z=function(e,t){var n=e[t];return e.some((function(e){return e.x===n.x&&e.y===n.y+1||e.x===n.x&&e.y===n.y-1||e.y===n.y&&e.x===n.x+1||e.y===n.y&&e.x===n.x-1}))},Y=function(e,t){return e.length===t.length&&e.every((function(e,n){return e.x===t[n].x&&e.y===t[n].y}))},L=function(e,t){return e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:0},N=function(e){for(var t=function(e){return function(e){return e.map((function(e){return{x:e.x,y:e.y}}))}(e).sort(L)}(e),n=0,o=Array.from(X.keys());n<o.length;n++){var a=o[n],r=(X.get(a)||[]).map((function(e){return e.offset}));if(Y(t,r))return a}return"UNKNOWN"},T=function(e,t){var n,o,a=[];return function(e){for(var t=[],n=[],o=0;o<e.length;o++)z(e,o)?n.push(e[o]):t.push([e[o]]);return n.length>0&&t.push(n),t}(function(e,t){return e.filter((function(e){return!t.some((function(t){return t.x===e.x&&t.y===e.y}))}))}((X.get(e.shape)||[]).map((function(e){return e.offset})),(n=e.gridX,o=e.gridY,t.map((function(e){return{x:e.x-n,y:e.y-o}}))))).forEach((function(t){var n=function(e,t,n){var o=Math.min.apply(Math,Object(i.a)(n.map((function(e){return e.x})))),a=Math.min.apply(Math,Object(i.a)(n.map((function(e){return e.y}))));return{gridX:e+o,gridY:t+a,shape:N(n.map((function(e){return{x:e.x-o,y:e.y-a}})))}}(e.gridX,e.gridY,t);a.push(n)})),a},G=function(e){var t=e.placedPieces,n=e.hoverPiece,o=e.completableBlocks,r=e.completedBlocks,f=l(),i=f.cellSize,c={left:"".concat(f.gridLeft,"px"),top:"".concat(f.gridTop,"px")},y={width:"".concat(i,"px"),height:"".concat(i,"px")},s=["OOOXXXOOO","OOOXXXOOO","OOOXXXOOO","XXXOOOXXX","XXXOOOXXX","XXXOOOXXX","OOOXXXOOO","OOOXXXOOO","OOOXXXOOO"].map((function(e,t){var n=[];return e.split("").forEach((function(e,t){n.push(a.a.createElement("div",{key:t,style:y,className:"O"===e?x.a.cell:x.a.shadedCell}))})),a.a.createElement("div",{key:t,className:x.a.row},n)}));return a.a.createElement("div",{style:c,className:x.a.grid},s,t.map((function(e,t){return a.a.createElement(S,{key:t,x:e.gridX,y:e.gridY,shape:e.shape})})),n&&a.a.createElement(S,{key:999,x:n.gridX,y:n.gridY,shape:n.shape,isMuted:!0}),o.map((function(e,t){return a.a.createElement(S,{key:100+t,x:e.gridX,y:e.gridY,shape:e.shape,isCompletable:!0})})),r.map((function(e,t){return a.a.createElement(S,{key:200+t,x:e.gridX,y:e.gridY,shape:e.shape,isCompleted:!0})})))},I=n(7),H=n.n(I),R=n(12),J=n.n(R),W=g.a.bind(H.a),F=function(e){var t=e.shape,n=e.onDrag,r=e.onDragStop,f=l(),i=C(t,f.cellSize),y=C(t,f.cellSize/2),s={x:(i.width-y.width)/2,y:(i.height-y.height)/2},p=Object(o.useState)(!0),u=Object(c.a)(p,2),x=u[0],d=u[1],g=Object(o.useState)(!1),h=Object(c.a)(g,2),_=h[0],m=h[1],b=Object(o.useState)(s),O=Object(c.a)(b,2),v=O[0],B=O[1],X=-2*f.cellSize,M={left:"".concat(f.draggableLeft-i.width/2,"px"),top:"".concat(f.draggableTop-i.height/2,"px")},E=W({isPreDragging:x}),j=function(e){var n=e.node.getBoundingClientRect(),o=f.cellSize/2,a=Math.floor((n.left+o-f.gridLeft)/f.cellSize),r=Math.floor((n.top+o-f.gridTop)/f.cellSize);return{isInsideGrid:a>=0&&a<=8&&r>=0&&r<=8,gridX:a,gridY:r,shape:t}};return a.a.createElement("div",{style:M,className:H.a.container},a.a.createElement(J.a,{position:v,onStart:function(){d(!0),B({x:0,y:X}),m(!0)},onDrag:function(e,t){d(!1),n(j(t))},onStop:function(e,t){var n=j(t);B(s),m(!1),r(n)}},a.a.createElement("div",{className:E},a.a.createElement(S,{x:0,y:0,shape:t,isDraggable:!0,isPreDragging:x,isDragging:_}))))},K=n(13),q=n.n(K),A=n(14),Z=n.n(A),Q=function(e){var t=e.previousScore,n=e.currentScore,o=l(),r=o.headerHeight,f=o.cellSize,i={height:"".concat(r,"px")},c={height:"".concat(2*f,"px"),fontSize:"".concat(f,"px")};return a.a.createElement("div",{className:q.a.container,style:i},a.a.createElement("div",{style:c},a.a.createElement(Z.a,{start:t,end:n,duration:1})))},U=n(8),V=n.n(U),$=function(e){var t=e.pointsMessageData,n=l(),o=n.cellSize,r=n.cellSize/2,f=3*o,i=Math.floor(n.gridTop+t.gridY*o+r-f/2),c=Math.floor(n.gridLeft+t.gridX*o+r-f/2),y={top:"".concat(i,"px"),left:"".concat(c,"px"),width:"".concat(f,"px"),height:"".concat(f,"px")},s=Math.floor(.75*o),p={height:"".concat(s,"px"),fontSize:"".concat(s,"px"),lineHeight:"".concat(s,"px")};return a.a.createElement("div",{className:V.a.container,style:y},t.isShown?a.a.createElement("div",{className:V.a.points,style:p},t.isCombo?a.a.createElement("div",null,"COMBO"):a.a.createElement(a.a.Fragment,null),a.a.createElement("div",null,"+",t.points)):a.a.createElement(a.a.Fragment,null))},ee=w(),te=[],ne=D(ee,te);var oe=function(){var e=Object(o.useState)(te),t=Object(c.a)(e,2),n=t[0],r=t[1],f=Object(o.useState)(),y=Object(c.a)(f,2),s=y[0],l=y[1],u=Object(o.useState)([]),x=Object(c.a)(u,2),d=x[0],g=x[1],h=Object(o.useState)([]),_=Object(c.a)(h,2),m=_[0],b=_[1],O=Object(o.useState)(ee),v=Object(c.a)(O,2),B=v[0],X=v[1],E=Object(o.useState)(0),j=Object(c.a)(E,2),k=j[0],S=j[1],C=Object(o.useState)(0),z=Object(c.a)(C,2),Y=z[0],L=z[1],N=Object(o.useState)({isShown:!1}),I=Object(c.a)(N,2),H=I[0],R=I[1],J=function(e,t,n){return e&&ne[t][n]},W=function(e,t,n){var o=n.completedGridPositions,a=[].concat(Object(i.a)(t),[e]);return o.length>0&&(a=function(e,t,n){var o=[];return[].concat(Object(i.a)(t),[e]).forEach((function(e){var t=M(e.gridX,e.gridY,e.shape),a=t.filter((function(e){return n.some((function(t){return t.x===e.x&&t.y===e.y}))}));if(0===a.length)o.push(e);else if(a.length!==t.length){var r=T(e,a);o.push.apply(o,Object(i.a)(r))}})),o}(e,t,o)),r(a),a},K=function(e){return e.map((function(e){return{gridX:e.x,gridY:e.y,shape:"1B"}}))},q=function(e){var t=e.placedBlocksKeptCount,n=e.completedRegionCount,o=e.completedRegionCenter;S(Y);var a=function(e,t){var n=e;return n+=9*t*(t<=2?2:4)}(t,n);L(Y+a),n>0&&function(e,t,n){R({gridX:t.x,gridY:t.y,points:n,isCombo:e>1,isShown:!0}),window.setTimeout((function(){R({isShown:!1})}),2e3)}(n,o,a)};return a.a.createElement(p,null,a.a.createElement("div",null,a.a.createElement(Q,{previousScore:k,currentScore:Y}),a.a.createElement(G,{placedPieces:n,hoverPiece:s,completableBlocks:m,completedBlocks:d}),a.a.createElement(F,{shape:B,onDrag:function(e){var t=e.isInsideGrid,o=e.gridX,a=e.gridY,r=e.shape;if(J(t,o,a)){var f={gridX:o,gridY:a,shape:r},i=P(f,n);b(K(i.completedGridPositions)),l(f)}else b([]),l(null)},onDragStop:function(e){var t=e.isInsideGrid,o=e.gridX,a=e.gridY,r=e.shape;if(J(t,o,a)){var f={gridX:o,gridY:a,shape:r},i=P(f,n),c=W(f,n,i);!function(e){var t=e.completedGridPositions;t.length>0&&(g(K(t)),window.setTimeout((function(){g([])}),500))}(i),q(i),function(e){var t=w();X(t),ne=D(t,e)}(c)}b([]),l(null)}}),a.a.createElement($,{pointsMessageData:H})))};f.a.render(a.a.createElement(oe,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.f30a2c21.chunk.js.map