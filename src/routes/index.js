//Aqui vamo sa crear el manejo de routas y el render de l as mismas
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';


//Establecer rutas
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

//Manejador de rutas
