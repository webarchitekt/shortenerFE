import { Component, OnInit } from '@angular/core';
import { UrlShortenerService } from "src/app/service/url-shortener.service";
import { Url } from "src/app/models/url";
import { Utils } from "src/app/utils/utils";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  value = '';
  url: Url;
  urls: Url[] = [];
  newUrl = new Url();
  err: string;
  message: boolean;

  constructor(
    public urlService: UrlShortenerService,
    public utils: Utils,
  ) {}

  ngOnInit() {
  }

  generateUrl(url: string) {
    this.preValidate(url);
    this.message = false;
    this.urlService.generateUrl(this.newUrl).pipe().subscribe({
        next: (response: Url) => {
          this.url = response;
          this.message = true;
        },
        error: (error: any) => {
          this.err = error.error;
          this.utils.openSnackBar(this.err)
        }
      }
    )
  }

  preValidate(url: string) {
    if(url.startsWith('https://', 0-8)) {
      this.newUrl = { 'originalUrl': url };
    } else {
      this.newUrl = { 'originalUrl': 'https://' + url };
    }
  }

  copyToClipboard(copy: string) {
    navigator.clipboard.writeText(copy).then();
    this.utils.openSuccessSnackBar('Copied URL:' + copy);
  }

}
