import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTasks } from '../redux/actions/taskActions'
import './TaskTab.css'
import ReactPlayer from 'react-player'
// import { BsCursor, BsThreeDots } from "react-icons/bs";
import FlatList from 'flatlist-react';

class TaskTabs extends Component {
  state = {
    active: 0,
    count: null
  }
  handleTab = num => {
    this.setState({ active: num })
  }
  componentDidMount() {
    this.props.getTasks(this.props.userId, null, true);
    this.props.getTasks(this.props.userId, null, false);
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (_.isEqual(prevProps, this.props) === false) {
  //     this.props.getTasks(this.props.userId, null, true);
  //     this.props.getTasks(this.props.userId, null, false);
  //   }
  // }

  fetchCompletedData() {
    console.log("Fetch Completed More");
    this.props.getTasks(this.props.userId, this.props.lastVisit, true);
  }

  fetchTodoData() {
    console.log("Fetch Todo More");
    this.props.getTasks(this.props.userId, this.props.lastVisit, false);
  }
  CheckTime(t) {
    var dateNow = Math.floor((new Date().getTime() / 1000));
    var seconds = Math.floor(dateNow - t);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60)
    var day = Math.floor(hours / 24);
    var week = Math.floor(day / 7);
    var month = Math.floor(day / 30);
    var year = Math.floor(day / 365)
    if (seconds < 60) {
      return (
        <p className='task-date'>1m</p>
      )
    }
    else if ((seconds > 60) && (seconds < 86400)) {
      return (
        <p className='task-date'>{minutes}m</p>
      )
    }
    else if ((seconds > 3600) && (seconds < 86400)) {
      return (
        <p className='task-date'>{hours}H</p>
      )
    }
    else if ((seconds > 86400) && (seconds < 604800)) {
      return (
        <p className='task-date'>{day}D</p>
      )
    }
    else if ((seconds > 604800) && (seconds < (86400 * 30))) {
      return (
        <p className='task-date'>{week}W</p>
      )
    }
    else if ((seconds > (86400 * 30)) && (seconds < (86400 * 30 * 12))) {
      return (
        <p className='task-date'>{month}M</p>
      )
    }
    else if (seconds > (86400 * 365)) {
      return (
        <p className='task-date'>{year}Y</p>
      )
    }
  }
  CompletedBucketImage(el) {
    console.log(el)
    if ((el.completed === true) && (!el.storybookDictionary || el.storybookDictionary.length === 0)) {
      return (
        <React.Fragment>
          <div className="webkit-box bd-highlight overflow-x">
            <div className="p-4 bd-highlight w-400 res-padding-0">
              <img alt='' src={el.completedBucketImageURL} width="350px" height="350px" />
              <h4 className="pt-2 roster-caption">{el.caption}</h4>
            </div>
          </div>
          <div className="title-card">
                <h4 className="bucket-title">
                  {el.bucketTitle}
                </h4>
              </div>
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <div className="row w-600 p-4">
            <div className="col-auto small-avatar" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
              <img alt='' src={el.profileImageURL} />
            </div>
            <div className="col-auto">
              <h5 className="task-fullname">{el.fullname}</h5>
              <p className='task-username'>@{el.username}</p>
            </div>
            <div className="col">
              {this.CheckTime(el.createdTimeStamp)}
            </div>
            {/* <div className="col-1 order-last">
              <BsCursor className="icon-button" />
            </div>
            <div className="col-1 order-last">
              <BsThreeDots className="icon-button" />
            </div> */}
          </div>
          <React.Fragment>
            <div className="webkit-box bd-highlight overflow-x">
              {el.storybookDictionary
                ? el.storybookDictionary.sort((x, y) => x.index - y.index).map((sb, index1) => (
                  <div className="p-4 bd-highlight w-400 res-padding-0" key={'storybook' + index1} >
                    {
                      sb.isText ? <h4 className="roster-title">{sb.caption}</h4> :
                        sb.isMedia ? <React.Fragment>
                          <img alt='' src={sb.imageURL} width="350px" height="350px" />
                          {/* <div className="overlay-img">
                            <img alt='' src={sb.imageURL} className="roster-img" />
                          </div> */}
                          <h4 className="pt-2 roster-caption">{sb.caption}</h4>

                        </React.Fragment> :
                          sb.isVideo ? <div>
                            <ReactPlayer url={el.videoURL} controls={true} width="350px" height="350px" />
                            <h4 className="pt-2 roster-caption">{sb.caption}</h4>
                          </div> :
                            sb.isRoster ? <>
                              {
                                sb.rosterDictionary ?
                                  sb.rosterDictionary.map((rd, index2) => (
                                    <div className="row" key={'robster' + index2} style={{marginLeft:"0px", marginRight:"0px"}}>
                                      <div className="col-auto small-avatar" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                                        <img alt='' src={rd.profileImageURL} />
                                      </div>
                                      <div className="col-auto">
                                        {/* <h5 className="task-fullname">{rd.fullname}</h5>
                                        <p className='task-username color-red'>@{rd.username}</p> */}
                                        <h5 className="task-fullname no-uppercase color-red">@{rd.username}</h5>
                                      </div>
                                    </div>
                                  )) : null
                              }
                            </> :
                              sb.isQuestion ? <React.Fragment>
                                <h5 className="task-fullname">{sb.promptQuestion}</h5>
                                <div className="task-answer pt-4">{sb.caption}</div>
                              </React.Fragment> : null
                    }
                  </div>
                ))
                : null}
            </div>
          </React.Fragment>
          <div className="title-card">
            <h4 className="bucket-title">
              {el.bucketTitle}
            </h4>
          </div>
        </React.Fragment>
      )
    }
  }

  renderCompletedTasks = (el, index) => {
    return (
      <li key={'completed' + index} className="card">
        {this.CompletedBucketImage(el)}
      </li>
    );
  }

  renderTodoTasks = (el, index) => {
    return (
      <li key={'todo' + index} className='bucket-card'>
        <h4 className="card-title">{el.bucketTitle}</h4>
        {/* <b>ADDED BY <span className='span-text'>{el.username}</span></b> */}
        {/* <h5 className="added-by">ADDED BY <span className='people-count'>{el.username}</span></h5> */}
      </li>
    )
  }

  render() {

    return (
      <div className='card card-left'>
        <ul
          id='myTab'
          role='tablist'
          className='nav nav-tabs nav-pills flex-row flex-sm-row text-center border-0 rounded-nav'
        >
          <li
            className='nav-item flex-sm-fill'
            onClick={() => this.handleTab(0)}
          >
            <div
              id='home-tab'
              data-toggle='tab'
              role='tab'
              aria-controls='home'
              aria-selected='true'
              className={`nav-link border-0  px-5 mx-2 py-3 ${this.state.active === 0 ? 'active' : null
                }`}
            >
              to do
              (
              {this.props.todo_tasks
                ? this.props.bucketListCount
                : '0'}
              )
            </div>
          </li>
          <li
            className='nav-item flex-sm-fill'
            onClick={() => this.handleTab(1)}
          >
            <div
              id='profile-tab'
              data-toggle='tab'
              role='tab'
              aria-controls='profile'
              aria-selected='false'
              className={`nav-link border-0 px-5 mx-2 py-3 ${this.state.active === 1 ? 'active' : null
                }`}
            >
              completed
              (
              {this.props.completed_tasks
                ? this.props.completedListCount
                : '0'}
              )
            </div>
          </li>
        </ul>
        <div id='myTabContent' className='tab-content py-4'>
          <div
            id='home'
            role='tabpanel'
            aria-labelledby='home-tab'
            className={`tab-pane fade ${this.state.active === 0 ? 'show active' : null
              }`}
          >
            <ul className='list-group list-group-flush overflow-y pl-4 res-padding'>
              <FlatList
                list={this.props.todo_tasks || []}
                renderItem={this.renderTodoTasks}
                renderWhenEmpty={() => <div>No Buckets</div>}
                loadMoreItems={() => this.fetchTodoData()}
                hasMoreItems={this.props.todo_has_more}
              />
            </ul>
          </div>
          <div
            id='profile'
            role='tabpanel'
            aria-labelledby='profile-tab'
            className={`tab-pane fade ${this.state.active === 1 ? 'show active' : null
              }`}
          >
            <ul className='list-group list-group-flush overflow-y pl-4 res-padding'>
              <FlatList
                list={this.props.completed_tasks || []}
                renderItem={this.renderCompletedTasks}
                renderWhenEmpty={() => <div>No Buckets</div>}
                loadMoreItems={() => this.fetchCompletedData()}
                hasMoreItems={this.props.completed_has_more}
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = storeState => {
  // console.log(storeState, storeState.taskState.completed_tasks);
  return {
    completed_tasks: storeState.taskState.completed_tasks,
    todo_tasks: storeState.taskState.todo_tasks,
    completed_has_more: storeState.taskState.completed_has_more,
    todo_has_more: storeState.taskState.todo_has_more,
    lastVisit: storeState.taskState.lastVisit,
    bucketListCount: storeState.listState.single.BucketListCount,
    completedListCount: storeState.listState.single.CompletedBucketListCount,
  }
}
export default connect(mapStateToProps, {
  getTasks
})(TaskTabs)
