// Array global de pacientes
pacientes = [];

// Función constructora para el objeto Paciente
function Paciente(nombre, rut, edad, diagnostico) {
  this.nombre = nombre;
  this.rut = rut;
  this.edad = edad;
  this.diagnostico = diagnostico;
}

// Función constructora para el objeto Consultorio
function Consultorio(nombre, pacientes = []) {
  this.nombre = nombre;
  this.pacientes = pacientes;
}

// Métodos getters y setters para acceder y modificar los datos de los pacientes
Paciente.prototype.getNombre = function () {
  return this.nombre;
};

Paciente.prototype.setNombre = function (nombre) {
  this.nombre = nombre;
};
Paciente.prototype.getEdad = function () {
  return this.edad;
};

Paciente.prototype.setEdad = function (edad) {
  this.edad = edad;
};
Paciente.prototype.getrut = function () {
  return this.rut;
};

Paciente.prototype.setrut = function (rut) {
  this.rut = rut;
};

Paciente.prototype.getdiagnostico = function () {
  return this.diagnostico;
};

Paciente.prototype.setdiagnostico = function (diagnostico) {
  this.diagnostico = diagnostico;
};

// Método para buscar paciente por nombre
Paciente.prototype.buscarPorNombre = function(nombre) {
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].getNombre() === nombre) {
        return pacientes[i];
      }
    }
    return console.log(`Paciente ${nombre} no encontrado`);
  };

// Método que permite mostrar todos los datos de los pacientes registrados
Paciente.prototype.mostrarTodos = function () {
  console.log(
    "Nombre: " +
      this.nombre +
      " rut: " +
      this.rut +
      " Edad: " +
      this.edad +
      " diagnostico: " +
      this.diagnostico
  );
};

// Instanciar objetos paciente
let paciente1 = new Paciente("Juan", "15.223.233-3", 32, "Principio de autopsia");
let paciente2 = new Paciente("Ana", "21.2324.234-5", 28, "Critico");
let paciente3 = new Paciente("Pedro", "20.678.678-7", 45, "Vivito y coleando");
// Pusheo pacientes al array pacientes
pacientes.push(paciente1);
pacientes.push(paciente2);
pacientes.push(paciente3);

// Mostrar todos los pacientes desde la funcion Mostrar todos
console.log("Todos los pacientes:");
paciente1.mostrarTodos();
paciente2.mostrarTodos();
paciente3.mostrarTodos();

// Mostrar los datos de Ana en la consola
let pacienteBuscado = Paciente.prototype.buscarPorNombre("Pedro");
console.log(pacienteBuscado);
