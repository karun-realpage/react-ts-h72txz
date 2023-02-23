import * as React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="container">
      <div className="d-flex justify-content-center m-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-3">
            <label for="exampleInputEmail1" className="form-label p-1">
              Email{' '}
            </label>
            <input
              type="email"
              className="form-control"
              {...register('email')}
              placeholder="Email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="m-3">
            <label for="exampleInputEmail1" className="form-label p-1">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              {...register('lastName')}
              placeholder="Password"
            />
          </div>
          <div className="text-center justify-content-center">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
