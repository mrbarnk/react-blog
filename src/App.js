import React from 'react';
import Navbar from './components/layouts/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Index from './components/layouts/Index'
import Post from './components/layouts/Post'
import { Provider } from './context'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/post/:id" component={Post} />
          </Switch>
        </div>
        </React.Fragment>
        <br />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
