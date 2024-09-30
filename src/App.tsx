
import './styles/common.scss';

import Header from './components/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import Auth, { AuthProvider } from './pages/auth/Auth';

function App() {

  return (
    <div className="App">
      <Header></Header>
      
      <AuthProvider></AuthProvider>

      <Footer></Footer>
    </div>
  );
}

export default App;
