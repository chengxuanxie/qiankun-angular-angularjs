import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private renderEventSubject = new Subject;

  constructor() { }

  public sendRenderEvent(content: string) {
    this.renderEventSubject.next(content);
  }

  public getEvent(): Observable<any> {
    return this.renderEventSubject.asObservable();
  }
}
