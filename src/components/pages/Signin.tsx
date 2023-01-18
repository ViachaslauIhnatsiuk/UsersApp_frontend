import { FC, FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useSignin } from '../../hooks/useSignin';

const Signin: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn, isLoading, error } = useSignin();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mb-0">Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="mb-0">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </Form.Group>
        <Button variant="primary" size="sm" type="submit" disabled={isLoading}>
          Sing In
        </Button>
        {error && <div className="mt-2 text-danger">{error}</div>}
      </Form>
    </div>
  );
};

export { Signin };
