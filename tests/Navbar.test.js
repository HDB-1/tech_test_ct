import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../src/components/Navbar'


describe("shallow app", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navbar />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
});

