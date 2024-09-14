import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
import { InfoDemo } from './infodemo';
import { NewGuest } from './new-guest';
@Component({
    template: `  <p-stepper>
    <p-stepperPanel header="Dados da reserva">
        <ng-template pTemplate="content" let-nextCallback="nextCallback" let-index="index">
            <p-panel header="Informe os dados da nova reserva">
                <div class="pl-1">
                    <div class="pb-5">Informe os dados do hóspede para realizar uma reserva</div>
                    <div class="grid formgrid p-fluid">
                       
                        <div class="field mb-4 col-12">
                            <label for="nickname" class="font-medium text-900 mb-2">Nome completo</label>

                            <div class="flex align-items-center">
            
                                <p-multiSelect 
                                    class="col-11 pl-0" 
                                    [options]="cities" 
                                    [(ngModel)]="selectedCities" 
                                    placeholder="Select Cities" 
                                    optionLabel="name" 
                                    display="chip" 
                                    [showClear]="true"
                                />
                                <i
                                    class="pi pi-user-plus ml-2 clicable"
                                    style="color: #708090; cursor: pointer;"
                                    (click)="onClickOpenNewGuestDialog()"
                                ></i>
                            </div>
                        </div>

                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Data check-in</label>
                            <p-calendar [(ngModel)]="date" />
                        </div>
                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Data check-out</label>
                            <p-calendar [(ngModel)]="date" />
                        </div>

                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Número de hóspedes</label>
                            <p-inputNumber inputId="integeronly" [(ngModel)]="value1" />
                        </div>
                        <div class="field mb-4 col-3">
                            <label for="nickname" class="font-medium text-900">Quantidade de adultos</label>
                            <p-inputNumber inputId="integeronly" [(ngModel)]="value1" />
                        </div>
                        <div class="field mb-4 col-3">
                            <label for="nickname" class="font-medium text-900">Quantidade de crianças</label>
                            <p-inputNumber inputId="integeronly" [(ngModel)]="value1" />
                        </div>

                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Valor diária</label>
                            <p-inputNumber inputId="integeronly" [(ngModel)]="value1" />
                        </div>
                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Placa do Carro</label>
                            <input id="nickname" type="text" pinputtext="" class="p-inputtext p-component p-element" />
                        </div>

                        <div class="field mb-4 col-12">
                            <label for="nickname" class="font-medium text-900">Descrição</label>
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
    <p-stepperPanel header="Dados do U.H">
        <ng-template pTemplate="content" let-nextCallback="nextCallback" let-index="index">
            <p-panel header="Dados da U.H">
                <div class="pl-1">
                    <div class="pb-5">Informe os dados da U.H para realizar uma reserva</div>
                    <div class="grid formgrid p-fluid">
                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Unidade habitacoinal</label>
                            <p-multiSelect [options]="cities" [(ngModel)]="selectedCities" placeholder="Selecione uma U.H" optionLabel="name" display="chip" [showClear]="true" />
                        </div>
                        <div class="field mb-4 col-6">
                            <label for="nickname" class="font-medium text-900">Situação</label>
                            <p-multiSelect [options]="cities" [(ngModel)]="selectedCities" placeholder="Selecione a situação da reserva " optionLabel="name" display="chip" [showClear]="true" />
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
</p-stepper>`
})
export class NewReservation implements OnInit {
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
}
