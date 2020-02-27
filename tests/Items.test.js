import React from 'react';
import { shallow } from 'enzyme';
import Items from '../src/components/Items';
import Item from '../src/components/Item';

describe("shallow Items", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Items />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should contain an Item component", () => {
        expect(wrapper.containsMatchingElement(<Item />)).toEqual(true);
    })
})