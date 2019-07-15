import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import {NavBar} from './components/NavBar';
import {Users} from './components/Users';
import {Spinner} from './components/Spinner';
import {Search} from './components/Search';
import {Alert} from './components/Alert';
import {About} from './pages/About';
import {User} from './pages/User';

export class App extends Component {
    state = {
        users: [],
        loading: false,
        alert: {},
    };

    callAlert = (type, msg) => {
        this.setState({
            alert: {type, text: msg}
        })
    };

    clearUsers = () => {
        this.setState({
            users: []
        })
    };

    searchUsers = async text => {
        this.setState({
            loading: true,
        });
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET}`)

        this.setState({
            users: res.data.items,
            loading: false,
        })
    };

    render() {
        const {users, alert} = this.state;
        return (
            <Router>
                <div className='App'>
                    <NavBar/>
                    <div className='container'>
                        <Switch>
                            <Route
                                exact
                                path='/'
                                render={() => (<>
                                    <Alert {...alert}/>
                                    <Search searchUsers={this.searchUsers}
                                            clearUsers={this.clearUsers}
                                            shouldShowClearButton={Boolean(users.length)}
                                            callAlert={this.callAlert}
                                    />
                                    {
                                        this.state.loading
                                            ? <Spinner/>
                                            : <Users users={users}/>
                                    }
                                </>)}
                            />
                            <Route
                                exact
                                path='/about'
                                component={About}
                            />
                            <Route
                                exact
                                path='/user/:login'
                                component={User}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
