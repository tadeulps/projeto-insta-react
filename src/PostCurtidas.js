export default function PostCurtidas(props){
    return (
        <div class="curtidas">
            <img src={`assets/img/${props.curtidor}.svg`} />
            <div class="texto">
             Curtido por <strong>{props.curtidor}</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
      </div>
    );
}