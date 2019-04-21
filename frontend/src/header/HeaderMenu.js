import React, { Component } from 'react';

class HeaderMenu extends Component {
    render() {
        return (
          <div className="HeaderMenu">{this.props.menu_name}</div>
        );
    }
}

export default HeaderMenu