import { NgModule } from '@angular/core';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { LoginPageComponent } from '@pages/login-page/login-page.component';
import { ProfilePageComponent } from '@pages/profile-page/profile-page.component';
import { FavoritePageComponent } from '@pages/favorite-page/favorite-page.component';
import { ComponentsModule } from '@app/components/components.module';

@NgModule({
	declarations: [
		HomePageComponent,
		LoginPageComponent,
		ProfilePageComponent,
		FavoritePageComponent,
	],
    imports: [
        ComponentsModule
    ],
    exports: [
        HomePageComponent,
        LoginPageComponent,
        ProfilePageComponent,
        FavoritePageComponent,
    ],
})
export class PagesModule {}
