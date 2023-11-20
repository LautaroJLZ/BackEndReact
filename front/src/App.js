import 'bootstrap-icons/font/bootstrap-icons.css';
import { Inicio } from './Pages/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error404 } from './Pages/Error404';



function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio/>}/>   
            <Route path='*' element={<Error404/>}/>    
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
