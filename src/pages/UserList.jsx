import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { userList } from '../redux/actions/userActions'

class UserList extends Component {
  componentDidMount () {
    this.props.userList()
  }
  render () {
    return this.props.list ? (
      <table className='table'>
        {this.props.list.map((el, index) => (
          <tr>
            <td>
              <Link key={index} to={`/${el.username}`}>
                {el.fullname}
              </Link>
            </td>
            {/* <td>
              <Link key={index} to={`/form/${el.id}`}>
                Edit
              </Link>
            </td> */}
          </tr>
        ))}
      </table>
    ) : (
      <h1>Loading</h1>
    )
  }
}

const mapStateToProps = storeState => {
  return { list: storeState.listState.list }
}

export default connect(mapStateToProps, { userList })(UserList)
