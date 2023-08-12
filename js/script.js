document.querySelectorAll('.services-prices').forEach((el) => {
    el.addEventListener('click', () =>{
        
        let content = el.nextElementSibling
        
        if(content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
});