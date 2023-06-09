const validation = (userData) => {
    const errors = {}
    //email
    if (!/^[\w.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/.test(userData.email)){
        errors.email = 'El email ingresado no es válido'
    }
    if (!userData.email){
        errors.email = 'Debe ingresar un email'
    }
    if (userData.email.length > 35) {
        errors.email = 'El email no debe superar los 35 caracteres'
    }
    //password
    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = 'La contraseña debe contener al menos un número'
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña debe tener un tamaño entre 6 y 10 caracteres'
    }

    
    return errors
}
export default validation