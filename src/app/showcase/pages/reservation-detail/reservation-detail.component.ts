import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { AppConfigService } from "@service/appconfigservice";
import { NewReservation } from "@doc/dynamicdialog/new-reservation";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { NewGuest } from "@doc/dynamicdialog/new-guest";
import { MenuItem } from "primeng/api";
import { Router } from '@angular/router'; 
import { ActivatedRoute } from "@angular/router";

interface City {
  name: string;
  code: string;
}

@Component({
  templateUrl: "./reservation-detail.component.html",
  providers: [DialogService],
  styleUrls: ["reservation-detail.component.scss"],
})
export class ReservationDetailComponent {
  visible: boolean = false;
  subscription: Subscription;
  cities!: City[];
  ref: DynamicDialogRef | undefined;
  reservationList: Array<any>;
  color: string = "#6466f1";
  addOptions: MenuItem[];
  infoOptions: MenuItem[];
  newReservationMode: boolean = false;
  pageTitle: string;
  reservation: any;
  teste1: any;
  situation: any[] | undefined;
  selectedCities: number = 1;

  constructor(
    private configService: AppConfigService,
    private titleService: Title,
    private metaService: Meta,
    public dialogService: DialogService,
    public route: ActivatedRoute,
    private router: Router
  ) {
    this.titleService.setTitle("UI Kit - PrimeNG");
    this.metaService.updateTag({
      name: "description",
      content: "PrimeNG Angular UI Kit",
    });

    this.situation = [
      {
        name: "pre-reservado",
        code: "1",
      },
      {
        name: "Reservado",
        code: "2",
      },
      {
        name: "Hospedado",
        code: "3",
      },
      {
        name: "Em limpeza",
        code: "4",
      },
      {
        name: "Finalizado",
        code: "5",
      },
    ];

    this.addOptions = [
      {
        label: "Pagamento",
        command: () => {},
      },
      {
        label: "Desconto",
        command: () => {},
      },
      { separator: true },
      {
        label: "Produtos e serviços",
        command: () => {},
      },
      {
        label: "Hóspedes",
        command: () => {},
      },
    ];

    this.infoOptions = [
      {
        label: "FNRH",
        command: () => {},
      },
      { separator: true },

      {
        label: "Extrato",
        command: () => {},
      },
      {
        label: "Recibo",
        command: () => {},
      },
      {
        label: "Vouncher",
        command: () => {},
      },
    ];
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.reservation = JSON.parse(params["reservation"]);
      console.log(this.reservation);
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id === "newReservation") {
        this.newReservationMode = true;
      } else {
        this.newReservationMode = false;
      }
      this.getPageTitle(this.newReservationMode);
    });
  }

  get isDarkMode(): boolean {
    return this.configService.config().darkMode;
  }

  e() {
    this.ref = this.dialogService.open(NewGuest, {
      header: "Novo Hóspede",
      width: "30vw",
      contentStyle: { overflow: "auto" },
      breakpoints: {
        "960px": "75vw",
        "640px": "90vw",
      },
    });

    this.ref.onClose.subscribe((data: any) => {
      let summary_and_detail;
      if (data) {
        const buttonType = data?.buttonType;
        summary_and_detail = buttonType
          ? {
              summary: "No Product Selected",
              detail: `Pressed '${buttonType}' button`,
            }
          : { summary: "Product Selected", detail: data?.name };
      } else {
        summary_and_detail = {
          summary: "No Product Selected",
          detail: "Pressed Close button",
        };
      }
    });
  }

  getPageTitle(newReservationMode) {
    if (newReservationMode == true) {
      this.pageTitle = "Nova reserva";
    } else {
      this.pageTitle = "Detalhes da reserva";
    }
  }

  goToNewRoom() {
    this.router.navigate(["/room"]);
  }
}
