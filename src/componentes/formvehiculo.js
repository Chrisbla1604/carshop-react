
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import PaginaContext from '../contexto/PaginaContext';
import '../css_estilos/formvehiculo.css';


const mensajes = {
	requerido: '*Este campo es obligatorio',
	formato: 'El formato introducido no es el correcto',
	tamaño:'Ingresar ( min:4 /max:12 ) caracteres',
  telefono: "Debes introducir un número correcto",
	observaciones:'solo se permite letras y numeros',
	parrafo:'solo se permite hasta 200 caracteres',
	gasolina:'ingrese bajo / medio / alto'
    
   };

const patrones = {
	solo_letras: /^[A-Za-z]+$/i,
	solo_numeros: /^[0-9]+$/i,
  placa:/^[A-Z]{3}[-][0-9]{4}$/,
	observaciones:/^[A-Za-z0-9{\s}]+$/,
 };



function FormularioVehiculo ({manejarCambioForm}){

	const temporal = useContext(PaginaContext);

	const { register, handleSubmit, formState: {errors} } = useForm({ mode: "onChange" });

	
	const cambios = (vehiculoInfo) => {

		manejarCambioForm(vehiculoInfo);
		
		console.log(vehiculoInfo.target.name);
  }

	
	const submit = (vehiculoInfo) => {
		
		console.log('Formulario de Vehiculo completo');
		console.log(vehiculoInfo);
		const changepagestate ={pagina03:true};
		temporal.funcion(changepagestate);
	}



return(

<div className='contenedorPagina02'>
	
<div><img alt='logoCarshop' src={require('../imagenes/carshoplogo.png')} /></div>

<h2 className='titulo-form-vehiculo'>DATOS VEHICULO</h2>

<form onChange={cambios} className='formulariovehiculo' onSubmit={handleSubmit(submit)}>

 <div className='camposVehiculo'>
    <label htmlFor='marca-vehiculo'> Marca </label> <br/>
    <input className='inputVehiculo' type='text' id='marca-vehiculo' name='marca' 
		{...register('marca',
		{ required: mensajes.requerido,
		  pattern:{ value:patrones.solo_letras, message:mensajes.formato},
		  minLength:{value:4, message:mensajes.tamaño},
			maxLength:{value:10, message:mensajes.tamaño},
		})} /> <div  className='mensaje_error'> {errors.marca && errors.marca.message} </div>
</div>
		
<div className='camposVehiculo'>
    <label htmlFor='modelo-vehiculo'> Modelo </label><br/>
    <input className='inputVehiculo' type='text' id='modelo-vehiculo' name='modelo'
		 {...register('modelo', 
		 { required: mensajes.requerido,
           minLength:{value:4, message:mensajes.tamaño},
					 maxLength:{value:10, message:mensajes.tamaño}
         })}/> <div  className='mensaje_error'>{errors.modelo && errors.modelo.message} </div>
</div>

<div className='camposVehiculo'>
    <label htmlFor='placa-vehiculo'> Placa </label> <br/>
    <input className='inputVehiculo' type='text' placeholder='ej: GSD-3478' id='placa-vehiculo' name='placa'
		{...register('placa' , 
		{ required: mensajes.requerido,
		  pattern:{ value:patrones.placa, message:mensajes.formato},
		})}/> <div  className='mensaje_error'> {errors.placa && errors.placa.message} </div>
</div>

<div className='camposVehiculo'>
    <label htmlFor='nivel-gasolina'> Nivel de Gasolina </label> <br/>
    <input className='inputVehiculo' type='text' id='nivel-gasolina' name='nivelgasolina' placeholder='bajo / medio / lleno'
		{...register('nivelgasolina', 
		{ required: mensajes.requerido, 
		  pattern:{ value:patrones.solo_letras, message:mensajes.gasolina},
		})} /> <div  className='mensaje_error'> {errors.nivelgasolina && errors.nivelgasolina.message} </div>
</div>

<div className='camposVehiculo'>
    <label htmlFor='observaciones'> Observaciones </label> <br/>
    <textarea className='inputObservaciones' id='observaciones' name='observaciones'
		{...register('observaciones', 
		{ pattern:{ value:patrones.observaciones, message:mensajes.observaciones},
		  maxLength:{value:200, message:mensajes.parrafo}
		})} /> <div>200 caracteres máximo</div>
		 <div  className='mensaje_error'> {errors.observaciones && errors.observaciones.message} </div>
</div>


<div className='botonPag02'>
   <button type='submit' value='Continuar' className='ContinuarPag02'> Continuar </button>
</div>

</form>

</div>)
}
export default FormularioVehiculo;
    


