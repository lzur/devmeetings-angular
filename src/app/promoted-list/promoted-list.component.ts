import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promoted-list',
  templateUrl: './promoted-list.component.html',
  styleUrls: ['./promoted-list.component.css']
})
export class PromotedListComponent implements OnInit {
  @Input() public productsList;
  constructor() { }

  ngOnInit() {
  }

}
