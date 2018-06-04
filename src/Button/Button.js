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
    children?: any,
    disabled?: boolean,
    spinner?: boolean,
}


class Button extends React.Component<Props> {

    componentDidMount() {
    }

    render() {
        const {icon, style, primary, colorScheme, onClick, className, children, disabled, spinner} = this.props;
        const _renderSpinner = (
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
        return (
            <button
                className={['buttonBase', primary ? 'primary' : null, colorScheme ? colorScheme : null, className].join(' ')}
                style={style}
                onClick={onClick}
                disabled={disabled}
            >
                {icon ? <span className={'icon'}> {icon} </span> : null}
                {children}
                {spinner ? _renderSpinner : null}
            </button>
        )
    }
}

export default Button;
