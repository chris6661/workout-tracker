import './App.css';
import Header from "./components/header/Header"; 
import Home from "./components/home/Home"; 
import Feature from "./components/feature/Feature"; 
import Progress from "./components/progress/Progress"; 

function App() {
  return (
    <div className="App">
      
      <Header />
      <Home />
      <Feature />
      <Progress />

    </div>
  );
}

export default App;
