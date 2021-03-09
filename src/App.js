import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Products from './components/products/Products';
import styled from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import Product from './components/products/Product';
import NewProduct from './components/products/NewProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppWrapper>
      <ToastContainer hideProgressBar autoClose="1000"/>
      <GlobalStyles/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/products"/>
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/new">
            <NewProduct />
          </Route>
          <Route exact path="/products/:id">
            <Product />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 1090px;
  margin: 0 auto;
`;

export default App;
