//procurar botão

document.querySelector("#add-time")

//quando clicar no botão

.addEventListener("click", cloneField) 

//executar uma ação

function cloneField() {

    //duplicando os campos

    const newFieldContainer = document.querySelector("#page-give-classes main fieldset .schedule-item").cloneNode(true)

    //pegar os campos

    const fields = newFieldContainer.querySelectorAll("input")
    // a constante fields é atribuida pelo newFieldContainer e faz a busca por todos os inputs

    //limpar todos os campos

    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //colocar na pagina

    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}