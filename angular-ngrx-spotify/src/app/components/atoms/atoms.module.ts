import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { PageTitleComponent } from '@components/atoms/page-title/page-title.component';
import { PageSubtitleComponent } from '@components/atoms/page-subtitle/page-subtitle.component';
import { IconComponent } from '@components/atoms/icon/icon.component';
import { LogoImageComponent } from '@components/atoms/logo-image/logo-image.component';

@NgModule({
    declarations: [
        PageTitleComponent,
        PageSubtitleComponent,
        IconComponent,
        LogoImageComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PageTitleComponent,
        PageSubtitleComponent,
        IconComponent,
        LogoImageComponent,
    ]
})

export class AtomsModule {}