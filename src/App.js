import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/CreatePost' element={<CreatePost/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
