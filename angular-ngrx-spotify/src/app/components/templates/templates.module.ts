import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes } from "@angular/router";

import { AtomsModule } from "@components/atoms/atoms.module";
import { MoleculesModule } from "@components/molecules/molecules.module";
import { OrganismsModule } from "@components/organisms/organisms.module";

import { HomePageComponent } from '@components/templates/home-page/home-page.component';
import { LoginPageComponent } from '@components/templates/login-page/login-page.component';
import { ProfilePageComponent } from '@components/templates/profile-page/profile-page.component';
import { FavoritePageComponent } from '@components/templates/favorite-page/favorite-page.component';

import { AuthGuardGuard } from "@app/guards/auth.guard";


export const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: 'favorite',
      component: FavoritePageComponent,
      canActivate: [AuthGuardGuard],
    },
    {
      path: 'home',
      component: HomePageComponent,
      canActivate: [AuthGuardGuard],
    },
    {
      path: 'login',
      component: LoginPageComponent,
    },
    {
      path: 'profile',
      component: ProfilePageComponent,
      canActivate: [AuthGuardGuard],
    },
  ];

@NgModule({
    declarations: [
        HomePageComponent,
        LoginPageComponent,
        ProfilePageComponent,
        FavoritePageComponent,
    ],
    imports: [
        CommonModule,
        AtomsModule,
        MoleculesModule,
        OrganismsModule,
    ],
    exports: [
        HomePageComponent,
        LoginPageComponent,
        ProfilePageComponent,
        FavoritePageComponent,
    ]
})

export class TemplatesModule {}