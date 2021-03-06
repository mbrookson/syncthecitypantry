import { ProductDetailPage } from './../pages/product-detail/product-detail';
import { LoginPage } from './../pages/login/login';
import { IntroPage } from './../pages/intro/intro';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { RecommendationsPage } from '../pages/recommendations/recommendations';
import { ProfilePage } from '../pages/profile/profile';
import { PantryPage } from '../pages/pantry/pantry';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    RecommendationsPage,
    ProfilePage,
    PantryPage,
    TabsPage,
    LoginPage,
    ProductDetailPage,
    IntroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecommendationsPage,
    ProfilePage,
    PantryPage,
    TabsPage,
	LoginPage,
    ProductDetailPage,
    IntroPage
  ],
  providers: []
})
export class AppModule {}
