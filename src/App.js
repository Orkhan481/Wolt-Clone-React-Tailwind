import Header from './components/header/Header'
import {Routes, Route} from 'react-router-dom'
import Navigation from 'components/Navigation';
import Discovery from 'pages/Discovery';
import Restaurant from 'pages/Restaurants';
import Stores from 'pages/Stores';
import Footer from 'components/Footer';
import { Suspense } from 'react';
import Loader from './components/Loader'

function App() {
  return (
    <div className="w-full relative">
    <Suspense fallback={<Loader />}>
    <Header />
     <Navigation />
     <Routes>
      <Route exact path="/discovery" element={<Discovery/>}/>
      <Route path="/restaurants" element={<Restaurant/>}/>
      <Route path="/stores" element={<Stores/>}/>
     </Routes>
     <Footer />
    </Suspense>
    </div>
  );
}

export default App;
