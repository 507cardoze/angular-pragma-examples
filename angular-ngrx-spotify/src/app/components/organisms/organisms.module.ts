import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AtomsModule } from "@components/atoms/atoms.module";
import { MoleculesModule } from "@components/molecules/molecules.module";

import { UsernameSearchComponent } from '@components/organisms/username-search/username-search.component';
import { NavbarComponent } from '@components/organisms/navbar/navbar.component';
import { NavLinkListComponent } from '@components/organisms/nav-link-list/nav-link-list.component';
import { HeaderComponent } from '@components/organisms/header/header.component';
import { LayoutComponent } from '@components/organisms/layout/layout.component';
import { LoginFormComponent } from '@components/organisms/login-form/login-form.component';
import { ProfileContainerComponent } from '@components/organisms/profile-container/profile-container.component';
import { TrackListComponent } from '@components/organisms/track-list/track-list.component';

@NgModule({
    declarations: [
        UsernameSearchComponent,
        NavbarComponent,
        NavLinkListComponent,
        HeaderComponent,
        LayoutComponent,
        LoginFormComponent,
        ProfileContainerComponent,
        TrackListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AtomsModule,
        MoleculesModule,
    ],
    exports: [
        UsernameSearchComponent,
        NavbarComponent,
        NavLinkListComponent,
        HeaderComponent,
        LayoutComponent,
        LoginFormComponent,
        ProfileContainerComponent,
        TrackListComponent,
    ]
})

export class OrganismsModule {}