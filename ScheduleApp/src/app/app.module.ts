import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleService } from './schedule.service';
import { PostFormComponent } from './form/post-form/post-form.component';
import { UpdateFormComponent } from './form/add-student-form/update-form/update-form.component';
import { AddStudentFormComponent } from './form/add-student-form/add-student-form.component';
import { ScheduleComponent } from './schedules/schedule/schedule.component';
import { SearchComponent } from './search/search/search.component';

import { StuProfileComponent } from './stu-profile/stu-profile.component';

import { TmProfileComponent } from './tm-profile/tm-profile.component';

import { HomeComponent } from './home/home.component';
import { SessionSchComponent } from './session-sch/session-sch.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleComponent } from './module/module.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    UpdateFormComponent,
    AddStudentFormComponent,
    ScheduleComponent,
    SearchComponent,
    StuProfileComponent,
    TmProfileComponent,
    HomeComponent,
    SessionSchComponent,
    SessionDetailsComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    FooterComponent,
    ModuleComponent,
    ScheduleDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
