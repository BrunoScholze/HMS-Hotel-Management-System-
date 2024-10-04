import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { AppConfigService } from "@service/appconfigservice";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ActivatedRoute, Router } from "@angular/router";
import { Room } from "@layout/models/room.model";

interface City {
  name: string;
  code: string;
}

@Component({
  templateUrl: "./room-form.component.html",
  providers: [DialogService],
  styleUrls: ["room-form.component.scss"],
})
export class RoomFormComponent {
  visible: boolean = false;
  subscription: Subscription;
  cities!: City[];
  ref: DynamicDialogRef | undefined;
  selectedCities!: City[];
  categoryChips: Array<any> = [];
  room: any;
  pageTitle: string = "";

  constructor(
    private configService: AppConfigService,
    public route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    public dialogService: DialogService
  ) {
    this.titleService.setTitle("Quartos - RoomWise");
    this.metaService.updateTag({ name: "description", content: "Quartos" });

    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ];
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["room"]) {
        this.pageTitle = "Configuração de Quartos";
        
        this.room = JSON.parse(params["room"]);
        this.getCategoryChips(this.room.category);
      } else {
        this.pageTitle = "Novo Quarto";

        this.room = new Room;
      }
    });
  }

  get isDarkMode(): boolean {
    return this.configService.config().darkMode;
  }

  getCategoryChips(categories: any[]) {
    categories.forEach((category) => {
      this.categoryChips.push(category);
    });

    console.log(this.categoryChips);
  }
}
