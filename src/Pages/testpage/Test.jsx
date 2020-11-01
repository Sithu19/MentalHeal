import React from "react";
import { Link } from "react-router-dom";

const Test = () => (
  <div>
    <h1>Click to test</h1>
    <Link to="startingtest">
      <button>Take a test</button>
    </Link>
  </div>
);

export default Test;
