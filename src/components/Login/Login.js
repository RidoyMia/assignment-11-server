import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Signin from './Signin/Signin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
      );
      const[user]=useAuthState(auth)
      let navigate = useNavigate();
      let location = useLocation();
    
    
      let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user2,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let errormessage 
      if (error) {
        console.log(error.message)
      }
     if(user){
        navigate(from, { replace: true });
     }

      const emailhandler = event =>{
          setEmail(event.target.value);
      }
      const passwordhandler = event =>{
          setPassword(event.target.value);
      }
      const submit = (event) =>{
          event.preventDefault();
          signInWithEmailAndPassword(email,password);
      }
    return (
        <div>
           <Row className='login-container'>
               <Col md="3"></Col>
               <Col md="6" sm="12" xs="12" className='form-container'>
                   <h2 className='text-center text-primary py-3'>Please Login !</h2>
               <Form onSubmit={submit} className='form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={emailhandler} type="email" placeholder="Enter email"  required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={passwordhandler} type="password" placeholder="Password" required/>
                    </Form.Group>
                    <p>{
                        error ? error.message : ''
                    }</p>
                   <p> If you new here please <Link  to='/signup' className=' py-3'> signup</Link></p>
                   <button className='mb-2'
                    onClick={async () => {
                        await sendPasswordResetEmail(email);
                        toast("sent new password in your email");
                      }}
                   
                   >reset password</button><br />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <ToastContainer />
                </Form>
                <div className='Login-section'>
                     <div className='width'></div>
                     <p className='or'>Or</p>
                     <div className='width'></div>
                </div>
                <Signin></Signin>
               </Col>


           </Row>
           
        </div>
    );
};

export default Login;