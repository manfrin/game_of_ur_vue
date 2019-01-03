<template>
  <div class='log-container'>
    <ul>
      <li v-for='(log, i) in logs.slice().reverse()' :key='i'>
        <span :class='log.player'>{{ readablePlayer(log.player) }}</span> {{ log.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Logs',
  props: {
    logs: Array
  },
  methods: {
    readablePlayer() {
      return this.player === 'player1' ? 'Player 1' : 'Player 2'
    }
  }
}
</script>

<style>
.log-container {
  display: inline-block;
  background: rgb(51,51,51);
  background: linear-gradient(180deg, rgba(51,51,51,1) 0%, rgba(255,255,255,0) 100%); 
  margin-top: -15px;
  border-radius: 5px;
}

ul {
  list-style: none;
  width: 1080px;
  text-align: left;
  line-height: 2em;
  padding: 15px;
  margin: 0;
  height: 320px;
  overflow: hidden;
}

ul:after {
  content:'';
  width:100%;
  height:250px;    
  position: absolute;
  left:0;
  bottom:0;
  background:linear-gradient(transparent 250px, white);
}

span {
  padding: 5px;
  margin: 3px;
  border-radius: 5px;
}

span.player1 {
  background-color: #270830;
  color: #ccc;
}


span.player2 {
  background-color: #ff0000;
  color: #fff;
}

</style>
