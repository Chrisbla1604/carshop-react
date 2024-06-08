

# Proyecto React Bootcamp Full Stack Developer Cohorte II 

# Autor: Christian Blanco Salazar


# Descripción del Proyecto

        Aplicación para recepción de autos en un taller automotriz. Luego de tomar todos los datos necesarios la aplicación generará una orden de trabajo.

		El proceso de recepción de un auto consiste de los siguientes pasos:

		Datos del cliente:
		En la primera ventana de la aplicación, deberá mostrarse un formulario para solicitar los datos del cliente.
		Deberá contener los siguientes campos obligatorios: nombre del cliente, email, número de contacto, identificación fiscal y tipo de identificación (cédula, RUC, pasaporte).

		Datos del vehículo:
		Una vez completados los datos del cliente, se mostrará un formulario adicional para solicitar los datos del vehículo.
		Proporcionar la información del vehículo, como la marca, modelo, placa, nivel del tanque de gasolina, y un campo de texto donde se podrán detallar abolladuras, rayones o cualquier dato relevante sobre el estado exterior del vehículo.

		Selección de servicios:
		Después de ingresar los datos del vehículo, se presentará una lista de servicios disponibles que se pueden realizar en el taller automotriz.
		Se deberá poder seleccionar los servicios que el cliente desea realizar en su vehículo. Menú de servicios: cambio de aceite, cambio de frenos, alineación y balanceo, diagnóstico general, revisión sistema eléctrica, revisión de la suspensión (son libres para agregar otros servicios que conozcan si quieren mostrar un menú más largo)
		El cliente podrá seleccionar varios servicios marcando las casillas correspondientes junto a cada servicio.

		Orden de trabajo:
		Esta sección final mostrará toda la información ingresada para mostrarle al cliente y solicitar su aprobación final.
		Se deberá mostrar una fecha y hora estimada de entrega.


# Detalles del codigo

    Para ir guardando de los datos a recibir en cada uno de los formularios se utilizo el HOOK REDUCER con el cual las funciones activan el trigger del reducer
    y segun type del trigger guarda la informacion.

    Se implemento un estado para controlar el formulario que se debe mostrar, dicha variable se la pasa a los componentes por medio de un Context 

    La implementacion de formulario y el manejo de la validacion de los campos se lo hizo con el HOOK FORM 

     las fuentes de consulta sobre Hook Form

            https://react-hook-form.com/get-started
            https://blog.logrocket.com/react-hook-form-complete-guide/

# Despliegue

	 Se genero la carpeta Build usando en comando en la carpeta raiz del proyecto
   
         npm run-script build

    Se desplego la aplicacion en un servicio S3 de AWS 

    punto de acceso: http://carshop-cblanco-react-bootcampespol.s3-website-us-east-1.amazonaws.com/



  







