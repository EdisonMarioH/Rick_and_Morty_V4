export default (data) => {
let errors={};

if(!data.email.includes('@')){
    errors.e1='Email is not valid';
} 
if(!data.email){
    errors.e2="Ingrese Email"
}

if(data.email.length > 35){
    errors.e3="Email tiene que ser menor a 35 caracteres"
}

if(!/\d/.test(data.password)){
    errors.p1="La contraseña debe tener por lo menos un numero" 
}

if(data.password.length < 6 || data.password.length>10){
    errors.p2="Longitud incorrecta"
}

return errors

};