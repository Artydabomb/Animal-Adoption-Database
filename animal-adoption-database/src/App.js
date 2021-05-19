import Search from './components/Search/Search';
import Header from './components/Header/HeaderNav';
import BodyNoLogin from './components/BodyNoLogin/BodyNoLogin';
import Footer from './components/Footer/Footer';

import 'bulma/css/bulma.min.css';

// import './components/Search.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <Header />
          <Search />
          <BodyNoLogin />
          <Footer />
        </header>
      </div>
    </div >
  );
}

export default App;
