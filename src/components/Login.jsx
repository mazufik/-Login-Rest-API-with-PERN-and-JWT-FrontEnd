import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import AxiosTarget from '../hook/AxiosTarget';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post(AxiosTarget[1], {
        email: email,
        password: password,
      });
      history('/dashboard');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className='hero has-background-primary-light is-fullheight is-fullwidth'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-4-desktop'>
              <form onSubmit={Auth} className='box'>
                <p className='has-text-centered'>{msg}</p>
                <div className='field mt-5'>
                  <label className='label'>Email or Username</label>
                  <div className='controls'>
                    <input
                      type='text'
                      className='input'
                      placeholder='Username'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='field mt-5'>
                  <label className='label'>Password</label>
                  <div className='controls'>
                    <input
                      type='password'
                      className='input'
                      placeholder='******'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='field mt-5'>
                  <button className='button is-success is-fullwidth'>
                    Login
                  </button>
                </div>
                <div className='field mt-5'>
                  <p>
                    Create Users click{' '}
                    <Link to={'/register'}>
                      {' '}
                      <strong>
                        <em>here</em>
                      </strong>{' '}
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
