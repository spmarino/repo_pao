import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div>
      <p>Chocolate Store</p>
      
      <NavBar greetings={'Bonho'} />
      <ItemListContainer />

    </div>

  );
};

export default App;
