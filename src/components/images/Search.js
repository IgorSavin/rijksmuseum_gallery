import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../context'

class Search extends Component {
  state = {
    imageSearch: ''
  }

  findImages = (dispatch, e) =>{
    e.preventDefault();

    axios.get(`https://www.rijksmuseum.nl/api/en/collection?q=${this.state.imageSearch}&key=${process.env.REACT_APP_MM_KEY}&imgonly=true&format=json`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type:'SEARCH_IMAGES',
        payload: res.data.artObjects
      })
      this.setState({imageSearch:''})
    })
    .catch(err => console.log(err));
  }
 
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-university" /> Search For A Masterpiece
              </h1>
              <p className="lead text-center">
                Find a piece of art at Rijksmuseum
              </p>
              <form onSubmit={this.findImages.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="What are you looking for?"
                    name="imageSearch"
                    value={this.state.imageSearch}
                    onChange={this.onChange}
                  />
                </div>
                <button className="btn btn-warning btn-lg btn-block mb-5" type="submit">Get Images</button>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Search
