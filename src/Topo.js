import Logo from "./Logo"
import IconesTopo from "./IconesTopo"
import LogoMobile from "./LogoMobile"
export default function Topo(){
    return(
        <div class="navbar">
        <div class="container">
          <Logo/>
          <LogoMobile/>
          
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <IconesTopo/>
        </div>
      </div>
    )
}