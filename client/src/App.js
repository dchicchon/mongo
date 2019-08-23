import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Animal from './components/Animal'

import API from './Utils/API'

class App extends Component {

  state = {
    name: '',
    type: '',
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

  handleSubmit = event => {
    event.preventDefault();
    var animalData = {
      name: this.state.name,
      type: this.state.type
    }

    API.createAnimal(animalData)
      .then(res => {
        console.log(res)
        API.getAnimal()
          .then(res => {
            this.setState({
              animals: res.data
            })
          })
        // window.location.reload()
      })


  }

  render() {
    return (
      <div className='container'>
        <h3>Enter an animal in the database!</h3>
        <form>
          <input name='name' value={this.state.name} onChange={this.handleInputChange} type='text'></input>
          <label htmlFor='name'>Name</label>
          <input name='type' value={this.state.type} onChange={this.handleInputChange} type='text'></input>
          <label htmlFor='type'>Type</label>
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
                <th>Type</th>
              </tr>

              {(this.state.animals.length) ?
                this.state.animals.map((animal, i) => (
                  <tr key={i}>
                    <td>{animal.name}</td>
                    <td>{animal.type}</td>
                  </tr>

                )) : "No Animals"
              }

            </tbody>

          </table>

        </div>

      </div>
    );
  }

}

export default App;
