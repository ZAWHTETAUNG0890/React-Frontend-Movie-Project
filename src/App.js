import { Route, Routes } from 'react-router';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import FileNotFound from './component/FileNotFound';
import Details from './component/Details';
import FooterBar from './component/FooterBar';

function App() {
  return (
    <div>
      
      <Header/>

      {/* <Home/> */}

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/home' element={ <Home/> } />
        <Route path='/movies/details/:id' element={ <Details/> } />

        <Route path='*' element={ <FileNotFound/> }  />
      </Routes>

      <FooterBar/>

    </div>
  );
}

export default App;
