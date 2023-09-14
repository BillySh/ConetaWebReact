import React from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { InputLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from "axios";
import { useEffect, useState } from "react";
import "./Fields.css"

import "./EliminarActividad.css"
import "./Example.css"



function Example(){
    const textStyle = {
        fontFamily: 'Arial',
        fontSize: '100px',
        fontWeight: 'bold',
        color: 'Black',
      };


    //-----------------------conectividad--------------------------------------
    const [saving,setSaving]=useState(false);
    const [entregas,setEntregas]=useState([]);

    //Cosillas
    const [tipo,setTipo]=useState("");
    const [materia,setMateria]=useState("");
    const [nombre_actividad,setActividad]=useState("");
    const [fecha,setFecha]=useState("");
    const [horas,setHora]=useState("");

    function save(){
        setSaving(true);
        axios.post("http://localhost:8000/entrega/create",{
            //-----------
            tipo: tipo,
            materia: materia,
            horas: horas,
            nombre_actividad: nombre_actividad,
            fecha:fecha,
        }).then((response)=>{
            setSaving(false);
            listEntregas();
        })
    }
    function listEntregas(){
        axios.get("http://localhost:8000/").then((response)=>{
            setEntregas(response.data)
        })
    }
    useEffect(()=>{
        listEntregas();
    },[])
    //-------------------------------------------------------------------------
    
    const [eliminar, setEliminar]=useState(false);

    const [contador,setContador]=useState(168);
    const [name,setName]=useState("");
    const [nueva,setCreate]= useState(false);
    //Para la table info y añadir.
    const [data, setData] = useState([
        { id: 1, Tipo: 'Examen', FechaEntrega: "20/10/2023", Materia: "Matematicas",Horas: 2 },
        { id: 2, Tipo: 'Examen', FechaEntrega:"20/10/2023", Materia: "Matematicas",Horas: 2 },
        { id: 3, Tipo: 'Tarea', FechaEntrega: "20/10/2023",  Materia: "Matematicas",Horas: 2 },
      ]);
      const addElement = () => {
        const newElement = { id: data.length + 1, Tipo: 'Examen', FechaEntrega: "20/10/2023", Materia: "Matematicas",Horas: 2 };
        setData([...data, newElement]);
      };
    //---------------------------------------------------------------------

    function sumaContador(){
        console.log("Llamando a la funcion sumar")
        setContador(contador+1);
        console.log("Terminando la funcion sumar")
    }
    function restarContador(){
        console.log("Llamando a la funcion sumar")
        setContador(contador+3)
        console.log("Terminando la funcion sumar")
    }

    function createTarea()
    {
        console.log("Llamando a la funcion crearTarea")
        setCreate(true);
    }


    function eliminarTarea()
    {
        console.log("Llamando a la funcion eliminarTarea")
        setEliminar(true);
    }

    //---------------------------Eliminar
    interface ButtonProps{
        title:string;
        onPress:()=>void;
    }
    
    function createData(
        id: number,
        tipoEntrega: string,
        materia: string,
        nombre_actividad: string,
        fecha: string,
        tiempo: number,
        delete_button: string
      ) {
        return { id, tipoEntrega, materia, nombre_actividad, fecha, tiempo, delete_button};
      }
    
    const [rows, SetRows] = useState([
        createData(0,'Tarea','Español','Leer el principito','12/04/2024',2,'botón ficticio'),
        createData(1,'Tarea','Español', 'Leer de perfil','27/05/2025',2,'boton'),
        createData(2,'Examen','Matemáticas', 'resolver ejercicios','23/01/2026',2,'botón'),
        createData(3,'Tarea','Historia','Leer el manifiesto','24/06/2023',2,'boton'),
        createData(4,'Examen','Geografía', 'Act 12', '16/09/2025',2,'boton'),
      ]);
      
      const sparseKeys = Object.keys(rows);
      console.log(sparseKeys)

    function borrarActividad(id: number,
        tipoEntrega: string,
        materia: string,
        nombre_actividad: string,
        fecha: string,
        tiempo: number,
        delete_button: string){

        const llave = createData(id,tipoEntrega,materia,nombre_actividad,fecha,tiempo,delete_button)
        /*for (llave in rows){

        }
        const actividadIndividual = rows.indexOf(, 0);
        const key = separarArray(arraySeparado);*/
        const index = rows.indexOf(llave, 0);
        if (index > -1) {
        rows.splice(index, 1);
        console.log("Se ha borrado exitosamente la actividad")
        }
        
        console.log("adios",llave)
        setEliminar(false);
/*
    function separarArray(
        array){
            
        }*/
    }

    //---------------------------------------------------------------------------------------------------------------------------

    function createTareaFin()
    {
        console.log("Llamando a la funcion FinTareas")
        const newElement = { id: data.length + 1, Tipo: 'Examen', FechaEntrega: "20/10/2023", Materia: "Matematicas",Horas:3 };
        setContador(contador-3)
        setData([...data, newElement]);
        setCreate(false);
    }

    function salirTareaFin(){
        setEliminar(false);
        setCreate(false);
    }

    function onChangeInput(event:any){
        const {value}=event.target
        setName(value)
    }

    function onChangeInputH(event:any){
        const {value}=event.target
        setHora(value)
    }
    function onChangeInputF(event:any){
        const {value}=event.target
        setFecha(value)
    }

    //-------------------------------------------------------------------------------------------------------------
    /* <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>  
    */

    //-------------------------------------------------------------------------------------------------------------

    return (
        <div>
            <div className="top-bar">
                <div className="logo">
                    <a  href="https://www.youtube.com/watch?v=ROK_7zDkQeg&ab_channel=Psych2Go">Procratinator 3000</a>
                </div>
                
                </div>

            

            {nueva=== false && eliminar=== false &&
                <Slide direction="down"  in={!eliminar && !nueva} mountOnEnter unmountOnExit >
                <div>

                <br></br>
                <InputLabel>Horas para procrastinar</InputLabel>
                
                <h1 style={textStyle}>{contador}</h1>

                <br></br>
                <br></br>
                <Button  variant="outlined" endIcon={<SendIcon />} onClick={createTarea}>Añadir</Button>
                <br></br>
                <br></br>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={eliminarTarea}>Eliminar</Button>
                <br></br>
                <br></br>
                    <TableContainer component={Paper} className="TablaA">
                        <Table  sx={{ minWidth: 450 }} aria-label="simple table">
                        <TableHead>
                        <TableRow className="TablaD">
                            
                            <TableCell align="center">Tipo de Entrega</TableCell>
                            <TableCell align="center">FechaEntrega</TableCell>
                            <TableCell align="center">Materia</TableCell>
                            <TableCell align="center">Horas</TableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                
                                <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className='Fila'
                                >
                                <TableCell component="th" scope="row">
                                {item.Tipo}
                                </TableCell>
                                    <TableCell align="center">{item.FechaEntrega}</TableCell>
                                    <TableCell align="center">{item.Materia}</TableCell>
                                    <TableCell align="center">{item.Horas}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
                
                
                </div>
                </Slide>
            }
            
            

            {nueva===true &&
                <Slide direction="up"  in={nueva} mountOnEnter unmountOnExit >
                <div style={{marginTop:30}}>
                    <div>
                    <InputLabel>Tipo</InputLabel>
                    <TextField id="outlined-basic" label="Tipo" variant="outlined" value={tipo} onChange={(event)=>{
                        const {value}=event.target
                        setTipo(value)
                    }} />
                    <InputLabel>Materia</InputLabel>
                    <TextField id="outlined-basic" label="Materia" variant="outlined" value={materia} onChange={(event)=>{
                        const {value}=event.target
                        setMateria(value)
                    }}/>
                    <InputLabel>Horas</InputLabel>
                    <TextField id="outlined-basic" label="Horas" variant="outlined" value={horas} onChange={(event)=>{
                        const {value}=event.target
                        setHora(value)
                    }} />
                    <InputLabel>nombre_actividad</InputLabel>
                    <TextField id="outlined-basic" label="nombre_actividad" variant="outlined" value={nombre_actividad} onChange={(event)=>{
                        const {value}=event.target
                        setActividad(value)
                    }} />
                    <InputLabel>Fecha</InputLabel>
                    <TextField id="outlined-basic" label="Fecha" variant="outlined" value={fecha} onChange={(event)=>{
                        const {value}=event.target
                        setFecha(value)
                    }} />
                    <br></br>
                    <br></br>
                    <LoadingButton loading={saving} variant="contained" onClick={save}>Save</LoadingButton>
                    </div>
                    <div>
                        {entregas.map((entrega:any)=>{
                            return <>
                                <p>{entrega.tipo} {entrega.materia} {entrega.horas} {entrega.nombre_actividad} {entrega.fecha}</p>
                            </>
                        })}
                    </div>

                </div>
                </Slide>

            }


            {eliminar===true &&
            <Slide direction="up"  in={eliminar} mountOnEnter unmountOnExit >
            <div className="Fondo">
            <Button variant="contained" className='Atras' onClick={salirTareaFin}>Atrás</Button>
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
                        key={row.nombre_actividad}
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
                        <Button variant="contained" className='Boton' onClick={()=>borrarActividad(row.id, row.tipoEntrega, row.materia, row.nombre_actividad, row.fecha,row.tiempo,row.delete_button)}>X</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
            </Slide>
            }


            
        </div>
    );


}

//-----------

export default Example;

