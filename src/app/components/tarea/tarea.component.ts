import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TareaI } from '../../interfaces/tarea-i';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {

@Input() ArrayPadre: TareaI[] = []
@Output() emisorTarea: EventEmitter<string> = new EventEmitter;
@Output() emisorTarea2: EventEmitter<string> = new EventEmitter;

enviarAviso($event:any) :void {
  $event = 'Se han borrado las tareas'
this.emisorTarea.emit($event);
}

enviarEvento($event:any) : void {
  this.emisorTarea2.emit($event);
}

}
