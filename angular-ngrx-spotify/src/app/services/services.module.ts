import { NgModule } from "@angular/core";

import { AuthService } from '@services/auth/auth.service';
import { UserService } from '@services/user/user.service';
import { GlobalService } from '@services/global.service';
import { SearchTrackService } from '@services/searchTrack/search-track.service';
import { FavoriteService } from '@services/favorite/favorite.service';
import { provideHttpClient } from "@angular/common/http";

@NgModule({
    providers: [
        GlobalService,
        AuthService,
        UserService,
        SearchTrackService,
        FavoriteService,
        provideHttpClient()
    ],
})

export class ServicesModule {}