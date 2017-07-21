import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  times: string[] = ["Flamengo", "Vasco", "Botafogo", "Fluminense"];
  mostrarTimes: boolean = false;

  constructor() {
    for (let i=0; i<this.times.length; i++) {
       let time = this.times[i];
     }
   }

   ngOnInit() { }

   onMostrarTimes() {
     this.mostrarTimes = !this.mostrarTimes;
   }
 }
