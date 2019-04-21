import React, { Component } from 'react';
import './JobPost.css';

class JobPost extends Component {
    render() {
        return (
            <div className="JobPost">
                <ul className="job_details">
                    <li>{this.props.title}</li>
                    <li>{this.props.user}</li>
                    <li>{this.props.description}</li>
                    <li>{this.props.taken}</li>
                    <li>{this.props.pay}</li>
                </ul>
            </div>
        );
    }
}

export default JobPost;