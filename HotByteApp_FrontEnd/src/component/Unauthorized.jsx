import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Unauthorized</h1>
      <p style={styles.paragraph}>You do not have access to this page.</p>
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.nuD9FP_UGb-XWcJ7CVjurgHaGD&pid=Api&P=0&h=180"
        alt="Unauthorized access"
        style={styles.image}
      />
      <Link to="/login" style={styles.link}>
        <button className="btn btn-danger" style={styles.button}>
          Go to Login
        </button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  image: {
    width: '500px',
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    fontSize: '1em',
    padding: '10px 20px',
  },
};

export default Unauthorized;

