const app=Vue.createApp({
    data(){
    return{
        showBooks:true,
        url:'https://v3.vuejs.org/guide/installation.html#cdn',
        title:'The final empire',
        author:'Bradon Sanderson',
        age:'45',
        x:0,
        y:0,
        books:[
            {name:'rama',age:'20', address:'kathmandu',img:'assets/star.png',fav:true},
            {name:'gita',age:'30', address:'lalitpur',img:'assets/star.png',fav:false},
            {name:'sita',age:'25', address:'bhaktapur',img:'assets/star.png',fav:true}

        ],
    }
    },
    methods:{
changeTitle(title){
    // this.title='im sick'
    this.title=title
},
toggleShowBooks(){
this.showBooks=!this.showBooks
},
handleEVent(e){
    // console.log('event');
    console.log(e,e.type);
},
handleMouse(e){
this.x=e.offsetX
this.y=e.offsetY

},
toggleFav(book){
book.fav=!book.fav
}
    },
    computed:{
        filterBooks(){
return this.books.filter((book)=>book.fav)
        }
    }
})
app.mount('#app')