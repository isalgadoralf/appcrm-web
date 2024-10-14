(function ($) { 
      document.getElementById('signup-form-venta').addEventListener ('submit', function (event) {
        event.preventDefault();
        const cliente = document.getElementById('cliente').value;
        const almacen = document.getElementById('almacen').value;
        const formaPago = document.getElementById('formaPago').value;
        const formaEntrega = document.getElementById('formaEntrega').value;
        const descuentoGlobal = document.getElementById('descuentoGlobal').value;
        const total = document.getElementById('total').value;
        const observaciones = document.getElementById('observaciones').value; 
        const producto = document.getElementById('producto').value; 

      
 
        // const  data = {
        //   cliente: cliente,
        //   almacen: almacen,
        //   formaPago: formaPago,
        //   formaEntrega: formaEntrega,
        //   descuentoGlobal: descuentoGlobal,
        //   total: total,
        //   observaciones:observaciones 
        //   };

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
          axios.post('http://localhost:9090/venta/save', data).then(res=>res  ).then(
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