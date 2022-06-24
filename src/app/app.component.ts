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
  show = '';
  count = 0;
  counts = [];

  onDisplayBtnClick(){
    (this.count % 2 == 0) ? this.show = 'visible' : this.show = 'hidden';
    this.count++;
    this.counts.push(this.count);
  }

  hasCountHitFive(){
    return this.counts.length >= 5;
  }

  
  
}
