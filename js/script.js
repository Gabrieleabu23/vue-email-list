const { createApp } = Vue;
createApp({
    data() {
        return {
            
            mail:''
        }
    },
    methods: {
        createMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response.data.response);
                    this.mail=response.data.response;
                })
        }
    },
    mounted(){
        this.createMail();
    }
}).mount("#app");