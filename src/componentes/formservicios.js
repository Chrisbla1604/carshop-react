
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import PaginaContext from '../contexto/PaginaContext';
import '../css_estilos/formservicios.css';




function FormularioServicios ({manejarCambioForm}){

  const temporal = useContext(PaginaContext);

	const { register, handleSubmit }= useForm();

	
	const cambios = (servicioInfo) => {

		manejarCambioForm(servicioInfo);
		console.log(servicioInfo.target.name);
  }

	
	const submit = (formInfo) => {
		
		console.log(formInfo);
    if( formInfo.cambiofrenos ||formInfo.cambioaceite || formInfo.diagnosticogeneral|| 
        formInfo.alineacionbalanceo || formInfo.sistemaelectrico )
        {
          const changepagestate ={pagina04:true}
          temporal.funcion(changepagestate);
        };
  }



return(

<div className='contenedorPagina03'>
  
<div><img alt='logoCarshop' src={require('../imagenes/carshoplogo.png')} /></div>

<div className='titulo_form_servicio'> <h2> SERVICIOS A REALIZAR </h2> </div>

<form onChange={cambios} onSubmit={handleSubmit(submit)}>

  <div className='camposServicio'>
    <input className='inputServicios' type='checkbox' id='cambio-frenos' name='cambiofrenos'
           {...register('cambiofrenos')} /> 
    <label htmlFor='cambio-frenos'> Cambio de Frenos </label>
  </div>

  <div className='camposServicio'> 
    <input className='inputServicios' type='checkbox' id='cambio-aceite' name='cambioaceite'
		 {...register('cambioaceite')}/> 
    <label htmlFor='cambio-aceite'> Cambio de Aceite </label>
  </div>

  <div className='camposServicio'> 
    <input className='inputServicios' type='checkbox' id='diagnostico-general' name='diagnosticogeneral'
		{...register('diagnosticogeneral')}/>
    <label htmlFor='diagnostico-general'> Diagnóstico General </label>
  </div>
    
  <div className='camposServicio'> 
    <input className='inputServicios' type='checkbox' id='alineacion-balanceo' name='alineacionbalanceo'
		{...register('alineacionbalanceo')} />
    <label htmlFor='alineacion-balanceo'> Alineación y Balanceo </label>
  </div>

  <div className='camposServicio'> 
    <input className='inputServicios' type='checkbox' id='sistema-electrico' name='sistemaelectrico'
		{...register('sistemaelectrico')} />
    <label htmlFor='sistema-electrico'> Sistema Eléctrico </label>
  </div>


<div className='botonPag03'>
   <button type='submit' value='generar-orden' className='generarOrden'> Generar Orden </button>
</div>

</form>

</div>)
}
export default FormularioServicios;
    