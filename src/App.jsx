
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav' 
import Posts from './Posts';
import Detail from './Detail'
import Create from './Components/Create';
import Footer from './Components/Footer';



function App() {
  return(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Posts />}></Route>
        <Route path='/read/:id' element={<Detail />}></Route>
        <Route path='/newblog' element={<Create />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

