import React from 'react';
import { shallow } from 'enzyme';
import Items from '../src/components/Items';
import Item from '../src/components/Item';

describe("shallow Items", () => {
    let wrapper;
    let showFixedMock = jest.fn()
    let showVariableMock = jest.fn()
    let allState = {
        data: [],
        fetched: false,
        fixed: false,
        variable: false
      }

    beforeEach(() => {
        wrapper = shallow(<Items allState={allState} showFixed={showFixedMock} showVariable={showVariableMock}/>)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    // it("should contain an Item component", () => {
    //     expect(wrapper.containsMatchingElement(<Item energyData={allState.data} fixed={allState.fixed} variable={allState.variable}/>)).toEqual(true);
    //     expect(wrapper.find(Item).length).toEqual(1);
    // })
    it('Should render show fixed and show prev buttons',()=>{
        expect(wrapper.find('button').length).toEqual(2)
        expect(wrapper.find('#fixedBtn').length).toEqual(1)
        expect(wrapper.find('#varBtn').length).toEqual(1)
    })
    it('show fixed button should call show fixed function', () => {
        wrapper.find('#fixedBtn').simulate('click')
        expect(showFixedMock).toHaveBeenCalled()
    });
    it('Next button should call next function', () => {
        wrapper.find('#varBtn').simulate('click')
        expect(showVariableMock).toHaveBeenCalled()
    });
})