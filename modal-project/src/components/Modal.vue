<template>
    <div class="backdrop" @click.self="closeModal">
<div class="modal" :class="{sale:theme==='sale'}">
    <h1>{{ header }}</h1>
    <p>{{ text }}</p>
    <div class="action">
    <slot name="links"></slot>
    </div>
</div>
    </div>
</template>
<script>
export default{
    props:['header','text','theme'],
    methods:{
closeModal(){
    this.$emit('close')
}
    }
}
</script>
<style>
.backdrop{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}
.modal{
    width: 400px;
    padding:20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.modal.sale{
    background-color: crimson;
    color: #ffff;
}
.modal .action{
    text-align: center;
    margin: 30px 0 10px 0;
    color: #3333;
}
.modal .action a{
    color: #333333;
    padding:8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}
.modal .sale .action{
    color: white;
}
.sale .action a{
    color: #ffff;
}
</style>