// WorkerFormulario.js

import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const WorkerFormulario = ({ agregarTrabajador }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [run, setRun] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && apellido && run && genero) {
      const nuevoTrabajador = {
        nombre,
        apellido,
        run,
        genero,
      };
      agregarTrabajador(nuevoTrabajador);
      setNombre('');
      setApellido('');
      setRun('');
      setGenero('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col sm={6}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Form.Group controlId="run">
            <Form.Label>RUN</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el RUN"
              value={run}
              onChange={(e) => setRun(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="genero">
            <Form.Label>Género</Form.Label>
            <Form.Select
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              aria-label="Seleccione el género"
            >
              <option value="">Seleccione el género</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <div className="text-center my-4">
        <Button type="submit" className="btn btn-primary">Enviar</Button>
      </div>
    </Form>
  );
};

export default WorkerFormulario;
