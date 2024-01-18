import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RestView from './pages/RestView';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurant-view/:id' element={<RestView />}  />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
