/**
 * TODO: 404 Snapshot test
 */
import React from "react";
import Enzyme, { render, shallow } from "enzyme";
import enzymeAdapterReact16 from "enzyme-adapter-react-16";
import FourOhFour from "../components/fourOhfour";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({});

describe("FourOhFour component", () => {
  it("it matches snapshot", () => {
    const {} = getDefaultProps();
    const wrapper = shallow(
      <Router>
        <FourOhFour />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
