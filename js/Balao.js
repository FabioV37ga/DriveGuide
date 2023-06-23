class Balao {
    static balao = document.querySelector(".texto")
    static paragrafo = document.querySelector(".texto-escrita")
    static falas = `{
        "textos": [
            {
                "indice": "0",
                "texto": "Olá! Seja bem-vindo ao DriveGuide. Se você veio em busca de informações sobre cloud computing e mais precisamente sobre Google Drive veio ao lugar certo!"
            },
            {
                "indice": "1",
                "texto": "Antes de mais nada precisamos entender o conceito de cloud computing."
            }
        ]
    }`
    static aparecer() {
        this.balao.style.display = 'initial'
        Balao.digitar(0)
    }

    static digitar(fala) {
        var texto = JSON.parse(this.falas).textos[fala].texto
        var textoImpresso = "";
        this.paragrafo.textContent = textoImpresso;

        var audio = new Audio("asset/dialog.wav")
        audio.volume = 0.25
        audio.play()
        
        var contador = 0;
        var intervalo = setInterval(() => {
            audio.paused == false ? audio.play() : null;
            textoImpresso += texto.split("")[contador]
            contador++
            if (contador == texto.split("").length) {
                clearInterval(intervalo)
                Personagem.expressar(1)
                audio.pause()
            }

            this.paragrafo.textContent = textoImpresso;
        }, 20);
    }
}