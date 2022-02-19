<template>
  {{title}}
  <br>
  <!-- template ref -->
  <!-- props -->
  <!-- Emitting custom events -->
  <!-- Click event modifiers -->
  <!-- slot -->
  <!-- teleport -->
  
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <Teleport to=".modal" v-if="showModal">
  <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
    <template v-slot:links>
      <a href="">sign up</a>
    <a href="">Log in</a>
    </template>
    </Modal>
  </Teleport>
  <p>welcome..........</p>
  <button @click.alt="toggleModal">open modal(press alt)</button><br><br>
  <!-- modal two -->
  <div v-if="showModalTwo">
  <Modal @close="toggleModalTwo" :header="header">
      <h1>{{header}}</h1>
    <p>you are almost there!!</p>
    </Modal>
  </div>
  <button @click="toggleModalTwo">Open modal</button>
</template>


<script>
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components:{
    Modal
  },
  data(){
    return{
      title:'my first vue app',
      header:'i love coding',
      text:'coding is life',
      showModal:false,
      showModalTwo:false
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal=!this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo=!this.showModalTwo
    }
  }
}
</script>

<style>
#app,.modal{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
