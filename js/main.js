document.querySelector(".iniciar").addEventListener("click", handleClick)
function handleClick(){
    document.querySelector(".iniciar").removeEventListener("click", handleClick)
        Jogo.iniciar()
}