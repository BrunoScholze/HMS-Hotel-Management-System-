import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { AppConfigService } from "@service/appconfigservice";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ConfirmationService, MenuItem, MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Reservation } from "@layout/models/reservation.model";

interface City {
  name: string;
  code: string;
}

@Component({
  templateUrl: "./reservation-form.component.html",
  providers: [DialogService, ConfirmationService, MessageService],
  styleUrls: ["reservation-form.component.scss"],
})
export class ReservationFormComponent {
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
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.titleService.setTitle("RoomWise");
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

        this.reservation = new Reservation;
      } else {
        this.newReservationMode = false;
      }
      this.getPageTitle(this.newReservationMode);
    });
  }

  get isDarkMode(): boolean {
    return this.configService.config().darkMode;
  }

  getPageTitle(newReservationMode) {
    if (newReservationMode == true) {
      this.pageTitle = "Nova reserva";
    } else {
      this.pageTitle = "Detalhes da reserva";
    }
  }

  getReservationLabelStatus(situation: string) {
    if (situation == "preBooked") {
      return "Pré-Reservado";
    } else if (situation == "booked") {
      return "Reservado";
    } else if (situation == "busy") {
      return "Ocupado";
    } else if (situation == "inCleaning") {
      return "Em limpeza";
    } else if (situation == "available") {
      return "Disponível";
    } else if (situation == "blocked") {
      return "Bloqueado";
    }
  }

  goToNewRoom() {
    this.router.navigate(["/room"]);
  }

  onClickSaveNewReservation(event: Event) {
    //Service para back
    this.router.navigate(["/reservation"]);
  }
  
}
