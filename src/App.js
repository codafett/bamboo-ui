import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Products from './components/products/Products';
import styled from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import Product from './components/products/Product';

function App() {
  return (
    <AppWrapper>
      <GlobalStyles/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/products"/>
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/product/:id">
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
