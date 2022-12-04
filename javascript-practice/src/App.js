import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AddPage from './component/AddPage';
import EditPage from './EditPage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<AddPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/edit-page" element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
