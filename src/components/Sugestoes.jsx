import Sugestao from "./Sugestao";

export default function Sugestoes() {

    const sugestoes = [
        {imagemUsuarioSugestao: "img/bad.vibes.memes.svg", nomeUsuarioSugestao: "bad.vibes.memes"},
        {imagemUsuarioSugestao: "img/bad.vibes.memes.svg", nomeUsuarioSugestao: "bad.vibes.memes"},
        {imagemUsuarioSugestao: "img/bad.vibes.memes.svg", nomeUsuarioSugestao: "bad.vibes.memes"}
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((s) => <Sugestao imagemUsuarioSugestao={s.imagemUsuarioSugestao} nomeUsuarioSugestao={s.nomeUsuarioSugestao}/>)}
        </div>
    )
}