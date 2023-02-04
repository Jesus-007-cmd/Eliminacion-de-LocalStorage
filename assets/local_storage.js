const elements=document.querySelector('#elementos')
const nombres= JSON.parse(localStorage.getItem('nombres'))

document.addEventListener("DOMContentLoaded", function() {
  localStorage.clear()
let elementos=[];
for (i=0; i<=3; i++){
    
    elementos.push("Elemento"+ (i+1));
   
}

localStorage.setItem('Elementos', JSON.stringify(elementos));
let elemento
let lista=""
for (let x=0; x<elementos.length; x++){
    elemento=elementos[x]    
    lista =lista+`<option value="${elemento}">${elemento}</option>`

}

elements.innerHTML = lista

//localStorage.removeItem()

})
