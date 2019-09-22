import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// Components
// import Animal from './components/Animal'

import API from './Utils/API'

// const

const EditForm = ({ oldName, oldSpecies, editName, editSpecies, handleClose, handleInputChange, edit, handleUpdate }) => {
  const showHideClassName = edit ? 'modal display-block animated fadeIn' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='modal-main center'>
        <h3 className='left'>Edit</h3>
        <div className='row'>
          <div className='input-field col s12'>
            <input type='text' placeholder={oldName} className='validate' name='editName' value={editName} onChange={handleInputChange} />
            <label htmlFor='editName'>New Name</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input type='text' placeholder={oldSpecies} name='editSpecies' value={editSpecies} onChange={handleInputChange} className='validate' />
            <label htmlFor='editSpecies'>New Species</label>
          </div>
        </div>
        <button className='btn' onClick={handleUpdate}>Submit</button>
        <button className='btn' onClick={handleClose}>Close</button>
      </section>
    </div>
  )
}

class App extends Component {

  state = {
    // New Animal
    name: '',
    species: '',

    // Edit
    edit: false,
    oldName: '',
    oldSpecies: '',
    editName: '',
    editSpecies: '',
    editID: '',

    // List of animals
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

  showModal = (id, name, species) => {
    this.setState({
      edit: true,
      oldName: name,
      oldSpecies: species,
      editID: id
    })
  }

  hideModal = () => {
    this.setState({
      edit: false,
      oldName: '',
      oldSpecies: '',
      editID: ''
    })
  }

  handleUpdate = event => {
    event.preventDefault()
    let animalData = {
      id: this.state.editID,
      name: this.state.editName,
      species: this.state.editSpecies
    }
    console.log(animalData)
    this.hideModal()
    API.updateAnimal(animalData)
      .then(res => {
        console.log(res)
        API.getAnimal()
          .then(res => {
            this.setState({
              animals: res.data
            })
            console.log("Entry Updated")

          })
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
      })


  }

  render() {
    return (
      <div className='container'>
        <div className=''>
          <h3>Mongo Zoo</h3>
          <p>Enter an animal</p>
        </div>

        {/* This is the edit form if they click the edit button */}
        <EditForm
          edit={this.state.edit}
          handleClose={this.hideModal}
          oldName={this.state.oldName}
          oldSpecies={this.state.oldSpecies}
          editName={this.state.editName}
          editSpecies={this.state.editSpecies}
          handleUpdate={this.handleUpdate}
          handleInputChange={this.handleInputChange}
        />

        <form>
          <div className='row'>
            <div className='input-field col s12'>
              <input className='validate' name='name' value={this.state.name} onChange={this.handleInputChange} type='text'></input>
              <label htmlFor='name'>Name</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input className='validate' name='species' value={this.state.species} onChange={this.handleInputChange} type='text'></input>
              <label htmlFor='species'>Species</label>
            </div>
          </div>
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
                    <td><button type='button' data-name={animal.name} data-species={animal.species} className='btn' onClick={() => this.showModal(animal._id, animal.name, animal.species)}><i className="material-icons">adjust</i></button></td>
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
