import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import {NavBar} from './components/NavBar';
import {Users} from './components/Users';
import {Spinner} from './components/Spinner';

export class App extends Component {
    state = {
        users: [],
        loading: true,
    };

    async componentDidMount() {
        const res = await axios.get('https://api.github.com/users')

        this.setState({
            users: res.data,
            loading: false,
        })
    }

    render() {
        return (
            <div className="App">
                <NavBar/>
                <div className='container'>
                    {
                        this.state.loading
                        ? <Spinner/>
                        : <Users users={this.state.users}/>
                    }
                </div>
            </div>
        );
    }
}
