
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import PaginaContext from '../contexto/PaginaContext';
import '../css_estilos/formusuario.css';

const mensajes = {
	requerido: '*Este campo es obligatorio',
	nombre: 'El formato introducido no es el correcto',
	tamaño:'Ingresar min: 3 / max: 25 caracteres',
	correo: 'Debes introducir una dirección correcta',
	telefono: "Debes introducir un número correcto"
   };

const patrones = {
	nombre: /^[A-Za-z{\s}]+$/i,
	correo: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
	telefono: /^[0-9]+$/i,
	identificacion:/^[A-Za-z0-9]+$/i
   };




function FormularioCliente ({manejarCambioForm}){

	 
	const temporal = useContext(PaginaContext);
	const { register, handleSubmit, formState: {errors} } = useForm({ mode: "onChange" });

	
	const cambios = (usuarioInfo) => {

		manejarCambioForm(usuarioInfo);
		
		console.log(usuarioInfo.target.name);
    }

	
	const submit = (formInfo) => {
		
		console.log('Formulario de Usuario completo');
		console.log(formInfo);
		const changepagestate ={pagina02:true}
		temporal.funcion(changepagestate);
	 }



return(

<div className='contenedorPagina01'>

<div><img alt='logoCarshop' src={require('../imagenes/carshoplogo.png')} /></div>

<h2 className='titulo-form-usuario'>DATOS DEL CLIENTE</h2>

<form onChange={cambios} onSubmit={handleSubmit(submit)} className='formularioUsuario'>

    <div className='camposUsuario'>

    <label htmlFor='nombre-cliente'> Nombre </label> <br/>
    <input className='inputUsuario' type='text' id='nombre-cliente' name='nombre' 
		{...register('nombre',
		{ required: mensajes.requerido,
		  pattern:{ value:patrones.nombre, message:mensajes.nombre},
		  minLength:{value:3, message:mensajes.tamaño},
		  maxLength:{value:25, message:mensajes.tamaño}
		})} /> <div className='mensaje_error'> {errors.nombre && errors.nombre.message} </div>

    </div>
		
    <div className='camposUsuario'>		

    <label htmlFor='correo-cliente'> e-mail </label><br/>
    <input className='inputUsuario' type='email' id='correo-cliente' name='correo'
		 {...register('correo', 
		 { required: mensajes.requerido,
		   pattern:{ value:patrones.correo, message:mensajes.correo},
         })}/> <div className='mensaje_error'>{errors.correo && errors.correo.message} </div>

	</div> 


	<div className='camposUsuario'>

    <label htmlFor='telefono-cliente'> Teléfono Móvil </label> <br/>
    <input className='inputUsuario' type='text' id='telefono-cliente' name='telefono'
		{...register('telefono' , 
		{ required: mensajes.requerido,
	      minLength:{value:10, message:mensajes.telefono},
		  maxLength:{value:10, message:mensajes.telefono},
		  pattern:{ value:patrones.telefono, message:mensajes.telefono},
		})}/> <div className='mensaje_error'> {errors.telefono && errors.telefono.message} </div>

	</div>


	<div className='camposUsuario'>

    <label htmlFor='id-cliente'> Identificación ( Cédula / RUC / Pasaporte ) </label> <br/>
    <input className='inputUsuario' type='text' id='id-cliente' name='identificacion'
		{...register('identificacion', 
		{ required: mensajes.requerido, 
		  minLength:{value:8},
		  maxLength:{value:10},
		  pattern:{ value:patrones.identificacion, message:mensajes.identificacion},
		})} /> <div className='mensaje_error'> {errors.identificacion && errors.identificacion.message} </div>

	</div>

	<div className='botonPag01'>
   		<button type='submit' value='Continuar' className='ContinuarPag01'> Continuar </button>
	</div>

	

</form>

</div>)
}
export default FormularioCliente;
    


