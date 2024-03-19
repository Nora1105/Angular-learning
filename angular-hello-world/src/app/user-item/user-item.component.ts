import { Component, Input} from '@angular/core';
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent{
  @Input() name: any;
}