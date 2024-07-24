import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppStoreModule } from '@store/store.module';
import { ServicesModule } from '@services/services.module';
import { ComponentsModule } from '@components/components.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AppStoreModule,
		ComponentsModule,
		ServicesModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
