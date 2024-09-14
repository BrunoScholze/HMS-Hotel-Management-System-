import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
import { InfoDemo } from './infodemo';
@Component({
    template: ` 
    <div class="grid formgrid p-fluid">
        <div class="field mb-4 col-11">
            <label for="nickname" class="font-medium text-900">Nome da nova categoria</label>
            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
        </div>

        <div class="field mb-4 col-1">
            <label for="nickname" class="font-medium text-900 col-12">Ativo</label>
            <p-inputSwitch  class="pl-2 " />
        </div>
 
    </div>

    <div class="grid formgrid p-fluid">
        <div class="field mb-4 col-12">
            <label for="nickname" class="font-medium text-900">Descrição da nova categoria</label>
            <textarea 
                rows="5"
                cols="30" 
                pInputTextarea 
                [autoResize]="true">
            </textarea>
        </div>
    </div>

    

    `
})
export class NewCategory implements OnInit {
    products: Product[];

    constructor(private productService: ProductService, private dialogService: DialogService, private ref: DynamicDialogRef) {}

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
