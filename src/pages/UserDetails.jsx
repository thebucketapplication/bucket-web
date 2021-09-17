import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { userData } from '../redux/actions/userActions'
import MobModal from './MobModal'
import TaskTabs from './TaskTabs'
import './UserDetails.css'

class UserDetails extends Component {
  componentDidMount() {
    this.props.userData(this.props.match.params.username)
  }
  render() {
    return (this.props.user && this.props.user.username === this.props.match.params.username) ? (
      <div
        className='container-fluid px-0'
        style={{ marginTop: '-10px', maxWidth: "100%" }}
      >
        <div className="mobile-modal">
          <MobModal />
        </div>
        <div
          className='row mt-0 min-vh-100 no-margin'
          style={{ flexWrap: 'wrap', display: 'flex' }}
        >
          <div className='col-md-4 no-padding'>
            <div className='card hovercard'>
              <div
                className='cardheader d-md-none'
                style={{
                  backgroundImage: `url(${this.props.user.backgroundImageURL})`
                }}
              ></div>
              <div className='avatar'>
                <img alt='' src={this.props.user.profileImageURL} />
              </div>
              <div className='info'>
                <h4 className='title'>{this.props.user.fullname}</h4>
                <p className='username'>@{this.props.user.username}</p>
                <p className='desc'>{this.props.user.bio}</p>
              </div>
            </div>
          </div>
          <div className='col-md-8 h-100 no-padding'>
            <TaskTabs userId={this.props.user.uid} />
          </div>
        </div>
      </div>
    ) : (
      <h1>Loading</h1>
    )
  }
}

const mapStateToProps = storeState => {
  return { user: storeState.listState.single }
}

export default withRouter(connect(mapStateToProps, { userData })(UserDetails))
