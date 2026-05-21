import {Route, Routes} from 'react-router-dom';
import './App.css'
import NavBar from "./components/NavBar.jsx";
import ListLocates from "./components/ListLocates.jsx";
import Footer from "./components/Footer.jsx";
import Home from './pages/home/Home.jsx';
import Exploracao from './pages/exploracao/Exploracao.jsx';
import Roteiro from './pages/roteiro/Roteiro.jsx';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/exploracao' element={<Exploracao/>}></Route>
        <Route path='/roteiro' element={<Roteiro/>}></Route>
      </Routes>
      <ListLocates/>
      <Footer/>
    </>
  )
}

export default App
