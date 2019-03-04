import React from 'react'
import { Link } from 'react-router-dom'

const Image = props => {
  const { image } = props

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
      <div className="card-body">
          <img src={image.webImage.url} className="card-img" alt="..." />
          <div className="description" >
          <h5 className="card-title">{image.title}</h5>
        <p className="card-text"><i className="fas fa-user"></i> {image.principalOrFirstMaker}</p>
        <Link to={`/details/image/${image.objectNumber}`} className="btn btn-dark">
              View more...
            </Link>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Image
