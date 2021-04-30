export default function Usuario(props){
    return(
        <>
            <img src={`assets/img/${props.user}.svg`} />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.nome}
            </div>
        </>
    )
}