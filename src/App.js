import './App.css';
import NavBar from './component/NavBar/NavBar'
import ListItems from './component/ListItems/ListItems.js'
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <div className="App">
      <NavBar />
      <ListItems />
    </div>
  );
}

export default App;
