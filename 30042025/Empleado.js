class Empleado{

    //atributos
    #nombre; //atributos en modo private
    #apellidos;
    #pagoHora;
    #cantHoras;

    //constructor
    constructor(nombre,apellidos,pagoHora,cantHoras){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.pagoHora=pagoHora;
        this.cantHoras=cantHoras;
    }

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }

    calcularSueldo(){
        return this.pagoHora*this.cantHoras;
    }


}