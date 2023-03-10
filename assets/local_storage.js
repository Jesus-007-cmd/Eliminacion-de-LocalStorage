//AYUDA SOBRE SELECT OPTIONS PARA CUADRO DE LISTA DE OPCIONES:
//elements.options[1].value permite elegir el elemento 1 de los elementos en el select llamados options
//elements.options.length nos dice el total de elementos en el arreglo
//alert(elements.id) te muestra el identificador de la clase select html
//elements.remove(elements.value) te permite eliminar el elemento elegido
//elements.value ´permite ver el elemento actual seleccionado
//localStorage.removeItem()

const elements=document.querySelector('#elementos')
const nombres= JSON.parse(localStorage.getItem('nombres'))
const buton_delete = document.querySelector('#elimUno')
const buton_deleteall =document.querySelector('#elimTodos')
const btnrecargar=document.querySelector('#recargar')
document.addEventListener("DOMContentLoaded", function() {
    recargar();


})
//Boton que elimina todo:
buton_deleteall.addEventListener('click', function(){
    localStorage.clear();
    elements.innerHTML="";

    
    })

//Boton que elimina un elemento almacenado en el localstorage
buton_delete.addEventListener('click', function(){
    localStorage.removeItem('Elementos')
    //el siguiente ciclo sera para obtener el index del elemento seleccionado:
    let indexx
    let ele=elements.value
    for (i=0; i<elements.options.length; i++){
        if (elements.options[i].value==elements.value) {
            indexx=i;
            break;
        }
    }
    elements.remove(indexx);
    let elementos=[];
    for (i=0; i<elements.options.length; i++){
        elementos.push(elements.options[i].value);
    }
    localStorage.setItem('Elementos', JSON.stringify(elementos));
    alert("Se ha eliminado el elemento "+ele + " hay que entrar en LocalStoraje para validar");
    })
    btnrecargar.addEventListener('click', function(){
        recargar();
        })
   function recargar(){
        localStorage.clear()
        let elementos=[];
        for (i=0; i<=3; i++){
            elementos.push("Elemento"+ (i+1));
        }
        
        localStorage.setItem('Elementos', JSON.stringify(elementos));
        let elemento
        let lista=""
        for (let x=0; x<elementos.length; x++){
            elemento=elementos[x];
            lista =lista+`<option value="${elemento}">${elemento}</option>`;
        }
        elements.innerHTML = lista;
    }