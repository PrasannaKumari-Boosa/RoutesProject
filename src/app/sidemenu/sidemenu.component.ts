import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  constructor(route:ActivatedRoute){

  route.paramMap
    .subscribe(params => console.log('sidemenu id parameter',params ));
  }

}
