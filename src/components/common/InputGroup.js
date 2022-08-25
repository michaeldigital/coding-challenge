import React from "react";
import Form from "react-bootstrap/Form";

const InputGroup = ({ placeholder, id, error, value, onChange }) => {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Control
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></Form.Control>
      {error && <p className="text-danger mt-2 small error-message">{error}</p>}
    </Form.Group>
  );
};

export default InputGroup;
