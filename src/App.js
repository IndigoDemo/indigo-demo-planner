import { hot } from 'react-hot-loader';
import React, { Component } from 'react';

import Header from './components/Header';
import PlannerForm from './components/PlannerForm';
import Timeline from './components/Timeline';

class App extends Component {
    state = {
        name: '',
        party: '',
    };

    handleChange = (target, data) => {
        this.setState({ [target]: data });
    };

    render() {
        return (
            <div className="App">
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 py-md-3">
                            <PlannerForm
                                name={this.state.name}
                                party={this.state.party}
                                onChange={this.handleChange}
                            />
                            <Timeline />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
