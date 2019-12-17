import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Pages/Fib';
import OtherPage from './Pages/OtherPage';


function App() {
  return (
    <Router>
      <Fragment>
        <header>
          <h1>Fibonacci Calculator</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
