import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import ViewAll from './components/ViewAll';
import Nav from './components/Nav';
import ViewMyPost from './components/ViewMyPost';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EntryPage from './components/EntryPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Nav' element={<Nav/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/CreatePost' element={<CreatePost/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
      <Route path='/ViewMyPost' element={<ViewMyPost/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/EntryPage' element={<EntryPage/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
