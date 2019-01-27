<template>
  <div class='container'>
    <h2>Stats</h2>
    <br />
    <div v-for='type in aiTypes' :key='type'>
      <h3>{{type}}</h3>
      <h4 v-for='otherType in aiTypes' :key='otherType'>
        {{otherType}}: <b>{{winVs(type, otherType)}} wins</b> {{winVs(otherType, type)}} losses 
      </h4>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import {AI_TYPE_KEYS} from '../services/ai'

export default {
  name: 'AIStats',
  data () {
    return {
      aiTypes: AI_TYPE_KEYS
    }
  },
  computed: {
    ...mapState(['aiWins']),
  },
  methods: {
    winVs(type, otherType) {
      console.log(otherType, this.aiWins)
      return this.aiWins[otherType][type]
    },
    wins(type) {
      return this.aiWins[type]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  background: rgb(51,51,51);
  background: linear-gradient(180deg, rgba(88, 82, 52, 0.273) 0%, rgba(255,255,255,0) 100%); 
  width: 858px;
  justify-content: space-between;
  padding: 25px;
  margin: 0 auto;
  text-align: left;
  flex-direction: column;
}


</style>
