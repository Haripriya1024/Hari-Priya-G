import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext'; 
import { useNavigate } from 'react-router-dom';

const SignInSignUp = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const { signIn } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (mobileNumber.length === 10) {
      alert(`Sign In successful with mobile number: ${mobileNumber}`);
      signIn(); 
      navigate('/'); 
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Sign In</h2>
      {/* Corrected image path */}
      <img 
        src="/images/login-banner.jpg" 
        alt="Sign In Banner"
        style={styles.image}
      />
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        style={styles.input}
        maxLength="10"
      />
      <button onClick={handleSignIn} style={styles.button}>
        Sign In
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '20px',
    borderRadius: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default SignInSignUp;