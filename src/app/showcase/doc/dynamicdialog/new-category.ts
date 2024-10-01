import { Component, OnInit } from "@angular/core";
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from "primeng/dynamicdialog";
import { Product } from "@domain/product";
import { ProductService } from "@service/productservice";
import { InfoDemo } from "./infodemo";
@Component({
  template: `
    <div class="grid formgrid p-fluid">
      <div class="field mb-4 col-11">
        <label for="nickname" class="font-medium text-900"
          >Nome da nova categoria</label
        >
        <input
          [(ngModel)]="category.name"
          id="nickname"
          type="text"
          pinputtext=""
          class="p-inputtext p-component p-element"
        />
      </div>

      <div class="field mb-4 col-1">
        <label for="nickname" class="font-medium text-900 col-12">Ativo</label>
        <p-inputSwitch class="pl-2 " [(ngModel)]="category.active" />
      </div>
    </div>

    <div class="grid formgrid p-fluid">
      <div class="field mb-4 col-12">
        <label for="nickname" class="font-medium text-900"
          >Descrição da nova categoria</label
        >
        <textarea
          [(ngModel)]="category.description"
          rows="5"
          cols="30"
          pInputTextarea
          [autoResize]="true"
        >
        </textarea>
      </div>
    </div>

    <div class="com-12 flex justify-content-end flex-wrap">
      <p-button
        label="Cancelar"
        [link]="true"
        severity="danger"
        (onClick)="closeDialog()"
      />
      <p-button label="Salvar" [link]="false" (onClick)="closeDialog()" />
    </div>
  `,
})
export class NewCategory implements OnInit {
  products: Product[];
  visible: boolean = false;
  category: any;

  constructor(
    private productService: ProductService,
    private dialogService: DialogService,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then((products) => (this.products = products.slice(0, 5)));
    if (this.config.data.category) {
      this.category = this.config.data.category;
    } else {
      this.category = {
        id: 0,
        name: "",
        description: "",
        status: true,
      };
    }
    console.log(this.category);
  }

  selectProduct(product: Product) {
    this.ref.close(product);
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

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
    this.category = [];
  }
}
