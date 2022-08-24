import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditCursoComponent } from './curso/edit-curso.component';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { EditExperienciaComponent } from './experiencia-laboral/edit-experiencia.component';
import { NewCursoComponent } from './curso/new-curso.component';
import { NewEducacionComponent } from './educacion/new-educacion.component';
import { NewExperienciaComponent } from './experiencia-laboral/new-experiencia.component';
import { EditWorksComponent } from './works/edit-works.component';
import { NewWorksComponent } from './works/new-works.component';
import { EditAboutComponent } from './about/edit-about.component';
import { EditFooterComponent } from './footer/edit-footer.component';
import { EditHeaderComponent } from './header/edit-header.component';






const routes: Routes = [  
  {path: 'home', component: HomeComponent },
  {path:'login', component:LoginComponent },
  {path:'nuevoTrab',component: NewWorksComponent},
  {path:'editEduc/:id',component: EditEducacionComponent},
  {path:'editExpe/:id',component: EditExperienciaComponent},
  {path:'editCurs/:id',component:EditCursoComponent},
  {path:'editPorf/:id', component:EditWorksComponent}, 
  {path:'nuevaEduc',component:NewEducacionComponent},
  {path:'nuevaExpe',component:NewExperienciaComponent},
  {path:'nuevoCurs',component:NewCursoComponent},
  {path:'',redirectTo:'home',pathMatch: "full"},
  {path:'editAbout/:id',component:EditAboutComponent},
  {path:'editFooter/:id',component:EditFooterComponent},
  {path:'editHeader/:id',component:EditHeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  
export const routing = RouterModule.forRoot(routes);
