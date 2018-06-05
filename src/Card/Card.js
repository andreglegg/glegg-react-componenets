// @flow

import React from 'react';
import './Card.style.scss';

type Props = {
    style?: Object,
    className?: Object,
    children: any,
}

class Button extends React.Component<Props> {
    /*static defaultProps = {
        radius: 42,
    };*/
    componentDidMount() {
    }

    render() {
        const {style, className, children} = this.props;

        return (
            <div className={['card', className].join(' ')} style={style}>
                {children}
            </div>
        )
    }
}

export default Button;
