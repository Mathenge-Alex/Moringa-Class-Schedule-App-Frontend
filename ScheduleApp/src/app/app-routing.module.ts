import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdateFormComponent } from './form/add-student-form/update-form/update-form.component';
import { PostFormComponent } from './form/post-form/post-form.component';
import { AddStudentFormComponent } from './form/add-student-form/add-student-form.component';
import { ScheduleComponent } from './schedules/schedule/schedule.component';
import { SearchComponent } from './search/search/search.component';
import { StuProfileComponent } from './stu-profile/stu-profile.component';
import { TmProfileComponent } from './tm-profile/tm-profile.component';
import { HomeComponent } from './home/home.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { SessionSchComponent } from './session-sch/session-sch.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ModuleComponent } from './module/module.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component'

const routes: Routes = [
  { path: "tm", component: TmProfileComponent},
  { path: "home", component: HomeComponent},
  { path: "student", component: StuProfileComponent},
  { path: "session-search", component: SessionSchComponent},
  { path: "session", component: SessionDetailsComponent},
  { path: 'update', component: UpdateFormComponent },
  { path: 'post', component: PostFormComponent },
  { path: 'add', component: AddStudentFormComponent },
  { path: '', component:LoginComponent},
  { path: 'signup', component:SignupComponent},
  { path: 'schedule', component: ScheduleComponent },
  { path: 'search', component: SearchComponent },
  { path: 'module', component: ModuleComponent },
  { path: "details", component:ScheduleDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
