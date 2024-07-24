import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LayoutComponent } from '@components/templates/layout/layout.component';
import { TrackListComponent } from '@components/templates/track-list/track-list.component';
import { HeaderComponent } from '@components/templates/header/header.component';
import { LoginFormComponent } from '@components/templates/login-form/login-form.component';
import { ProfileContainerComponent } from '@components/templates/profile-container/profile-container.component';
import { AtomsModule } from "@components/atoms/atoms.module";
import { MoleculesModule } from "@components/molecules/molecules.module";
import { OrganismsModule } from "@components/organisms/organisms.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        LayoutComponent,
        TrackListComponent,
        HeaderComponent,
        LoginFormComponent,
        ProfileContainerComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        AtomsModule,
        MoleculesModule,
        OrganismsModule,
    ],
    exports: [
        LayoutComponent,
        TrackListComponent,
        HeaderComponent,
        LoginFormComponent,
        ProfileContainerComponent,
    ]
})

export class TemplatesModule {}