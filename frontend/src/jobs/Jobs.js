import React, { Component } from 'react';
import JobPost from './JobPost';

import './Jobs.css';

class Jobs extends Component {
    render() {
        return (
            <div className="Jobs">
                <ul className="job_list">
                    <li><JobPost title={"Mow Lawn"} user={"Bob Yang"} description={"Mow my lawn"} pay={10.00} taken={false}/></li>
                    <li><JobPost title={"Shovel Snow"} user={"Tom Zhang"} description={"Shovel my snow"} pay={50.00} taken={false}/></li>
                    <li><JobPost title={"Walk dog"} user={"Stanely Chen"} description={"Walk my lawn"} pay={5.00} taken={true}/></li>
                </ul>
            </div>
        );
    }
}

export default Jobs;