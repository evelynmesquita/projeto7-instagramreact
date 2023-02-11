
import { useState } from "react"

export default function Post(props) {

    const [salvarIcon, setSalvarIcon] = useState("bookmark-outline")
    const [likeIcon, setLikeIcon] = useState("heart-outline")
    const [corLike, setCorLike] = useState("naoCurtido")
    const [numeroLikes, setNumeroLikes] = useState(props.post.likeNumero)

    function salvarPost() {
        if (salvarIcon === "bookmark-outline") {
            setSalvarIcon("bookmark")
        } else {
            setSalvarIcon("bookmark-outline")
        }
    }

    function likePost() {
        if (likeIcon === "heart-outline") {
            setLikeIcon("heart")
            setCorLike("curtido")
            setNumeroLikes(Number((props.post.likeNumero) + 0.001).toFixed(3))
        } else {
            setLikeIcon("heart-outline")
            setCorLike("naoCurtido")
            setNumeroLikes(Number((props.post.likeNumero + 0.001) - 0.001).toFixed(3))
        }
    }
    function likePostImagem() {
        if (likeIcon === "heart-outline") {
            setLikeIcon("heart")
            setCorLike("curtido")
            setNumeroLikes(Number((props.post.likeNumero) + 0.001).toFixed(3))
        }
    }




    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.post.imagemUsuarioPost} alt="meowed" />
                    {props.post.usuarioPost}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.post.imagemPost} onClick={likePostImagem} alt="gato-telefone" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={corLike} name={likeIcon} onClick={likePost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvarIcon} onClick={salvarPost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.post.likesImagemPost} alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>{props.post.likePost}</strong> e <strong>outras {numeroLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}