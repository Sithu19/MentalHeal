import React from "react";
import TakeTest from "../../components/take-test/take-test.component.jsx";

import DATA from "../../Data";

class StartingTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testing: DATA,
    };
  }
  render() {
    const { testing } = this.state;
    return (
      <div>
        {testing.map(({ id, ...otherTestingProps }) => (
          <TakeTest key={id} {...otherTestingProps} />
        ))}
      </div>
    );
  }
}
export default StartingTest;
