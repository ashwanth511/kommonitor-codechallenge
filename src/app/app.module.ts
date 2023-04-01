import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { ApicallService } from './apicall.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SpatialComponent } from './spatial/spatial.component';
import { GeoresourcesComponent } from './georesources/georesources.component';
@NgModule({
  declarations: [
    AppComponent,
    SpatialComponent,
    GeoresourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    FormsModule
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
