import { Component, OnInit } from "@angular/core";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { Product } from "@domain/product";
import { ProductService } from "@service/productservice";
import { InfoDemo } from "./infodemo";
import { NewGuest } from "./new-guest";
import { Reservation } from "@layout/models/reservation.model";
import moment from "moment";

@Component({
  template: ` <p-stepper>
    <p-stepperPanel header="Dados da reserva">
      <ng-template
        pTemplate="content"
        let-nextCallback="nextCallback"
        let-index="index"
      >
        <p-panel header="Informe os dados da nova reserva">
          <div class="pl-1">
            <div class="pb-5">
              Informe os dados do hóspede para realizar uma reserva
            </div>
            <div class="grid formgrid p-fluid">
              <div class="field mb-4 col-12">
                <label for="nickname" class="font-medium text-900 mb-2"
                  >Nome completo</label
                >

                <div class="flex align-items-center">
                  <p-dropdown
                    class="col-11 pl-0"
                    [options]="guests"
                    [(ngModel)]="guestName"
                    optionLabel="name"
                    [filter]="true"
                    filterBy="name"
                    [showClear]="true"
                    placeholder="Selecione o hóspede"
                  >
                  </p-dropdown>
                  <i
                    class="pi pi-user-plus ml-2 clicable"
                    style="color: #708090; cursor: pointer;"
                    (click)="onClickOpenNewGuestDialog()"
                  ></i>
                </div>
              </div>

              <div class="field mb-4 col-6">
                <label for="nickname" class="font-medium text-900"
                  >Data check-in</label
                >
                <p-calendar [(ngModel)]="initialDate" />
              </div>
              <div class="field mb-4 col-6">
                <label for="nickname" class="font-medium text-900"
                  >Data check-out</label
                >
                <p-calendar [(ngModel)]="finalDate" />
              </div>

              <div class="field mb-4 col-6">
                <label for="nickname" class="font-medium text-900"
                  >Número de hóspedes</label
                >
                <p-inputNumber
                  inputId="integeronly"
                  [(ngModel)]="guestsQuantity"
                />
              </div>
              <div class="field mb-4 col-3">
                <label for="nickname" class="font-medium text-900"
                  >Qtd de adultos</label
                >
                <p-inputNumber
                  inputId="integeronly"
                  [(ngModel)]="adultsNumber"
                />
              </div>
              <div class="field mb-4 col-3">
                <label for="nickname" class="font-medium text-900"
                  >Qtd de crianças</label
                >
                <p-inputNumber
                  inputId="integeronly"
                  [(ngModel)]="childrenNumber"
                />
              </div>

              <div class="field mb-4 col-6">
                <label for="nickname" class="font-medium text-900"
                  >Valor diária</label
                >
                <p-inputNumber inputId="integeronly" [(ngModel)]="dailyValue" />
              </div>
              <div class="field mb-4 col-6">
                <label for="nickname" class="font-medium text-900"
                  >Placa do Carro</label
                >
                <input
                  id="nickname"
                  type="text"
                  pinputtext=""
                  class="p-inputtext p-component p-element"
                  [(ngModel)]="carPlate"
                />
              </div>

              <div class="field mb-4 col-12">
                <label for="nickname" class="font-medium text-900"
                  >Descrição</label
                >
                <input
                  [(ngModel)]="description"
                  id="nickname"
                  type="text"
                  pinputtext=""
                  class="p-inputtext p-component p-element"
                />
              </div>
            </div>
          </div>
        </p-panel>
        <div class="flex pt-3 justify-content-end gap-2">
          <p-button
            label="Próximo"
            icon="pi pi-arrow-right"
            iconPos="right"
            (onClick)="nextCallback.emit()"
          />
        </div>
      </ng-template>
    </p-stepperPanel>
    <p-stepperPanel header="Dados do U.H">
      <ng-template
        pTemplate="content"
        let-nextCallback="nextCallback"
        let-index="index"
      >
        <p-panel header="Dados da U.H">
          <div class="pl-1">
            <div class="pb-5">
              Informe os dados da U.H para realizar uma reserva
            </div>
            <div class="grid formgrid p-fluid">
              <div class="field mb-4 col-6">
                <label for="nickname" class="font-medium text-900"
                  >Unidade habitacoinal</label
                >
                <p-dropdown
                  class="col-11 pl-0"
                  [options]="uh"
                  [(ngModel)]="uhSelected"
                  optionLabel="name"
                  [filter]="true"
                  filterBy="name"
                  [showClear]="true"
                  placeholder="Selecione o U.H"
                >
                </p-dropdown>
              </div>
              <div class="field mb-4 col-6">
                <label for="nickname" class="font-medium text-900"
                  >Situação</label
                >
                <p-dropdown
                  class="col-11 pl-0"
                  [options]="situation"
                  [(ngModel)]="situationSelected"
                  optionLabel="name"
                  [filter]="true"
                  filterBy="name"
                  [showClear]="true"
                  placeholder="Selecione a situação"
                />
              </div>
            </div>
          </div>
        </p-panel>
        <div class="flex pt-4 justify-content-between">
          <p-button
            label="Voltar"
            icon="pi pi-arrow-left"
            (onClick)="prevCallback.emit()"
          />
          <p-button
            label="Concluir"
            icon="pi pi-arrow-right"
            iconPos="right"
            (onClick)="closeModal()"
          />
        </div>
      </ng-template>
    </p-stepperPanel>
  </p-stepper>`,
})
export class NewReservation implements OnInit {
  products: Product[];
  guests!: any[];
  uh!: any[];
  situation!: any[];
  newReservation: Reservation;
  guestName: any;
  uhSelected: any;
  situationSelected: any;
  finalDate: string;
  initialDate: string;
  guestsQuantity: number;
  adultsNumber: number;
  childrenNumber: number;
  dailyValue: number;
  carPlate: string;
  description: string;

  constructor(
    private productService: ProductService,
    private dialogService: DialogService,
    private ref: DynamicDialogRef
  ) {
    this.guests = [
      { name: "John Doe", code: "John Doe" },
      { name: "Jane Smith", code: "Jane Smith" },
      { name: "Carlos Silva", code: "Carlos Silva" },
      { name: "Maria Garcia", code: "Maria Garcia" },
      { name: "Liam Johnson", code: "Liam Johnson" },
      { name: "Emma Brown", code: "Emma Brown" },
      { name: "Oliver Davis", code: "Oliver Davis" },
      { name: "Sophia Miller", code: "Sophia Miller" },
      { name: "James Wilson", code: "James Wilson" },
      { name: "Isabella Moore", code: "Isabella Moore" },
    ];

    this.uh = [
      { name: "Beira mar", value: "Beira mar" },
      { name: "Suíte Executiva", value: "Suíte Executiva" },
      { name: "Quarto Standard", value: "Quarto Standard" },
      { name: "Quarto Luxo", value: "Quarto Luxo" },
      { name: "Suíte Presidencial", value: "Suíte Presidencial" },
      { name: "Chalé Familiar", value: "Chalé Familiar" },
      { name: "Quarto Econômico", value: "Quarto Econômico" },
      { name: "Suíte com Varanda", value: "Suíte com Varanda" },
      { name: "Quarto para Deficientes", value: "Quarto para Deficientes" },
      { name: "Suíte Nupcial", value: "Suíte Nupcial" },
      { name: "Apartamento Executivo", value: "Apartamento Executivo" },
      { name: "Quarto Superior", value: "Quarto Superior" },
      { name: "Vila Privativa", value: "Vila Privativa" },
      { name: "Loft Moderno", value: "Loft Moderno" },
      {
        name: "Quarto com Vista para a Montanha",
        value: "Quarto com Vista para a Montanha",
      },
      { name: "Suíte com Jacuzzi", value: "Suíte com Jacuzzi" },
      { name: "Quarto Pet Friendly", value: "Quarto Pet Friendly" },
      { name: "Suíte Temática", value: "Suíte Temática" },
      { name: "Quarto Twin", value: "Quarto Twin" },
      { name: "Quarto Conjugado", value: "Quarto Conjugado" },
      { name: "Quarto com Banheira", value: "Quarto com Banheira" },
    ];

    this.situation = [
      { name: "Pré-reservado", value: "preBooked" },
      { name: "Reservado", value: "booked" },
      { name: "Ocupado", value: "busy" },
      { name: "Em Limpeza", value: "inCleaning" },
      { name: "Disponível", value: "available" },
      { name: "Bloqueado", value: "blocked" },
    ];
  }

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then((products) => (this.products = products.slice(0, 5)));
  }

  closeModal() {
    this.ref.close();
    
    this.newReservation = {
      number: "HO:000001",
      category: "Luxo",
      guest: this.guestName.code,
      uh: this.uhSelected.value,
      checkIn: moment(this.initialDate).format('MM/DD/YYYY'),
      checkOut: moment(this.finalDate).format('MM/DD/YYYY'),
      quantity: this.guestsQuantity,
      adults: this.adultsNumber,
      children: this.childrenNumber,
      dailyRate: this.dailyValue,
      carPlate: this.carPlate,
      situation: this.situationSelected.value,
      additionalServices: ["Spa day", "Private dinner"],
    };
    this.ref.close(this.newReservation);
  }

  showInfo() {
    this.dialogService.open(InfoDemo, {
      header: "Information",
      modal: true,
      dismissableMask: true,
      data: {
        totalProducts: this.products ? this.products.length : 0,
      },
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warning";
      case "OUTOFSTOCK":
        return "danger";
    }
  }

  onClickOpenNewGuestDialog() {
    this.ref = this.dialogService.open(NewGuest, {
      header: "Novo Hóspede",
      width: "30vw",
      contentStyle: { overflow: "auto" },
      breakpoints: {
        "960px": "75vw",
        "640px": "90vw",
      },
    });
  }
}
