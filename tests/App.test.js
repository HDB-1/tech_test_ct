import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/containers/App/App';
import Navbar from '../src/components/Navbar';
import Overview from '../src/components/Overview';
import waitUntil from "async-wait-until";

describe("shallow app", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("Should render Navbar component", () => {
        expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
    })
    // it('should render an Overview component if the fetch was successful'),
    // async () => {
    //     wrapper.setState({fetched: true})
    //     await waitUntil(() => wrapper.instance().state.fetched)
    //     expect(wrapper.containsMatchingElement(<Overview />)).toEqual(true);
    // }
});

