import React from 'react'

const Image = props => {
  const { image } = props

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
      <div className="card-body">
        {image.hasImage && (
          <img src={image.webImage.url} className="card-img" alt="..." />
        )}
        <h5 className="card-title">{image.title}</h5>
        <p className="card-text"><i class="fas fa-user"></i> {image.principalOrFirstMaker}</p>
        <a href="#" className="btn btn-dark">
              To know more...
            </a>
      </div>
      </div>
    </div>
  )
}

export default Image
