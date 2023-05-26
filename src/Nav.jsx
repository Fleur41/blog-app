import './styles.css'
import {Link} from 'react-router-dom' 

const Nav = () => {
  return (
    <div className='nav'>
        <h2 className='nav-brand'>Kings</h2>
        <ul className='menu'>
            <li><Link to='/' style={{textDecoration: 'none'}} className="menu-btn">Home</Link></li>
            <li><Link to='/newblog' style={{textDecoration: 'none'}} className="menu-btn">New Blog</Link></li>
        </ul>
    </div>
  )
}

export default Nav