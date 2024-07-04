import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import "bootstrap/dist/css/bootstrap.css"
import HomeComp from './Component/HomeComp';
import AboutComp from './Component/AboutComp'
import FormComp from './Component/FormComp'
import StoreComp from './Component/StoreComp'
import ErrorComp from './Component/ErrorComp';
import Loader from './Component/Loader';
import { Suspense } from 'react';
function App() {
  return (
   <div>
    <Header></Header>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<HomeComp/>}></Route>
      <Route path='/home' element={<HomeComp/>}></Route>
      <Route path='/about' element={<AboutComp/>}></Route>
      <Route path='/form' element={<FormComp/>}>
      <Route path="/form/warn" element={<ErrorComp/>}></Route>
      </Route>
      <Route path='/store' element={<StoreComp/>}></Route>
    </Routes>
    </Suspense>
  

    <Footer></Footer>
   </div>
  )
}

export default App;