import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .title-white{
      color: white;
    }
  `]
})
export class AppComponent {
  title = 'directives-app';
  show = true;
  counts = [];

  hasCountHitFive(){
    return this.counts.length >= 5;
  }

  onDisplayBtnClick(){
    this.show = !this.show;
    this.counts.push(new Date());
  }

  
  
}
