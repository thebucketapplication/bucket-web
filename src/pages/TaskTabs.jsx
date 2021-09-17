import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTasks } from '../redux/actions/taskActions'
import './TaskTab.css'
import ReactPlayer from 'react-player'
// import _ from 'lodash';
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
  //     console.log(this.props.userId);
  //     this.props.getTasks(this.props.userId, null, true);
  //     this.props.getTasks(this.props.userId, null, false);
  //   }
  // }

  fetchCompletedData() {
    this.props.getTasks(this.props.userId, this.props.completed_last_visit, true);
  }

  fetchTodoData() {
    this.props.getTasks(this.props.userId, this.props.todo_last_visit, false);
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
    if ((el.completed === true) && (!el.storybookDictionary || el.storybookDictionary.length === 0)) {
      return (
        <React.Fragment>
          <div className="row px-3">
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
          </div>
          <div className="webkit-box bd-highlight overflow-x">
            <div className="p-2 bd-highlight w-350">
              <img alt='' src={el.completedBucketImageURL} width="320px" height="320px" />
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
          <div className="row px-3">
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
          </div>
          <React.Fragment>
            <div className="webkit-box bd-highlight overflow-x">
              {el.storybookDictionary
                ? el.storybookDictionary.sort((x, y) => x.index - y.index).map((sb, index1) => (
                  <div className="p-2 bd-highlight w-350 res-padding-0" key={'storybook' + index1} >
                    {
                      sb.isText ? <h4 className="roster-title">{sb.caption}</h4> :
                        sb.isMedia ? <React.Fragment>
                          <img alt='' src={sb.imageURL} width="320px" height="320px" />
                          {/* <div className="overlay-img">
                            <img alt='' src={sb.imageURL} className="roster-img" />
                          </div> */}
                          <h4 className="pt-2 roster-caption">{sb.caption}</h4>

                        </React.Fragment> :
                          sb.isVideo ? <div>
                            <ReactPlayer url={el.videoURL} controls={true} width="320px" height="320px" />
                            <h4 className="pt-2 roster-caption">{sb.caption}</h4>
                          </div> :
                            sb.isRoster ? <>
                              {
                                sb.rosterDictionary ?
                                  sb.rosterDictionary.map((rd, index2) => (
                                    <div className="row" key={'robster' + index2} style={{ margin: "5px", marginRight: "0px" }}>
                                      <div className="col-auto roster-avatar" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                                        <img alt='' src={rd.profileImageURL} />
                                      </div>
                                      <div className="col-auto">
                                        <div className="roster-fullname no-uppercase">@{rd.username}</div>
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
      <li key={'completed' + index} className="card pt-0 pb-2">
        {this.CompletedBucketImage(el)}
      </li>
    );
  }

  renderTodoTasks = (el, index) => {
    return (
      <li key={'todo' + index} className='bucket-card'>
        <h4 className="card-title">{el.bucketTitle}</h4>
      </li>
    )
  }

  render() {

    return (
      <div className='card card-border'>
        <ul
          id='myTab'
          role='tablist'
          className='nav nav-tabs nav-pills flex-row flex-sm-row text-center border-0 rounded-nav mb-4'
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
              className={`nav-link border-0  px-5 mx-2 py-3 tab-width ${this.state.active === 0 ? 'active' : null
                }`}
            >
              to do
              (
              {this.props.bucketListCount
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
              className={`nav-link border-0 px-5 mx-2 py-3 tab-width ${this.state.active === 1 ? 'active' : null
                }`}
            >
              completed
              (
              {this.props.completedListCount
                ? this.props.completedListCount
                : '0'}
              )
            </div>
          </li>
        </ul>
        <div id='myTabContent' className='tab-content'>
          {
            this.state.active === 0 ?
              <div
                id='home'
                role='tabpanel'
                aria-labelledby='home-tab'
              >
                <ul className='list-group list-group-flush overflow-y res-padding'>
                  <FlatList
                    list={this.props.todo_tasks || []}
                    renderItem={this.renderTodoTasks}
                    renderWhenEmpty={() => <div>No Buckets</div>}
                    loadMoreItems={() => this.fetchTodoData()}
                    hasMoreItems={this.props.todo_has_more}
                  />
                </ul>
              </div> :
              <div
                id='profile'
                role='tabpanel'
                aria-labelledby='profile-tab'
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
          }
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
    completed_last_visit: storeState.taskState.completed_last_visit,
    todo_last_visit: storeState.taskState.todo_last_visit,
    bucketListCount: storeState.listState.single.BucketListCount,
    completedListCount: storeState.listState.single.CompletedBucketListCount,
  }
}
export default connect(mapStateToProps, {
  getTasks
})(TaskTabs)
