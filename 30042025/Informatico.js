class Informatico extends Empleado{

    #tipoEmpleado;

    constructor(nombre,apellidos,pagoHora,cantHoras,tipoEmpleado){
        super(nombre,apellidos,pagoHora,cantHoras);
        this.tipoEmpleado = tipoEmpleado;
    }

    calcularSueldo(){
        return super.calcularSueldo()+this.incremento();
    }
    incremento(){
        if(this.tipoEmpleado=="developer"){
            return 800;

        }else if(this.tipoEmpleado=="manager"){
            return 1500;
        }else{
            return 0;
        }
    }
}