import  express  from 'express';
import  path  from 'path';
import clienteRoutes from './routes/cliente/clienteRoute.js';
import ventaRoutes from './routes/venta/ventaRoute.js';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(express.static(path.join(__dirname, 'public')));

app.use('/cliente', clienteRoutes);
app.use('/venta', ventaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
