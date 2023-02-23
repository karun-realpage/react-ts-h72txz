import React from 'react';

const Greet = ({ Details }: any) => {
  return (
    <div className="col-6">
      <h2>hello {Details.uname} How are you</h2>
    </div>
  );
};

export default Greet;
