class Personagem {
    static personagem = document.querySelector(".personagem")
    static falaAtual = 0;

    static aparecer() {
        this.personagem.parentElement.style.display = "initial"
        var i = 335
        var intervalo = setInterval(() => {
            i -= 2
            this.personagem.style = `left: -${i}px`
            if (i <= 50) {
                clearInterval(intervalo)
                Personagem.expressar(0)
                Personagem.falar(0)
                Balao.aparecer()
            }
        }, 0.5);
    }

    static expressar(tipo) {
        switch (tipo) {
            case 0:
                this.personagem.children[0].src = 'asset/char_falando.png'
                break;
            case 1:
                this.personagem.children[0].src = 'asset/char_parado.png'
                break;
        }
    }

    static falar(fala) {
        // Balao.digitar();
    }
}