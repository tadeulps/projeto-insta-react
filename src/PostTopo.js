export default function PostTopo(props){
    
        return(
            <>
            <div class="topo">
                <div class="usuario">
                    <img src={`assets/img/${props.postador}.svg`} />
                    {props.postador}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
          </div>
          </>
            );
    
   
}