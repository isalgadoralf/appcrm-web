(function ($) {
  // Cargar la URL del backend desde config.json
  let backendUrl;

  $.getJSON('../config.json', function(config) {
    backendUrl = config.backendUrl; // Asigna la URL desde el JSON
  });

  document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura de valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const numDocumento = document.getElementById('numDocumento').value;
    const tipoDocumento = document.getElementById('tipoDocumento').value;
    const codCliente = document.getElementById('codCliente').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const grupoCliente = document.getElementById('grupoCliente').value;

    const data = {
      nombre: nombre,
      apellidos: apellidos,
      numDocumento: numDocumento,
      tipoDocumento: tipoDocumento,
      codCliente: codCliente,
      email: email,
      telefono: telefono,
      direccion: direccion,
      grupoCliente: {
        gruuClienteId: parseInt(1)
      }
    };

    $('#submit').hide();
    $('#loginhere').show();

    // Espera a que la URL esté cargada antes de hacer la solicitud
    if (backendUrl) {
      axios.post(`${backendUrl}/cliente/save`, data)
        .then(function (response) {
          console.log('Respuesta del servidor:', response.data['mensaje']);
          $('#mesageResponse').text(response.data['mensaje']).show();
          $('#submit').show();
          $('#loginhere').hide();
          setTimeout(function () { $('#mesageResponse').hide(); }, 3000);
        })
        .catch(function (error) {
          console.error('Error al enviar el formulario:', error.response.data['mensaje']);
          $('#mesageResponse').text(error.response.data['mensaje']).show();
          $('#loginhere').hide();
          setTimeout(function () { $('#mesageResponse').hide(); }, 3000);
        });
    } else {
      console.error('URL del backend no cargada.');
    }
  });

})(jQuery);
