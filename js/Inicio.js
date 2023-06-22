class Inicio {
    static inicio = document.querySelector(".inicio")
    static desaparecer() {
        this.inicio.addEventListener("animationend", desapareceInicio)
        function desapareceInicio() {
            Inicio.inicio.remove()
            Janela.aparecer()
            Inicio.inicio.removeEventListener("animationend", desapareceInicio)
        }
        this.inicio.classList.add("inicio-desaparece")
    }
}