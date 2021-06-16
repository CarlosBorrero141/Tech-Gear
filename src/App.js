import './App.css';
import NavBar from './component/NavBar/NavBar'
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import 'semantic-ui-css/semantic.min.css'



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
