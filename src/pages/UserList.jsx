import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { userList } from '../redux/actions/userActions'

class UserList extends Component {
  componentDidMount() {
    this.props.userList()
  }
  render() {
    return this.props.list ? (<>
      <div style={{padding: '5px 10px'}}>Users who just joined Bucket!</div>
      <table className='table'>
        <tbody>
          {this.props.list.map((el, index) => (
            <tr key={index}>
              <td>
                <Link to={`/${el.username}`}>
                  {el.fullname}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    ) : (
      <h1>Loading</h1>
    )
  }
}

const mapStateToProps = storeState => {
  return { list: storeState.listState.list }
}

export default connect(mapStateToProps, { userList })(UserList)
