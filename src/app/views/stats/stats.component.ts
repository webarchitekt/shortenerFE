import { Component, OnInit } from '@angular/core';
import { Url } from "src/app/models/url";
import { Utils } from "src/app/utils/utils";
import { UrlShortenerService } from "../../service/url-shortener.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  url: Url;
  urls: Url[] = [];
  newUrl = new Url();
  err: string;
  message: boolean;
  longest: number;
  shortest: number;

  constructor(
    public urlService: UrlShortenerService,
    public utils: Utils,
  ) { }

  ngOnInit(): void {
    this.listAll()
  }

  listAll() {
    this.urlService.getAll().pipe().subscribe({
        next: (response: Url[]) => {
          this.longest = response.reduce(function (a, b) {
            return a.originalUrl.length > b.originalUrl.length ? a : b;
          }).originalUrl.length;

          this.shortest = response.reduce(function (a, b) {
            return a.originalUrl.length < b.originalUrl.length ? a : b;
          }).originalUrl.length;

          this.urls = response;
        },
        error: (error: any) => {
          this.err = error.error;
          this.utils.openSnackBar(this.err)
        }
      }
    )
  }
}
