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
    templateUrl: './category.component.html',
    providers: [DialogService],
    styleUrls: ['category.component.scss']
})
export class CategoryComponent {
    visible: boolean = false;
    subscription: Subscription;
    ref: DynamicDialogRef | undefined;
    category :Array<any>;
    selectedCategory: any;

    constructor(private configService: AppConfigService, private titleService: Title, private metaService: Meta, public dialogService: DialogService) {
        this.titleService.setTitle('Categorias - RoomWise');
        this.metaService.updateTag({ name: 'description', content: 'PrimeNG Angular UI Kit' });

        this.category = [
            {
                id: 1,
                name: 'Luxo',
                description: 'Quartos com comodidades de alto padrão e serviços exclusivos',
                active: true
            },
            {
                id: 2,
                name: 'Executivo',
                description: 'Quartos voltados para profissionais com foco em trabalho e conforto',
                active: true
            },
            {
                id: 3,
                name: 'Econômico',
                description: 'Quartos simples e acessíveis para estadias curtas',
                active: true
            },
            {
                id: 4,
                name: 'Familiar',
                description: 'Quartos espaçosos, ideais para famílias',
                active: true
            },
            {
                id: 5,
                name: 'Suíte Presidencial',
                description: 'Suítes luxuosas e exclusivas para clientes VIP',
                active: true
            },
            {
                id: 6,
                name: 'Romântico',
                description: 'Quartos decorados para casais, ideal para lua de mel',
                active: true
            },
            {
                id: 7,
                name: 'Pet Friendly',
                description: 'Quartos que permitem a estadia de animais de estimação',
                active: true
            },
            {
                id: 8,
                name: 'Com Vista para o Mar',
                description: 'Quartos com janelas ou varandas com vista para o oceano',
                active: true
            },
            {
                id: 9,
                name: 'Acessível',
                description: 'Quartos adaptados para hóspedes com necessidades especiais',
                active: true
            },
            {
                id: 10,
                name: 'Suíte com Jacuzzi',
                description: 'Quartos equipados com banheira de hidromassagem privada',
                active: true
            },
            {
                id: 11,
                name: 'Conjugado',
                description: 'Quartos interligados para famílias ou grupos maiores',
                active: true
            },
            {
                id: 12,
                name: 'Com Vista para a Montanha',
                description: 'Quartos com vista panorâmica para as montanhas',
                active: true
            },
            {
                id: 13,
                name: 'Quarto Temático',
                description: 'Quartos decorados com temas exclusivos e criativos',
                active: true
            },
            {
                id: 14,
                name: 'Loft',
                description: 'Quartos com design moderno e conceito aberto',
                active: true
            },
            {
                id: 15,
                name: 'Chalé',
                description: 'Acomodações em estilo chalé para uma experiência mais privativa',
                active: true
            },
            {
                id: 16,
                name: 'Com Varanda',
                description: 'Quartos com varanda para maior comodidade',
                active: true
            },
            {
                id: 17,
                name: 'Twin',
                description: 'Quartos com duas camas de solteiro, ideal para amigos ou colegas',
                active: true
            },
            {
                id: 18,
                name: 'Studio',
                description: 'Quartos compactos com cozinha integrada para estadias prolongadas',
                active: true
            },
            {
                id: 19,
                name: 'Piso Superior',
                description: 'Quartos localizados nos andares mais altos do hotel',
                active: true
            },
            {
                id: 20,
                name: 'Quarto Deluxe',
                description: 'Quartos espaçosos com serviços adicionais',
                active: true
            },
            {
                id: 21,
                name: 'Vila Privativa',
                description: 'Vilas exclusivas com piscina privada e comodidades de luxo',
                active: true
            }
        ];
    }

    get isDarkMode(): boolean {
        return this.configService.config().darkMode;
    }

    getSeverity(active: boolean) {
        switch (active) {
            case true:
                return 'info';

            case false:
                return 'danger';
        }
    }

    getValue(active: boolean) {
        switch(active) {
            case true:
                return 'Ativo'

            case false:
                return 'Inativo'
        }
    }

    show(category) {
        this.ref = this.dialogService.open(NewCategory, {
            header: 'Select a Product',
            width: '50vw',
            contentStyle: { overflow: 'auto' },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
            data: { category: category }
        });

        this.ref.onClose.subscribe((data: any) => {
            let summary_and_detail;
            if (data) {
                const buttonType = data?.buttonType;
                summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data?.name };
            } else {
                summary_and_detail = { summary: 'No Product Selected', detail: 'Pressed Close button' };
            }
        });

        this.ref.onMaximize.subscribe((value) => {
        });
    }
}
