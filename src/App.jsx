import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import "/src/App.scss";
import Home from './pages/home.jsx';
import Menu from './Components/menu';

function App() {
  const [showMenu, setShowMenu] = useState(true);

  const hideMenuRoutes = ['/Sinopse'];

  return (
    <BrowserRouter>
      {showMenu && <Menu />}
      <div>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Sinopse" element={
              <PageWrapper path="/Sinopse" setShowMenu={setShowMenu} hideMenuRoutes={hideMenuRoutes}>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/Contato"
            element={<Home />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function PageWrapper({ path, setShowMenu, hideMenuRoutes, children }) {
  const location = useLocation();

  const shouldHideMenu = hideMenuRoutes.includes(path);

  useState(() => {
    setShowMenu(!shouldHideMenu);
  }, [location.pathname]);

  return children;
}

export default App;
