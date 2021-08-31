import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { userDataByID, UsernameChange } from '../redux/actions/userActions'

class UserChange extends Component {
  state = {
    username: null
  }
  componentDidMount () {
    this.props.userDataByID(this.props.match.params.id)
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.UsernameChange(this.props.match.params.id, this.state.username)
    this.props.history.push(`/${this.state.username}`)
  }
  render () {
    return this.props.info ? (
      <div className='container'>
        <form
          className='m-auto'
          style={{ maxWidth: '600px' }}
          onSubmit={this.handleSubmit}
        >
          <h3 className='my-4'>Form</h3>
          <hr className='my-4' />
          <div className='form-group mb-3 row'>
            <label for='username7' className='col-md-5 col-form-label'>
              username
            </label>
            <div className='col-md-7'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='username7'
                name='username'
                defaultValue={this.props.info.username}
                required
                onChange={this.handleInput}
              />
            </div>
          </div>
          <hr className='my-4' />
          <div className='form-group mb-3 row'>
            <label
              for='send-a-message27'
              className='col-md-5 col-form-label'
            ></label>
            <div className='col-md-7'>
              <button className='btn btn-primary btn-lg' type='submit'>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    ) : (
      <h1>Loading</h1>
    )
  }
}

const mapStateToProps = storeState => {
  console.log(storeState)
  return { info: storeState.listState.singleById }
}

export default withRouter(
  connect(mapStateToProps, { userDataByID, UsernameChange })(UserChange)
)
