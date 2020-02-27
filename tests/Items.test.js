import React from 'react';
import { shallow } from 'enzyme';
import Items from '../src/components/Items';
import Item from '../src/components/Item';

describe("shallow Items", () => {
    let wrapper;
    let allInfo = [{
        id: "tariffSelectionE716598",
        supplyDetailsId: "1795",
        canApply: true,
        name: "Covalent Capped With Fee",
        logoUri: "https://rest.staging.energyhelpline.com/Uploads/SupplierLogos/Woodland_TRANS.gif?t=QtT9F_RfNGiloVcwLpCkGELowyI",
        expectedAnnualSavings: 112,
        expectedAnnualSpend: "469.67",
        expectedMonthlySpend: "39.14",
        messages: [
        "Early exit fee: £30.00"
        ],
        tags: [ ],
        tariffType: "unknown",
        paymentMethod: "Monthly Direct Debit",
        supplierName: "Covalent Energy",
        supplierId: "136",
        isBigSix: false,
        hasPaperBilling: true,
        hasExitFees: true
        },
        {
        id: "tariffSelectionE716668",
        supplyDetailsId: "1796",
        canApply: true,
        name: "Covalent Fixed Six Months",
        logoUri: "https://rest.staging.energyhelpline.com/Uploads/SupplierLogos/Woodland_TRANS.gif?t=QtT9F_RfNGiloVcwLpCkGELowyI",
        expectedAnnualSavings: 112,
        expectedAnnualSpend: "469.67",
        expectedMonthlySpend: "39.14",
        messages: [
        "No early exit fees",
        "Fixed until 26 February 2017"
        ],
        tags: [ ],
        tariffType: "fixed",
        paymentMethod: "Monthly Direct Debit",
        supplierName: "Covalent Energy",
        supplierId: "136",
        isBigSix: false,
        hasPaperBilling: true,
        hasExitFees: false
        }]

    beforeEach(() => {
        wrapper = shallow(<Items allInfo={allInfo}/>)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should contain an Item component", () => {
        expect(wrapper.containsMatchingElement(<Item />)).toEqual(true);
    })
})