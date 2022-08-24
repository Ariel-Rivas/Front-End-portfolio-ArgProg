import { Component } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
  
})
export class AppComponent {
  title = 'my-portfolio'; 

  constructor (private titleService : Title, private meta: Meta   ){
titleService.setTitle(" Ariel - Bootstrap Resume Template   ");
meta.addTag({name:'viewport',contents:'width=device-width, initial-scale=1.0'}); 
meta.addTag({name:'keywords',contents:'Learning  Angular Bootstrap setup '},true ); 
meta.addTag({name:'description',contents:' '},true );
  }
}
