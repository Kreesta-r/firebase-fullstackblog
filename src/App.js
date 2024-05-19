import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
import Contact from './pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CreatePost from './pages/create/CreatePost';
import Post from './pages/post/Post';
import Search from './components/search/Search';


function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <div className="container">
      <div className='wrapper'>
        <BrowserRouter>
          <Navbar isAuth={isAuth} />
          <Routes>
            <Route path="/" element={<Home isAuth={isAuth} />} />
            <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
            {/* <Route path='/register' element={<Register setIsAuth={setIsAuth}/>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create" element={<CreatePost isAuth={isAuth}/>} />
            <Route path="/search" element={<Search />} />
            <Route path="/post/:id" element={<Post isAuth={isAuth}/>} />
            <Route path="*" element={<h1>No page found</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;