import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-sumary',
  templateUrl: './card-sumary.component.html',
  styleUrls: ['./card-sumary.component.css'],
})
export class CardSumaryComponent implements OnInit {
  @Input() subTo: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
