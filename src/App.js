import './App.css'; 
import IconesHeader from './componentes/IconesHeader';
// onde importo meu arquivo css
import Logo from './componentes/Logo';
import OpcoesHeader from './componentes/OpcoesHeader';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
      </header>
    </div>
  );
}

export default App;
// ARQUIVO PRINCIPAL DO PROJETO
