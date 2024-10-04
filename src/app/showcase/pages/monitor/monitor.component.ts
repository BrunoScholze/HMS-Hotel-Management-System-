import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { AppConfigService } from "@service/appconfigservice";
import { MenuItem } from "@layout/models/menuItem.model";

@Component({
  templateUrl: "./monitor.component.html",
  styleUrls: ["monitor.component.scss"],
})
export class MonitorComponent {
  data: any;
  options: any;

  dataReservation: any;
  optionsReservation: any;

  dataProduct: any;
  optionsProduct: any;

  dataServices: any;
  optionsServices: any;

  subscription: Subscription;
  ocupationMonitorData: Array<MenuItem>;

  constructor(
    private configService: AppConfigService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.titleService.setTitle("Monitor - RoomWise");

    this.ocupationMonitorData = [
      {
        icon: "pi pi-home",
        label: "U.H ocupados",
        value: "20/40",
        class: "yellow-color",
      },
      {
        icon: "pi pi-users",
        label: "N de hospedes",
        value: "340",
        class: "blue-color",
      },
      {
        icon: "pi pi-sun",
        label: "Day use",
        value: "33",
        class: "grey-color",
      },
      {
        icon: "pi pi-hart-line",
        label: "Total Faturado",
        value: "R$ 32,000",
        class: "green-color",
      },
      {
        icon: "pi pi-book",
        label: "Novas reservas",
        value: "3",
        class: "green-color",
      },
      {
        icon: "pi pi-ban",
        label: "Reservas Canceladas",
        value: "1",
        class: "red-color",
      },
      {
        icon: "pi pi-shopping-bag",
        label: "Produtos vendidos",
        value: "20",
        class: "purple-color",
      },
      {
        icon: "pi pi-briefcase",
        label: "Servico adicionais",
        value: "2",
        class: "grey-color",
      },
    ];
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    //Ocupação

    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Adultos",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
        },
        {
          label: "Crianças",
          data: [28, 48, 40, 19, 86, 27, 150],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          tension: 0.4,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    //Gráfico de reservas

    this.dataReservation = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Reservas concluidas",
          backgroundColor: documentStyle.getPropertyValue("--blue-500"),
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "Reservas canceladas",
          backgroundColor: documentStyle.getPropertyValue("--pink-500"),
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    this.optionsReservation = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    ///grafico produtos 

    this.dataProduct = {
      labels: ["Água", "Refrigerante", "cerveja"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };

    this.optionsProduct = {
      cutout: "60%",
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };

    ///// grafico servico
    
    this.dataServices = {
      labels: [
        "Passeios de cavalo",
        "Trilha de Quadriciclo",
        "Passeio de charrete",
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };

    this.optionsServices = {
      cutout: "60%",
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }

  get isDarkMode(): boolean {
    return this.configService.config().darkMode;
  }
}
