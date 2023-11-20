import React,{useState} from 'react';
import './Formulario'
const Formulario = () => {

const [materia,setMateria]= useState('')
const [calificacion,setCalificacion]= useState('')
const [aula,setAula]= useState('')



    const enviarFormulario=async (e)=>{
        e.preventDefault()
        console.log(typeof(calificacion))

        const datos ={materia,calificacion,aula}
        console.log(datos)

        const respuesta=await fetch('/miapi/pepe/',{
            method:'POST',
            body:JSON.stringify(datos),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const recibo=await respuesta.json()

        if(respuesta.ok){
            console.log('se agrego la persona',recibo)
        }



    }

    return(
       <form onSubmit={enviarFormulario}>

        <h4>Crear datos</h4>
        <label htmlFor="">Ingrese materia</label>
        <input type="text" value={materia} onChange={(e)=> setMateria(e.target.value)}/>
        <label htmlFor="">Ingrese calificacion</label>
        <input type="number"  value={calificacion} onChange={(e)=> setCalificacion(e.target.value)}/>
        <label htmlFor="">Ingrese aula</label>
        <input type="text" value={aula} onChange={(e)=> setAula(e.target.value)} />
        <button>Enviar Datos</button>
       </form>
    )
}

export { Formulario }