import './App.css';
import Exercise from "./components/exercise/Exercise";
import Footer from "./components/footer/Footer"; 
import Header from "./components/header/Header"; 
import Home from "./components/home/Home"; 
import Feature from "./components/feature/Feature"; 
import Progress from "./components/progress/Progress"; 
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      
      <Header />
      <Home />
      <Feature />
      <Search />
      <Exercise /> 
      <Progress />
      <Footer />

    </div>
  );
}

export default App;
