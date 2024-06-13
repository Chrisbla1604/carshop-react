

import './css_estilos/App.css';
import {useReducer, useState} from 'react';
import FormularioCliente from './componentes/formusuario.js';
import FormularioVehiculo from './componentes/formvehiculo.js';
import FormularioServicios from './componentes/formservicios.js';
import ResumenOrden from './componentes/generarorden.js';
import Bitacora from './componentes/bitacora.js';

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

  const [statetable, setStatetable]= useState({});

  const [rendertabla, setRendertabla]= useState(false);

  const activarpage = (pagina) =>{
    setStatepages({...pagina});
  }


  const actualizarDatosUsuario =(evt) =>{

		  cargarinfo({
			type: 'updateinfousuario',
      newdata: evt
      });
      //setRendertabla(false);
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
      actualizar_bitacora();
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

    fetch('http://localhost:4000/users',{
          method: "POST",
          body: JSON.stringify(datosOrdenUsuario),
          mode: "cors",
          headers: {  'Content-type':'application/json;charset=utf-8',
                      'Accept': 'application/json',
                      'Access-Control-Allow-Origin':'*'
          }
      }).then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:",response))
  }


  const actualizar_bitacora = () => {

    fetch('http://localhost:4000/users/data',{
      method: "GET",
      //body: JSON.stringify(datosOrdenUsuario),
      mode: "cors",
      headers: {  'Content-type':'application/json;charset=utf-8',
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin':'*'
      }
  }).then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => { 
       console.log("Obteniendo Datos:",response);
       //console.log(typeof response.data);
       setRendertabla(true);
       setStatetable(response.data);
    })
  }

  
   

  
  return (
    <div className="App">

        <div className="contenedor_formularios">

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

        <div className="contenedor_tabla">

              <h3>LISTADO DE USUARIOS REGISTRADOS</h3>
              <Bitacora datostable={statetable} render={rendertabla}></Bitacora>


        </div> 

    </div>
  ); 
}

export default App;
