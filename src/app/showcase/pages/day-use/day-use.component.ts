import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AppConfigService } from '@service/appconfigservice';

@Component({
    templateUrl: './day-use.component.html',
    styleUrls: ['day-use.component.scss']
})
export class DayUseComponent {
    subscription: Subscription;
    constructor(private configService: AppConfigService, private titleService: Title, private metaService: Meta) {
        this.titleService.setTitle('Day use - RoomWise');
        this.metaService.updateTag({ name: 'description', content: 'Página de day use' });
    }

    get isDarkMode(): boolean {
        return this.configService.config().darkMode;
    }
}
