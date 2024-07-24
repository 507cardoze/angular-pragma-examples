import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';

const devImports = [];

if (!environment.production) {
  const configs = {
    maxAge: 25,
    logOnly: environment.production,
    autoPause: true,
    name: 'My Music App Dev Tools',
    serialize: true,
  };
  devImports.push(StoreDevtoolsModule.instrument(configs));
}

@NgModule({
  imports: [
    ...devImports
  ],
  exports: [StoreDevtoolsModule],
})
export class AppStoreDevtoolsModule {}