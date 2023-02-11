import { useState } from "react"

export default function Usuario() {

    // const imagemInicial = "img/meowed.svg"
    const [imagemInicial, setImagemInicial] = useState("img/meowed.svg")
    const [nomeDoUsuario, setNomeDoUsuario] = useState("")
    const [imagem, setImagem] = useState(imagemInicial)

    let nome = !nomeDoUsuario ? "catatomics" : `${nomeDoUsuario}`

    function trocarNome() {
        const novoUsuario = prompt("Digite o seu nome")
        setNomeDoUsuario(novoUsuario)
    }

    function trocarFoto() {
        const novaImagem = prompt("Insira o link da sua foto :)")

        if (novaImagem === undefined || novaImagem === null || novaImagem === "") {
            setImagemInicial("img/meowed.svg")
        } else {
            setImagem(novaImagem)
        }
        
    }

    return (
        <div className ="usuario">
                <img onClick={trocarFoto} src={imagem} data-test="profile-image"/>
                <div className ="texto">
                    <span>
                        <strong data-test="name">{nome}</strong>
                        <ion-icon name="pencil" onClick={trocarNome} data-test="edit-name"></ion-icon>
                    </span>
                </div>
            </div>
    )
}