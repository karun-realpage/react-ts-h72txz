import * as React from 'react';
import { useForm } from 'react-hook-form';
import Data from './data.json';
import Greet from './Greet';
export default function Login() {
  let count = 0;
  const k = Data as any;
  const [Details, SetDetails] = React.useState({
    uname: '',
    upassword: '',
    isloggedin: false,
  });
  const handlename = (event: any) => {
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
          <div className="m-5 d-flex justify-content-center ms-3">
            <form className="card" onSubmit={() => handleSubmit()}>
              <div className="m-3">
                <h1> Login:</h1>
                <label className="form-label p-1">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                  onChange={() => handlename(event)}
                />
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

  );
}
