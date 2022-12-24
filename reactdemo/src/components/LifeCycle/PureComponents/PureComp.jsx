import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PureComp extends PureComponent {
    render() {
        console.log('Pure comp')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        );
    }
}



export default PureComp;