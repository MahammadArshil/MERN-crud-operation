import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import { useState } from 'react'
import AddData from './pages/AddData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from 'axios';
import EditData from './pages/EditData';

function App() {
  const [data, setData] = useState(
    [{
      name: "",
      email: "",
      password: "",
      profession: "",
      experience: "",
    }]);

    
    const getData = () => {
      axios
      .get("http://localhost:1234/").then(
        async(res) => {
          // console.log(res.data);
          setData(res.data);
        });
      }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home data={data} getData={getData} />} />
        <Route path='/add' element={<AddData />} />
        <Route path='/edit' element={<EditData getData={getData} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
