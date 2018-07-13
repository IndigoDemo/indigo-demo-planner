import React from 'react';
import Octicon, { Telescope } from '@githubprimer/octicons-react';

import { generateCombination } from 'gfycat-style-urls';

class PlannerForm extends React.Component {
    createName = () => {
        this.props.onChange('name', generateCombination(2, ' '));
    };

    render() {
        return (
            <React.Fragment>
                <h1 className="lead pb-4">To start planning your demo timeline, we need somewhat useful information</h1>
                <form>
                    <div className="form-group">
                        <label>Demo Name</label>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={this.props.name}
                                onChange={event => this.props.onChange('name', event.target.value)}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" onClick={this.createName}>
                                    <Octicon icon={Telescope} />
                                </button>
                            </div>
                        </div>
                        <span className="form-text text-muted">
                            Too sober to come up with something clever? Press the button!
                        </span>
                    </div>

                    <div className="form-group">
                        <label>Party Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.props.party}
                            onChange={event => this.props.onChange('party', event.target.value)}
                        />
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default PlannerForm;
