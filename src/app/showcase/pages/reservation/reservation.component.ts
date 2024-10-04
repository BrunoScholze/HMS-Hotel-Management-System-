import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { AppConfigService } from "@service/appconfigservice";
import { NewReservation } from "@doc/dynamicdialog/new-reservation";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { NewGuest } from "@doc/dynamicdialog/new-guest";
import { Router } from "@angular/router";
import { Reservation } from "@layout/models/reservation.model";

interface City {
  name: string;
  code: string;
}

@Component({
  templateUrl: "./reservation.component.html",
  providers: [DialogService],
  styleUrls: ["reservation.component.scss"],
})
export class ReservationComponent {
  visible: boolean = false;
  subscription: Subscription;
  cities!: City[];
  ref: DynamicDialogRef | undefined;
  selectedCities!: City[];
  reservationList: Array<Reservation>;
  color: string = "#6466f1";

  constructor(
    private configService: AppConfigService,
    private titleService: Title,
    public dialogService: DialogService,
    private router: Router
  ) {
    this.titleService.setTitle("RoomWise");

    this.reservationList = [
      {
        number: "HO:000001",
        guest: "Bruno Scholze",
        uh: "Quarto 1",
        checkIn: "25/08/2024",
        checkOut: "29/08/2024",
        quantity: 2,
        adults: 2,
        children: 1,
        dailyRate: 200,
        carPlate: "ABC-1234",
        situation: "busy",
        additionalServices: ["Spa day", "Private dinner"],
      },
      {
        number: "HO:000002",
        guest: "Maria Silva",
        uh: "Quarto 2",
        checkIn: "26/08/2024",
        checkOut: "30/08/2024",
        quantity: 1,
        adults: 1,
        children: 0,
        dailyRate: 180,
        carPlate: "XYZ-5678",
        situation: "available",
        additionalServices: ["Horse riding"],
      },
      {
        number: "HO:000003",
        guest: "João Santos",
        uh: "Quarto 3",
        checkIn: "27/08/2024",
        checkOut: "31/08/2024",
        quantity: 3,
        adults: 2,
        children: 1,
        dailyRate: 220,
        carPlate: "JHK-9876",
        situation: "booked",
        additionalServices: ["City tour", "Spa day"],
      },
      {
        number: "HO:000004",
        guest: "Ana Costa",
        uh: "Quarto 4",
        checkIn: "28/08/2024",
        checkOut: "01/09/2024",
        quantity: 2,
        adults: 2,
        children: 0,
        dailyRate: 210,
        carPlate: "LMN-3456",
        situation: "preBooked",
        additionalServices: ["Private dinner"],
      },
      {
        number: "HO:000005",
        guest: "Carlos Lima",
        uh: "Quarto 5",
        checkIn: "29/08/2024",
        checkOut: "02/09/2024",
        quantity: 1,
        adults: 1,
        children: 0,
        dailyRate: 190,
        carPlate: "GHI-1234",
        situation: "inCleaning",
        additionalServices: ["City tour"],
      },
      {
        number: "HO:000006",
        guest: "Laura Oliveira",
        uh: "Quarto 6",
        checkIn: "30/08/2024",
        checkOut: "03/09/2024",
        quantity: 2,
        adults: 2,
        children: 0,
        dailyRate: 215,
        carPlate: "JKL-5678",
        situation: "busy",
        additionalServices: ["Spa day", "Horse riding"],
      },
      {
        number: "HO:000007",
        guest: "Pedro Fernandes",
        uh: "Quarto 7",
        checkIn: "01/09/2024",
        checkOut: "05/09/2024",
        quantity: 4,
        adults: 2,
        children: 2,
        dailyRate: 250,
        carPlate: "OPQ-6789",
        situation: "available",
        additionalServices: ["Private dinner", "City tour"],
      },
      {
        number: "HO:000008",
        guest: "Patrícia Souza",
        uh: "Quarto 8",
        checkIn: "02/09/2024",
        checkOut: "06/09/2024",
        quantity: 1,
        adults: 1,
        children: 0,
        dailyRate: 180,
        carPlate: "RST-4321",
        situation: "booked",
        additionalServices: ["Horse riding"],
      },
      {
        number: "HO:000009",
        guest: "Ricardo Andrade",
        uh: "Quarto 9",
        checkIn: "03/09/2024",
        checkOut: "07/09/2024",
        quantity: 2,
        adults: 2,
        children: 0,
        dailyRate: 200,
        carPlate: "UVW-8765",
        situation: "inCleaning",
        additionalServices: ["Spa day"],
      },
      {
        number: "HO:000010",
        guest: "Camila Rocha",
        uh: "Quarto 10",
        checkIn: "04/09/2024",
        checkOut: "08/09/2024",
        quantity: 1,
        adults: 1,
        children: 0,
        dailyRate: 190,
        carPlate: "XZY-1098",
        situation: "preBooked",
        additionalServices: ["City tour"],
      },
      {
        number: "HO:000011",
        guest: "Roberto Almeida",
        uh: "Quarto 11",
        checkIn: "05/09/2024",
        checkOut: "09/09/2024",
        quantity: 3,
        adults: 2,
        children: 1,
        dailyRate: 230,
        carPlate: "BCA-5432",
        situation: "busy",
        additionalServices: ["Spa day", "Private dinner"],
      },
      {
        number: "HO:000012",
        guest: "Fernanda Ribeiro",
        uh: "Quarto 12",
        checkIn: "06/09/2024",
        checkOut: "10/09/2024",
        quantity: 2,
        adults: 2,
        children: 0,
        dailyRate: 210,
        carPlate: "DEF-5678",
        situation: "booked",
        additionalServices: ["Horse riding", "City tour"],
      },
      {
        number: "HO:000013",
        guest: "Eduardo Martins",
        uh: "Quarto 13",
        checkIn: "07/09/2024",
        checkOut: "11/09/2024",
        quantity: 4,
        adults: 2,
        children: 2,
        dailyRate: 250,
        carPlate: "GHI-9876",
        situation: "inCleaning",
        additionalServices: ["Private dinner", "City tour"],
      },
      {
        number: "HO:000014",
        guest: "Juliana Costa",
        uh: "Quarto 14",
        checkIn: "08/09/2024",
        checkOut: "12/09/2024",
        quantity: 2,
        adults: 2,
        children: 0,
        dailyRate: 220,
        carPlate: "JKL-2345",
        situation: "available",
        additionalServices: ["Horse riding"],
      },
      {
        number: "HO:000015",
        guest: "Marcos Oliveira",
        uh: "Quarto 15",
        checkIn: "09/09/2024",
        checkOut: "13/09/2024",
        quantity: 1,
        adults: 1,
        children: 0,
        dailyRate: 190,
        carPlate: "MNO-5432",
        situation: "booked",
        additionalServices: ["Spa day"],
      },
      {
        number: "HO:000016",
        guest: "Sofia Barbosa",
        uh: "Quarto 16",
        checkIn: "10/09/2024",
        checkOut: "14/09/2024",
        quantity: 3,
        adults: 2,
        children: 1,
        dailyRate: 230,
        carPlate: "PQR-8765",
        situation: "preBooked",
        additionalServices: ["Private dinner"],
      },
      {
        number: "HO:000017",
        guest: "Gabriel Dias",
        uh: "Quarto 17",
        checkIn: "11/09/2024",
        checkOut: "15/09/2024",
        quantity: 2,
        adults: 2,
        children: 0,
        dailyRate: 210,
        carPlate: "STU-4321",
        situation: "busy",
        additionalServices: ["City tour"],
      },
      {
        number: "HO:000018",
        guest: "Isabela Ferreira",
        uh: "Quarto 18",
        checkIn: "12/09/2024",
        checkOut: "16/09/2024",
        quantity: 1,
        adults: 1,
        children: 0,
        dailyRate: 190,
        carPlate: "VWX-2345",
        situation: "inCleaning",
        additionalServices: ["Spa day"],
      },
      {
        number: "HO:000019",
        guest: "Lucas Mendes",
        uh: "Quarto 19",
        checkIn: "13/09/2024",
        checkOut: "17/09/2024",
        quantity: 2,
        adults: 2,
        children: 0,
        dailyRate: 200,
        carPlate: "YZA-6789",
        situation: "available",
        additionalServices: ["Horse riding", "City tour"],
      },
      {
        number: "HO:000020",
        guest: "Aline Cavalcanti",
        uh: "Quarto 20",
        checkIn: "14/09/2024",
        checkOut: "18/09/2024",
        quantity: 3,
        adults: 2,
        children: 1,
        dailyRate: 230,
        carPlate: "BCD-7654",
        situation: "booked",
        additionalServices: ["Private dinner", "Horse riding"],
      },
    ];
  }

  get isDarkMode(): boolean {
    return this.configService.config().darkMode;
  }

  goToReservationDetail(reservation) {
    this.router.navigate(["/reservationDetail", "detailReservation"], {
      queryParams: { reservation: JSON.stringify(reservation) },
    });
  }

  goToNewReservationDetail() {
    this.router.navigate(["/reservationDetail", "newReservation"]);
  }
}
