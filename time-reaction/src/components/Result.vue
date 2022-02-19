<template>
  <p>Reaction Time: {{ score }} ms</p>
  <p>{{ rank }}</p>
</template>
<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted(){
      if(this.score<250){
          this.rank='excellent job'
      }else if(this.score<400){
          this.rank='great job'
      }
      else{
          this.rank='good job'
      }
  }
};
</script>
<style>
</style>