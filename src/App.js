import {BrowserRouter} from 'react-router-dom';
import Header from './components/Hearder/Header';
import Pages from './pages/Pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
