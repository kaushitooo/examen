// TablaTrabajadores.js

import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

const TablaTrabajadores = ({ trabajadores, eliminarTrabajador, actualizarTrabajador }) => {
  const [indiceEdicion, setIndiceEdicion] = useState(-1);
  const [trabajadorEditado, setTrabajadorEditado] = useState({
    nombre: '',
    apellido: '',
    run: '',
    genero: '',
  });

  const handleEliminar = (indice) => {
    eliminarTrabajador(indice);
  };

  const handleEditar = (indice) => {
    setIndiceEdicion(indice);
    setTrabajadorEditado(trabajadores[indice]);
  };

  const handleCancelarEdicion = () => {
    setIndiceEdicion(-1);
    setTrabajadorEditado({
      nombre: '',
      apellido: '',
      run: '',
      genero: '',
    });
  };

  const handleGuardarEdicion = (indice) => {
    actualizarTrabajador(indice, trabajadorEditado);
    setIndiceEdicion(-1);
    setTrabajadorEditado({
      nombre: '',
      apellido: '',
      run: '',
      genero: '',
    });
  };

  const handleChangeEdicion = (campo, valor) => {
    setTrabajadorEditado((estadoPrevio) => ({
      ...estadoPrevio,
      [campo]: valor,
    }));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>RUN</th>
          <th>Género</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {trabajadores.map((trabajador, indice) => (
          <tr key={indice}>
            <td>
              {indiceEdicion === indice ? (
                <Form.Control
                  type="text"
                  value={trabajadorEditado.nombre}
                  onChange={(e) => handleChangeEdicion('nombre', e.target.value)}
                />
              ) : (
                trabajador.nombre
              )}
            </td>
            <td>
              {indiceEdicion === indice ? (
                <Form.Control
                  type="text"
                  value={trabajadorEditado.apellido}
                  onChange={(e) => handleChangeEdicion('apellido', e.target.value)}
                />
              ) : (
                trabajador.apellido
              )}
            </td>
            <td>
              {indiceEdicion === indice ? (
                <Form.Control
                  type="text"
                  value={trabajadorEditado.run}
                  onChange={(e) => handleChangeEdicion('run', e.target.value)}
                />
              ) : (
                trabajador.run
              )}
            </td>
            <td>
              {indiceEdicion === indice ? (
                <Form.Control
                  as="select"
                  value={trabajadorEditado.genero}
                  onChange={(e) => handleChangeEdicion('genero', e.target.value)}
                >
                  <option value="">Seleccione el género</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </Form.Control>
              ) : (
                trabajador.genero
              )}
            </td>
            <td>
              {indiceEdicion === indice ? (
                <>
                  <Button
                    variant="success"
                    onClick={() => handleGuardarEdicion(indice)}
                  >
                    Guardar
                  </Button>{' '}
                  <Button variant="secondary" onClick={handleCancelarEdicion}>
                    Cancelar
                  </Button>
                </>
              ) : (
                <Button variant="info" onClick={() => handleEditar(indice)}>
                  Editar
                </Button>
              )}
              {' '}
              <Button variant="danger" onClick={() => handleEliminar(indice)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaTrabajadores;
