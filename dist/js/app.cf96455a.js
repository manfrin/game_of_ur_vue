(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],p=0,d=[];p<i.length;p++)o=i[p],a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02c2":function(e,t,r){},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},4366:function(e,t,r){},"449b":function(e,t,r){},4688:function(e,t,r){"use strict";var n=r("5972"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Game",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",[r("h1",[e._v("Royal Game of Ur")]),r("h2",[e._v("Current Player: "),r("span",{class:e.currentPlayer},[e._v(e._s(e.currentPlayerReadable))])]),r("div",{staticClass:"die"},[r("Die"),r("Controls")],1)]),r("Board",{staticClass:"board"}),r("Logs")],1)},i=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"board-container"},[r("h3",{staticClass:"player-2-name"},[e._v("Player 2")]),r("TileRow",{attrs:{pips:e.pips,layout:e.boardLayout.player,playerSide:"player2",validMoves:e.validMoves}}),r("TileRow",{attrs:{pips:e.pips,layout:e.boardLayout.middle,playerSide:"middle",validMoves:e.validMoves}}),r("TileRow",{attrs:{pips:e.pips,layout:e.boardLayout.player,playerSide:"player1",validMoves:e.validMoves}}),r("h3",{staticClass:"player-1-name"},[e._v("Player 1")])],1)])},c=[],u=r("db0c"),p=r.n(u),d=r("a4bb"),v=r.n(d),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"board-row"},e._l(e.layout,function(t){return r("Tile",{key:t+"_"+e.playerSide,attrs:{address:t,playerSide:e.playerSide}})}),1)},h=[],y=(r("c5f6"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"board-space",class:e.classObject,on:{mouseover:e.isHovering,click:e.move}},[e.hasPip?r("p",{class:e.pip},[e._v(e._s(e.pipName))]):e._e()])}),m=[],b=r("bd86"),P=(r("6762"),r("2fdb"),{name:"Tile",props:{address:Number,playerSide:String},computed:{canMoveTo:function(){return this.onside&&this.validTargets.includes(this.address)},canMoveFrom:function(){return this.onside&&this.validSources.includes(""+this.address)},canMove:function(){return this.canMoveTo||this.canMoveFrom},validSources:function(){return v()(this.$store.state.validMoves)},validTargets:function(){return p()(this.$store.state.validMoves)},classObject:function(){var e,t=this.type,r=this.playerSide;return e={},Object(b["a"])(e,t,!0),Object(b["a"])(e,r,!0),Object(b["a"])(e,"hovering",this.hovering),Object(b["a"])(e,"inBetween",this.inBetween),Object(b["a"])(e,"isTargetMove",this.canMoveTo),Object(b["a"])(e,"isSourceMove",this.canMoveFrom),e},inBetween:function(){var e,t=this.$store.state.hoveringOver,r=t.address,n=t.canMoveTo,a=t.canMoveFrom,s=this.$store.state.moves,o=0;if("middle"!==this.playerSide&&this.currentPlayer!==this.playerSide)return!1;if(a)o=r,e=r+s;else{if(!n)return!1;o=r-s,e=r}return!this.hovering&&this.address>o&&this.address<e},hovering:function(){var e=this.$store.state.hoveringOver,t=e.address,r=e.canMoveTo,n=e.canMoveFrom,a=this.$store.state.moves,s=t;return r?s-=a:n&&(s+=a),this.canMove&&this.onside&&(s===this.address||t===this.address)},hasPip:function(){return this.pip.length>0},pipName:function(){return"player1"===this.pip?"Player 1":"Player 2"},pip:function(){var e="";return"middle"===this.playerSide?(this.$store.state.pips.player1.includes(this.address)&&(e="player1"),this.$store.state.pips.player2.includes(this.address)&&(e="player2")):this.$store.state.pips[this.playerSide].includes(this.address)&&(e=this.playerSide),e},type:function(){return this.$store.state.board[this.address].type},onside:function(){return this.currentPlayer===this.playerSide||"middle"===this.playerSide},currentPlayer:function(){return this.$store.state.currentPlayer}},methods:{move:function(){this.canMoveTo?this.$store.dispatch("movePiece",this.address):this.canMoveFrom&&this.$store.dispatch("movePiece",this.address+this.$store.state.moves)},isHovering:function(){this.$store.dispatch("hover",{address:this.address,playerSide:this.playerSide,canMoveTo:this.canMoveTo,canMoveFrom:this.canMoveFrom})}}}),_=P,g=(r("a03b"),r("2877")),M=Object(g["a"])(_,y,m,!1,null,null,null);M.options.__file="Tile.vue";var $=M.exports,T={name:"TileRow",components:{Tile:$},props:{validMoves:Object,playerSide:String,layout:Array,hoveringTile:Number},methods:{},computed:{board:function(){return this.$store.state.board},currentPlayer:function(){return this.$store.state.currentPlayer}}},x=T,O=(r("7b08"),Object(g["a"])(x,f,h,!1,null,null,null));O.options.__file="TileRow.vue";var S=O.exports,k={name:"Board",components:{TileRow:S},props:{validMoves:Object},data:function(){return{boardLayout:{player:[4,3,2,1,0,15,14,13],middle:[5,6,7,8,9,10,11,12]},board:this.$store.state.board}},methods:{},computed:{pips:function(){return this.$store.state.pips},currentPlayer:function(){return this.$store.state.currentPlayer},moveFromKeys:function(){return v()(this.validMoves[this.currentPlayer])},moveToKeys:function(){return p()(this.validMoves[this.currentPlayer])}}},j=k,w=(r("4688"),Object(g["a"])(j,l,c,!1,null,"4aab4c0d",null));w.options.__file="Board.vue";var R=w.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.canRoll?r("button",{on:{click:e.clickRoll}},[e._v("Roll")]):e._e()},V=[],E={name:"Controls",computed:{canRoll:function(){return this.$store.state.canRoll}},methods:{clickRoll:function(){this.$store.dispatch("rollDice")}}},F=E,L=(r("6579"),Object(g["a"])(F,C,V,!1,null,"d54ed6f2",null));L.options.__file="Controls.vue";var D=L.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.canRoll?e._e():r("div",[r("p",[e._v("Moves: "+e._s(e.moves)+" ")]),e._l(e.die,function(t,n){return r("div",{key:n,staticClass:"dice",class:{rolledPip:t>0}},[e._v("\n    "+e._s(t)+" \n  ")])})],2)},G=[],N={name:"Die",computed:{die:function(){return this.$store.state.die},canRoll:function(){return this.$store.state.canRoll},moves:function(){return this.$store.state.moves}}},A=N,H=(r("d9ac"),Object(g["a"])(A,B,G,!1,null,null,null));H.options.__file="Die.vue";var J=H.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"log-container"},[r("ul",e._l(e.logs.slice().reverse(),function(t,n){return r("li",{key:n},[r("span",{class:t.player},[e._v(e._s(e.readablePlayer(t.player)))]),e._v(" "+e._s(t.text)+"\n    ")])}),0)])},z=[],U={name:"Logs",methods:{readablePlayer:function(e){return"player1"===e?"Player 1":"Player 2"}},computed:{logs:function(){return this.$store.state.logs}}},W=U,Y=(r("ac96"),Object(g["a"])(W,K,z,!1,null,null,null));Y.options.__file="Logs.vue";var q=Y.exports,I={name:"Game",components:{Board:R,Controls:D,Die:J,Logs:q},methods:{nextTurn:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$store.dispatch("nextTurn",e)}},watch:{hasValidMoves:function(){this.hasValidMoves||(this.$store.dispatch("log",{player:this.currentPlayer,text:"has no valid moves, skipping turn."}),this.nextTurn(!0))}},computed:{pips:function(){return this.$store.state.pips},die:function(){return this.$store.state.die},canPlay:function(){return this.$store.state.canPlay},moves:function(){return this.$store.state.moves},board:function(){return this.$store.state.board},currentPlayer:function(){return this.$store.state.currentPlayer},hasLegalMoves:function(){return this.validMoves[this.currentPlayer].length>0},otherPlayer:function(){return"player1"===this.currentPlayer?"player2":"player1"},currentPlayerReadable:function(){return"player1"===this.currentPlayer?"Player 1":"Player 2"},hasValidMoves:function(){return this.$store.state.hasValidMoves},validMoves:function(){return this.$store.state.validMoves}}},Q=I,X=(r("68e4"),Object(g["a"])(Q,o,i,!1,null,null,null));X.options.__file="Game.vue";var Z=X.exports,ee={name:"app",components:{Game:Z}},te=ee,re=(r("034f"),Object(g["a"])(te,a,s,!1,null,null,null));re.options.__file="App.vue";var ne=re.exports,ae=(r("6b54"),r("f576"),r("28a5"),r("ac6a"),r("2f62")),se={0:{type:"start",safe:!0},1:{type:"blank",safe:!0},2:{type:"blank",safe:!0},3:{type:"blank",safe:!0},4:{type:"reroll",safe:!0},5:{type:"blank",safe:!1},6:{type:"blank",safe:!1},7:{type:"blank",safe:!1},8:{type:"castle",safe:!0},9:{type:"blank",safe:!1},10:{type:"blank",safe:!1},11:{type:"blank",safe:!1},12:{type:"blank",safe:!1},13:{type:"reroll",safe:!0},14:{type:"blank",safe:!0},15:{type:"end",safe:!0}};n["a"].use(ae["a"]);var oe=new ae["a"].Store({state:{pips:{player1:[0,0,0,0,0,0,0],player2:[0,0,0,0,0,0,0]},canRoll:!0,canPlay:!1,die:[0,0,0,0],moves:0,validMoves:{},hoveringOver:{address:0,playerSide:"player1"},currentPlayer:"player1",board:se,logs:[]},mutations:{hover:function(e,t){e.hoveringOver=t},changePlayer:function(e){e.currentPlayer="player1"===e.currentPlayer?"player2":"player1"},rollDice:function(e,t){var r=t.die,n=t.moves;e.die=r,e.moves=n,e.canRoll=!1,e.canPlay=!0},nextTurn:function(e){e.canPlay=!1,e.canRoll=!0},log:function(e,t){e.logs.push(t)},bumpPiece:function(e,t){var r=t.idx,a=t.player;n["a"].set(e.pips[a],r,0)},movePiece:function(e,t){var r=t.player,a=t.idx,s=t.address;n["a"].set(e.pips[r],a,s),e.validMoves={}},checkValidMoves:function(e){var t={},r="player1"===e.currentPlayer?"player2":"player1";e.moves>0&&e.pips[e.currentPlayer].forEach(function(n){var a=+n,s=+n+e.moves,o=15===s||!t[s]&&!e.pips[e.currentPlayer].includes(s)&&!!e.board[s]&&!(8===+s&&e.pips[r].includes(8));o&&(t[a]=s)}),e.validMoves=t,e.hasValidMoves=t.length>0}},actions:{checkValidMoves:function(e){var t=e.commit;t("checkValidMoves")},hover:function(e,t){var r=e.commit;r("hover",t)},changePlayer:function(e){var t=e.commit;t("changePlayer")},rollDice:function(e){var t=e.commit,r=e.state,n=e.dispatch,a=Math.floor(16*Math.random()).toString(2).padStart(4,"0").split(""),s=a.reduce(function(e,t){return+e+ +t},0);t("rollDice",{die:a,moves:s}),0===s&&(t("log",{player:r.currentPlayer,text:"rolled a zero! Skipping turn."}),t("changePlayer"),t("nextTurn")),n("checkValidMoves")},nextTurn:function(e,t){var r=e.commit;t&&r("changePlayer"),r("nextTurn")},log:function(e,t){var r=e.commit;r("log",t)},movePiece:function(e,t){var r=e.commit,n=e.state,a=n.moves,s=n.currentPlayer,o="player1"===n.currentPlayer?"player2":"player1",i=+t-a,l=n.pips[s].indexOf(i),c=n.pips[o].indexOf(+t),u="reroll"===n.board[+t].type;r("log",{player:s,text:"moved a piece from ".concat(t-a," to ").concat(t,".")}),c>=0&&!n.board[+t].safe&&(r("bumpPiece",{idx:c,player:o}),r("log",{player:s,text:"took opponents piece."})),r("movePiece",{player:s,idx:l,address:t}),u||r("changePlayer"),r("nextTurn")}}});n["a"].config.productionTip=!1,new n["a"]({store:oe,render:function(e){return e(ne)}}).$mount("#app")},5972:function(e,t,r){},"64a9":function(e,t,r){},6579:function(e,t,r){"use strict";var n=r("449b"),a=r.n(n);a.a},"68e4":function(e,t,r){"use strict";var n=r("4366"),a=r.n(n);a.a},"7b08":function(e,t,r){"use strict";var n=r("a108"),a=r.n(n);a.a},a03b:function(e,t,r){"use strict";var n=r("ec07"),a=r.n(n);a.a},a108:function(e,t,r){},ac96:function(e,t,r){"use strict";var n=r("02c2"),a=r.n(n);a.a},d9ac:function(e,t,r){"use strict";var n=r("e5ce"),a=r.n(n);a.a},e5ce:function(e,t,r){},ec07:function(e,t,r){}});
//# sourceMappingURL=app.cf96455a.js.map