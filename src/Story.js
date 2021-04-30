export default function Story(){
    const usuarios=[
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
    ];
    return (
        <>
        {usuarios.map(t => {
        return (
          <div class="story">
                <div class="imagem">
                    <img src={`assets/img/${t}.svg`} />
                </div>
                <div class="usuario">{t}</div>
          </div>
        );
      })}
        </>
    )
}