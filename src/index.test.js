import test from 'ava'
import React from 'react'
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Foo from './index';

configure({ adapter: new Adapter() })


test('shallow', t => {
    const wrapper = shallow(<Foo />)
    t.is(wrapper.contains(<span>Foo</span>), true)
})