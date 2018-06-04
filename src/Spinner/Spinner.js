// @flow

import React from 'react';
import './Spinner.style.scss';

type Props = {
    radius?: number,
    color?: string
}

class Button extends React.Component<Props> {
    /*static defaultProps = {
        radius: 42,
    };*/
    componentDidMount() {
    }

    render() {
        const {radius = 100, color} = this.props;

        return (
            <div className={'Spinner'} style={{width: radius, height: radius, borderRadius: '50%', borderColor: color}}>
            </div>
        )
    }
}

export default Button;
