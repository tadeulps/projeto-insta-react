import PostTopo from "./PostTopo"
import PostConteudo from "./PostConteudo"
import PostCurtidas from "./PostCurtidas"
import Acoes from "./Acoes"
export default function Post(){
    const postagem=[
        {postador:"meowed",conteudo:"gato-telefone",curtidor:"respondeai"},
        {postador:"barked",conteudo:"dog",curtidor:"adorable_animals"}
    ]
  
    return (
        <>
        {postagem.map(t => {
        return (
            <div class="post">
                <PostTopo postador={t.postador}/>
                <PostConteudo conteudo={t.conteudo}/>
           
            <div class="fundo">
                <Acoes/>
                <PostCurtidas curtidor={t.curtidor}/>
        
            </div>
          </div>
        );
      })}
        </>
    )
}
