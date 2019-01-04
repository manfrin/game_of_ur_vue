<template>
  <div class='log-container'>
    <ul>
      <li v-for='(log, i) in logs.slice().reverse().slice(0, 20)' :key='i'>
        <span :class='log.player'>{{ readablePlayer(log.player) }}</span> {{ log.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Logs',
  methods: {
    readablePlayer(player) {
      return player === 'player1' ? 'Player 1' : 'Player 2'
    }
  },
  computed: {
    logs () {
      return this.$store.state.logs
    }
  }
}
</script>

<style>
.log-container {
  width: 25%;
  height: 350px;
  padding: 0;
  padding-top: 40px;
  margin: 0;
}

ul {
  list-style: none;
  /* width: 1205px; */
  width: 1020px;
  text-align: left;
  line-height: 2em;
  padding: 15px;
  margin: 0;
  height: 320px;
  overflow: hidden;
  font-size: .9em;
}

span {
  padding: 3px;
  margin: 0px;
  border-radius: 5px;
  font-size: .8em;
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
