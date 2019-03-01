import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
  state ={
    images: [
      // {image: {image_name:'abc'}},
      // {image: {image_name:'123'}}
    ],
    heading: 'Random 10 Images'
  }

  componentDidMount(){
    axios.get(`https://www.rijksmuseum.nl/api/en/collection?q=Q&key=${process.env.REACT_APP_MM_KEY}&imgonly=true&format=json`)
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