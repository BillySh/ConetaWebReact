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
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import { format } from 'date-fns';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import FormControl from '@mui/material/FormControl';
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
    const [id,setID]=useState("");
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
        window.location.reload();
    }

    function deleteV(){
        setSaving(true);
        axios.post("http://localhost:8000/entrega/delete",{
            //-----------
            id: id
        }).then((response)=>{
            setSaving(false);
            listEntregas();
        })
        setCreate(false);
        
    }

    function listEntregas(){
        axios.get("http://localhost:8000/").then((response)=>{
            setEntregas(response.data)
        })
    }

    useEffect(()=>{
        listEntregas();
    },[])
    //------------------------------Valores Booleanos y date-------------------------------------------
    
    const [eliminar, setEliminar]=useState(false);

    const [contador,setContador]=useState(730);
    const [pT,setPT]=useState(0);
    const currentDate = new Date();

    

    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const remainingDays = lastDayOfMonth.getDate() - currentDate.getDate();
    const remainingHours = remainingDays * 24;
    const animeHours = remainingHours / 0.5;
    const roundHours = remainingHours / 2;
    const seindfeldHours = remainingHours / 66;
    const monsterHours = remainingHours / 1.5;
    const jurasicParkHours = remainingHours / 1.3;
    const harryHours = remainingHours / 19.5;
    const shrekHours = remainingHours / 1.5;

    const [horasP, setProcrasti]= useState(730);
    console.log(formattedDate);
    const [name,setName]=useState("");
    const [nueva,setCreate]= useState(false);
    //----------------------------------------------------------------------------------------------------------------------

    function calculateProcrastination()
    {
        //setProcrasti( Date(fecha))
    }
    //---------------------------------------------------------------------

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
        
      ) {
        return { id, tipoEntrega, materia, nombre_actividad, fecha, tiempo};
      }
    
    const [rows, SetRows] = useState([
        createData(0,'Tarea','Español','Leer el principito','12/04/2024',2),
        createData(1,'Tarea','Español', 'Leer de perfil','27/05/2025',2),
        createData(2,'Examen','Matemáticas', 'resolver ejercicios','23/01/2026',2),
        createData(3,'Tarea','Historia','Leer el manifiesto','24/06/2023', 2),
        createData(4,'Examen','Geografía', 'Act 12', '16/09/2025',2),
      ]);
      
      const sparseKeys = Object.keys(rows);
      console.log(sparseKeys)

    function borrarActividad(id: number,
        tipoEntrega: string,
        materia: string,
        nombre_actividad: string,
        fecha: string,
        tiempo: number){

        const llave = createData(id,tipoEntrega,materia,nombre_actividad,fecha,tiempo)
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

    //-------------------------------------SET-----------------------------------------------
    const handleChange = (event: SelectChangeEvent) => {
        setTipo(event.target.value as string);
      };

      const handleChangeM = (event: SelectChangeEvent) => {
        setMateria(event.target.value as string);
      };
    

    //---------------------------------------------------------------------------------------------------------------------------

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
                <InputLabel>Horas para procrastinar este mes</InputLabel>

                
                <h1 style={textStyle}>{remainingHours}</h1>

                <br></br>
                <br></br>


                <Box  className="Boxy" sx={{  width: '50%', minWidth: 80, bgcolor: 'background.paper' }}>
                <nav aria-label="secondary mailbox folders">
                    <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://youtu.be/u39C2j2o40E?si=oz5_eD-b1P7MpHB_">
                        <ListItemText primary={"Puedes ver Todo Harry Potter una cantidad de" + " : "+ harryHours + "  veces"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href= "https://youtu.be/LYPJoA9udJo?si=JvQx4yKRPrqowRZc">
                        <ListItemText primary= {"Capitulos de anime" + " : "+ animeHours} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://youtu.be/40X5EX6Us7c?si=u2-PxrDYIPxGN3gO">
                        <ListItemText primary={"Puedes ver another round una cantidad de " + " : "+ roundHours + "  veces"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://www.youtube.com/watch?v=w1l94szMYF0&list=PL1RaM8eddoiq9rYTViOLQ94C6CwNdqJao&ab_channel=Vanishan">
                        <ListItemText primary={"Puedes ver another seinfeld una cantidad de" + " : "+ seindfeldHours + "  veces"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://youtu.be/CGbgaHoapFM?si=8jX-xIGhljLGQwkB">
                        <ListItemText primary={"Puedes ver Monsters Inc una cantidad de" + " : "+ monsterHours + "  veces"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://youtu.be/gjIaV6CU0wA?si=sl4OK6paxtpjb0Ze">
                        <ListItemText primary={"Puedes ver JurasicPark3 una cantidad de" + " : "+ jurasicParkHours + "  veces"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://youtu.be/TMIsxOsuwNA?si=8l1i2WyhGWxR2Pwi">
                        <ListItemText primary={"Puedes ver Shrek una cantidad de" + " : "+ shrekHours + "  veces"} />
                        </ListItemButton>
                    </ListItem>
                    
                    </List>
                </nav>
                </Box>

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
                            {entregas.map((entrega:any) => (
                                
                                <TableRow
                                key={entrega.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className='Fila'
                                >
                                <TableCell component="th" scope="row">
                                {entrega.tipo}
                                </TableCell>
                                    <TableCell align="center">{entrega.fecha}</TableCell>
                                    <TableCell align="center">{entrega.materia}</TableCell>
                                    <TableCell align="center">{entrega.horas}</TableCell>
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
                <Button variant="outlined" className='Atras' onClick={salirTareaFin}>Atrás</Button>
                    <div>
                    <InputLabel>Tipo</InputLabel>
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tipo}
                        label="Tipo"
                        onChange={handleChange}
                        >
                        <MenuItem value={"Examen"}>Examen</MenuItem>
                        <MenuItem value={"Tarea"}>Tarea</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    <InputLabel>Materia</InputLabel>
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-label">Materia</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={materia}
                        label="Materia"
                        onChange={handleChangeM}
                        >
                        <MenuItem value={"Matematicas"}>Matematicas</MenuItem>
                        <MenuItem value={"Biologia"}>Biología</MenuItem>
                        <MenuItem value={"Historia"}>Historia</MenuItem>
                        <MenuItem value={"Fisica"}>Física</MenuItem>
                        <MenuItem value={"Informatica"}>Informatica</MenuItem>
                        <MenuItem value={"Ciencias_Sociales"}>Ciencias Sociales</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
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
                    <TextField id="outlined-basic" label="YY-MM-DD" variant="outlined" value={fecha} onChange={(event)=>{
                        const {value}=event.target
                        setFecha(value)
                    }} />
                    <br></br>
                    <br></br>
                    <LoadingButton loading={saving} variant="outlined" onClick={save}>Save</LoadingButton>
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
                <Table sx={{ minWidth: 500 }} aria-label="simple table" >
                    <TableHead>
                    <TableRow className="TablaD">
                        <TableCell>Tipo de Actividad</TableCell>
                        <TableCell align="center">Materia</TableCell>
                        <TableCell align="center">Actividad</TableCell>
                        <TableCell align="center">Fecha de Entrega</TableCell>
                        <TableCell align="center">Tiempo de Realizacion</TableCell>
                        <TableCell align="center">ID</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {entregas.map((entrega:any) => (
                        <TableRow
                        key={entrega.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        className='Fila'
                        >
                        <TableCell component="th" scope="row">
                            {entrega.tipo}
                        </TableCell>
                        <TableCell align="center">{entrega.materia}</TableCell>
                        <TableCell align="center">{entrega.nombre_actividad}</TableCell>
                        <TableCell align="center">{entrega.fecha}</TableCell>
                        <TableCell align="center">{entrega.horas}</TableCell>
                        <Button variant="contained" className='Boton' onClick={()=>{setID(entrega.id)}}>X</Button>
                        <TableCell align="center">
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <br></br>
                <InputLabel>ID</InputLabel>
                    <TextField id="outlined-basic" label="numeber" variant="outlined" value={id} onChange={(event)=>{
                        const {value}=event.target
                        setID(value)
                    }} />
                <br></br>
                <br></br>
                <br></br>
                <Button variant="contained" className='Boton' onClick={()=>deleteV()}>X</Button>
            </div>
            </Slide>
            }


            
        </div>
    );


}

//-----------

export default Example;

