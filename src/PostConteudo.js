export default function PostConteudo(props){
    return(
        <div class="conteudo">
             <img src={`assets/img/${props.conteudo}.svg`} />
        </div>
    );
}