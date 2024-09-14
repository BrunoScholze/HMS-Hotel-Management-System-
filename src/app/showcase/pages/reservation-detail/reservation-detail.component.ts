import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AppConfigService } from '@service/appconfigservice';
import { NewReservation } from '@doc/dynamicdialog/new-reservation';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewGuest } from '@doc/dynamicdialog/new-guest';
import { MenuItem } from 'primeng/api';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

interface City {
    name: string;
    code: string;
}

@Component({
    templateUrl: './reservation-detail.component.html',
    providers: [DialogService],
    styleUrls: ['reservation-detail.component.scss']
})
export class ReservationDetailComponent {
    visible: boolean = false;
    subscription: Subscription;
    cities!: City[];
    ref: DynamicDialogRef | undefined;
    selectedCities!: City[];
    reservationList: Array<any>;
    color: string = '#6466f1';
    addOptions: MenuItem[];
    infoOptions: MenuItem[];
    newReservationMode: boolean = false;
    pageTitle: string;

    constructor(
        private configService: AppConfigService,
        private titleService: Title,
        private metaService: Meta,
        public dialogService: DialogService,
        public route: ActivatedRoute
    ) {
        this.titleService.setTitle('UI Kit - PrimeNG');
        this.metaService.updateTag({ name: 'description', content: 'PrimeNG Angular UI Kit' });

        this.addOptions = [
            {
                label: 'Pagamento',
                command: () => {}
            },
            {
                label: 'Desconto',
                command: () => {}
            },
            { separator: true },
            {
                label: 'Produtos e serviços',
                command: () => {}
            },
            {
                label: 'Hóspedes',
                command: () => {}
            }
        ];

        this.infoOptions = [
            {
                label: 'FNRH',
                command: () => {}
            },
            { separator: true },

            {
                label: 'Extrato',
                command: () => {}
            },
            {
                label: 'Recibo',
                command: () => {}
            },
            {
                label: 'Vouncher',
                command: () => {}
            }
        ];
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            if (id === 'newReservation') {
                this.newReservationMode = true;
                console.log('new');
            } else {
                this.newReservationMode = false;
                console.log('old');
            }
            this.getPageTitle(this.newReservationMode);
        });
    }

    get isDarkMode(): boolean {
        return this.configService.config().darkMode;
    }

    onClickOpenNewReservationDialog() {
        this.ref = this.dialogService.open(NewReservation, {
            header: 'Select a Product',
            width: '50vw',
            contentStyle: { overflow: 'auto' },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
            templates: {
                //  footer: Footer
            }
        });

        this.ref.onClose.subscribe((data: any) => {
            let summary_and_detail;
            if (data) {
                const buttonType = data?.buttonType;
                summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data?.name };
            } else {
                summary_and_detail = { summary: 'No Product Selected', detail: 'Pressed Close button' };
            }
            //this.messageService.add({ severity: 'info', ...summary_and_detail, life: 3000 });
        });

        this.ref.onMaximize.subscribe((value) => {
            // this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
        });
    }

    onClickOpenNewGuestDialog() {
        this.ref = this.dialogService.open(NewGuest, {
            header: 'Novo Hóspede',
            width: '30vw',
            contentStyle: { overflow: 'auto' },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
            templates: {
                //  footer: Footer
            }
        });

        this.ref.onClose.subscribe((data: any) => {
            let summary_and_detail;
            if (data) {
                const buttonType = data?.buttonType;
                summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data?.name };
            } else {
                summary_and_detail = { summary: 'No Product Selected', detail: 'Pressed Close button' };
            }
            //this.messageService.add({ severity: 'info', ...summary_and_detail, life: 3000 });
        });

        this.ref.onMaximize.subscribe((value) => {
            // this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
        });
    }

    getPageTitle(newReservationMode) {
        if (newReservationMode == true) {
            this.pageTitle = 'Nova reserva';
        } else {
            this.pageTitle = 'Detalhes da reserva';
        }
    }
}
