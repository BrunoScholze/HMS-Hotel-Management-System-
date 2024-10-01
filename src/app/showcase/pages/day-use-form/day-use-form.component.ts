import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { AppConfigService } from "@service/appconfigservice";
import { stat } from "fs";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
  templateUrl: "./day-use-form.component.html",
  styleUrls: ["day-use-form.component.scss"],
})
export class DayUseFormComponent {
  subscription: Subscription;
  visitors: any;
  pageTitle: string;
  dayUse: any;
  newDayUse: boolean = false;
  addOptions: MenuItem[];


  constructor(
    private configService: AppConfigService,
    private titleService: Title,
    private metaService: Meta,
    public route: ActivatedRoute
  ) {
    this.titleService.setTitle("Day use - RoomWise");
    this.metaService.updateTag({
      name: "description",
      content: "Página de day use",
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["dayUse"]) {
        this.pageTitle = "Configuração de Diária";

        this.dayUse = JSON.parse(params["dayUse"]);
      } else {
        this.pageTitle = "Nova Diária";
        this.newDayUse = true;

        this.dayUse = {
          DU: "",
          visitor: "",
          stayDate: "",
          quantity: 0,
          status: "",
          payment: "",
        };
      }
    });

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
  }

  get isDarkMode(): boolean {
    return this.configService.config().darkMode;
  }

  getDayUseStatusLabel(status: string) {
    if (status == "inHome") {
      return "No Hotel";
    } else {
      return "Concluido";
    }
  }

  getDayUseStatusTagColor(status: string) {
    if (status == "inHome") {
      return "info";
    } else {
      return "success";
    }
  }
}
