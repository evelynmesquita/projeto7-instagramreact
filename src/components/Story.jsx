export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.imagemStory} alt="UsuarioImage" />
            </div>
            <div className="usuario">
                {props.usuarioStory}
            </div>
        </div>
        
    )
}
