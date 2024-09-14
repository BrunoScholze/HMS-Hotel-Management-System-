import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AppConfigService } from '@service/appconfigservice';

@Component({
    templateUrl: './map.component.html',
    styleUrls: ['map.component.scss']
})
export class MapComponent {
    subscription: Subscription;
    constructor(private configService: AppConfigService, private titleService: Title, private metaService: Meta) {
        this.titleService.setTitle('Mapa - RoomWise');
        this.metaService.updateTag({ name: 'description', content: 'PrimeNG Angular UI Kit' });
    }

    get isDarkMode(): boolean {
        return this.configService.config().darkMode;
    }
}
