import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  data={
    title : '<h1>Angular Project Course</h1><script>alert("Attack")</alert>'
  };

  onLogoClicked(){
    alert('Hello World');
  }

  onKeyUp(newTitle:string){
    this.data.title=newTitle;
  }
}
