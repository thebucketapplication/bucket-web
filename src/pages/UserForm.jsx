import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userAdd } from '../redux/actions/userActions'

class UserForm extends Component {
  state = {
    email: null,
    fullname: null,
    bio: null,
    username: null,
    backgroundimageurl: null,
    profileimageurl: null,
    fcmtoken: null,
    blockedusers: [],
    isprivate: null,
    phonenumber: null,
    birthday: null,
    pinnedstorybookid: null,
    consolidatedbucketsapartofarray: [],
    zipcode: null,
    locationtitle: null
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleCheckbox = e => {
    this.setState({
      [e.target.name]: this.state[e.target.name].push(e.target.value)
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.userAdd(this.state)
  }
  render () {
    return (
      <div className='container'>
        <form
          className='m-auto'
          style={{ maxWidth: '600px' }}
          onSubmit={this.handleSubmit}
        >
          <h3 className='my-4'>Form</h3>
          <hr className='my-4' />
          <div className='form-group mb-3 row'>
            <label for='email2' className='col-md-5 col-form-label'>
              email
            </label>
            <div className='col-md-7'>
              <input
                type='email'
                className='form-control form-control-lg'
                id='email2'
                name='email'
                required
                onChange={this.handleInput}
              />
              <small className='form-text text-muted'>
                {' '}
                Please enter a valid email address
              </small>
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label for='fullname4' className='col-md-5 col-form-label'>
              fullname
            </label>
            <div className='col-md-7'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='fullname4'
                name='fullname'
                required
                onChange={this.handleInput}
              />
            </div>
          </div>
          <hr className='bg-transparent border-0 py-1' />
          <div className='form-group mb-3 row'>
            <label for='bio6' className='col-md-5 col-form-label'>
              bio
            </label>
            <div className='col-md-7'>
              <textarea
                className='form-control form-control-lg'
                id='bio6'
                name='bio'
                required
                onChange={this.handleInput}
              ></textarea>
            </div>
          </div>
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
                required
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label
              for='backgroundimageurl8'
              className='col-md-5 col-form-label'
            >
              backgroundImageURL
            </label>
            <div className='col-md-7'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='backgroundimageurl8'
                name='backgroundimageurl'
                required
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label for='profileimageurl9' className='col-md-5 col-form-label'>
              profileImageURL
            </label>
            <div className='col-md-7'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='profileimageurl9'
                name='profileimageurl'
                required
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label for='fcmtoken10' className='col-md-5 col-form-label'>
              fcmToken
            </label>
            <div className='col-md-7'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='fcmtoken10'
                name='fcmtoken'
                required
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label for='blockedusers14' className='col-md-5 col-form-label'>
              blockedUsers
            </label>
            <div className='col-md-7'>
              <div className='form-check custom-control custom-checkbox'>
                <input
                  className='form-check-input custom-control-input'
                  type='checkbox'
                  name='blockedusers'
                  id='blockedusers14_2'
                  value=' User#1'
                  onChange={this.handleCheckbox}
                />
                <label
                  className='form-check-label custom-control-label'
                  for='blockedusers14_2'
                >
                  {' '}
                  User#1
                </label>
              </div>
              <div className='form-check custom-control custom-checkbox'>
                <input
                  className='form-check-input custom-control-input'
                  type='checkbox'
                  name='blockedusers'
                  id='blockedusers14_3'
                  value=' User#2'
                  onChange={this.handleInput}
                />
                <label
                  className='form-check-label custom-control-label'
                  for='blockedusers14_3'
                >
                  {' '}
                  User#2
                </label>
              </div>
              <div className='form-check custom-control custom-checkbox'>
                <input
                  className='form-check-input custom-control-input'
                  type='checkbox'
                  name='blockedusers'
                  id='blockedusers14_4'
                  value=' User#3'
                  onChange={this.handleInput}
                />
                <label
                  className='form-check-label custom-control-label'
                  for='blockedusers14_4'
                >
                  {' '}
                  User#3
                </label>
              </div>
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label for='isprivate15' className='col-md-5 col-form-label'>
              isPrivate
            </label>
            <div className='col-md-7'>
              <div className='form-check custom-control custom-radio'>
                <input
                  className='form-check-input custom-control-input'
                  type='radio'
                  name='isprivate'
                  id='isprivate15_2'
                  checked
                  value=' true'
                  onChange={this.handleInput}
                />
                <label
                  className='form-check-label custom-control-label'
                  for='isprivate15_2'
                >
                  {' '}
                  true
                </label>
              </div>
              <div className='form-check custom-control custom-radio'>
                <input
                  className='form-check-input custom-control-input'
                  type='radio'
                  name='isprivate'
                  id='isprivate15_3'
                  value=' false'
                  onChange={this.handleInput}
                />
                <label
                  className='form-check-label custom-control-label'
                  for='isprivate15_3'
                >
                  {' '}
                  false
                </label>
              </div>
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label for='phonenumber18' className='col-md-5 col-form-label'>
              phoneNumber
            </label>
            <div className='col-md-7'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='phonenumber18'
                name='phonenumber'
                required
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label for='birthday19' className='col-md-5 col-form-label'>
              birthday
            </label>
            <div className='col-md-7'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='birthday19'
                name='birthday'
                required
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label
              for='pinnedstorybookid20'
              className='col-md-5 col-form-label'
            >
              pinnedStorybookId
            </label>
            <div className='col-md-7'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='pinnedstorybookid20'
                name='pinnedstorybookid'
                required
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label
              for='consolidatedbucketsapartofarray23'
              className='col-md-5 col-form-label'
            >
              consolidatedBucketsApartOfArray
            </label>
            <div className='col-md-7'>
              <div className='form-check custom-control custom-checkbox'>
                <input
                  className='form-check-input custom-control-input'
                  type='checkbox'
                  name='consolidatedbucketsapartofarray'
                  id='consolidatedbucketsapartofarray23_2'
                  value=' Bucket 1'
                  onChange={this.handleCheckbox}
                />
                <label
                  className='form-check-label custom-control-label'
                  for='consolidatedbucketsapartofarray23_2'
                >
                  {' '}
                  Bucket 1
                </label>
              </div>
              <div className='form-check custom-control custom-checkbox'>
                <input
                  className='form-check-input custom-control-input'
                  type='checkbox'
                  name='consolidatedbucketsapartofarray'
                  id='consolidatedbucketsapartofarray23_3'
                  value=' Bucket 2'
                  onChange={this.handleInput}
                />
                <label
                  className='form-check-label custom-control-label'
                  for='consolidatedbucketsapartofarray23_3'
                >
                  {' '}
                  Bucket 2
                </label>
              </div>
              <div className='form-check custom-control custom-checkbox'>
                <input
                  className='form-check-input custom-control-input'
                  type='checkbox'
                  name='consolidatedbucketsapartofarray'
                  id='consolidatedbucketsapartofarray23_4'
                  value=' Bucket 3'
                  onChange={this.handleInput}
                />
                <label
                  className='form-check-label custom-control-label'
                  for='consolidatedbucketsapartofarray23_4'
                >
                  {' '}
                  Bucket 3
                </label>
              </div>
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label for='zipcode24' className='col-md-5 col-form-label'>
              zipCode
            </label>
            <div className='col-md-7'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='zipcode24'
                name='zipcode'
                required
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className='form-group mb-3 row'>
            <label for='locationtitle25' className='col-md-5 col-form-label'>
              locationTitle
            </label>
            <div className='col-md-7'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='locationtitle25'
                name='locationtitle'
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
                Send a Message!
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { userAdd })(UserForm)
