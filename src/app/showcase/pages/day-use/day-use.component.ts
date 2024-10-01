import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { AppConfigService } from "@service/appconfigservice";
import { stat } from "fs";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./day-use.component.html",
  styleUrls: ["day-use.component.scss"],
})
export class DayUseComponent {
  subscription: Subscription;
  visitors: any;

  constructor(
    private configService: AppConfigService,
    private titleService: Title,
    private metaService: Meta,
    private router: Router

  ) {
    this.titleService.setTitle("Day use - RoomWise");
    this.metaService.updateTag({
      name: "description",
      content: "Página de day use",
    });

    this.visitors = [
      {
        DU: "000001",
        visitor: "Bruno Scholze",
        stayDate: "10/01/2024",
        quantity: 2,
        status: "inHome",
        payment: "pending",
        dailyRate: 200,
        adults: 2,
        children: 0,
        additionalServices: ["Horse riding", "Spa day"]
      },
      {
        DU: "000002",
        visitor: "Maria Silva",
        stayDate: "12/01/2024",
        quantity: 1,
        status: "completed",
        payment: "completed",
        dailyRate: 150,
        adults: 1,
        children: 0,
        additionalServices: ["City tour"]
      },
      {
        DU: "000003",
        visitor: "Carlos Souza",
        stayDate: "15/01/2024",
        quantity: 3,
        status: "inHome",
        payment: "pending",
        dailyRate: 300,
        adults: 2,
        children: 1,
        additionalServices: ["Horse riding", "Private dinner"]
      },
      {
        DU: "000004",
        visitor: "Ana Pereira",
        stayDate: "20/01/2024",
        quantity: 4,
        status: "completed",
        payment: "completed",
        dailyRate: 400,
        adults: 2,
        children: 2,
        additionalServices: ["Spa day"]
      },
      {
        DU: "000005",
        visitor: "Felipe Oliveira",
        stayDate: "22/01/2024",
        quantity: 2,
        status: "inHome",
        payment: "pending",
        dailyRate: 220,
        adults: 2,
        children: 0,
        additionalServices: ["City tour", "Airport transfer"]
      },
      {
        DU: "000006",
        visitor: "Fernanda Costa",
        stayDate: "25/01/2024",
        quantity: 1,
        status: "completed",
        payment: "completed",
        dailyRate: 150,
        adults: 1,
        children: 0,
        additionalServices: ["Private dinner"]
      },
      {
        DU: "000007",
        visitor: "Lucas Martins",
        stayDate: "28/01/2024",
        quantity: 3,
        status: "inHome",
        payment: "pending",
        dailyRate: 300,
        adults: 2,
        children: 1,
        additionalServices: ["Horse riding", "City tour"]
      },
      {
        DU: "000008",
        visitor: "Gabriela Alves",
        stayDate: "30/01/2024",
        quantity: 2,
        status: "completed",
        payment: "completed",
        dailyRate: 200,
        adults: 2,
        children: 0,
        additionalServices: ["Spa day"]
      },
      {
        DU: "000009",
        visitor: "Rafael Lima",
        stayDate: "01/02/2024",
        quantity: 4,
        status: "inHome",
        payment: "pending",
        dailyRate: 400,
        adults: 2,
        children: 2,
        additionalServices: ["Airport transfer", "Private dinner"]
      },
      {
        DU: "000010",
        visitor: "Camila Ferreira",
        stayDate: "03/02/2024",
        quantity: 1,
        status: "completed",
        payment: "completed",
        dailyRate: 150,
        adults: 1,
        children: 0,
        additionalServices: ["City tour"]
      },
      {
        DU: "000011",
        visitor: "Renato Mendes",
        stayDate: "05/02/2024",
        quantity: 2,
        status: "inHome",
        payment: "pending",
        dailyRate: 220,
        adults: 2,
        children: 0,
        additionalServices: ["Horse riding"]
      },
      {
        DU: "000012",
        visitor: "Patrícia Carvalho",
        stayDate: "08/02/2024",
        quantity: 3,
        status: "completed",
        payment: "completed",
        dailyRate: 300,
        adults: 2,
        children: 1,
        additionalServices: ["Spa day", "City tour"]
      },
      {
        DU: "000013",
        visitor: "Pedro Gonçalves",
        stayDate: "10/02/2024",
        quantity: 2,
        status: "inHome",
        payment: "pending",
        dailyRate: 200,
        adults: 2,
        children: 0,
        additionalServices: ["Private dinner", "Horse riding"]
      },
      {
        DU: "000014",
        visitor: "Juliana Rocha",
        stayDate: "12/02/2024",
        quantity: 4,
        status: "completed",
        payment: "completed",
        dailyRate: 400,
        adults: 2,
        children: 2,
        additionalServices: ["City tour"]
      },
      {
        DU: "000015",
        visitor: "Marcelo Duarte",
        stayDate: "15/02/2024",
        quantity: 3,
        status: "inHome",
        payment: "pending",
        dailyRate: 300,
        adults: 2,
        children: 1,
        additionalServices: ["Horse riding"]
      },
      {
        DU: "000016",
        visitor: "Aline Ribeiro",
        stayDate: "18/02/2024",
        quantity: 1,
        status: "completed",
        payment: "completed",
        dailyRate: 150,
        adults: 1,
        children: 0,
        additionalServices: ["Spa day"]
      },
      {
        DU: "000017",
        visitor: "Tiago Nogueira",
        stayDate: "20/02/2024",
        quantity: 4,
        status: "inHome",
        payment: "pending",
        dailyRate: 400,
        adults: 2,
        children: 2,
        additionalServices: ["Horse riding", "Airport transfer"]
      },
      {
        DU: "000018",
        visitor: "Débora Lima",
        stayDate: "22/02/2024",
        quantity: 2,
        status: "completed",
        payment: "completed",
        dailyRate: 200,
        adults: 2,
        children: 0,
        additionalServices: ["City tour"]
      },
      {
        DU: "000019",
        visitor: "André Santos",
        stayDate: "25/02/2024",
        quantity: 3,
        status: "inHome",
        payment: "pending",
        dailyRate: 300,
        adults: 2,
        children: 1,
        additionalServices: ["Spa day"]
      },
      {
        DU: "000020",
        visitor: "Larissa Barros",
        stayDate: "27/02/2024",
        quantity: 1,
        status: "completed",
        payment: "completed",
        dailyRate: 150,
        adults: 1,
        children: 0,
        additionalServices: ["Private dinner"]
      },
      {
        DU: "000021",
        visitor: "Vitor Moreira",
        stayDate: "01/03/2024",
        quantity: 2,
        status: "inHome",
        payment: "pending",
        dailyRate: 200,
        adults: 2,
        children: 0,
        additionalServices: ["Horse riding", "City tour"]
      },
      {
        DU: "000022",
        visitor: "Sofia Mendes",
        stayDate: "03/03/2024",
        quantity: 3,
        status: "completed",
        payment: "completed",
        dailyRate: 300,
        adults: 2,
        children: 1,
        additionalServices: ["Airport transfer"]
      },
      {
        DU: "000023",
        visitor: "Gustavo Santana",
        stayDate: "05/03/2024",
        quantity: 4,
        status: "inHome",
        payment: "pending",
        dailyRate: 400,
        adults: 2,
        children: 2,
        additionalServices: ["Spa day"]
      },
      {
        DU: "000024",
        visitor: "Natália Andrade",
        stayDate: "07/03/2024",
        quantity: 1,
        status: "completed",
        payment: "completed",
        dailyRate: 150,
        adults: 1,
        children: 0,
        additionalServices: ["City tour"]
      },
      {
        DU: "000025",
        visitor: "Ricardo Lopes",
        stayDate: "09/03/2024",
        quantity: 2,
        status: "inHome",
        payment: "pending",
        dailyRate: 200,
        adults: 2,
        children: 0,
        additionalServices: ["Private dinner"]
      },
      {
        DU: "000026",
        visitor: "Isabela Neves",
        stayDate: "11/03/2024",
        quantity: 3,
        status: "completed",
        payment: "completed",
        dailyRate: 300,
        adults: 2,
        children: 1,
        additionalServices: ["Horse riding"]
      },
      {
        DU: "000027",
        visitor: "Thiago Correia",
        stayDate: "13/03/2024",
        quantity: 4,
        status: "inHome",
        payment: "pending",
        dailyRate: 400,
        adults: 2,
        children: 2,
        additionalServices: ["City tour", "Spa day"]
      },
      {
        DU: "000028",
        visitor: "Rita Carvalho",
        stayDate: "15/03/2024",
        quantity: 1,
        status: "completed",
        payment: "completed",
        dailyRate: 150,
        adults: 1,
        children: 0,
        additionalServices: ["Private dinner"]
      },
      {
        DU: "000029",
        visitor: "Eduardo Fernandes",
        stayDate: "17/03/2024",
        quantity: 2,
        status: "inHome",
        payment: "pending",
        dailyRate: 200,
        adults: 2,
        children: 0,
        additionalServices: ["Horse riding", "City tour"]
      },
      {
        DU: "000030",
        visitor: "Lara Souza",
        stayDate: "19/03/2024",
        quantity: 4,
        status: "completed",
        payment: "completed",
        dailyRate: 400,
        adults: 2,
        children: 2,
        additionalServices: ["Spa day"]
      }
    ];
    
  }

  get isDarkMode(): boolean {
    return this.configService.config().darkMode;
  }

  getStatuslabel(status: string) {
    if ((status == "inHome")) {
      return "No hotel";
    } else {
      return "Concluido";
    }
  }

  getStatusSeverity(status: string) {
    if ((status == "inHome")) {
      return "info";
    } else {
      return "success";
    }
  }

  getPaymentLabel(payment: string) {
    if ((payment == "completed")) {
      return "Pago";
    } else {
      return "Pendente";
    }
  }

  getPaymentSeverity(payment: string) {
    if ((payment == "completed")) {
      return "success";
    } else {
      return "warning";
    }
  }

  public navigateToDayUseForm(dayUse) {
    this.router.navigate(["/dayUseForm"], {
      queryParams: { dayUse: JSON.stringify(dayUse) },
    });
  }


}
