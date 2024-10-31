(function ($) {
  // Cargar la URL del backend desde config.json
  let backendUrl;

  $.getJSON('../config.json', function(config) {
    backendUrl = config.backendUrl; // Asigna la URL desde el JSON
  });

  document.getElementById('signup-form-venta').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura de valores del formulario
    const cliente = document.getElementById('cliente').value;
    const almacen = document.getElementById('almacen').value;
    const formaPago = document.getElementById('formaPago').value;
    const formaEntrega = document.getElementById('formaEntrega').value;
    const descuentoGlobal = document.getElementById('descuentoGlobal').value;
    const total = document.getElementById('total').value;
    const observaciones = document.getElementById('observaciones').value; 
    const producto = document.getElementById('producto').value; 

    const data = {
      fechaVenta: new Date(),
      total: parseInt(total), 
      descuentoGlobal: parseInt(descuentoGlobal),
      observaciones: observaciones, 
      cliente: {
        clienteId: parseInt(cliente) 
      },
      almacen: {
        almacenId: parseInt(almacen) 
      },
      formaPago: {
        formaPagoId: parseInt(formaPago) 
      },
      formaEntrega: {
        formaEntregaId: parseInt(formaEntrega) 
      },
      producto: {
        productoId: parseInt(producto)
      }
    };

    $('#submit').hide();
    $('#loginhere').show();

    // Espera a que la URL esté cargada antes de hacer la solicitud
    if (backendUrl) {
      axios.post(`${backendUrl}/venta/save`, data)
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
