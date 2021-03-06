/**
 * TODO: Footer Snapshot test
 */
import React from "react";
import Enzyme, { render, shallow } from "enzyme";
import enzymeAdapterReact16 from "enzyme-adapter-react-16";
import Footer from "../components/footer";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({});

describe("Footer component", () => {
  it("it matches snapshot", () => {
    const {} = getDefaultProps();
    const wrapper = shallow(
      <Router>
        <Footer />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});