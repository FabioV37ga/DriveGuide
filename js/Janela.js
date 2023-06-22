class Janela {
    static index = 0;
    static conteudo = document.querySelector(".janela-conteudo")
    static aparecer() {
        this.conteudo.addEventListener("animationend", () => {
            this.index++
            if (this.index == 2) {
                this.conteudo.style = "background: transparent"
                Personagem.aparecer()
            }
        })
        this.conteudo.classList.add("fundo-aparece")
    }
}