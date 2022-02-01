import Main from './components/Main/Main';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header'
import SobreMim from './components/sobre_mim/SobreMim';
import Project from './components/Projetos/Project';
import Tecnologias from './components/tecnologia/Tecnologias';
// import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <SobreMim />
      <Project />
      <Tecnologias />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
