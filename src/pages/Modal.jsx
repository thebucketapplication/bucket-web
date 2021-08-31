import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Modal.css'
var QRCode = require('qrcode.react')

const baseURL = 'https://apps.apple.com/us/app/bucket-a-bucket-list-app/id1509377504'

class Modal extends Component {
  render () {
    return this.props.user ? (
      <>
        <div
          className={`modal fade text-center ${this.props.modal ? 'show' : null}`}
          id='exampleModal'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          style={{ display: this.props.modal ? 'block' : 'none' }}
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <p className='modal-title' id='exampleModalLabel'></p>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={this.props.handleClose}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <h5 className="modal-text">
                  Want to join <strong>{this.props.user.username}</strong> and
                  others <br />
                  on Bucket? Scan the QR code <br />
                  below!
                </h5>
                <QRCode
                  value={`${baseURL}`}
                />
              </div>
              <div className='modal-footer'>
                <p className='w-100 text-center'>or
                  <span>
                    <a className="link" href="https://apps.apple.com/us/app/bucket-a-bucket-list-app/id1509377504">Click Here</a>
                    </span></p>
              </div>
            </div>
          </div>
        </div>

        {this.props.modal ? <div className='modal-backdrop fade show'></div> : null}
      </>
    ) : null
  }
}

const mapStateToProps = storeState => {
  return { user: storeState.listState.single }
}

export default connect(mapStateToProps, null)(Modal)
