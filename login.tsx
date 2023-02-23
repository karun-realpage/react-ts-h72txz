import * as React from 'react';
import { useForm } from 'react-hook-form';
import Data from './Data.json';
export default function Login() {
  let count = 0;
  const k = Data as any;
  const [Details, SetDetails] = React.useState({
    uname: '',
    upassword: '',
  });
  //the useRef Hook allows you to persist data between renders
  const prevCountRef = React.useRef();

  const handlemail = (event: any) => {
    SetDetails((prevData) => ({ ...prevData, uname: event.target.value }));
  };
  const handlepassword = (event: any) => {
    SetDetails((prevData) => ({ ...prevData, upassword: event.target.value }));
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (Data.hasOwnProperty(Details.uname)) {
      if (k[Details.uname][1] == Details.upassword) {
        SetDetails((prevData) => ({ ...prevData, isloggedin: true }));
        alert('Succesful');
      } else {
        console.log('check your username/password');
      }
    } else {
      if (count > 3) alert('did you register');
      count = count + 1;
      console.log('check your username/password');
    }
  };
  return (
    <div className="container">
      <h1 className="mt-3 ms-3"> Login:</h1>
      <div className="d-flex justify-content-center ms-3 border">
        <form onSubmit={() => handleSubmit(event)}>
          <div className="m-3">
            <label className="form-label p-1">User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              onChange={() => handlemail(event)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="m-3">
            <label className="form-label p-1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={() => handlepassword(event)}
            />
          </div>
          <div className="text-center justify-content-center mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
