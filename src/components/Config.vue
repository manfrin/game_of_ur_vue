<template>
  <div class='config-container'>
    <h2>Config</h2>
    <br />
    <fieldset>
      <legend>Game Settings</legend>
      <label>
        AI Delay:
        <input type="integer" v-model.number='aiDelay' />
      </label>
      <label>
        AI Continual Play:
        <input type="checkbox" v-model='aiContinualPlay' />
      </label>
      <label>
        Pips Needed to Win:
        <input type="integer" v-model.number='pipsToWin' />
      </label>
    </fieldset>
    <fieldset>
      <legend>Player Settings</legend>
      <fieldset>
        <legend>{{this.displayNames['player1']}}</legend>
        <label>
          Display Name: 
          <input type="text" v-model='displayNames_player1'>
        </label>
        <label>
          Autoplay: 
          <input type="checkbox" v-model='ai_player1'>
        </label>
        <label v-if='ai_player1'>
          AI Strategy: 
          <select v-model='aiType_player1'>
            <option v-for='option in aiTypes' :value='option' :key='option'>
              {{ option }}
            </option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <legend>{{this.displayNames['player2']}}</legend>
        <label>
          Display Name: 
          <input type="text" v-model='displayNames_player2'>
        </label>
        <label>
          Autoplay: 
          <input type="checkbox" v-model='ai_player2'>
        </label>
        <label v-if='ai_player2'>
          AI Strategy: 
          <select v-model='aiType_player2'>
            <option v-for='option in aiTypes' :value='option' :key='option'>
              {{ option }}
            </option>
          </select>
        </label>
      </fieldset>
    </fieldset>
  </div>
</template>

<script>
import {mapState} from "vuex"
import {AI_TYPE_KEYS} from '../services/ai'

function genGetSet(field, parent=null) {
  var modelName = field
  var get = function() { return this.$store.state[field] }

  if (parent) {
    get = function() { return this.$store.state[parent][field] }
    modelName = `${parent}_${field}`
  }

  return {
    [modelName]: {
      get,
      set: function(value) {
        this.$store.dispatch('setConfig', {parent, field, value})
      }
    }
  }
}

function genPlayerGetSet(attributes) {
  var result = {}
  attributes.forEach(field => {
    result = Object.assign(
      result,
      genGetSet('player1', field), 
      genGetSet('player2', field)
    )
  });
  return result
}

export default {
  name: 'Config',
  data () {
    return {
      aiTypes: AI_TYPE_KEYS
    }
  },
  computed: {
    ...mapState(['canRoll', 'aiDelay', 'aiContinualPlay', 'ai', 'aiType', 'pipsToWin', 'displayNames']),
    ...genGetSet('aiDelay'),
    ...genGetSet('aiContinualPlay'),
    ...genGetSet('pipsToWin'),
    ...genPlayerGetSet(['displayNames', 'ai', 'aiType']),
  },
  methods: {
    clickRoll() {
      this.$store.dispatch('rollDice')
    },
    setConfig({obj, field, value}) {
      this.$store.dispatch('setConfig', {obj, field, value})
    }
  }
}
</script>

<style scoped>
.config-container {
  display: flex;
  background: rgb(51,51,51);
  background: linear-gradient(180deg, rgba(88, 82, 52, 0.273) 0%, rgba(255,255,255,0) 100%); 
  /* margin-top: 40px;
  border-radius: 5px; */
  width: 858px;
  justify-content: space-between;
  padding: 25px;
  margin: 0 auto;
  text-align: left;
  flex-direction: column;
}

h2 {
  width: 100%;
  display: block;
  margin-top: 0;
}

fieldset {
  display: inline-flex;
  margin: 15px;
}

label {
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px;
}
</style>
