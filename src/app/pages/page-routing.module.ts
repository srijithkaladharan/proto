import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent,
        //canActivate: [AuthGaurd]   //AuthGaurd -> Service to check authentication
      },
      {
        path: 'course',
        component: ViewCourseComponent,
        //canActivate: [AuthGaurd]   //AuthGaurd -> Service to check authentication
      },
      {
        path: 'courses',
        component: CourseListComponent,
        //canActivate: [AuthGaurd]   //AuthGaurd -> Service to check authentication
      },
      {
        path: 'create-course',
        component: CreateCourseComponent,
        //canActivate: [AuthGaurd]   //AuthGaurd -> Service to check authentication
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
