import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './Components/router';
import Header from './Components/layouts/Header';
function App() {
  return (
    <BrowserRouter>
        <Header />
        <div className='container'>
          <Router />
        </div>
    </BrowserRouter>
  );
}

export default App;
