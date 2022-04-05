import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  public query: string = '';

  search(): void {
    this.onEnter.emit(this.query);
  }
}
