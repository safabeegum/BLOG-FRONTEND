import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import ViewAll from './components/ViewAll';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/Nav' element={<Nav/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/CreatePost' element={<CreatePost/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
