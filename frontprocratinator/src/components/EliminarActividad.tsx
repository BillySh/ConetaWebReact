import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import "./EliminarActividad.css"

interface ButtonProps{
    title:string;
    onPress:()=>void;
}

function createData(
    tipoEntrega: string,
    materia: string,
    nombre_actividad: string,
    fecha: string,
    tiempo: number,
    delete_button: string
  ) {
    return { tipoEntrega, materia, nombre_actividad, fecha, tiempo, delete_button};
  }

const rows = [
    createData('Tarea','Español','Leer el principito','12/04/2024',2,'botón ficticio'),
    createData('Tarea','Español', 'Leer de perfil','27/05/2025',2,'boton'),
    createData('Examen','Matemáticas', 'resolver ejercicios','23/01/2026',2,'botón'),
    createData('Tarea','Historia','Leer el manifiesto','24/06/2023',2,'boton'),
    createData('Examen','Geografía', 'Act 12', '16/09/2025',2,'boton'),
  ];

function EliminarActividad(){
    return (
        <div className="Fondo">
            <Button variant="contained" className='Atras'>Atrás</Button>
            <h1>Eliminar Actividades</h1>
            <TableContainer component={Paper} className="TablaA">
                <Table sx={{ minWidth: 450 }} aria-label="simple table" >
                    <TableHead>
                    <TableRow className="TablaD">
                        <TableCell>Tipo de Actividad</TableCell>
                        <TableCell align="center">Materia</TableCell>
                        <TableCell align="center">Actividad</TableCell>
                        <TableCell align="center">Fecha de Entrega</TableCell>
                        <TableCell align="center">Tiempo de Realizacion</TableCell>
                        <TableCell align="center">Botón</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.tipoEntrega}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        className='Fila'
                        >
                        <TableCell component="th" scope="row">
                            {row.tipoEntrega}
                        </TableCell>
                        <TableCell align="center">{row.materia}</TableCell>
                        <TableCell align="center">{row.nombre_actividad}</TableCell>
                        <TableCell align="center">{row.fecha}</TableCell>
                        <TableCell align="center">{row.tiempo}</TableCell>
                        <TableCell align="center">
                        <Button variant="contained" className='Boton'>X</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
        
    )
}

export default EliminarActividad;