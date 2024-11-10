document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', function(){
    return {

        users: [],

        pageUsers: [],

        isLoading: false,

        showAddModal: false,

        pageCount: 1,

        itemsCount: 4,

        currentPage: 3,

           getUsers(){
             this.isLoading = true
             axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                
                this.users = res.data

                this.pagination()
                
                this.isLoading = false
                
             }).catch(error=>{
            
             console.log(error.message);
             
             }).finally(()=>{
                this.isLoading = false 
             
             })    
        },

      pagination(){

       this.pageCount = Math.ceil(this.users.length / this.itemsCount)  // 10/4=3
       let start = (this.currentPage * this.itemsCount) - this.itemsCount   //1*4 - 4 =0
       let end = this.currentPage * this.itemsCount   //1*4=4
       this.pageUsers = this.users.slice(start,end) 
      }
        
    }    
          
        
    })
})