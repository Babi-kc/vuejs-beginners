<template>
<h1>Reaction timer</h1>
<button @click="start" :disabled="isPlaying">play</button>
<Block v-if="isPlaying" :delay="delay" @end="endGame"/>
<Result  v-if="showReactionTime" :score="score"/>
</template>

<script>
import Block from './components/Block.vue'
import Result from './components/Result.vue'
export default {
  name: 'App',
  components: {
    Block,
    Result
  },
  data(){
return{
  isPlaying:false,
  delay:null,
  score:null,
  showReactionTime:false,
}
  },
  methods:{
    start(){
      this.delay=2000+ Math.random()*500
      this.isPlaying=true
      this.showReactionTime=false
    },
    endGame(reactionTime){
      this.score=reactionTime
      this.isPlaying=false
      this.showReactionTime=true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
