import './App.css';
import ConteudoFinal from './componentes/ConteudoFinal';
import ConteudoLateral from './componentes/ConteudoLateral';
import ConteudoPrincipal from './componentes/ConteudoPrincipal';

function App() {
  return (
    <div className="App">
      <ConteudoLateral/>

      <ConteudoPrincipal/>

      <ConteudoFinal/>
    </div>
  );
}

export default App;
