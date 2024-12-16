import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaI } from './interfaces/tarea-i';
import { FormsModule } from '@angular/forms';
import { TareaComponent } from "./components/tarea/tarea.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'ListaTareas';
  cuadroNombre:string = '';
  cuadroEstado:string = '';
  color:string = 'gray';
  tarea: TareaI = 
  {
    
    nombre: '',
    estado: 'pendiente'
  }

  ArrayTareas :TareaI[] =[]
  mensaje: string = '';

  anadirTarea() {
   
    this.ArrayTareas.push(this.tarea);
    console.log(this.ArrayTareas);
   this.tarea = {
    nombre : '',
    estado : 'pendiente'
   }
    }
  
  borrarTareas($event:any) : void {
this.ArrayTareas = []
alert("Van a borrarse las tareas")
this.mensaje = "no hay tareas";
  }

eliminarTareaUnica($event : any) : void {

this.ArrayTareas.splice($event, 1)
}

pendiente() {
  this.color = 'pendiente';
  this.tarea.estado = 'pendiente'

  console.log(this.tarea.estado)
  }
fijo() {
  this.color = 'completado';
  this.tarea.estado = 'completada'
    }
} 
