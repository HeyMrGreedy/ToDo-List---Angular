import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent} from "../tasks/tasks.component";

const routes: Routes = [                                            // TODO literally everything about Routing
  { path: 'tasks', component: TasksComponent },
  {path: '', redirectTo:'/tasks', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
