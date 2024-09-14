import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AppConfigService } from '@service/appconfigservice';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from '@doc/dynamicdialog/productlistdemo';
import { NewReservation } from '@doc/dynamicdialog/new-reservation';

@Component({
    templateUrl: './home.component.html',
    providers: [DialogService],
    styleUrls: ['home.component.scss']
})
export class HomeComponent {
    ref: DynamicDialogRef | undefined;
    subscription: Subscription;
    values: string[] | undefined;
    reservationList: Array<any>;

    constructor(private configService: AppConfigService, private titleService: Title, private metaService: Meta, public dialogService: DialogService) {
        this.titleService.setTitle('RoomWise');
        this.metaService.updateTag({ name: 'description', content: 'PrimeNG Angular UI Kit' });

        this.reservationList = [
            {
                housingUnit: 'Quarto 1',
                guest: 'Bruno Scholze',
                initialDate: '10/09/2024',
                finalDate: '15/09/2024',
                category: 'Luxo',
                situation: 'preBooked'
            },
            {
                housingUnit: 'Quarto 2',
                guest: 'Maria Souza',
                initialDate: '12/09/2024',
                finalDate: '18/09/2024',
                category: 'Standard',
                situation: 'booked'
            },
            {
                housingUnit: 'Quarto 3',
                guest: 'Carlos Oliveira',
                initialDate: '09/09/2024',
                finalDate: '20/09/2024',
                category: 'Luxo',
                situation: 'busy'
            },
            {
                housingUnit: 'Quarto 4',
                guest: 'Ana Paula',
                initialDate: '11/09/2024',
                finalDate: '13/09/2024',
                category: 'Standard',
                situation: 'inCleaning'
            },
            {
                housingUnit: 'Quarto 5',
                guest: 'Pedro Henrique',
                initialDate: '08/09/2024',
                finalDate: '15/09/2024',
                category: 'Luxo',
                situation: 'available'
            },
            {
                housingUnit: 'Quarto 6',
                guest: 'Larissa Fernandes',
                initialDate: '05/09/2024',
                finalDate: '12/09/2024',
                category: 'Premium',
                situation: 'blocked'
            },
            {
                housingUnit: 'Quarto 7',
                guest: 'Ricardo Lima',
                initialDate: '07/09/2024',
                finalDate: '14/09/2024',
                category: 'Luxo',
                situation: 'busy'
            },
            {
                housingUnit: 'Quarto 8',
                guest: 'Juliana Almeida',
                initialDate: '09/09/2024',
                finalDate: '11/09/2024',
                category: 'Standard',
                situation: 'busy'
            },
            {
                housingUnit: 'Quarto 9',
                guest: 'Fernando Reis',
                initialDate: '06/09/2024',
                finalDate: '13/09/2024',
                category: 'Luxo',
                situation: 'busy'
            },
            {
                housingUnit: 'Quarto 10',
                guest: 'Mariana Castro',
                initialDate: '10/09/2024',
                finalDate: '17/09/2024',
                category: 'Standard',
                situation: 'booked'
            },
            {
                housingUnit: 'Quarto 11',
                guest: 'Lucas Pereira',
                initialDate: '15/09/2024',
                finalDate: '20/09/2024',
                category: 'Luxo',
                situation: 'preBooked'
            },
            {
                housingUnit: 'Quarto 12',
                guest: 'Roberta Farias',
                initialDate: '13/09/2024',
                finalDate: '19/09/2024',
                category: 'Premium',
                situation: 'busy'
            }
        ];
        
    }

    get isDarkMode(): boolean {
        return this.configService.config().darkMode;
    }

    getCardGroundColor(situation: string) {
        if (situation == 'preBooked' || situation == 'booked') {
            return 'blue-background';
        } else if (situation == 'busy') {
            return 'red-background';
        } else if (situation == 'inCleaning') {
            return 'light-blue-background';
        } else if (situation == 'available') {
            return 'green-background';
        } else if (situation == 'blocked') {
            return 'grey-background';
        }
    }

    getSituationLabel(situation: string) {
        if (situation == 'preBooked') {
            return 'Pré-Reservado';
        } else if (situation == 'booked') {
            return 'Reservado';
        } else if (situation == 'busy') {
            return 'Ocupado';
        } else if (situation == 'inCleaning') {
            return 'Em limpeza';
        } else if (situation == 'available') {
            return 'Disponível';
        } else if (situation == 'blocked') {
            return 'Bloqueado';
        }
    }

    getSituationTagColor(situation: string) {
        if (situation == 'preBooked') {
            return 'warning';
        } else if (situation == 'booked') {
            return 'primary';
        } else if (situation == 'busy') {
            return 'danger';
        } else if (situation == 'inCleaning') {
            return 'secondary';
        } else if (situation == 'available') {
            return 'success';
        } else if (situation == 'blocked') {
            return 'contrast';
        }
    }

    show() {
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
}
