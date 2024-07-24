import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AtomsModule } from "@components/atoms/atoms.module";
import { RouterModule } from "@angular/router";

import { SearchBarComponent } from '@components/molecules/search-bar/search-bar.component';
import { AvatarImgComponent } from '@components/molecules/avatar-img/avatar-img.component';
import { ProfileInfoComponent } from '@components/molecules/profile-info/profile-info.component';
import { LoadMoreButtonComponent } from '@components/molecules/load-more-button/load-more-button.component';
import { LogoutButtonComponent } from '@components/molecules/logout-button/logout-button.component';
import { NavLinkComponent } from '@components/molecules/nav-link/nav-link.component';
import { NavbarButtonCloseComponent } from '@components/molecules/navbar-button-close/navbar-button-close.component';
import { NavbarButtonOpenComponent } from '@components/molecules/navbar-button-open/navbar-button-open.component';
import { HeaderLogoComponent } from '@components/molecules/header-logo/header-logo.component';
import { BottomButtonsComponent } from '@components/molecules/bottom-buttons/bottom-buttons.component';
import { TrackItemsComponent } from '@components/molecules/track-items/track-items.component';

@NgModule({
    declarations: [
        SearchBarComponent,
        AvatarImgComponent,
        ProfileInfoComponent,
        LoadMoreButtonComponent,
        LogoutButtonComponent,
        NavLinkComponent,
        NavbarButtonCloseComponent,
        NavbarButtonOpenComponent,
        HeaderLogoComponent,
        BottomButtonsComponent,
        TrackItemsComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        AtomsModule
    ],
    exports: [
        SearchBarComponent,
        AvatarImgComponent,
        ProfileInfoComponent,
        LoadMoreButtonComponent,
        LogoutButtonComponent,
        NavLinkComponent,
        NavbarButtonCloseComponent,
        NavbarButtonOpenComponent,
        HeaderLogoComponent,
        BottomButtonsComponent,
        TrackItemsComponent,
    ]
})

export class MoleculesModule {}