import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './Components/router';
import Header from './Components/layouts/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
