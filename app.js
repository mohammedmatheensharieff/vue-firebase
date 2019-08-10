new Vue({
    el:'#app',
    data: {
        title:'become a vue ninja',
        name:'Rayuu',
        url : 'https://www.youtube.com',
        classes : ['one','two'],
        wage : 10
    },
    methods :{
        greet (){
            return 'hello there'
        }
    }
})