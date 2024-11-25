
import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
const App = () => {
  return (
    <div>
      
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
 
      
    </div>
  )
}

export default App
