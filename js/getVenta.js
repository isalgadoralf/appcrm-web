$(document).ready(function() {
    let backendUrl;

    // Cargar la URL del backend desde config.json
    $.getJSON('../config.json', function(config) {
        backendUrl = config.backendUrl; // Asigna la URL desde el JSON
        
        if (backendUrl) {
            // Realizar una solicitud GET para obtener las ventas solo después de cargar la URL del backend
            $.ajax({
                url: `${backendUrl}/venta`, // Utiliza la URL del backend cargada
                type: "GET",
                success: function(ventas) {
                    // Iterar sobre cada venta y agregar una fila a la tabla
                    ventas.forEach(function(venta) {
                        const cliente = venta.cliente;

                        const row = `
                            <tr>
                                <td>${venta.ventaId}</td>
                                <td>${new Date(venta.fechaVenta).toLocaleDateString()}</td>
                                <td>${venta.total}</td>
                                <td>${venta.descuentoGlobal}</td>
                                <td>${cliente.nombre} ${cliente.apellidos}</td>
                                <td>${cliente.tipoDocumento}: ${cliente.numDocumento}</td>
                                <td>${cliente.email}</td>
                                <td>${cliente.telefono}</td>
                            </tr>
                        `;
                        $("#ventasTable tbody").append(row);
                    });
                },
                error: function(error) {
                    console.error("Error al obtener las ventas:", error);
                }
            });
        } else {
            console.error('URL del backend no cargada.');
        }
    }).fail(function() {
        console.error("Error al cargar el archivo config.json");
    });
});
