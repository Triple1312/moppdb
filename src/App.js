import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate, Redirect} from 'react-router-dom'
import NavBar from "./NavigationBar/NavigationBar.tsx"
import Login from "./components/login/Login.tsx"
import Layout from './Layout.tsx'
import Home from "./components/Home.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="login" element={<Login/>}/>
              <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
