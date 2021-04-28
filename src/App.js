import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import { client } from './articles/client';
import './scss/app.scss'

import Nav from './menu/nav'
import Offer from './menuItems/oferta'
import Price from './menuItems/cennik'
import Galery from './menuItems/galeria'
import Shop from './menuItems/sklep';
import Health from './menuItems/zdrowie';
import Contact from './menuItems/kontakt'
import Blog from './menuItems/blog';
import Home from './menuItems/home';
import Post from './components/Post';
import SingleArticle from './articles/SingleArticle';
import Main from './Main';

import Kinesiotaping from './oferta/kinesiotaping';
import Cosmetics from './oferta/kosmetyki-i-aromaterapia';
import Massage from './oferta/masaz-twarzy-kobido';
import Lifting from './oferta/terapeutyczny-lifling-twarzy-dre';



import {BrowserRouter as Router, Switch, Route, useParams, IndexRoute} from 'react-router-dom';
import { browserHistory} from "react-router";

import {
  HashRouter,
  Link,
  NavLink,
} from 'react-router-dom';
import Footer from './footer';
import Posts from './components/Posts';

class App extends React.Component{
  render(){
    return(
      <Router>
    <div className= "App">
     <Nav />
     <Switch>
     <Route path='/' exact component={Home}></Route>
    <Route path='/blog' exact component = {Blog} ></Route>
    <Route path='/cennik' component = {Price}></Route>
    <Route path='/galeria' ><Galery></Galery></Route>
    <Route path='/kontakt' component = {Contact}></Route>
    <Route path='/oferta' component = {Offer}></Route>
    <Route path='/sklep' component = {Shop}></Route>
    <Route path='/zdrowie' component = {Health}></Route>

      {/* <Route path = '/' component = {Main}>
        <Route path = '/' component = {Posts} /> */}
        <Route path = '/blog/:slug' component = {SingleArticle} />
      {/* </Route> */}

   
    <Route path='/terapeutyczny-lifling-twarzy-dre' component = {Lifting}></Route>
    <Route path='/masaz-twarzy-kobido' component = {Massage}></Route>
    <Route path='/kosmetyki-i-aromaterapia' component = {Cosmetics}></Route>
    <Route path='/kinesiotaping' component = {Kinesiotaping}></Route>


    
    </Switch>
    
    </div>
    <Footer />
    </Router>
    )
  }
}



export default App;

