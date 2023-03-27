import { BannerComponent } from './banner/banner.component';
import { NavComponent } from './nav/nav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { IndexComponent } from './post/index/index.component';
import { UploadFilesComponent } from './post/upload-files/upload-files.component';
import { ViewComponent } from './post/view/view.component';
import { ChildComponent } from './valuPass/child/child.component';
import { ParentComponent } from './valuPass/parent/parent.component';

const routes: Routes = [
  // { path: '', redirectTo: 'post/index', pathMatch: 'full'},
  { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
  { path: 'post/index', component: IndexComponent },
  { path: 'post/:postId/view', component: ViewComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/:postId/edit', component: EditComponent } ,
  { path: 'valuePass', component: ParentComponent } ,
  { path: 'files', component: UploadFilesComponent } ,


  { path: 'nav', component: NavComponent } ,
  // { path: '', component: HomeComponent } , 
  { path: 'home', component: HomeComponent } ,
  { path: 'login', component: LoginComponent } ,
  { path: 'sign-up', component: SignUpComponent } ,
  { path: 'ban', component: BannerComponent } ,



  { path: '**', component: IndexComponent } ,


  // { path: 'post/create', component: CreateComponent, 
  // children: [
  //   { path: '', redirectTo: '/child', pathMatch: 'full' },
  //   { path: 'child', component: ChildComponent },
  //   { path: 'parent', component: ParentComponent }
  // ]},

  // { path: 'child', component: ChildComponent },
  // { path: 'parent', component: ParentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
