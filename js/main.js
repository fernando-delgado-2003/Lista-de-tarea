'use strict'

const input = document.querySelector("#input-tareas");
const btn = document.querySelector("#guardar-tarea");
const lista = document.querySelector("#lista");
const inputColor = document.querySelector("#inputColor")
 
inputColor.addEventListener("click", ()=> {
    const colorValue = inputColor.value;
    const background = document.querySelector(".contenedor-lista");

    background.style.background = colorValue;
})




btn.addEventListener("click", ()=> {
    const newList = document.createElement("li");
    const newLink = document.createElement("a");
    

  if(input.value === ""){
        input.setAttribute("placeholder", "Por favor ingresa una tarea");
        input.style.color = "red";
        
    }

   input.addEventListener("click", ()=>{
    input.setAttribute("placeholder", "Ingresa tu tarea");
    input.style.color = "black"
   })


    newLink.innerHTML = input.value;
    newLink.setAttribute("href", "#");
    newList.appendChild(newLink);
    lista.appendChild(newList);


    input.value=""





if(lista.children === lista.children ){
    localStorage.setItem("guardarTarea", "true");
}

                                //Revisar//

    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this);
        });
    }
    

})

   
 

for (var i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", function(){
        this.parentNode.removeChild(this);
    });
}

