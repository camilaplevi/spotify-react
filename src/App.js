import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/main';
import Footer from './components/Footer/Footer';
import './script';

function App() {
  return (
    <div>
    <Sidebar/>
    <Header/>
    <Main/>
    <Footer/>
    </div> 
  );
}

export default App;
