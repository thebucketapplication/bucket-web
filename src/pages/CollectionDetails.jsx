import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { collectionData } from '../redux/actions/collectionActions'
import MobModal from './MobModal'
import CollectionTaskTabs from './CollectionTaskTabs'
import './UserDetails.css'

class CollectionDetails extends Component {
    componentDidMount() {
      this.props.collectionData(this.props.match.params.id)
    }
    render() {
      return (this.props.collection && this.props.collection.collectionID === this.props.match.params.id) ? (
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
                    backgroundImage: `url(${""})`
                  }}
                ></div>
                <div className='avatar'>
                  <img alt='' src={this.props.collection.collectionImageURL} />
                </div>
                <div className='info'>
                  <h4 className='title'>{this.props.collection.collectionTitle}</h4>
                  <p className='username'>@{this.props.collection.collectionOwnerUsername}</p>
                  <p className='desc'>{this.props.collection.collectionDescription}</p>
                </div>
              </div>
            </div>
            <div className='col-md-8 h-100 no-padding'>
              <CollectionTaskTabs collection={this.props.collection} />
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )
    }
  }
  const mapStateToProps = storeState => {
    return { collection: storeState.listState.single }
  }

export default withRouter(connect(mapStateToProps, { collectionData })(CollectionDetails))