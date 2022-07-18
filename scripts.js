const pesquisa = document.querySelector("#pesquisa") 
const tbody = document.querySelector("#tbody") 
pesquisa.addEventListener("input", function(e){
    const inputValue = e.target.value.trim();
    Array.from(tbody.children)
    .filter(todo => !todo.textContent.includes(inputValue))
    .forEach(todo =>{
        todo.classList.remove("d-none")
        todo.classList.add("d-none")
    })
    Array.from(tbody.children)
    .filter(todo => todo.textContent.includes(inputValue))
    .forEach(todo =>{
        todo.classList.remove("d-none")
        todo.classList.add("d")
    })
});