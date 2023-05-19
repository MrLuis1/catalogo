import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule), canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: '**', redirectTo: 'public/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
