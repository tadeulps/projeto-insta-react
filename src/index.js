import ReactDOM from "react-dom";
import Topo from "./Topo"
import Corpo from "./Corpo"
function App() {
    return (
        <>
        <Topo/>
        <Corpo/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));