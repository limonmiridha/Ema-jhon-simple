import React from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Notfound from './components/Notfound';
import ProductDetail from './components/ProductDetail/ProductDetail';

const App = () => {
  return (
    <>
    <Header></Header>
    <Router>
      <Switch>
        <Route exact path='/shop'>
          <Shop></Shop>
        </Route>
        <Route exact path='/review'>
        <Review></Review>
        </Route>
        <Route exact path='/manage'>
        <Manage></Manage>
        </Route>
        <Route exact path='/'>
        <Shop />
        </Route>
        <Route exact path='/product/:productKey'>
        <ProductDetail />
        </Route>
        <Route exact path='*'>
        <Notfound />
        </Route>
      </Switch>
        
      
      
    </Router>
      
    </>
  );
};

export default App;