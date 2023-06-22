class Balao {
    static balao = document.querySelector(".texto")
    static falas = `{
        "textos": [
            {
                "indice": "0",
                "texto": "Olá! Seja bem-vindo ao DriveGuide. Se você veio em busca de informações sobre cloud computing e mais precisamente sobre Google Drive veio ao lugar certo!"
            },
            {
                "indice": "1",
                "texto": "monitor"
            }
        ]
    }`
    static aparecer() {
        this.balao.style.display = 'initial'
        Balao.digitar()
    }

    static digitar(fala) {
        console.log(JSON.parse(this.falas).textos[0].texto)
    }
}