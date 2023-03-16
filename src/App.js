import React, { useEffect } from 'react';
import Header from './Components/Header';
import MyRoutes from './Components/Routes';
import Footer from './Components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {

  useEffect(() => {
    document.title = "Derek Walz";  
  }, []);

  return (
    <React.Fragment>
      <Router >
        <Header />
        <MyRoutes />
        <Footer />
      </Router>
    </React.Fragment>

  );
}

export default App
