import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-hello-world',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  esEditable: boolean = true;
  nombre: string = "John Lennon";

  constructor() { }

  ngOnInit() {
  }

}
