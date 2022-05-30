import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Hearder/Header';
import Pages from './pages/Pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <Pages/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
