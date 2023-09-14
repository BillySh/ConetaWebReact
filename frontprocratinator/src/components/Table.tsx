import React, { useState }from 'react';

import "./Table.css"

const TableComponent: React.FC = () => {
    // Sample data
    const [data, setData] = useState([
      { id: 1, Tipo: 'Examen', FechaEntrega: "20/10/2023", Materia: "Matematicas",Horas: 2 },
      { id: 2, Tipo: 'Examen', FechaEntrega:"20/10/2023", Materia: "Matematicas",Horas: 2 },
      { id: 3, Tipo: 'Tarea', FechaEntrega: "20/10/2023",  Materia: "Matematicas",Horas: 2 },
    ]);
    const addElement = () => {
        const newElement = { id: data.length + 1, Tipo: 'Examen', FechaEntrega: "20/10/2023", Materia: "Matematicas",Horas: 2 };
        setData([...data, newElement]);
      };
  
    return (
      <div>
        <button onClick={addElement}>Add Element</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TipoEntrega</th>
              <th>FechaEntrega</th>
              <th>Materia</th>
              <th>Horas</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Tipo}</td>
                <td>{item.FechaEntrega}</td>
                <td>{item.Materia}</td>
                <td>{item.Horas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TableComponent;