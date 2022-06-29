import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({orders}) => {
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
          <a className='navbar-brand col-2 '><Link to='/' style={{color:'blue',textDecoration:'none'}}>Restaurant</Link></a>
          <button className='btn btn-primary'>
             <Link to='/orders' style={{color:'white',textDecoration:'none'}}> Orders</Link><span className='badge bg-secondary'>{orders}</span>
          </button>
      </nav>
    </div>
  )
}
const mapStateToProps = state => ({
  orders : state.orderreducer.length
})

export default connect(mapStateToProps)(Header);
