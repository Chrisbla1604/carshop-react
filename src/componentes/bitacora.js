
import React from 'react';
import '../css_estilos/bitacora.css';
import {useState} from 'react';

function Bitacora ({datostable, render}){

    
//const[rendertable,setRendertable] = useState(false);
   
  /* if(render && datostable.code && datostable.table ){

       datostable.table.map(function(datauser){

        console.log(datauser.nombre);
    });


   }*/
     //
      
 return(

    

    <table>

        <div className="contenedor_cabecera">

        <tr className='fila_header'>
            <th>Nombre</th>
            <th>Cedula</th>
            <th>Telefono</th>
            <th>Marca Vehiculo</th>
            <th>Placa</th>
        </tr>

        </div>

        <div className='contenedor_filas'>

        
        
            {(render && datostable.code ? datostable.table.map(function(datauser)
                     { 
                         return <>
                                <tr className='fila_registros' value={datauser.identificacion}>
                                    <td>{datauser.nombre}</td>
                                    <td>{datauser.identificacion}</td>
                                    <td>{datauser.telefono}</td>
                                    <td>{datauser.marca}</td>
                                    <td>{datauser.placa}</td>
                                </tr>
                                <button>Borrar</button>
                                </>
                     }) : <tr className='fila_registros'>
                            <td></td>
                          </tr>  
                            
            )} 


        </div>
     
    </table>

    
 )   

}

export default Bitacora;
