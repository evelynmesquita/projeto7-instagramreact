import Post from "./Post"

export default function Posts() {

    const posts = [
        {imagemUsuarioPost: "img/meowed.svg", usuarioPost: "meowed", imagemPost: "img/gato-telefone.svg", likesImagemPost: "img/respondeai.svg", likePost: "respondeai", likeNumero: 91.521},

        {imagemUsuarioPost: "img/meowed.svg", usuarioPost: "meowed", imagemPost: "img/gato-telefone.svg", likesImagemPost: "img/filomoderna.svg", likePost: "filomoderna", likeNumero: 81.522},

        {imagemUsuarioPost: "img/meowed.svg", usuarioPost: "meowed", imagemPost: "img/gato-telefone.svg", likesImagemPost: "img/smallcutecats.svg", likePost: "smallcutecats", likeNumero: 101.523}
    ]

    return (

        <div className="posts">
            {posts.map((p) => <Post imagemUsuarioPost={p.imagemUsuarioPost} usuarioPost={p.usuarioPost} imagemPost={p.imagemPost} likesImagemPost={p.likesImagemPost} likePost={p.likePost} likeNumero={p.likeNumero} />)}
        </div>
    )
}

