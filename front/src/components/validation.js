export default (data)=>{
    const errors = {};

    if(!data.email.includes('@')){
        errors.e1 = 'Eso es un Email??'
    }
    if(!data.email){
        errors.e2 = 'Está vacío. Por personas como tu hay instrucciones en el shampoo'
    }
    if(data.email.length > 35){
        errors.e3 = 'Era un Email no tu última voluntad. Hasta 35 caracteres, muchacho'
    }
    if(!/\d/.test(data.password)){
        errors.p1 ='Ponle al menos un número, no seas perezoso'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2='Entre 6 y 10 de largo, parece el nombre de tu película erótica'
    }
    if(!data.password){
        errors.p3 = 'Estás hablando enserio? vamos amigo, no es tan difícil. Ingresa algún valor'
    }
    return errors
};