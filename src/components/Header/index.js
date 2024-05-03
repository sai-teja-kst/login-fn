// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="bg-header">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
)

export default withRouter(Header)
