import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {
  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() imagen: string = '';
}
