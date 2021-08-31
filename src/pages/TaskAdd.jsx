import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../redux/actions/taskActions'
import { userList } from '../redux/actions/userActions'

class TaskAdd extends Component {
  state = {
    uid: null,
    task: null,
    completed: null
  }
  componentDidMount () {
    this.props.userList()
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.addTask(this.state)
  }
  handleChange = e => {
    let value = e.target.value
    if (e.target.name === 'completed') {
      value = value === 'false' ? false : true
    }
    this.setState({ [e.target.name]: value })
  }
  render () {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label for='exampleFormControlSelect1'>Example select</label>
                <select
                  className='form-control'
                  id='exampleFormControlSelect1'
                  name='uid'
                  onChange={this.handleChange}
                >
                  <option></option>
                  {this.props.users ? (
                    this.props.users.map((el, index) => (
                      <option key={index} value={el.id}>
                        {el.username}
                      </option>
                    ))
                  ) : (
                    <option>Loading</option>
                  )}
                </select>
                <div className='form-group'>
                  <label for='exampleInputEmail1'>Task</label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter task'
                    name='task'
                    onChange={this.handleChange}
                  />
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='completed'
                    id='exampleRadios1'
                    defaultValue='true'
                    checked
                    onChange={this.handleChange}
                  />
                  <label className='form-check-label' for='exampleRadios1'>
                    True
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='completed'
                    id='exampleRadios1'
                    defaultValue='false'
                    onChange={this.handleChange}
                  />
                  <label className='form-check-label' for='exampleRadios1'>
                    False
                  </label>
                </div>
              </div>
              <button type='submit' className='btn btn-primary'>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = storeState => {
  return { users: storeState.listState.list }
}

export default connect(mapStateToProps, { userList, addTask })(TaskAdd)
