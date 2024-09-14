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
        </div>

        <!--p-stepper>
    <p-stepperPanel header="Dados pessoais">
        <ng-template pTemplate="content" let-nextCallback="nextCallback" let-index="index">
            <p-panel header="Dados Pessoais">
                <div class="pl-1">
                    <div class="pb-5">Informe os dados pessoais do novo hóspede</div>
                    <div class="grid formgrid p-fluid">
                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Nome completo</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>
                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Data de Nascimento</label>
                            <p-calendar [(ngModel)]="date" />
                        </div>

                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">CPF</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>
                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Sexo</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>

                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Passaporte</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>
                    </div>
                </div>
            </p-panel>
            <div class="flex pt-3 justify-content-end gap-2">
                <p-button label="Próximo" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextCallback.emit()" />
            </div>
        </ng-template>
    </p-stepperPanel>
    <p-stepperPanel header="Contato">
        <ng-template pTemplate="content" let-nextCallback="nextCallback" let-index="index">
            <p-panel header="Contato">
                <div class="pl-1">
                    <div class="pb-5">Informe os dados para contato do novo hóspede</div>
                    <div class="grid formgrid p-fluid">
                        <div class="field mb-4 col-12">
                            <label for="nickname" class="font-medium text-900">Email</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>

                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Telefone principal</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>
                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Telefone secundário</label>
                            <p-calendar [(ngModel)]="date" />
                        </div>
                    </div>
                </div>
            </p-panel>
            <div class="flex pt-4 justify-content-between">
                <p-button label="Voltar" icon="pi pi-arrow-left" (onClick)="prevCallback.emit()" />
                <p-button label="Proóximo" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextCallback.emit()" />
            </div>
        </ng-template>
    </p-stepperPanel>
    <p-stepperPanel header="Endereço">
        <ng-template pTemplate="content" let-nextCallback="nextCallback" let-index="index">
            <p-panel header="Endereço">
                <div class="pl-1">
                    <div class="pb-5">Informe os dados do endereço do novo hóspede</div>
                    <div class="grid formgrid p-fluid">
                        <div class="field mb-4 col-12">
                            <label for="nickname" class="font-medium text-900">CEP</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>

                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">País</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>
                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Estado</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>

                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Cidade</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>
                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Bairro</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>

                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Rua</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>
                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Número</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>

                        <div class="field mb-4 col-12">
                            <label for="nickname" class="font-medium text-900">Complemento</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>
                    </div>
                </div>
            </p-panel>
            <div class="flex pt-4 justify-content-between">
                <p-button label="Voltar" icon="pi pi-arrow-left" (onClick)="prevCallback.emit()" />
                <p-button label="Concluir" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextCallback.emit()" />
            </div>
        </ng-template>
    </p-stepperPanel>
</p-stepper-->`
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
