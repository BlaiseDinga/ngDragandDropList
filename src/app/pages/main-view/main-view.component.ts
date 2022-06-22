import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
board: Board = new Board('Test Board', [
  new Column('Ideas', [
    "some Random Ideas",
    "This is another random idea",
    "build an awesome application"
  ]),
  new Column('Research', [
    "Lorem ipsum",
    "foo",
    "This was in the research column "
  ]),
  new Column('Todo', [
    "Get to work",
    "Clean the house",
    "Go buy some groceries",
    "have some rest"
  ]),
  new Column('Done',[
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ])
]);
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
