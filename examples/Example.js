import React from 'react';

import {Button, Spinner, Card} from '../src/index';

import {Icon} from 'react-icons-kit'
import {home} from 'react-icons-kit/icomoon/home'

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
                <Button className={'active'} icon={<Icon icon={home} size={17}/>} primary onClick={() => console.log('clicked')}>
                    Icon
                </Button>
                <Button className='active' colorScheme='red' primary onClick={() => console.log('clicked')}>
                    Red
                </Button>
                <br/>
                <Button disabled primary className='active'>
                    Primary
                </Button>
                <Button disabled className='active'>
                    Default
                </Button>
                <Button disabled className={'active'} icon={<Icon icon={home} size={17}/>} primary>
                    Icon
                </Button>
                <Button disabled colorScheme={'red'} className='active'>
                    Red
                </Button>
                <Button className='active'>
                    <Spinner radius={10} color={'#1e1e1e'}/> Spinner
                </Button>
                <Button className='active' primary>
                    <Spinner radius={10} color={'white'}/>
                </Button>
                <br/>

                <div>
                    <Spinner/>
                </div>

                <Card style={{textAlign: 'center'}}>
                    <Spinner radius={10} color={'black'}/> Card with spinner
                </Card>
                <Button className={'active'} primary onClick={() => console.log('clicked')}>
                    Primary
                </Button>
            </div>
        );
    }
}

export default Example;
