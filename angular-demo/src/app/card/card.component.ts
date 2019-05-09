import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input("empleado") nombre: string = "";
  @Input() peso: number = 0.0;
  @Input() altura: number = 0.0;
  @Input() esMujer: boolean = false;

  bmi = 0.0;

  constructor() { }

  ngOnInit() {
      this.bmi = this.peso / (this.altura * this.altura) * 703;
      console.log("BMI Calculado :: " + this.bmi);
  }

}
