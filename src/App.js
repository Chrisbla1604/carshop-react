

import './App.css';
import {useReducer, useState} from 'react';
import FormularioCliente from './componentes/formusuario.js';
import FormularioVehiculo from './componentes/formvehiculo.js';
import FormularioServicios from './componentes/formservicios.js';
import ResumenOrden from './componentes/generarorden.js';
import PaginaContext from './contexto/PaginaContext.js';


function updateDatos (datosOrdenUsuario,cargarinfo){

  const { target } = cargarinfo.newdata;
  const { name, value } = target;

  if(cargarinfo.type ==='updateinfousuario')
    {
      return{...datosOrdenUsuario,[name]:value,} ;
    }
  if(cargarinfo.type ==='updateinfovehiculo')
    {
      return{...datosOrdenUsuario,[name]:value,} ;
    }

  if(cargarinfo.type ==='updateinfoservicio')
    {
      return{...datosOrdenUsuario,[name]:!datosOrdenUsuario[name],} ;
    }

  if(cargarinfo.type ==='limpiarform')
    { console.log('Limpiar los datos');
      const vacio ={};
      datosOrdenUsuario=vacio;
      return{...datosOrdenUsuario};
    }
  }

function App() {
	
  const [datosOrdenUsuario,cargarinfo] =useReducer(updateDatos,{});

  const [statepages, setStatepages]= useState({ pagina01:true,});

  const activarpage = (pagina) =>{
    setStatepages({...pagina});
  }


  const actualizarDatosUsuario =(evt) =>{

		  cargarinfo({
			type: 'updateinfousuario',
      newdata: evt
      });
  }
  const actualizarDatosVehiculo =(evt) =>{

    cargarinfo({
    type: 'updateinfovehiculo',
    newdata: evt
    });
  }
  const actualizarDatosServicio =(evt) =>{

    cargarinfo({
    type: 'updateinfoservicio',
    newdata: evt
    });
  }

  const limpiarformulario=(evt)=>{

   if(evt.target.value==='Aprobar')
    {
      subirTodatabase();
    };
   
    setStatepages(
      {
        pagina01:true
      }  
    )
    cargarinfo({
      type: 'limpiarform',
      newdata: evt
      });
  }

  const subirTodatabase=()=>{

    console.log('Enviando los datos a la Nube');
    console.log(datosOrdenUsuario);
  }
   

  
  return (
    <div className="App">
  
    <PaginaContext.Provider value={{estado: statepages,funcion: activarpage,}}> 
    
    {
      (statepages.pagina01 ?  <FormularioCliente manejarCambioForm={actualizarDatosUsuario} 
                    /> :
      (statepages.pagina02 ?  <FormularioVehiculo manejarCambioForm={actualizarDatosVehiculo} 
                    /> :
      (statepages.pagina03 ?  <FormularioServicios manejarCambioForm={actualizarDatosServicio} 
                    /> :
                    <ResumenOrden clicBoton={limpiarformulario}>{datosOrdenUsuario}</ResumenOrden>
      )))
    }
    </PaginaContext.Provider>
    </div>
  ); 
}

export default App;
