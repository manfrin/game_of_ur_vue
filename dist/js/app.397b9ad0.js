(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],p=0,d=[];p<o.length;p++)s=o[p],i[s]&&d.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==i[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02c2":function(e,t,r){},"034f":function(e,t,r){"use strict";var n=r("64a9"),i=r.n(n);i.a},"0639":function(e,t,r){},"38e2":function(e,t,r){"use strict";var n=r("0639"),i=r.n(n);i.a},4366:function(e,t,r){},"4eef":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Game",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",[r("div",{staticClass:"header-left"},[e._m(0),r("h2",[e._v("Current Player: "),r("span",{class:e.currentPlayer},[e._v(e._s(e.currentPlayerReadable))])])]),r("div",{staticClass:"header-right right"},[r("div",{staticClass:"moves"},[r("div",{staticClass:"die"},[r("Die")],1),r("Controls")],1),e._m(1),e._m(2)])]),r("Board",{staticClass:"board"}),r("div",{staticClass:"bottom-container"},[r("Logs"),r("instructions")],1)],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Royal Game of Ur")]),r("p",[e._v("(Wikipedia: "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Royal_Game_of_Ur",target:"_blank"}},[e._v("Royal Game of Ur")]),e._v(")")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[e._v("Made by Mike Manfrin / "),r("a",{attrs:{href:"https://twitter.com/manfrin"}},[e._v("@manfrin")]),e._v(" / "),r("a",{attrs:{href:"https://github.com/manfrin"}},[e._v("github.com/manfrin")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",[e._v("Source Code available on the "),r("a",{attrs:{href:"https://github.com/manfrin/game_of_ur_vue"}},[e._v("repo")]),e._v(". I also made a "),r("a",{attrs:{href:"https://game.manfrincdn.com"}},[e._v("Mahjong-ish hex puzzle game")]),e._v(".")])}],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"board-container"},[r("h3",{staticClass:"player-2-name"},[r("PipDisplay",{attrs:{playerSide:"player2"}}),e._v(" Player 2")],1),r("TileRow",{attrs:{pips:e.pips,layout:e.boardLayout.player,playerSide:"player2",validMoves:e.validMoves}}),r("TileRow",{attrs:{pips:e.pips,layout:e.boardLayout.middle,playerSide:"middle",validMoves:e.validMoves}}),r("TileRow",{attrs:{pips:e.pips,layout:e.boardLayout.player,playerSide:"player1",validMoves:e.validMoves}}),r("h3",{staticClass:"player-1-name"},[e._v("Player 1 "),r("PipDisplay",{attrs:{playerSide:"player1"}})],1)],1)])},c=[],u=r("db0c"),p=r.n(u),d=r("a4bb"),v=r.n(d),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"board-row"},e._l(e.layout,function(t){return r("Tile",{key:t+"_"+e.playerSide,attrs:{address:t,playerSide:e.playerSide}})}),1)},f=[],y=(r("c5f6"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"board-space",class:e.classObject,on:{mouseover:e.isHovering,mouseout:e.notHovering,click:e.move}},[e.hasPip?r("p",{class:e.pip}):e._e()])}),m=[],b=r("bd86"),g=(r("6762"),r("2fdb"),{name:"Tile",props:{address:Number,playerSide:String},computed:{distanceFromHoverSource:function(){if(this.activeHover&&this.checkHover){var e=this.$store.state.moves,t=this.$store.state.hoveringOver,r=t.address,n=t.canMoveFrom,i=n?+r:+r-e;return this.address-i}return-1},hoverDistanceClass:function(){var e;switch(this.distanceFromHoverSource){case 1:e="one-off";break;case 2:e="two-off";break;case 3:e="three-off";break;case 4:e="four-off";break;default:e=""}return e},checkHover:function(){return this.$store.state.canPlay&&this.$store.getters.opponent!==this.playerSide},activeHover:function(){return v()(this.$store.state.hoveringOver).length>0},canMoveTo:function(){return this.onside&&this.validTargets.includes(this.address)},canMoveFrom:function(){return this.onside&&this.validSources.includes(""+this.address)},canMove:function(){return this.canMoveTo||this.canMoveFrom},validSources:function(){return v()(this.$store.state.validMoves)},validTargets:function(){return p()(this.$store.state.validMoves)},classObject:function(){var e,t=this.type,r=this.playerSide,n=this.hoverDistanceClass;return e={},Object(b["a"])(e,t,!0),Object(b["a"])(e,r,!0),Object(b["a"])(e,n,!0),Object(b["a"])(e,"hovering",this.hovering),Object(b["a"])(e,"inBetween",this.inBetween),Object(b["a"])(e,"isTargetMove",this.canMoveTo),Object(b["a"])(e,"isSourceMove",this.canMoveFrom),Object(b["a"])(e,"dim",this.shouldDim),e},shouldDim:function(){return this.checkHover&&!this.onside},notInvolved:function(){return!(this.inBetween||this.hovering)},inBetween:function(){var e,t=this.$store.state.hoveringOver,r=t.address,n=t.canMoveTo,i=t.canMoveFrom,a=this.$store.state.moves,s=0;if("middle"!==this.playerSide&&this.currentPlayer!==this.playerSide)return!1;if(i)s=r,e=r+a;else{if(!n)return!1;s=r-a,e=r}return!this.hovering&&this.address>s&&this.address<e},hovering:function(){var e=this.$store.state.hoveringOver,t=e.address,r=e.canMoveTo,n=e.canMoveFrom,i=this.$store.state.moves,a=t;return r?a-=i:n&&(a+=i),this.canMove&&this.onside&&(a===this.address||t===this.address)},hasPip:function(){return this.pip.length>0},pipName:function(){return"player1"===this.pip?"Player 1":"Player 2"},pip:function(){var e="";return"middle"===this.playerSide?(this.$store.state.pips.player1.includes(this.address)&&(e="player1"),this.$store.state.pips.player2.includes(this.address)&&(e="player2")):this.$store.state.pips[this.playerSide].includes(this.address)&&(e=this.playerSide),e},type:function(){return this.$store.state.board[this.address].type},onside:function(){return this.currentPlayer===this.playerSide||"middle"===this.playerSide},currentPlayer:function(){return this.$store.state.currentPlayer}},methods:{move:function(){this.canMoveTo?this.$store.dispatch("movePiece",this.address):this.canMoveFrom&&this.$store.dispatch("movePiece",this.address+this.$store.state.moves)},isHovering:function(){this.checkHover&&this.onside&&this.$store.dispatch("hover",{address:this.address,playerSide:this.playerSide,canMoveTo:this.canMoveTo,canMoveFrom:this.canMoveFrom})},notHovering:function(){this.checkHover&&this.$store.dispatch("notHovering")}}}),_=g,P=(r("b274"),r("2877")),M=Object(P["a"])(_,y,m,!1,null,"7866e9e3",null);M.options.__file="Tile.vue";var $=M.exports,k={name:"TileRow",components:{Tile:$},props:{validMoves:Object,playerSide:String,layout:Array,hoveringTile:Number},methods:{},computed:{board:function(){return this.$store.state.board},currentPlayer:function(){return this.$store.state.currentPlayer}}},O=k,S=(r("7b08"),Object(P["a"])(O,h,f,!1,null,null,null));S.options.__file="TileRow.vue";var x=S.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pip-display"},[e._l(e.finishedPips,function(t,n){return r("div",{key:n+"_finished",class:[e.playerSide,"pips","finished"]})}),e._l(e.unfinishedPips,function(t,n){return r("div",{key:n+"_unfinished",class:[e.playerSide,"pips","unfinished"]})})],2)},T=[],j={name:"PipDisplay",props:{playerSide:String},computed:{pipCompletion:function(){return this.$store.getters.pipCompletion[this.playerSide]},finishedPips:function(){return this.pipCompletion.finished},unfinishedPips:function(){return this.pipCompletion.unfinished}}},C=j,R=(r("38e2"),Object(P["a"])(C,w,T,!1,null,"42a9cd31",null));R.options.__file="PipDisplay.vue";var D=R.exports,H={name:"Board",components:{TileRow:x,PipDisplay:D},props:{validMoves:Object},data:function(){return{boardLayout:{player:[4,3,2,1,0,15,14,13],middle:[5,6,7,8,9,10,11,12]},board:this.$store.state.board}},methods:{},computed:{pips:function(){return this.$store.state.pips},currentPlayer:function(){return this.$store.state.currentPlayer},moveFromKeys:function(){return v()(this.validMoves[this.currentPlayer])},moveToKeys:function(){return p()(this.validMoves[this.currentPlayer])}}},E=H,F=(r("b2e8"),Object(P["a"])(E,l,c,!1,null,null,null));F.options.__file="Board.vue";var L=F.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{attrs:{disabled:!e.canRoll},on:{click:e.clickRoll}},[e._v("Roll")])},B=[],G={name:"Controls",computed:{canRoll:function(){return this.$store.state.canRoll}},methods:{clickRoll:function(){this.$store.dispatch("rollDice")}}},I=G,A=(r("af13"),Object(P["a"])(I,V,B,!1,null,"3ed7772b",null));A.options.__file="Controls.vue";var U=A.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.die,function(t,n){return r("div",{key:n,staticClass:"dice",class:{rolledPip:t>0,disabled:e.canRoll}},[e._v("\n    "+e._s(t)+" \n  ")])}),0)},N=[],J={name:"Die",computed:{die:function(){return this.$store.state.die},canRoll:function(){return this.$store.state.canRoll},moves:function(){return this.$store.state.moves}}},K=J,W=(r("d9ac"),Object(P["a"])(K,z,N,!1,null,null,null));W.options.__file="Die.vue";var Y=W.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"log-container"},[r("ul",e._l(e.logs.slice().reverse().slice(0,20),function(t,n){return r("li",{key:n},[r("span",{class:t.player},[e._v(e._s(e.readablePlayer(t.player)))]),e._v(" "+e._s(t.text)+"\n    ")])}),0)])},Q=[],X={name:"Logs",methods:{readablePlayer:function(e){return"player1"===e?"Player 1":"Player 2"}},computed:{logs:function(){return this.$store.state.logs}}},Z=X,ee=(r("ac96"),Object(P["a"])(Z,q,Q,!1,null,null,null));ee.options.__file="Logs.vue";var te=ee.exports,re=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"instructions-container"},[r("h2",[e._v("Instructions")]),r("p",[e._v("The Royal Game of Ur is one of the earliest known board games humans have created. ")]),r("p",[e._v("The game is played by two players taking turns rolling 4 2d dice and moving their pieces down the board. The pieces must travel from the beginning (near the middle), down the left, around and back right down the middle, then back left (on their own side).")]),r("p",[e._v("Pieces must move exactly the number of moves rolled. Only one piece can be on a tile at a time -- if you land on a tile occupied by your opponent's piece, you bump theirs back to the beginning. ")]),r("p",[e._v("Landing on red tiles lets you roll again. The grey tile is a special tile where the occupant cannot be bumped back. Pieces are safe on their own sides (top or bottom). A piece must land exactly on the end to move off the board.")])])}],ie={name:"Instructions"},ae=ie,se=(r("ac7d"),Object(P["a"])(ae,re,ne,!1,null,"3618fbd8",null));se.options.__file="Instructions.vue";var oe=se.exports,le={name:"Game",components:{Board:L,Controls:U,Die:Y,Logs:te,Instructions:oe},methods:{nextTurn:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$store.dispatch("nextTurn",e)}},watch:{hasValidMoves:function(){this.hasValidMoves||(this.$store.dispatch("log",{player:this.currentPlayer,text:"has no valid moves, skipping turn."}),this.nextTurn(!0))}},computed:{pips:function(){return this.$store.state.pips},die:function(){return this.$store.state.die},canPlay:function(){return this.$store.state.canPlay},moves:function(){return this.$store.state.moves},board:function(){return this.$store.state.board},currentPlayer:function(){return this.$store.state.currentPlayer},hasLegalMoves:function(){return this.validMoves[this.currentPlayer].length>0},otherPlayer:function(){return"player1"===this.currentPlayer?"player2":"player1"},currentPlayerReadable:function(){return"player1"===this.currentPlayer?"Player 1":"Player 2"},hasValidMoves:function(){return this.$store.state.hasValidMoves},validMoves:function(){return this.$store.state.validMoves}}},ce=le,ue=(r("68e4"),Object(P["a"])(ce,s,o,!1,null,null,null));ue.options.__file="Game.vue";var pe=ue.exports,de={name:"app",components:{Game:pe}},ve=de,he=(r("034f"),Object(P["a"])(ve,i,a,!1,null,null,null));he.options.__file="App.vue";var fe=he.exports,ye=(r("6b54"),r("f576"),r("28a5"),r("ac6a"),r("2f62")),me={0:{type:"start",safe:!0},1:{type:"blank",safe:!0},2:{type:"blank",safe:!0},3:{type:"blank",safe:!0},4:{type:"reroll",safe:!0},5:{type:"blank",safe:!1},6:{type:"blank",safe:!1},7:{type:"blank",safe:!1},8:{type:"castle",safe:!0},9:{type:"blank",safe:!1},10:{type:"blank",safe:!1},11:{type:"blank",safe:!1},12:{type:"blank",safe:!1},13:{type:"reroll",safe:!0},14:{type:"blank",safe:!0},15:{type:"end",safe:!0}};n["a"].use(ye["a"]);var be=new ye["a"].Store({state:{pips:{player1:[0,0,0,0,0,0,0],player2:[0,0,0,0,0,0,0]},finishedPips:{player1:0,player2:0},canRoll:!0,canPlay:!1,die:[0,0,0,0],moves:0,validMoves:{},hoveringOver:{address:0,playerSide:"player1"},currentPlayer:"player1",board:me,logs:[]},mutations:{hover:function(e,t){e.hoveringOver=t},notHovering:function(e){e.hoveringOver={}},changePlayer:function(e){e.currentPlayer="player1"===e.currentPlayer?"player2":"player1"},rollDice:function(e,t){var r=t.die,n=t.moves;e.die=r,e.moves=n,e.canRoll=!1,e.canPlay=!0},nextTurn:function(e){e.canPlay=!1,e.canRoll=!0,e.hoveringOver={}},log:function(e,t){e.logs.push(t)},bumpPiece:function(e,t){var r=t.idx,i=t.player;n["a"].set(e.pips[i],r,0)},movePiece:function(e,t){var r=t.player,i=t.idx,a=t.address;n["a"].set(e.pips[r],i,a),e.validMoves={},e.hoveringOver={}},winPiece:function(e,t){var r=t.player,i=t.idx;n["a"].delete(e.pips[r],i),e.finishedPips[r]+=1,e.validMoves={},e.hoveringOver={}},checkValidMoves:function(e){var t={},r="player1"===e.currentPlayer?"player2":"player1";e.moves>0&&e.pips[e.currentPlayer].forEach(function(n){var i=+n,a=+n+e.moves,s=15===a||!t[a]&&!e.pips[e.currentPlayer].includes(a)&&!!e.board[a]&&!(8===+a&&e.pips[r].includes(8));s&&(t[i]=a)}),e.validMoves=t,e.hasValidMoves=v()(t).length>0}},actions:{checkValidMoves:function(e){var t=e.commit;t("checkValidMoves")},hover:function(e,t){var r=e.commit;r("hover",t)},notHovering:function(e){var t=e.commit;t("notHovering")},changePlayer:function(e){var t=e.commit;t("changePlayer")},rollDice:function(e){var t=e.commit,r=e.state,n=e.dispatch,i=Math.floor(16*Math.random()).toString(2).padStart(4,"0").split(""),a=i.reduce(function(e,t){return+e+ +t},0);t("rollDice",{die:i,moves:a}),0===a&&(t("log",{player:r.currentPlayer,text:"rolled a zero! Skipping turn."}),t("changePlayer"),t("nextTurn")),n("checkValidMoves")},nextTurn:function(e,t){var r=e.commit;t&&r("changePlayer"),r("nextTurn")},log:function(e,t){var r=e.commit;r("log",t)},movePiece:function(e,t){var r=e.commit,n=e.state,i=n.moves,a=n.currentPlayer,s="player1"===n.currentPlayer?"player2":"player1",o=+t-i,l=n.pips[a].indexOf(o);if(15===+t)r("log",{player:n.currentPlayer,text:"got a piece to the end!"}),r("winPiece",{player:a,idx:l});else{var c=n.pips[s].indexOf(+t),u="reroll"===n.board[+t].type;r("log",{player:a,text:"moved a piece from ".concat(t-i," to ").concat(t,".")}),c>=0&&!n.board[+t].safe&&(r("bumpPiece",{idx:c,player:s}),r("log",{player:a,text:"took opponents piece."})),r("movePiece",{player:a,idx:l,address:t})}u||r("changePlayer"),r("nextTurn")}},getters:{pipCompletion:function(e){var t=+e.finishedPips.player1,r=+e.pips.player1.length,n=+e.finishedPips.player2,i=+e.pips.player2.length;return{player1:{finished:t,unfinished:r},player2:{finished:n,unfinished:i}}}}});n["a"].config.productionTip=!1,new n["a"]({store:be,render:function(e){return e(fe)}}).$mount("#app")},"64a9":function(e,t,r){},"68e4":function(e,t,r){"use strict";var n=r("4366"),i=r.n(n);i.a},"74bd":function(e,t,r){},"7b08":function(e,t,r){"use strict";var n=r("a108"),i=r.n(n);i.a},a108:function(e,t,r){},ac7d:function(e,t,r){"use strict";var n=r("4eef"),i=r.n(n);i.a},ac96:function(e,t,r){"use strict";var n=r("02c2"),i=r.n(n);i.a},af13:function(e,t,r){"use strict";var n=r("74bd"),i=r.n(n);i.a},b274:function(e,t,r){"use strict";var n=r("c9de"),i=r.n(n);i.a},b2e8:function(e,t,r){"use strict";var n=r("dcc5"),i=r.n(n);i.a},c9de:function(e,t,r){},d9ac:function(e,t,r){"use strict";var n=r("e5ce"),i=r.n(n);i.a},dcc5:function(e,t,r){},e5ce:function(e,t,r){}});
//# sourceMappingURL=app.397b9ad0.js.map