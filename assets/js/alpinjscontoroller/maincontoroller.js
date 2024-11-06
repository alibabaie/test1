document.addEventListener('alpine:init', () => {
    Alpine.data('mainData', () => (
        {

            message:'Zeynab Khanoom' ,
            name:[ 'ali' , 'hassan' , 'hossain' ] ,
                testFunc(){
                     alert(this.message)
                 }
                
            
        }
    ))
})