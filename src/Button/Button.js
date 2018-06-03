// @flow

import React from 'react';
import './Button.style.scss';

type Props = {
    icon?: string,
    style?: Object,
    primary?: boolean,
    colorScheme?: 'red',
    onClick?: Function,
    className?: Object,
    children: any,
    disabled?: boolean,
}


class Button extends React.Component<Props> {

    componentDidMount() {
    }

    render() {
        const {icon, style, primary, colorScheme, onClick, className, children} = this.props;
        return (
            <button
                className={['buttonBase', primary ? 'primary' : null, colorScheme ? colorScheme : null, className].join(' ')}
                style={style}
                onClick={onClick}
            >
                {icon ? <span className={'icon'}> {icon} </span> : null}
                {children}
            </button>
        )
    }
}

export default Button;
