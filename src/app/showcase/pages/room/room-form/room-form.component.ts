import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AppConfigService } from '@service/appconfigservice';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewCategory } from '@doc/dynamicdialog/new-category';

interface City {
    name: string,
    code: string
}

@Component({
    templateUrl: './room-form.component.html',
    providers: [DialogService],
    styleUrls: ['room-form.component.scss']
})
export class RoomFormComponent {
    visible: boolean = false;
    subscription: Subscription;
    cities!: City[];
    ref: DynamicDialogRef | undefined;
    selectedCities!: City[];
    category :Array<any>;

    constructor(private configService: AppConfigService, private titleService: Title, private metaService: Meta, public dialogService: DialogService) {
        this.titleService.setTitle('Quartos - RoomWise');
        this.metaService.updateTag({ name: 'description', content: 'Quartos' });

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.category = [
            {
                id: 1,
                name: 'Beira mar',
                description: 'Quartos beira mar',
                status: true
            },
            {
                id: 2,
                name: 'Suíte Executiva',
                description: 'Quartos de alto padrão com vista panorâmica',
                status: true
            },
            {
                id: 3,
                name: 'Quarto Standard',
                description: 'Quartos simples e econômicos',
                status: true
            },
            {
                id: 4,
                name: 'Quarto Luxo',
                description: 'Quartos luxuosos com comodidades premium',
                status: true
            },
            {
                id: 5,
                name: 'Suíte Presidencial',
                description: 'Suítes de luxo para clientes VIP',
                status: true
            },
            {
                id: 6,
                name: 'Chalé Familiar',
                description: 'Acomodações espaçosas para famílias',
                status: true
            },
            {
                id: 7,
                name: 'Quarto Econômico',
                description: 'Quartos acessíveis para estadias rápidas',
                status: true
            },
            {
                id: 8,
                name: 'Suíte com Varanda',
                description: 'Suítes com varanda e vista para o jardim',
                status: true
            },
            {
                id: 9,
                name: 'Quarto para Deficientes',
                description: 'Quartos adaptados para pessoas com necessidades especiais',
                status: true
            },
            {
                id: 10,
                name: 'Suíte Nupcial',
                description: 'Suítes românticas para casais em lua de mel',
                status: true
            },
            {
                id: 11,
                name: 'Apartamento Executivo',
                description: 'Apartamentos modernos para estadias longas',
                status: true
            },
            {
                id: 12,
                name: 'Quarto Superior',
                description: 'Quartos confortáveis com serviços adicionais',
                status: true
            },
            {
                id: 13,
                name: 'Vila Privativa',
                description: 'Vilas isoladas com piscina privada',
                status: true
            },
            {
                id: 14,
                name: 'Loft Moderno',
                description: 'Lofts com design contemporâneo',
                status: true
            },
            {
                id: 15,
                name: 'Quarto com Vista para a Montanha',
                description: 'Quartos com vista deslumbrante para a montanha',
                status: true
            },
            {
                id: 16,
                name: 'Suíte com Jacuzzi',
                description: 'Suítes equipadas com jacuzzi privada',
                status: true
            },
            {
                id: 17,
                name: 'Quarto Pet Friendly',
                description: 'Quartos que permitem animais de estimação',
                status: true
            },
            {
                id: 18,
                name: 'Suíte Temática',
                description: 'Suítes decoradas com temas especiais',
                status: true
            },
            {
                id: 19,
                name: 'Quarto Twin',
                description: 'Quartos com duas camas de solteiro',
                status: true
            },
            {
                id: 20,
                name: 'Quarto Conjugado',
                description: 'Quartos interligados para famílias ou grupos',
                status: true
            },
            {
                id: 21,
                name: 'Quarto com Banheira',
                description: 'Quartos equipados com banheiras de luxo',
                status: true
            }
        ];

    }

    get isDarkMode(): boolean {
        return this.configService.config().darkMode;
    }

    getSeverity(status: boolean) {
        switch (status) {
            case true:
                return 'success';

            case false:
                return 'danger';
        }
    }

    getValue(status: boolean) {
        switch(status) {
            case true:
                return 'Ativo'

            case false:
                return 'Inativo'
        }
    }

   show() {
        this.ref = this.dialogService.open(NewCategory, {
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
