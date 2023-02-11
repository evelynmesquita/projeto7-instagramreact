import Post from "./Post"

export default function Posts() {

    const posts = [
        {imagemUsuarioPost: "img/meowed.svg", 
        usuarioPost: "picapauprogramador", 
        imagemPost: "img/meme1.jpg", 
        likesImagemPost: "img/respondeai.svg", 
        likePost: "respondeai", 
        likeNumero: 91.521},

        {imagemUsuarioPost: "img/meowed.svg", 
        usuarioPost: "homerprogramador", 
        imagemPost: "img/meme2.jpg", 
        likesImagemPost: "img/filomoderna.svg", 
        likePost: "filomoderna", 
        likeNumero: 81.522},

        {imagemUsuarioPost: "img/meowed.svg", 
        usuarioPost: "meowed", 
        imagemPost: "img/gato-telefone.svg", 
        likesImagemPost: "img/smallcutecats.svg", 
        likePost: "smallcutecats", 
        likeNumero: 101.523}
    ]

    return (

        <div className="posts">
              {posts.map((p) => <Post key={p.usuarioPost} post={p} />)}
        </div>
    )
}

