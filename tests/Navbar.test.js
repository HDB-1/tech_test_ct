import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../src/components/Navbar'


describe("shallow Navbar", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navbar />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
});

