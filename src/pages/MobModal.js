import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Modal.css'

class MobModal extends Component {
  render () {
      console.log(this.props.modal)
    return this.props.user ? (
      <>
        <div
          className={`mobile-modal text-center show`}
          id='exampleModal2'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel2'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content mobile-modal-content'>
              <div className='modal-body'>
                <div style={{display:"flex"}}>
                  {/* <img src="/logo-mobile.png" alt="logo" /> */}
                  <img src={process.env.PUBLIC_URL + '/logo-mobile.png'} height="60" width="60" alt="logo" className="mobile-logo" /> 
                    <h5 className="modal-text mobile-modal-text color-white">
                    Want to make your own list and see what you share with <strong>{this.props.user.username}</strong>?
                    </h5>
                </div>
                <a className="use-the-app-btn" href="https://apps.apple.com/us/app/bucket-a-bucket-list-app/id1509377504">
                    Use the app
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    ) : null
  }
}

const mapStateToProps = storeState => {
  return { user: storeState.listState.single }
}

export default connect(mapStateToProps, null)(MobModal)
