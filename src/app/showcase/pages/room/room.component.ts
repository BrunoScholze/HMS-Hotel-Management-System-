import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { AppConfigService } from "@service/appconfigservice";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { Router } from "@angular/router";

interface City {
  name: string;
  code: string;
}

@Component({
  templateUrl: "./room.component.html",
  providers: [DialogService],
  styleUrls: ["room.component.scss"],
})
export class RoomComponent {
  visible: boolean = false;
  subscription: Subscription;
  cities!: City[];
  ref: DynamicDialogRef | undefined;
  selectedCities!: City[];
  room: Array<any>;

  constructor(
    private configService: AppConfigService,
    private router: Router,
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

    this.room = [
        {
          id: 1,
          name: "Beira mar",
          description: "Quartos beira mar",
          capacity: 4,
          active: true,
          category: ["Vista para o mar", "Luxo"],
        },
        {
          id: 2,
          name: "Suíte Executiva",
          description: "Quartos de alto padrão com vista panorâmica",
          capacity: 4,
          active: false,
          category: ["Executivo", "Panorâmica"],
        },
        {
          id: 3,
          name: "Quarto Standard",
          description: "Quartos simples e econômicos",
          capacity: 4,
          active: true,
          category: ["Econômico", "Simples"],
        },
        {
          id: 4,
          name: "Quarto Luxo",
          description: "Quartos luxuosos com comodidades premium",
          capacity: 4,
          active: false,
          category: ["Luxo", "Premium"],
        },
        {
          id: 5,
          name: "Suíte Presidencial",
          description: "Suítes de luxo para clientes VIP",
          capacity: 4,
          active: false,
          category: ["Presidencial", "VIP"],
        },
        {
          id: 6,
          name: "Chalé Familiar",
          description: "Acomodações espaçosas para famílias",
          capacity: 4,
          active: true,
          category: ["Familiar", "Espaçoso"],
        },
        {
          id: 7,
          name: "Quarto Econômico",
          description: "Quartos acessíveis para estadias rápidas",
          capacity: 4,
          active: true,
          category: ["Econômico", "Acessível"],
        },
        {
          id: 8,
          name: "Suíte com Varanda",
          description: "Suítes com varanda e vista para o jardim",
          capacity: 4,
          active: false,
          category: ["Varanda", "Vista Jardim"],
        },
        {
          id: 9,
          name: "Quarto para Deficientes",
          description: "Quartos adaptados para pessoas com necessidades especiais",
          capacity: 4,
          active: true,
          category: ["Adaptado", "Acessível"],
        },
        {
          id: 10,
          name: "Suíte Nupcial",
          description: "Suítes românticas para casais em lua de mel",
          capacity: 4,
          active: true,
          category: ["Romântico", "Nupcial"],
        },
        {
          id: 11,
          name: "Apartamento Executivo",
          description: "Apartamentos modernos para estadias longas",
          capacity: 4,
          active: false,
          category: ["Executivo", "Moderno"],
        },
        {
          id: 12,
          name: "Quarto Superior",
          description: "Quartos confortáveis com serviços adicionais",
          capacity: 4,
          active: true,
          category: ["Conforto", "Superior"],
        },
        {
          id: 13,
          name: "Vila Privativa",
          description: "Vilas isoladas com piscina privada",
          capacity: 4,
          active: false,
          category: ["Privativa", "Luxo"],
        },
        {
          id: 14,
          name: "Loft Moderno",
          description: "Lofts com design contemporâneo",
          capacity: 4,
          active: true,
          category: ["Moderno", "Contemporâneo"],
        },
        {
          id: 15,
          name: "Quarto com Vista para a Montanha",
          description: "Quartos com vista deslumbrante para a montanha",
          capacity: 4,
          active: true,
          category: ["Vista Montanha", "Paisagem"],
        },
        {
          id: 16,
          name: "Suíte com Jacuzzi",
          description: "Suítes equipadas com jacuzzi privada",
          capacity: 4,
          active: true,
          category: ["Jacuzzi", "Luxo"],
        },
        {
          id: 17,
          name: "Quarto Pet Friendly",
          description: "Quartos que permitem animais de estimação",
          capacity: 4,
          active: true,
          category: ["Pet Friendly", "Acessível"],
        },
        {
          id: 18,
          name: "Suíte Temática",
          description: "Suítes decoradas com temas especiais",
          capacity: 4,
          active: true,
          category: ["Temática", "Especial"],
        },
        {
          id: 19,
          name: "Quarto Twin",
          description: "Quartos com duas camas de solteiro",
          capacity: 4,
          active: true,
          category: ["Twin", "Duplo"],
        },
        {
          id: 20,
          name: "Quarto Conjugado",
          description: "Quartos interligados para famílias ou grupos",
          capacity: 4,
          active: true,
          category: ["Conjugado", "Familiar"],
        },
        {
          id: 21,
          name: "Quarto com Banheira",
          description: "Quartos equipados com banheiras de luxo",
          capacity: 4,
          active: true,
          category: ["Banheira", "Luxo"],
        },
      ];
      
  }

  get isDarkMode(): boolean {
    return this.configService.config().darkMode;
  }

  getSeverity(status: boolean) {
    switch (status) {
      case true:
        return "info";

      case false:
        return "danger";
    }
  }

  getValue(status: boolean) {
    switch (status) {
      case true:
        return "Ativo";

      case false:
        return "Inativo";
    }
  }

  navigateToRoomForm(room) {
    this.router.navigate(["/roomForm"], {
      queryParams: { room: JSON.stringify(room) },
    });
  }

}
