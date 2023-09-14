import React, { useState } from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

function Add(){
    const [contador,setContador]=useState(0);
    const [name,setName]=useState("");
    

    function sumaContador(){
        console.log("Llamando a la funcion sumar")
        setContador(contador+1);
        console.log("Terminando la funcion sumar")
    }
    function restarContador(){
        console.log("Llamando a la funcion sumar")
        setContador(contador-1);
        console.log("Terminando la funcion sumar")
    }

    function onChangeInput(event:any){
        const {value}=event.target
        setName(value)
    }


    return (
        <div>
            <br></br>
            <br></br>
            <Button variant="contained" onClick={sumaContador}>Sumar</Button>
            <Button variant="contained" onClick={restarContador}>Restar</Button>
        </div>

    );


}

//-----------

export default Add;