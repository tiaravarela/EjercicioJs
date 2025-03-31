function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

Persona.prototype.obtDetalles = function () {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`);
};

function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.registrar = function () {
    console.log(`${this.nombre} ha sido registrado en el curso ${this.curso}, grupo ${this.grupo}.`);
};

function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.asignar = function () {
    console.log(`${this.nombre} imparte la asignatura ${this.asignatura} en nivel ${this.nivel}.`);
};

function print() {
    const persona1 = new Persona("Carlos", 30, "Masculino");
    persona1.obtDetalles();

    const estudiante1 = new Estudiante("Ana", 20, "Femenino", "Matemática", "A");
    estudiante1.obtDetalles();
    estudiante1.registrar();

    const profesor1 = new Profesor("Luis", 45, "Masculino", "Física", "Secundaria");
    profesor1.obtDetalles();
    profesor1.asignar();
}


