import './App.css';
import NavBar from './component/NavBar/NavBar'
import Home from './views/Home/Home';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Promociones from './views/Promociones/Promociones';
import Categorias from './views/Categories/Categorias';
import Contacto from './views/Contact/Contacto';
import Detail from './views/Detail/Detail';
import Cart from './views/Cart/Cart';
import {CartProvider} from './context/CartContext';



function App() {
  return (
    <CartProvider>
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/promociones' component={Promociones} />
        <Route path='/categorias' component={Categorias} />
        <Route path='/contacto' component={Contacto} />
        <Route path='/detail/:id' component={Detail} />
        <Route path='/cart' component={Cart} />

      </Switch>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
