//Obtener la ruta dond esta el usuario
const getHash = () => 
    //format texting
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;