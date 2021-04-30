import Sugestao from "./Sugestao";
export default function Sugestoes(){
    const lista=[
        {nome:"bad.vibes.memes",razao:"Segue você",seguir:"Seguir"},
        {nome:"chibirdart",razao:"Segue você",seguir:"Seguir"},
        {nome:"razoesparaacreditar",razao:"Novo no Instagram",seguir:"Seguir"},
        {nome:"adorable_animals",razao:"Segue você",seguir:"Seguir"},
        {nome:"smallcutecats",razao:"Segue você",seguir:"Seguir"},
        
    ]
    return (
        <>
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
           </div>
           
           
        {lista.map(t => {
        return (
            <Sugestao nome={t.nome} razao={t.razao} seguir={t.seguir} />
        );
      })}
      </div>
        </>
  )
}
