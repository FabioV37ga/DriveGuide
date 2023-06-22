class Jogo{

    static iniciar(){
        Inicio.desaparecer()
        window.trilha = new Audio('asset/trilha.mp3')
        window.trilha.volume = 0.1
        window.trilha.play()
        // Personagem.falar(1)    
    }
}