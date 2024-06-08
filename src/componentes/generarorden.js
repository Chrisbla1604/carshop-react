
import '../css_estilos/ordengenerada.css';


function ResumenOrden ({children, clicBoton}){
    
    const fecha = new Date().toLocaleDateString();
    const horaingreso= new Date().toLocaleTimeString() ;

    const horaactual= new Date().getTime();
    var add2hours = 180 * 60000;
    const horasalida= new Date(horaactual + add2hours).toLocaleTimeString();

    
    return(

        <div className='Pagina04'>

                <div className='logoPagina04'>
                <img alt='logoCarshop' src={require('../imagenes/carshoplogo.png')} /></div>

                <h5> &ensp;DATOS DEL CLIENTE</h5>
                
                <span> Nombre : {children.nombre}</span><br />
                <span> Correo : {children.correo}</span><br />
            
                
                <span> Teléfono : {children.telefono}</span><br />
                <span> Identificación : {children.identificacion}</span><br />
                

                <h5> &ensp;DATOS DEL VEHICULO</h5>

                <span> Marca : {children.marca}</span><br />
                <span> Modelo : {children.modelo}</span><br />
                <span> Placa : {children.placa}</span><br />
                <span> Nivel de Gasolina : {children.nivelgasolina}</span><br />

                <h5> &ensp;SERVICIOS </h5>

                <span> Cambio de Acite :    {(children.cambioaceite ? 'SI':'NO')} </span> <br />
                <span> Cambio de Frenos:    {(children.cambiofrenos ? 'SI':'NO')} </span> <br />
                <span> Chequeo Sistema Eléctrico:   {(children.sistemaelectrico?'SI':'NO')}</span> <br />
                <span> Alineación y Balanceo:   {(children.alineacionbalanceo ?'SI' :'NO')}</span><br />
                <span> Diagnóstico General:   {(children.diagnosticogeneral ?'SI' :'NO')}</span><br />

                <h5> &ensp;OBSERVACIONES </h5>
                <p>{children.observaciones}</p><br />
                
                <h5> &ensp;FECHA Y HORA DE INGESO / SALIDA</h5>
                <span> Fecha de Ingreso: {`${fecha}`} </span><br />
                <span> Hora de Ingreso: {`${horaingreso}`} </span><br />
                <span> Hora de Salida: {`${horasalida}`} </span><br />
                


            <div className='botonPag04'>
                <button className='cancelarOrden' value='Cancelar' name='cancelar' onClick={clicBoton}> Cancelar </button>
			    <button className='aprobarOrden' value='Aprobar' name='aprobar' onClick={clicBoton}> Aprobar </button>
            </div>

        </div>


    )
}

export default ResumenOrden;