
import './App.css'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Cake from './Components/pages/Cake'
import Contact from './Components/pages/Contact'
import Blog from './Components/pages/Blog'
import { Route, Router, Routes } from 'react-router-dom'


function App() {


  return (



    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/ABOUT' element={<About />} />
          <Route path='/CAKES' element={<Cake />} />
          <Route path='/CONTACT' element={<Contact />} />
          <Route path='/BLOG' element={<Blog />} />
        </Route>
      </Routes>
    </div>

  );
}
export default App
