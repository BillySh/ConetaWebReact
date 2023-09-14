import { TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import { InputLabel } from '@mui/material';

function CreateUserForm(){
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


    //--------------------------------------
    return (
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
    );

}

export default CreateUserForm;