import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  copyrightText = 'Footer Copyright Text'; //© The State of Queensland (Department of Education) 2022
  governmentText = 'Placeholder text'; //Queensland Government 
}
