import React from 'react';
import { shallow } from 'enzyme';
import Item from '../src/components/Item';

describe("shallow Item", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Item />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
})