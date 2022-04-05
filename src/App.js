import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home"
import Reviews from "./Components/Reviews/Reviews"
import Dashboard from "./Components/Dashboard/Dashboard"
import Blog from "./Components/Blog/Blog"
import NotFound from "./Components/NotFound/NotFound"




function App() {
  return (
    <div className="App">
      <Header></Header>
<Routes>
<Route path='/' element={<Home/>}> </Route>
<Route path='/review' element={<Reviews/>}> </Route>
<Route path='/dashboard' element={<Dashboard/>}> </Route>
<Route path='/blog' element={<Blog/>}> </Route>
<Route path='*' element={<NotFound/>}> </Route>


</Routes>

    </div>
  );
}

export default App;
