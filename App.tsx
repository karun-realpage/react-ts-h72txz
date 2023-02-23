import * as React from 'react';
import './style.css';
import Nav from './Nav';
import Login from './login';
import Register from './Register';
export default function App() {
  return (
    <div>
      <Nav />
      <Login />
    </div>
  );
}
