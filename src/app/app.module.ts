import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { FactScrollerComponent } from './fact-scroller/fact-scroller.component';
import { HttpClientModule } from '@angular/common/http';
import { FactService } from './services/fact.service';

@NgModule({
  declarations: [
    AppComponent,
    FactScrollerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    HttpClientModule
  ],
  providers: [
    FactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
