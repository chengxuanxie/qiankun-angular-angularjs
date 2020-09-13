import { Component } from '@angular/core';
import { EventBusService } from './services/event-bus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'main-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qiankun-angular-angularjs';
}
