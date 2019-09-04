import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// Components
// import Animal from './components/Animal'

import API from './Utils/API'

class App extends Component {

  state = {
    name: '',
    species: '',
    editName: '',
    editSpecies: '',
    animals: []
  }

  componentDidMount() {
    API.getAnimal()
      .then(res => {
        console.log(res.data)
        this.setState({
          animals: res.data
        })
      })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleDelete = id => {
    API.deleteAnimal(id)
      .then(res => {
        API.getAnimal()
          .then(res => {
            this.setState({
              animals: res.data
            })
          })
      })
  }

  handleUpdate = event => {
    event.preventDefault()
    let animalData = {
      
      name: this.state.editName,
      species: this.state.editSpecies
    }

    console.log("Edit Entry")
    API.updateAnimal(animalData)
      .then(res => {
        console.log("Entry Updated")
      })
  }

  handleSubmit = event => {
    event.preventDefault();
    let animalData = {
      name: this.state.name,
      species: this.state.species
    }

    API.createAnimal(animalData)
      .then(res => {
        console.log(res)
        API.getAnimal()
          .then(res => {
            this.setState({
              name: '',
              species: '',
              animals: res.data
            })
          })
        // window.location.reload()
      })


  }

  render() {
    return (
      <div className='grey lighten-3'>
        <div className='container'>
          <h3 style={{ marginTop: '0px' }}>Enter an animal in the database!</h3>
          <form>
            <input name='name' value={this.state.name} onChange={this.handleInputChange} type='text'></input>
            <label htmlFor='name'>Name</label>
            <input name='species' value={this.state.species} onChange={this.handleInputChange} type='text'></input>
            <label htmlFor='species'>Species</label>
            <br />
            <br />
            <button className='btn' type='submit' onClick={this.handleSubmit}>Enter</button>
          </form>

          <div>
            <h3>The Zoo</h3>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Species</th>
                  <th>Remove</th>
                  <th>Edit</th>
                </tr>

                {(this.state.animals.length) ?
                  this.state.animals.map((animal, i) => (
                    <tr key={i}>
                      <td>{animal.name}</td>
                      <td>{animal.species}</td>
                      <td><button type="button" className='btn' onClick={() => this.handleDelete(animal._id)}>x</button></td>
                      <td><button type='button' className='btn' onClick={() => this.handleUpdate(animal._id)}><i className="material-icons">adjust</i></button></td>
                    </tr>

                  )) : "No Animals"
                }

              </tbody>

            </table>

          </div>

        </div>
      </div>
    );
  }

}

export default App;
