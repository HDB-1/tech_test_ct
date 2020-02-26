import React from 'react'
import { shallow } from 'enzyme'
import Overview from '../src/components/Overview'


describe("shallow app", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Overview />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
});

