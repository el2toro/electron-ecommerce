import { NgModule } from "@angular/core";
import { FeatureLandingRoutingModule } from "./landing-page-feature-routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [

    ],
    imports: [
      FeatureLandingRoutingModule,
      FontAwesomeModule
    ],
    providers: [],
    exports: []
  })
  export class FeatureLandingPageModule { }