import Navbar from './components/Navbar';
import './style/style.css'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <div className="newsComponente">
      <h2>Welcome to NewsHub.com</h2>
    </div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sports' element={<News key='Sports' type="Sports"/>}/>
    <Route path='/technology' element={<News key='technology' type="technology"/>}/>
    <Route path='/business' element={<News key='business' type="business"/>}/>
    <Route path='/entertainment' element={<News key='entertainment' type="entertainment"/>}/>
    <Route path='/health' element={<News key='health' type="health"/>}/>
    <Route path='/science' element={<News key='science' type="science"/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
