import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Login() {
  const [loginType, setLoginType] = useState('HR');
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  const handleLoginTypeChange = (type) => {
    setLoginType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here with formData
    console.log('Logging in as', loginType, 'with ID:', formData.id);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <div className="login-options">
           
            <div className="login-buttons">
              <Button
                variant={loginType === 'HR' ? 'primary' : 'secondary'}
                onClick={() => handleLoginTypeChange('HR')}
              >
                HR
              </Button>
              <Button
                variant={loginType === 'Student' ? 'primary' : 'secondary'}
                onClick={() => handleLoginTypeChange('Student')}
              >
                Student
              </Button>
              <Button
                variant={loginType === 'Placement' ? 'primary' : 'secondary'}
                onClick={() => handleLoginTypeChange('Placement')}
              >
                Placement
              </Button>
            </div>
          </div>
          <div className="login-form">
            <h2>Login as {loginType}</h2>
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group controlId="id">
                <Form.Label>ID:</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <a href="/login">
              <input variant="primary" type="button" value="Login" />
              </a>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;