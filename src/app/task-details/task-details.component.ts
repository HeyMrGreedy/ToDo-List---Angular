import {Component, OnInit, Input, } from '@angular/core';
import { Task } from '../task';
import { TaskService} from "../task.service";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  constructor(public taskServiceDetails : TaskService) {}
  ngOnInit(): void {}


  @Input() selectedTask!: Task;
  text!: string;
  editMode = false;
}
