import Story from "./Story"
export default function Stories() {
    const stories = [
        { imagemStory: "img/9gag.svg", usuarioStory: "9gag" },
        { imagemStory: "img/meowed.svg", usuarioStory: "meowed" },
        { imagemStory: "img/barked.svg", usuarioStory: "barked" },
        { imagemStory: "img/nathanwpylestrangeplanet.svg", usuarioStory: "nathanwpylestrangeplanet" },
        { imagemStory: "img/wawawicomics.svg", usuarioStory: "wawawicomics" },
        { imagemStory: "img/respondeai.svg", usuarioStory: "respondeai" },
        { imagemStory: "img/filomoderna.svg", usuarioStory: "filomoderna" },
        { imagemStory: "img/memeriagourmet.svg", usuarioStory: "memeriagourmet" }
    ]

    return (
        <div className="stories">
            {stories.map((s) => <Story key={s.imagemStory} story={s} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )

}

