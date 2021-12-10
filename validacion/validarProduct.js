export default function validarRegister(valores) {
    let errores = {};
    if (!valores.nombre) {
        errores.nombre = "El nombre es obligatorio";
    }
    if (!valores.empresa) {
        errores.empresa = "Empresa es obligatorio";
    }

    if (!valores.url) {
        errores.url = "Url del producto es obligatorio";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = "Url del producto no válido";
    }
    if (!valores.descripcion) {
        errores.descripcion = "La descripcion es obligatoria";
    }
    return errores;
}
