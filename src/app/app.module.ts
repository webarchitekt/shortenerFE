import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule} from "@angular/material/icon";
import { MatCardModule  } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { StatsComponent } from './views/stats/stats.component';
import { GeneratorComponent } from './views/generator/generator.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule} from "@angular/material/list";
import { MatChipsModule  } from "@angular/material/chips";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    GeneratorComponent,
    ToolbarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatChipsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
