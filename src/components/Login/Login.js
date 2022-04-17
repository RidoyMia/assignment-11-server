import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import auth from '../../firebase.init';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Signin from './Signin/Signin';

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
               <Col md="6" className='form-container'>
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
                        alert('Sent email');
                      }}
                   
                   >reset password</button><br />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                
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