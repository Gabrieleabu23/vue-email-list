const { createApp } = Vue;
createApp({
    data() {
        return {
            
            mail:[]
        }
    },
    methods: {
        createMail(){
            for(let i=0;i<10;i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response.data.response);
                    this.mail.push(response.data.response);
                })
            }
        }
    },
    mounted(){
        this.createMail();
    }
}).mount("#app");