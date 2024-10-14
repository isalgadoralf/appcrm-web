(function ($) {
  
  document.getElementById('signup-form').addEventListener ('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const numDocumento = document.getElementById('numDocumento').value;
        const tipoDocumento = document.getElementById('tipoDocumento').value;
        const codCliente = document.getElementById('codCliente').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value; 
        const grupoCliente = document.getElementById('grupoCliente').value; 
 
        const  data = {
            nombre: nombre,
            apellidos: apellidos,
            numDocumento: numDocumento,
            tipoDocumento: tipoDocumento,
            codCliente: codCliente,
            email: email,
            telefono:telefono,
            direccion:direccion,
            grupoCliente : {
              gruuClienteId : parseInt(1)
            }
          };

          $('#submit').hide();
          $('#loginhere').show();
            axios.post('http://localhost:9090/cliente/save', data).then(res=>res  ).then(
            function (response) {
              console.log('Respuesta del servidor:', response.data['mensaje']);
              $('#mesageResponse').text(response.data['mensaje']);
              $('#mesageResponse').show();  
             // $('#signup-form').trigger('reset');
              $('#submit').show();
              $('#loginhere').hide();
              setTimeout(function(){ ($('#mesageResponse')).hide();  }, 3000  );
            }).catch(
            function (error) {
              console.error('Error al enviar el formulario:', error.response.data['mensaje']);

              $('#mesageResponse').text(error.response.data['mensaje']);
              $('#mesageResponse').show();  

              $('#loginhere').hide();
              setTimeout(function(){ ($('#mesageResponse')).hide();  }, 3000  );
            });
      });
  
})(jQuery);