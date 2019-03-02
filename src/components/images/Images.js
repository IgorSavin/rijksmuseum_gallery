import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Image from '../images/Image'

class Images extends Component {
  render () {
    return (
      <Consumer>
        {value => {
          // console.log(value);
          const { images, heading } = value
          if (images === undefined) {
            return <Spinner />
          } else if (images.length === 0) {
            return (
              <React.Fragment>
                <div className="card card-body mb-4 p-4">
                <h3 className="text-center mb-4">
                  No art object could be found by your query
                </h3>
                </div>
              </React.Fragment>
            )
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {images.map(item => <Image key={item.id} image={item} />)}
                </div>
              </React.Fragment>
            )
          }
        }}
      </Consumer>
    )
  }
}

export default Images
