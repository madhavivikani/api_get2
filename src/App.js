import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import Posts from './Posts';
import Comments from './Comments';
import Albums from './Albums';
import Photos from './Photos';
import Todos from './Todos';
import Users from './Users';


function App() {



  return (



    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/comments" element={<Comments/>} />
        <Route path="/albums" element={<Albums/>} />
        <Route path="/photos" element={<Photos/>} />
        <Route path="/todos" element={<Todos/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>


    </div>
  );
}

export default App;
