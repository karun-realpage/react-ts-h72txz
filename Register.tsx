import * as React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const [Register, GetDetails] = React.useState({
    uname: '',
    uemail: '',
    upassword: '',
    cpassword: '',
  });

  const handlename = (event: any) => {
    GetDetails((prevData) => ({ ...prevData, uname: event.target.value }));
  };

  const handlepassword = (event: any) => {
    GetDetails((prevData) => ({ ...prevData, upassword: event.target.value }));
  };
  const handlemail = (event: any) => {
    GetDetails((prevData) => ({ ...prevData, umail: event.target.value }));
  };

  const handlecpassword = (event: any) => {
    GetDetails((prevData) => ({ ...prevData, cpassword: event.target.value }));
  };
  const HandleSubmits = (onSubmit) => {
    event.preventDefault();
    if (Register.upassword != Register.cpassword) {
      alert("Passwords doesn't match");
    } else {
      //
    }
  };
  return (
    <div className="container ">
      <div className="d-flex justify-content-center m-5 ">
        <form className="card" onSubmit={() => HandleSubmits()}>
          <div className="m-3">
            <h1> Register:</h1>
            <label className="form-label p-1">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={() => handlemail(event)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="m-3">
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
          <div className="m-3">
            <label className="form-label p-1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-Enter Password"
              onChange={() => handlecpassword(event)}
            />
          </div>
          <div className="text-center justify-content-center mb-3">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
