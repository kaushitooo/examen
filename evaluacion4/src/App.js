import React, { useState, useEffect } from 'react';
import WorkerFormulario from './Formulario';
import TablaTrabajadores from './Tabla';

const App = () => {
  const [trabajadores, setTrabajadores] = useState([]);

  useEffect(() => {
    const trabajadoresGuardados = localStorage.getItem('trabajadores');
    if (trabajadoresGuardados) {
      setTrabajadores(JSON.parse(trabajadoresGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('trabajadores', JSON.stringify(trabajadores));
  }, [trabajadores]);

  const agregarTrabajador = (trabajador) => {
    setTrabajadores([...trabajadores, trabajador]);
  };

  const eliminarTrabajador = (indice) => {
    const trabajadoresActualizados = [...trabajadores];
    trabajadoresActualizados.splice(indice, 1);
    setTrabajadores(trabajadoresActualizados);
  };

  const actualizarTrabajador = (indice, trabajadorActualizado) => {
    const trabajadoresActualizados = [...trabajadores];
    trabajadoresActualizados[indice] = trabajadorActualizado;
    setTrabajadores(trabajadoresActualizados);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Registro de Trabajadores</h1>
      <WorkerFormulario agregarTrabajador={agregarTrabajador} />
      <div className="my-4">
        <TablaTrabajadores
          trabajadores={trabajadores}
          eliminarTrabajador={eliminarTrabajador}
          actualizarTrabajador={actualizarTrabajador}
        />
      </div>
    </div>
  );
};

export default App;
