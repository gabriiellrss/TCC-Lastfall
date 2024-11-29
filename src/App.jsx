import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import "/src/App.scss";
import Home from './pages/home.jsx';
import PageLastfall from './pages/lastfall.jsx';
import Menu from './Components/menu.jsx';
import DevProgress from './pages/desen.jsx';

function App() {

  const Layout = ({ children }) => {
    const location = useLocation();
    const hideMenu = location.pathname === "/lastfall" ;

    return (
      <>
        {!hideMenu && <Menu />}
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
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
