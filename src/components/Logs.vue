<template>
  <div class='log-container-container'>
    <div class='log-container'>
      <ul>
        <li v-for='(log, i) in logs.slice().reverse()' :key='i'>
          <span :class='log.player'>{{ readablePlayer(log.player) }}</span> {{ log.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: 'Logs',
  methods: {
    readablePlayer(player) {
      return player === 'player1' ? 'Player 1' : 'Player 2'
    }
  },
  computed: {
    ...mapState(['logs'])
  },
  mounted() {
    var child = document.getElementsByClassName('log-container')[0]
    child.style.paddingRight = child.offsetWidth - child.clientWidth + "px"
  }
}
</script>

<style>
.log-container-container {
  width: 40%;
  height: 350px;
  overflow: hidden;
}
.log-container {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

ul {
  list-style: none;
  width: 1020px;
  text-align: left;
  line-height: 2em;
  padding: 15px;
  margin: 0;
  height: 320px;
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
