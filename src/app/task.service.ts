import { Injectable } from '@angular/core';
import { Task} from "./task";
import { Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasks : Task[] = [];
  public tasksDone : Task[] = [];
  public showTaskDetails = false;

  /*getTasks(): Observable<Task[]>
  {
    return of(this.tasks);
  }*/
  addTask({title, prio, details}: Task)             // adds a new Task to the tasks Array
  {
    if (!prio)
    {
      prio = 1;
    }
    if (!title)
    {
      title = "ToDo";
    }
    const newTask = {title, prio, details, status : false, id: this.tasks.length + 1};
    this.tasks.push(newTask);
  }
  done(key: Task)                                        // removes a task from the tasks but adds it to the tasksDone Array
  {
    let index = this.tasks.indexOf(key);
    this.tasksDone.push(this.tasks[index]);
    this.tasks.splice(index, 1);
  }
  delete(key: Task)                                        // removes a task from the tasksDone array
  {
    let index = this.tasksDone.indexOf(key);
    this.tasksDone.splice(index, 1);
  }
  updateTaskDetails(oldTask: Task, text: string)                   // when edited in task-details the details of the selected task get updated
  {
    let index = this.tasks.indexOf(oldTask);
    this.tasks[index].details = text;
  }



  constructor() { }
}
