document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', function(){
    return {

        users: [],

        isLoading: false,

           getUsers(){
             this.isLoading = true
             axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                this.isLoading = false
                this.users = res.data
                
                
                
             })
        }
    }    
          
        
    })
})