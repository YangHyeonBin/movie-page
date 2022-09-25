import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Tv from './pages/Tv';
import Celebrities from './pages/Celebrities';
import NotFound from './pages/NotFound';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/movie/:title' element={<MovieDetail />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/person' element={<Celebrities />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
