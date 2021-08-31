import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import './navbar.css'

class Navbar extends Component {
  state = {
    active: false
  }
  handleModal = () => {
    this.setState({ active: !this.state.active })
  }
  render () {
    return (
      <>
        <Modal modal={this.state.active} handleClose={this.handleModal} />
        <nav className='navbar navbar-expand-lg navbar-light d-none d-md-block'>
          <div className='container-fluid'>
            <Link className='navbar-brand padding-left' to='/'>
              <img src="/logo.png" alt="logo" />
            </Link>
            <div
              className='collapse navbar-collapse padding-right'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ml-auto topnav'>
                <li className='nav-item mx-2'>
                  {/* <Link className='nav-link navigation-link' to='/website'>
                    Website
                  </Link> */}
                  <a className="nav-link navigation-link" href="https://www.thebucketapp.com">
                    Website
                  </a>
                </li>
                <li className='nav-item mx-2'>
                  {/* <Link className='nav-link' to='/follow'>
                    Follow Us
                  </Link> */}
                </li>

                <li className='nav-item mx-1'>
                  <div
                    className='nav-link btn btn-purple text-white px-5 website-btn'
                    type='button'
                    data-toggle='modal'
                    data-target='#myModal'
                    onClick={this.handleModal}
                  >
                    Get The App
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar;