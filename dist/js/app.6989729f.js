(function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],p=0,v=[];p<l.length;p++)i=l[p],o[i]&&v.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(v.length)v.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02c2":function(e,t,r){},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},2575:function(e,t,r){"use strict";var n=r("c116"),o=r.n(n);o.a},4366:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Game",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",[r("h1",[e._v("Royal Game of Ur")]),r("h2",[e._v("Current Player: "),r("span",{class:e.currentPlayer},[e._v(e._s(e.currentPlayerReadable))])]),r("div",{staticClass:"die"},[r("Die",{attrs:{die:e.die,moves:e.moves,canRoll:e.canRoll}}),r("Controls",{attrs:{canRoll:e.canRoll},on:{"click-roll":e.clickRoll}})],1)]),r("Board",{staticClass:"board",attrs:{board:e.board,pips:e.pips,validMoves:e.validMoves,currentPlayer:e.currentPlayer},on:{makeMove:e.makeMove}}),r("Logs",{attrs:{logs:e.logs}})],1)},l=[],s=(r("6762"),r("2fdb"),r("ac6a"),r("6b54"),r("f576"),r("28a5"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"board-container"},[r("h3",{staticClass:"player-2-name"},[e._v("Player 2")]),r("TileRow",{attrs:{pips:e.pips,layout:e.boardLayout.player,playerSide:"player2",validMoves:e.validMoves,board:e.board,currentPlayer:e.currentPlayer},on:{makeMove:e.makeMove}}),r("TileRow",{attrs:{pips:e.pips,layout:e.boardLayout.middle,playerSide:"middle",validMoves:e.validMoves,board:e.board,currentPlayer:e.currentPlayer},on:{makeMove:e.makeMove}}),r("TileRow",{attrs:{pips:e.pips,layout:e.boardLayout.player,playerSide:"player1",validMoves:e.validMoves,board:e.board,currentPlayer:e.currentPlayer},on:{makeMove:e.makeMove}}),r("h3",{staticClass:"player-1-name"},[e._v("Player 1")])],1)])}),c=[],u=r("db0c"),p=r.n(u),v=r("a4bb"),d=r.n(v),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"board-row"},e._l(e.layout,function(t){return r("Tile",{key:t+"_"+e.playerSide,attrs:{address:t,canMoveFrom:e.tileMoveFrom(+t),canMoveTo:e.tileMoveTo(+t),type:e.board[t].type,hasPipFor:e.hasPipFor(t),hovering:+e.hoveringTile===+t},on:{makeMove:e.makeMove}})}),1)},f=[],h=(r("c5f6"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"board-space",class:[e.type,e.hovering?"hovering":""]},[e.canMoveTo?r("button",{on:{click:e.moveTo}},[e._v(e._s(e.moveToText))]):e._e(),e.canMoveFrom?r("button",{on:{click:e.moveFrom}},[e._v(e._s(e.moveFromText))]):e._e(),e.hasPipFor?r("p",{class:e.hasPipFor},[e._v(e._s(e.pipName))]):e._e()])}),m=[],b={name:"Tile",props:{address:Number,canMoveFrom:Boolean,canMoveTo:Boolean,hasPipFor:String,hovering:Boolean,type:String},computed:{pipName:function(){return"player1"===this.hasPipFor?"Player 1":"Player 2"},inMiddle:function(){return this.address<14&&this.address>4},directionText:function(){return this.inMiddle?"-----\x3e":"<-----"},moveFromText:function(){return this.inMiddle?"o "+this.directionText:this.directionText+" o"},moveToText:function(){return this.inMiddle?this.directionText+" Here":"Here "+this.directionText}},methods:{moveTo:function(){this.$emit("makeMove",this.address,"to")},moveFrom:function(){this.$emit("makeMove",this.address,"from")}}},_=b,P=(r("a03b"),r("2877")),M=Object(P["a"])(_,h,m,!1,null,null,null);M.options.__file="Tile.vue";var g=M.exports,k={name:"TileRow",components:{Tile:g},props:{pips:Object,validMoves:Object,board:Object,playerSide:String,layout:Array,hoveringTile:Number,currentPlayer:String},methods:{tileMoveFrom:function(e){return this.moveFromKeys.includes(+e)},tileMoveTo:function(e){return this.moveToKeys.includes(+e)},hasPipFor:function(e){var t=this.pips.player1.includes(+e),r=this.pips.player2.includes(+e);return"middle"===this.playerSide?t?"player1":r?"player2":"":this.pips[this.playerSide].includes(+e)?this.playerSide:""},makeMove:function(e,t){this.$emit("makeMove",e,t)}},computed:{trueValidMoves:function(){return"middle"===this.playerSide||this.playerSide===this.currentPlayer?this.validMoves:{player1:[],player2:[]}},moveFromKeys:function(){var e=d()(this.trueValidMoves[this.currentPlayer]);return e=e.map(function(e){return+e}),e},moveToKeys:function(){var e=this,t=p()(this.trueValidMoves[this.currentPlayer]);return t=t.filter(function(t){return!e.moveFromKeys.includes(t)}),t}}},T=k,x=(r("7b08"),Object(P["a"])(T,y,f,!1,null,null,null));x.options.__file="TileRow.vue";var O=x.exports,R={name:"Board",components:{TileRow:O},props:{board:Object,validMoves:Object,pips:Object,currentPlayer:String},data:function(){return{boardLayout:{player:[4,3,2,1,0,15,14,13],middle:[5,6,7,8,9,10,11,12]}}},methods:{makeMove:function(e,t){this.$emit("makeMove",e,t)}},computed:{moveFromKeys:function(){return d()(this.validMoves[this.currentPlayer])},moveToKeys:function(){return p()(this.validMoves[this.currentPlayer])}}},j=R,S=(r("2575"),Object(P["a"])(j,s,c,!1,null,"a41698ee",null));S.options.__file="Board.vue";var F=S.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.canRoll?r("button",{on:{click:e.clickRoll}},[e._v("Roll")]):e._e()},$=[],C={name:"Controls",props:{canRoll:Boolean},methods:{clickRoll:function(){this.$emit("click-roll")}}},L=C,B=(r("8fbd"),Object(P["a"])(L,w,$,!1,null,"92b24de0",null));B.options.__file="Controls.vue";var E=B.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.canRoll?e._e():r("div",[r("p",[e._v("Moves: "+e._s(e.moves)+" ")]),e._l(e.die,function(t,n){return r("div",{key:n,staticClass:"dice",class:{rolledPip:t>0}},[e._v("\n    "+e._s(t)+" \n  ")])})],2)},A=[],G={name:"Die",props:{die:Array,moves:Number,canRoll:Boolean}},N=G,D=(r("d9ac"),Object(P["a"])(N,K,A,!1,null,null,null));D.options.__file="Die.vue";var V=D.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"log-container"},[r("ul",e._l(e.logs.slice().reverse(),function(t,n){return r("li",{key:n},[r("span",{class:t.player},[e._v(e._s(e.readablePlayer(t.player)))]),e._v(" "+e._s(t.text)+"\n    ")])}),0)])},J=[],U={name:"Logs",props:{logs:Array},methods:{readablePlayer:function(){return"player1"===this.player?"Player 1":"Player 2"}}},W=U,Y=(r("ac96"),Object(P["a"])(W,H,J,!1,null,null,null));Y.options.__file="Logs.vue";var q=Y.exports,z={name:"Game",components:{Board:F,Controls:E,Die:V,Logs:q},data:function(){return{currentPlayer:"player1",canRoll:!0,canPlay:!1,die:[0,0,0,0],hoveringOver:0,logs:[],pips:{player1:[0,0,0,0,0,0,0],player2:[0,0,0,0,0,0,0]},board:{0:{type:"start",safe:!0},1:{type:"blank",safe:!0},2:{type:"blank",safe:!0},3:{type:"blank",safe:!0},4:{type:"reroll",safe:!0},5:{type:"blank",safe:!1},6:{type:"blank",safe:!1},7:{type:"blank",safe:!1},8:{type:"castle",safe:!0},9:{type:"blank",safe:!1},10:{type:"blank",safe:!1},11:{type:"blank",safe:!1},12:{type:"blank",safe:!1},13:{type:"reroll",safe:!0},14:{type:"blank",safe:!0},15:{type:"end",safe:!0}}}},methods:{clickRoll:function(){var e=Math.floor(16*Math.random()).toString(2).padStart(4,"0").split("");this.die=e,this.canRoll=!1,this.canPlay=!0,this.logs.push({player:this.currentPlayer,text:"rolled dice: ".concat(e.join(", "),".")})},nextTurn:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&(this.currentPlayer=this.otherPlayer),this.canPlay=!1,this.canRoll=!0},makeMove:function(e,t){var r=this.moves;"from"===t&&(e+=r);var n=this.currentPlayer,o=+e-r,a=this.pips[n].indexOf(o),i=this.pips[this.otherPlayer].indexOf(+e);this.logs.push({player:this.currentPlayer,text:"moved a piece from ".concat(e-r," to ").concat(e,".")}),i>=0&&!this.board[+e].safe&&(this.$set(this.pips[this.otherPlayer],i,0),this.logs.push({player:this.currentPlayer,text:"took opponents piece."})),this.$set(this.pips[n],a,+e),this.nextTurn(!this.onReroll(e))},onReroll:function(e){return"reroll"===this.board[+e].type}},watch:{hasLegalMoves:function(){this.hasLegalMoves||(this.logs.push({player:this.currentPlayer,text:"has no valid moves, skipping turn."}),this.nextTurn(!0))},moves:function(e){0===e&&(this.logs.push({player:this.currentPlayer,text:"rolled a 0 and cannot move."}),this.nextTurn(!0))}},computed:{hasLegalMoves:function(){return this.validMoves[this.currentPlayer].length>0},otherPlayer:function(){return"player1"===this.currentPlayer?"player2":"player1"},currentPlayerReadable:function(){return"player1"===this.currentPlayer?"Player 1":"Player 2"},moves:function(){return this.die.reduce(function(e,t){return+e+ +t},0)},validMoves:function(){var e=this,t={player1:{},player2:{}};return this.moves>0&&this.canPlay&&this.pips[this.currentPlayer].forEach(function(r){var n=+r,o=+r+e.moves,a=!t[e.currentPlayer][o]&&!(e.pips[e.currentPlayer].indexOf(o)>=0)&&!!e.board[o];8===+o&&e.pips[e.otherPlayer].includes(8)&&(a=!1),a&&(t[e.currentPlayer][n]=o)}),t}}},I=z,Q=(r("68e4"),Object(P["a"])(I,i,l,!1,null,null,null));Q.options.__file="Game.vue";var X=Q.exports,Z={name:"app",components:{Game:X}},ee=Z,te=(r("034f"),Object(P["a"])(ee,o,a,!1,null,null,null));te.options.__file="App.vue";var re=te.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(re)}}).$mount("#app")},"64a9":function(e,t,r){},"68e4":function(e,t,r){"use strict";var n=r("4366"),o=r.n(n);o.a},"6ebb":function(e,t,r){},"7b08":function(e,t,r){"use strict";var n=r("a108"),o=r.n(n);o.a},"8fbd":function(e,t,r){"use strict";var n=r("6ebb"),o=r.n(n);o.a},a03b:function(e,t,r){"use strict";var n=r("ec07"),o=r.n(n);o.a},a108:function(e,t,r){},ac96:function(e,t,r){"use strict";var n=r("02c2"),o=r.n(n);o.a},c116:function(e,t,r){},d9ac:function(e,t,r){"use strict";var n=r("e5ce"),o=r.n(n);o.a},e5ce:function(e,t,r){},ec07:function(e,t,r){}});
//# sourceMappingURL=app.6989729f.js.map