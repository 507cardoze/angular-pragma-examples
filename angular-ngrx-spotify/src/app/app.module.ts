import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//modules
import { AppRoutingModule } from '@app/app-routing.module';
import { AppStoreModule } from '@store/store.module';
import { AppStoreDevtoolsModule } from '@store/dev-tools/devTools.module';
import { provideHttpClient } from '@angular/common/http';
import { ComponentsModule } from '@components/components.module';
//components
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { ServicesModule } from '@services/services.module';

@NgModule({
	declarations: [
		HomePageComponent,
		LoginPageComponent,
		ProfilePageComponent,
		FavoritePageComponent,
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		AppStoreModule,
		AppStoreDevtoolsModule,
		ComponentsModule,
		ServicesModule,
	],
	providers: [provideHttpClient()],
	bootstrap: [AppComponent],
})
export class AppModule {}
