import React, { Component } from 'react';
import './App.css';
import data2 from './data2';

class App extends Component{
  constructor(){
    super();

    this.state = {
      currentIndex: 0
      

    }
  }
  
  incrementIndex(){
    if(this.state.currentIndex !== 24){
    this.setState({currentIndex: this.state.currentIndex +1})
  }else{
    return}
  }
  decrementIndex(){
    if(this.state.currentIndex !== 0){
    this.setState({currentIndex: this.state.currentIndex -1})
    }else{
      return}
  }




  render(){
    return(
      <div><div className='bluebar'>Home</div>
      <div className='background'>Yuryur
          <div className='entry-box'>
    <h2 className='name'>{data2[this.state.currentIndex].name.first} {data2[this.state.currentIndex].name.last}</h2>
    <p className='page'>{this.state.currentIndex + 1}/{data2.length}</p>
          <div className='info'>
          <p>From: {data2[this.state.currentIndex].city}, {data2[this.state.currentIndex].country}</p>
          <p>Job Title: {data2[this.state.currentIndex].title}</p>
          <p>Employer: {data2[this.state.currentIndex].employer}</p>
          </div>
          <div className='favmovies'>Favorite Movies:
          <ol><li>{data2[this.state.currentIndex].favoriteMovies[0]}</li>
          <li>{data2[this.state.currentIndex].favoriteMovies[1]}</li>
          <li>{data2[this.state.currentIndex].favoriteMovies[2]}</li></ol>
          </div>
          </div>
         <div className='buttons'>
           <div>
           <p className='button2' onClick={() => this.decrementIndex()}> {'<Prev'}</p></div>
          <div>
            <button className='button'>Edit</button>
            <button className='button'>Delete</button>
            <button className='button'>New</button></div>
        <div>
          <p className='button2' onClick={() => this.incrementIndex()}>Next></p>
        </div>
        </div>
          
        </div>
      </div>
        
    
    )
  }
}


export default App;