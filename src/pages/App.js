import React from 'react';
import { Container } from '@mui/material';
import Form from '../components/Form'
import Background from '../assets/img/background.jpg'
import '@fontsource/roboto/400.css'
require('typeface-roboto')


function App() {
  return (
    <div style={{
      backgroundSize: 'cover',
      height: '100vh',
      backgroundImage: `url(${Background})`,
    }}>
      <Container style={{ textAlign: 'center' }} maxWidth='md'>
        <Form />
      </Container>
    </div>
  );
}

export default App;