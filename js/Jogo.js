class Jogo{
    static ending = document.querySelector(".close")
    static iniciar(){
        Inicio.desaparecer()

        window.trilha = new Audio('asset/trilha.mp3')
        window.trilha.volume = 0.07
        window.trilha.play()
        window.trilha.loop = true
    }

    static finalizar(){
        this.ending.style.display = "flex"
    }
}