import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsModule } from './questions/questions.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppHttpInterceptor } from './core/http/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    QuestionsModule,
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
