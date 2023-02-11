export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.story.imagemStory} alt="UsuarioImage" />
            </div>
            <div className="usuario">
                {props.story.usuarioStory}
            </div>
        </div>
        
    )
}
