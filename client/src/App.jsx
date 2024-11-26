
import{Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ShoppingCartPage from "./pages/ShoppingCartPage"
import Men from './pages/Men';
// import ProductPage from './pages/ProductPage';
const App = () => {
  return (
    <div>
      
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/' element={<ProductPage/>}/> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/shoppingcart" element={<ShoppingCartPage/>}/>
        <Route path="/men" element={<Men/>}/>

      </Routes>
 
      
    </div>
  )
}

export default App
