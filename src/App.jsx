import {BrowserRouter, Routes,Route} from 'react-router-dom';
import List from './Pages/List';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import Signup from './Pages/Signup';
import Browser from './Pages/Browser';
function App() {
 

  return (
  
      <div>
         <BrowserRouter>
             <Routes>
              <Route path='/'  element={<Home/>}/>
              <Route path='/List'  element={<List/>}/>
              <Route path='/Login'  element={<LoginPage/>}/>
              <Route path='/Signup'  element={<Signup/>}/>
              <Route path='/Browser'  element={<Browser/>}/>

            </Routes>
        </BrowserRouter>


      </div>

  )

        
}

export default App
