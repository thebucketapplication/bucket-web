import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import TaskAdd from './pages/TaskAdd'
import UserChange from './pages/UserChange'
import UserDetails from './pages/UserDetails'
import UserForm from './pages/UserForm'
import UserList from './pages/UserList'
function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={UserList} />
          <Route exact path='/form' component={UserForm} />
          <Route exact path='/form/:id' component={UserChange} />
          <Route exact path='/task/form' component={TaskAdd} />
          <Route exact path='/:username' component={UserDetails} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
