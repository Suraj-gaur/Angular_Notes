import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { CitiesComponent } from './cities/cities.component';
import { DeptsComponent } from './depts/depts.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AdminModule } from './admin/admin.module';
import { GreetingComponent } from './greeting/greeting.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { FilterOpitonsComponent } from './filter-opitons/filter-opitons.component';
import { HooksdemoComponent } from './hooksdemo/hooksdemo.component';
import { DemoComponent } from './demo/demo.component';
import { GenderPipe } from './gender.pipe';
import { FilterPipe } from './filter.pipe';
import { HighLighterDirective } from './high-lighter.directive';
import { IsAdminDirective } from './is-admin.directive';
import { DataService } from './data.service';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    CitiesComponent,
    DeptsComponent,
    GreetingComponent,
    DeptDetailsComponent,
    EmpDetailsComponent,
    FilterOpitonsComponent,
    HooksdemoComponent,
    DemoComponent,
    GenderPipe,
    FilterPipe,
    HighLighterDirective,
    IsAdminDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [
    { provide :  HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }