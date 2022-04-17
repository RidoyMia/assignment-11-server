import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Signin from '../Login/Signin/Signin';

const Signup = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[confirm,setConfirm] = useState('');
    const[Error,setError] = useState('');
    const[user]=useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        user2,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      let navigate = useNavigate();
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";
    
      const [sendEmailVerification, sending, error1] = useSendEmailVerification(
        auth
      );
   
     
     if(user){
        navigate(from, { replace: true });
     }

      const emailhandler = event =>{
          setEmail(event.target.value);
      }
      const passwordhandler = event =>{
          setPassword(event.target.value);
      }
      const confirmpasswordhandler = event =>{
          setConfirm(event.target.value);
      }
      const submit = (event) =>{
          event.preventDefault();
          if(password !==confirm){
              return setError('password dont match')
          }
          createUserWithEmailAndPassword(email,password);
      }
      if (sending) {
        return <p>Sending...</p>;
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm-Password</Form.Label>
                        <Form.Control onBlur={confirmpasswordhandler} type="password" placeholder="Confirm-Password" required/>
                    </Form.Group>
                   <p>
                       {
                           Error ? Error : ''
                       }
                   </p>
                    <p>{
                        error? error.message : ''
                    }</p>
                   <p> If you have an account please <Link  to='/login' className=' py-3'>Login</Link></p>
                   <button className='mb-2' onClick={
                       async () => {
                        await sendEmailVerification();
                        alert('Sent email');
                      }
                   }>Varification by email</button><br />
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

export default Signup;