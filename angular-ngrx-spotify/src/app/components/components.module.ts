import { NgModule } from '@angular/core';
import { AtomsModule } from '@components/atoms/atoms.module';
import { MoleculesModule } from '@components/molecules/molecules.module';
import { OrganismsModule } from '@components/organisms/organisms.module';
import { TemplatesModule } from '@components/templates/templates.module';

@NgModule({
	imports: [
		AtomsModule,
		MoleculesModule,
		OrganismsModule,
		TemplatesModule,
	],
	exports: [
		AtomsModule,
		MoleculesModule,
		OrganismsModule,
		TemplatesModule,
	],
})
export class ComponentsModule {}
