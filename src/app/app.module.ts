import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardSumaryComponent } from './card-sumary/card-sumary.component';
import { CardListComponent } from './card-list/card-list.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHeaderComponent,
    CardSumaryComponent,
    CardListComponent,
    PromoCodeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
