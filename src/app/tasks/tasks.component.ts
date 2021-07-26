import { Component, OnInit } from '@angular/core';
import {Task} from "../task";
import { TaskService} from "../task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(public taskService : TaskService) {}
  ngOnInit(): void {}


  showDoneTasks = true;
  selectedTask !: Task;
  title !: string;
  prio !: number;
  details !: string;

  addTask(newTitle : string, newPrio : number, newDetails : string)
  {
    const newTask = {
      title: newTitle,
      prio: newPrio,
      details: newDetails
    } as Task;
    this.taskService.addTask(newTask);
  }
  done(key : Task)
  {
    this.taskService.done(key);
  }
  delete(key : Task)
  {
    this.taskService.delete(key);
  }
}
