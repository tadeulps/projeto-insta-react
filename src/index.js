import ReactDOM from "react-dom";
import Topo from "./Topo"
import Corpo from "./Corpo"
import Fundo from "./Fundo"
function App() {
    return (
        <>
        <Topo/>
        <Corpo/>
        <Fundo/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));