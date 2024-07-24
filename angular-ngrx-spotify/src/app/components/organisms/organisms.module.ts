import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TrackItemsComponent } from '@components/organisms/track-items/track-items.component';
import { UsernameSearchComponent } from '@components/organisms/username-search/username-search.component';
import { NavbarComponent } from '@components/organisms/navbar/navbar.component';
import { AtomsModule } from "@components/atoms/atoms.module";
import { MoleculesModule } from "@components/molecules/molecules.module";
import { NavLinkListComponent } from '@components/organisms/nav-link-list/nav-link-list.component';

@NgModule({
    declarations: [
        TrackItemsComponent,
        UsernameSearchComponent,
        NavbarComponent,
        NavLinkListComponent,
    ],
    imports: [
        CommonModule,
        AtomsModule,
        MoleculesModule,
    ],
    exports: [
        TrackItemsComponent,
        UsernameSearchComponent,
        NavbarComponent,
        NavLinkListComponent,
    ]
})

export class OrganismsModule {}