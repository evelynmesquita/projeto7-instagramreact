import Sugestao from "./Sugestao";

export default function Sugestoes() {

    const sugestoes = [
        {imagemUsuarioSugestao: "img/9gag.svg", nomeUsuarioSugestao: "programadorlegal"},
        {imagemUsuarioSugestao: "img/barked.svg", nomeUsuarioSugestao: "babydog"},
        {imagemUsuarioSugestao: "img/bad.vibes.memes.svg", nomeUsuarioSugestao: "bad.vibes.memes"}
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((s) => <Sugestao key={s.imagemUsuarioSugestao} sugestoes={s}/>)}
        </div>
    )
}