import React, { useState } from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { InputLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import "./Fields.css"
import "./Table.css"

import "./Example.css"



function Example(){
    const textStyle = {
        fontFamily: 'Arial',
        fontSize: '100px',
        fontWeight: 'bold',
        color: 'Black',
      };

    const [contador,setContador]=useState(168);
    const [name,setName]=useState("");
    const [nueva,setCreate]= useState(false);
    const [horas,setHoras]= useState(""); //Horas en las que hace la tarea
    const [materia,setMateria]= useState(""); //Materia del trabajo
    const [tipo,setTipo]= useState(""); //Tipo de la entrega
    const [fecha,setFecha]= useState(""); //Fecha de entrega de la tarea
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
    function createTareaFin()
    {
        console.log("Llamando a la funcion FinTareas")
        const newElement = { id: data.length + 1, Tipo: 'Examen', FechaEntrega: "20/10/2023", Materia: "Matematicas",Horas:3 };
        setContador(contador-3)
        setData([...data, newElement]);
        setCreate(false);
    }

    function onChangeInput(event:any){
        const {value}=event.target
        setName(value)
    }

    function onChangeInputH(event:any){
        const {value}=event.target
        setHoras(value)
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
                    <a href="http://localhost:3000/contact">Procratinator 3000</a>
                </div>
                
                </div>

            

            {nueva=== false &&
                <div>

                <br></br>
                <InputLabel>Horas para procrastinar</InputLabel>
                <h1 style={textStyle}>{contador}</h1>

                <br></br>
                <br></br>
                <Button  variant="outlined" endIcon={<SendIcon />} onClick={createTarea}>Añadir</Button>
                <br></br>
                <br></br>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={restarContador}>Eliminar</Button>
                <br></br>
                <br></br>
            
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
            }
            
            

            {nueva===true &&
                <div>
                    <br></br>
                    <br></br>
                    <InputLabel>Materia</InputLabel>
                    <select id="Materia" name="Materia">
                        <option value="Matematicas">Matematicas</option>
                        <option value="Biologia">Biologia</option>
                        <option value="Fisica">Fisica</option>
                        <option value="Español">Español</option>
                        <option value="Historia">Historia</option>
                    </select>
                    
                    <InputLabel>Tipo de Entrega</InputLabel>
                    <select id="Tipo" name="Tipo"  >
                        <option value="Examen">Examen</option>
                        <option value="Tarea">Tarea</option>
                    </select> 
                    <br></br>
                    <br></br>
                    <InputLabel>Horas estimadas</InputLabel>
                    <TextField id="outlined-basic" label="numero" variant="outlined" value={horas} onChange={onChangeInputH}/>
                    <br></br>
                    <br></br>
                    <InputLabel>Fecha de entrega</InputLabel>
                    <TextField id="outlined-basic" label="dd/mm/yy" variant="outlined" value={fecha} onChange={onChangeInputF}/>
                    <br></br>
                    <br></br>
                    <Button variant="outlined" endIcon={<SendIcon />} onClick={createTareaFin}>Crear</Button>
                    

                          
                </div>


            }

            
        </div>
    );


}

//-----------

export default Example;

