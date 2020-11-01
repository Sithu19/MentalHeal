import React from "react";

const TakeTest = (ques) => {
  const { Ques } = ques;
  return (
    <div>
      <div>
        <h1>Question 1</h1>
      </div>
      <div>
        <p>{Ques}</p>
      </div>
    </div>
  );
};

export default TakeTest;
