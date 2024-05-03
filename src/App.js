import {Route, Switch, Redirect} from 'react-router-dom'

import NotFound from './components/NotFound'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import About from './components/About'
import './App.css'

const App = () => (
  <div className="bg-app">
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/about" component={About} />
        <Route exact path="/bad-path" component={NotFound} />
        <Redirect to="/bad-path" />
      </Switch>
  </div>
)

export default App
