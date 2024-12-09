import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import "/src/App.scss";
import Home from './pages/home.jsx';
import PageLastfall from './pages/lastfall.jsx';
import Menu from './Components/menu.jsx';
import DevProgress from './pages/desen.jsx';
import Erro468 from './Components/erro468.jsx';
import MenuLastfall from './Components/menu-lastfall.jsx';
import Footer from './Components/footer.jsx';

function App() {

  const Layout = ({ children }) => {
    const location = useLocation();
    const atual = "/lastfall"
    var i = true
    const hideMenu = location.pathname === "/lastfall" || location.pathname === "/lastfall/desenvolvimento";

      if(atual === location.pathname) {
        i = true
      } else {
        i = false
      }

    return (
      <>
        {hideMenu == true ? <MenuLastfall active={i}/> : <Menu/> }
        {children}
      </>
    );
  };

  return (
    <BrowserRouter>
      <Layout>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/lastfall" element={<PageLastfall />} />
            <Route path="/lastfall/desenvolvimento" element={<DevProgress/>} />
            <Route path="/Contato" element={<Home />} />
            <Route path="*" element={<Erro468/>} />
          </Routes>
        </div>
        <Footer/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
