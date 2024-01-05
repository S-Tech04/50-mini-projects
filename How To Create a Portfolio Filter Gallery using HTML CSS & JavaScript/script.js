const list = document.querySelectorAll('.list')
const itemBox = document.querySelectorAll('.item-box')

list.forEach((elem)=>{
    elem.addEventListener('click',function(){
        list.forEach((elem)=>{
            elem.classList.remove('active');
        });
        this.classList.add('active');

        let value = this.getAttribute('data-filter');
        itemBox.forEach(element=>{
            element.classList.add('hide');
            if(element.getAttribute('data-item') == value || value == "all"){
                element.classList.remove('hide');
            }
        })

    })

})