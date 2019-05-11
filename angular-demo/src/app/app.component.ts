import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  bmiTemp: number = 0.0;

  empleados = [
    {
      nombre: "Juan Perez",
      peso: 58.4,
      altura: 165,
      esMujer: false
    },
    {
      nombre: "Esteban Arce",
      peso: 63.1,
      altura: 175,
      esMujer: true
    },
    {
      nombre: "Juana Azurduy",
      peso: 62.5,
      altura: 175,
      esMujer: true
    },
    {
      nombre: "Alcides Arguedas",
      peso: 98.2,
      altura: 215,
      esMujer: false
    },
    {
      nombre: "Domitila Carpio",
      peso: 49.0,
      altura: 163,
      esMujer: true
    }
  ];

  adicionarEmpleado($event) {
    console.log($event.screenX);

    console.log('se ha adicionado un nuevo empleado');
    const emp = {
      nombre: "Mick Jagger",
      altura: 178,
      peso: 40.4,
      esMujer: false
    };

    this.empleados.push(emp);
  }

  verificarTecla($event) {
    console.log($event);
  }

  recibirBMI($event) {
    console.log('evento BMI recibido : ' + JSON.stringify($event));
    this.bmiTemp = $event.bmi;
  }

}
