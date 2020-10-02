import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorkersService } from './workers.service';
import { WorkerFilterPipe } from './worker-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    WorkerFilterPipe,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [WorkersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
