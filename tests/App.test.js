import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/containers/App/App';
import Navbar from '../src/components/Navbar';
import Overview from '../src/components/Overview';
import waitUntil from "async-wait-until";

describe("shallow app", () => {
    let wrapper;
    let getAllDataMock = jest.fn()

    beforeEach(() => {
        wrapper = shallow(<App getAllData={getAllDataMock}/>)
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


// <========================== API TESTING =============================>

function APIRequest () {
    let url = "https://demo.staging.energyhelpline-aws.com/api/results/a8823b4b-1abe-41de-a5b3-ab6700c08d98";
    return fetch(url).then(res => res.json());
  };

describe("testing API", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });
    // API Request test will fail needs to find way to export function from class
    it("calls API and returns data to me", () => {
      //Mock fetch response data
      fetch.mockResponseOnce(JSON.stringify({ data: "placeholder12345" }));
  
    //   //assert on the response
      APIRequest().then(res => {
        expect(res.data).toEqual("placeholder12345");
      });

      //assert on the time called and arguments given to fetch
      expect(fetch.mock.calls.length).toEqual(1); // fetch.mock.calls = nested array [[]] which contains the URL.
      expect(fetch.mock.calls[0][0]).toEqual(
        'https://demo.staging.energyhelpline-aws.com/api/results/a8823b4b-1abe-41de-a5b3-ab6700c08d98'
      );
    });
  });
