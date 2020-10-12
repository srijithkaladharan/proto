import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ViewCourseComponent } from '../pages/view-course/view-course.component';
import { CourseListComponent } from '../pages/course-list/course-list.component';
import { CreateCourseComponent } from '../pages/create-course/create-course.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ViewCourseComponent,
    CourseListComponent,
    CreateCourseComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ]
})
export class PageModule { }
