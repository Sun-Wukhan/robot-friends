import React, { Component } from 'react'
import CardList from './CardList';
import SearchBox from './SearchBox'
import './App.css'
import ErrorBoundry from './ErrorBoundry'
import Scroll from './Scroll'

class App extends Component {
    
        
        state = {
            robots: [], 
            searchField: ''
        }

    componentDidMount(){

        fetch('http://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => this.setState({robots: users}))

    }

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value})

    }

    render() {
            const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            })
    return (
        <div className='tc'>
        <h1 className='f2'>Super Robo Friends!</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <ErrorBoundry>
        <CardList robots={filteredRobots}/>
        </ErrorBoundry>
        </Scroll>
        </div>
        )
    }
}
    


export default App; 