import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Signin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    return (
        <div>
            <button className='w-100 text-center bg-primary text-light p-2 mb-5 d-flex justify-content-center' onClick={()=> signInWithGoogle()}>Signin with google</button>
            <p>{
                error ? error.message : ''
            }</p>
        </div>
    );
};

export default Signin;