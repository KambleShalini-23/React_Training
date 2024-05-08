import './App.css';
import  Home from "./Home"
import Navbar from './Navbar';
import Signup from './Signup';
import {BrowserRouter,Routes , Route} from "react-router-dom"
import Login from './Login';
import Cakedetails from './Cakedetails';
import Search from './Search';
import Cart from './Cart';

export function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/search' element={<Search></Search>}></Route>
      <Route path='/details/:cakeid' element={<Cakedetails></Cakedetails>}></Route>
     </Routes>
     </BrowserRouter>     
    </div>
  );
}

// export default App;
