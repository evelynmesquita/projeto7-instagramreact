export default function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagemUsuarioSugestao} alt="bad.vibes.memes.svg" />
                <div class="texto">
                    <div class="nome">{props.nomeUsuarioSugestao}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>



    )
}