import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

const reducer = (state, action ) =>{
  switch(action.type){
    case 'SEARCH_IMAGES':
    return {
      ...state,
      images: action.payload,
      heading: 'Search Results'
    };
    default:
    return state;
  }
}

export class Provider extends Component {
  state ={
    images: [
      // {image: {image_name:'abc'}},
      // {image: {image_name:'123'}}
    ],
    heading: 'Random 10 Images',
    dispatch: action => this.setState( state => reducer(state, action))
  }

  componentDidMount(){
    axios.get(`https://www.rijksmuseum.nl/api/en/collection?&key=${process.env.REACT_APP_MM_KEY}&imgonly=true&format=json`)
    .then(res => {
      // console.log(res.data.artObjects);
      this.setState({images: res.data.artObjects})
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;