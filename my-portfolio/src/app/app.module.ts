
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from "@angular/forms"; 
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { FooterComponent } from './footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { interceptorProvider } from './servicios/interceptor-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewWorksComponent } from './works/new-works.component';
import { EditWorksComponent } from './works/edit-works.component';
import { NewEducacionComponent } from './educacion/new-educacion.component';
import { NewExperienciaComponent } from './experiencia-laboral/new-experiencia.component';
import { NewCursoComponent } from './curso/new-curso.component';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { EditExperienciaComponent } from './experiencia-laboral/edit-experiencia.component';
import { EditCursoComponent } from './curso/edit-curso.component';
import { EditAboutComponent } from './about/edit-about.component';
import { EditHeaderComponent } from './header/edit-header.component';
import { EditFooterComponent } from './footer/edit-footer.component';
import { CursoComponent } from './curso/curso.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';



@NgModule({
  declarations: [ AppComponent,
   HomeComponent, HeaderComponent, AboutComponent, EducacionComponent,ExperienciaLaboralComponent,CursoComponent, SkillsComponent, WorksComponent, FooterComponent, LoginComponent, NewWorksComponent, EditWorksComponent, NewEducacionComponent, NewExperienciaComponent, NewCursoComponent, EditEducacionComponent, EditExperienciaComponent, EditCursoComponent, EditAboutComponent, EditHeaderComponent, EditFooterComponent,   
   
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   FormsModule,HttpClientModule,AppRoutingModule,BrowserModule, BrowserAnimationsModule, NgCircleProgressModule.forRoot ({}) ],
   providers: 
    [ interceptorProvider],
 
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
