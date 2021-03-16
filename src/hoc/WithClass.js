import React, {Component} from 'react';

class WithClass extends Component {
    render() {
        return (
            <div className={this.props.class}>
                {this.props.children}
            </div>
        );
    }
}

export default WithClass;