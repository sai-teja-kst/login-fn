// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <h1>Home Route</h1>
        <div>
          <LogoutButton />
        </div>
      </div>
    )
  }
}

export default Home
