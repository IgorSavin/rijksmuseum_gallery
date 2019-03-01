import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'

class Details extends Component {
  state = {
    details: {}
  }

  componentDidMount() {
    axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection/${
          this.props.match.params.id
        }?q=Q&key=${process.env.REACT_APP_MM_KEY}&imgonly=true&format=json`
      )
      .then(res => {
        console.log(res.data.artObject)
        this.setState({ details: res.data.artObject })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { details } = this.state

    if (details === undefined || Object.keys(details).length === 0) {
      return <Spinner />
    } else {
      return (
        <React.Fragment>
          
          <div className="card mb-3" >
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={details.webImage.url} alt="" className="card-img" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{details.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      {details.longTitle}
                    </small>
                  </p>
                  {details.description !== null && <p className="card-text">{details.description}
                  </p>}
                  <Link to="/" className="btn btn-warning btn-sm mb-4">
            Go Back
          </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Details
