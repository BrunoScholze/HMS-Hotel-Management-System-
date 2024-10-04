import { Component, ViewChild } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { AppConfigService } from "@service/appconfigservice";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ProductListDemo } from "@doc/dynamicdialog/productlistdemo";
import { NewReservation } from "@doc/dynamicdialog/new-reservation";
import { Router } from "@angular/router";
import { Reservation } from "@layout/models/reservation.model";

@Component({
  templateUrl: "./home.component.html",
  providers: [DialogService],
  styleUrls: ["home.component.scss"],
})
export class HomeComponent {
  ref: DynamicDialogRef | undefined;
  subscription: Subscription;
  values: string[] | undefined;
  reservationList: Array<Reservation>;

  constructor(
    private configService: AppConfigService,
    private titleService: Title,
    public dialogService: DialogService,
    private router: Router
  ) {
    this.titleService.setTitle("RoomWise");

    this.reservationList = [
      {
        uh: "Quarto 1",
        guest: "Bruno Scholze",
        checkIn: "10/09/2024",
        checkOut: "15/09/2024",
        category: "Luxo",
        situation: "preBooked",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
      {
        uh: "Quarto 2",
        guest: "Maria Souza",
        checkIn: "12/09/2024",
        checkOut: "18/09/2024",
        category: "Standard",
        situation: "booked",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
      {
        uh: "Quarto 3",
        guest: "Carlos Oliveira",
        checkIn: "09/09/2024",
        checkOut: "20/09/2024",
        category: "Luxo",
        situation: "busy",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
      {
        uh: "Quarto 4",
        guest: "Ana Paula",
        checkIn: "11/09/2024",
        checkOut: "13/09/2024",
        category: "Standard",
        situation: "inCleaning",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
      {
        uh: "Quarto 5",
        guest: "Pedro Henrique",
        checkIn: "08/09/2024",
        checkOut: "15/09/2024",
        category: "Luxo",
        situation: "available",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
      {
        uh: "Quarto 6",
        guest: "Larissa Fernandes",
        checkIn: "05/09/2024",
        checkOut: "12/09/2024",
        category: "Premium",
        situation: "blocked",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
      {
        uh: "Quarto 7",
        guest: "Ricardo Lima",
        checkIn: "07/09/2024",
        checkOut: "14/09/2024",
        category: "Luxo",
        situation: "busy",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
      {
        uh: "Quarto 8",
        guest: "Juliana Almeida",
        checkIn: "09/09/2024",
        checkOut: "11/09/2024",
        category: "Standard",
        situation: "busy",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
      {
        uh: "Quarto 9",
        guest: "Fernando Reis",
        checkIn: "06/09/2024",
        checkOut: "13/09/2024",
        category: "Luxo",
        situation: "busy",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
      {
        uh: "Quarto 10",
        guest: "Mariana Castro",
        checkIn: "10/09/2024",
        checkOut: "17/09/2024",
        category: "Standard",
        situation: "booked",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
      {
        uh: "Quarto 11",
        guest: "Lucas Pereira",
        checkIn: "15/09/2024",
        checkOut: "20/09/2024",
        category: "Luxo",
        situation: "preBooked",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
      {
        uh: "Quarto 12",
        guest: "Roberta Farias",
        checkIn: "13/09/2024",
        checkOut: "19/09/2024",
        category: "Premium",
        situation: "busy",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
      },
    ];
  }

  get isDarkMode(): boolean {
    return this.configService.config().darkMode;
  }

  getCardGroundColor(situation: string) {
    if (situation == "preBooked" || situation == "booked") {
      return "blue-background";
    } else if (situation == "busy") {
      return "red-background";
    } else if (situation == "inCleaning") {
      return "light-blue-background";
    } else if (situation == "available") {
      return "green-background";
    } else if (situation == "blocked") {
      return "grey-background";
    }
  }

  getSituationLabel(situation: string) {
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

  getSituationTagColor(situation: string) {
    if (situation == "preBooked") {
      return "warning";
    } else if (situation == "booked") {
      return "primary";
    } else if (situation == "busy") {
      return "danger";
    } else if (situation == "inCleaning") {
      return "secondary";
    } else if (situation == "available") {
      return "success";
    } else if (situation == "blocked") {
      return "contrast";
    }
  }

  getNextSituation(reservation) {
    console.log(reservation);
    if (
      reservation.situation == "booked" ||
      reservation.situation == "preBooked"
    ) {
      return (reservation.situation = "busy");
    }

    if (reservation.situation == "busy") {
      return (reservation.situation = "inCleaning");
    }

    if (reservation.situation == "inCleaning") {
      return (reservation.situation = "available");
    }

    if (reservation.situation == "available") {
      return (reservation.situation = "booked");
    }

    if (reservation.situation == "blocked") {
      return (reservation.situation = "available");
    }
  }

  goToReservationDetail(reservation) {
    this.router.navigate(["/reservationDetail", "detailReservation"], {
      queryParams: { reservation: JSON.stringify(reservation) },
    });
  }

  showDialog() {
    this.ref = this.dialogService.open(NewReservation, {
      header: "Nova reserva",
      width: "50vw",
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
}
