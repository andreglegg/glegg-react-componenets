import React from 'react';

import Button from '../src/index';

import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'

class Example extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Button className={'active'} primary onClick={() => console.log('clicked')}>
                Primary
                </Button>
                <Button className={'active'} onClick={() => console.log('clicked')}>
                Default
                </Button>
                <Button className={'active'} icon={<Icon icon={home} size={17} />} primary onClick={() => console.log('clicked')}>
                    Icon
                </Button>

                <Button className='active' colorScheme='red' primary onClick={() => console.log('clicked')}>
                    Primary
                </Button>
            </div>
        );
    }
}

export default Example;
