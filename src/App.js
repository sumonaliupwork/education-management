
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboute from './components/Aboute/Aboute';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNot from './components/PageNot/PageNot';
import Payment from './components/Payment/Payment';
import Review from './components/Review/Review';
import Services from './components/Services/Services';
import Views from './components/Views/Views';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/payment' element={<Payment></Payment>}></Route>
          <Route path='/aboute' element={<Aboute></Aboute>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/course/:courseId' element={<Views></Views>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='*' element={<PageNot></PageNot>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>


    </div>
  );
}

export default App;
