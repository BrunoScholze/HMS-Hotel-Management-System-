import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
import { InfoDemo } from './infodemo';
@Component({
    template: ` <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12">
                <label for="nickname" class="font-medium text-900">Nome Completo</label>
                <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
            </div>

            <div class="field mb-4 col-12">
                <label for="nickname" class="font-medium text-900">E-mail</label>
                <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
            </div>

            <div class="field mb-4 col-6">
                <label for="nickname" class="font-medium text-900">Telefone</label>
                <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
            </div>

            <div class="field mb-4 col-6">
                <label for="nickname" class="font-medium text-900">Passaporte</label>
                <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
            </div>

            <div class="flex w-full">
                <div class="flex-1 p-2 text-center">
                    <p-button label="Cadastro completo" severity="secondary" size="normal" styleClass="w-full h-full" />
                </div>
                <div class="flex-1 p-2 text-center">
                    <p-button label="Adicionar Hóspede" size="normal" styleClass="w-full h-full" />
                </div>
            </div>
        </div>`
})
export class NewGuest implements OnInit {
    products: Product[];

    constructor(
        private productService: ProductService,
        private dialogService: DialogService,
        private ref: DynamicDialogRef
    ) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => (this.products = products.slice(0, 5)));
    }

    selectProduct(product: Product) {
        this.ref.close(product);
    }

    showInfo() {
        this.dialogService.open(InfoDemo, {
            header: 'Information',
            modal: true,
            dismissableMask: true,
            data: {
                totalProducts: this.products ? this.products.length : 0
            }
        });
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}
