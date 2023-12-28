import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductsComponent } from "./products/products.component";
import { StoreComponent } from "./store/store.component";
import { ApiComponent } from "./api/api.component";

const routes: Routes = [
    {path: "home", component: HomeComponent },
    {path: "about", component: AboutComponent },
    {path: "contact", component: ContactComponent },
    {path: "products", component: ProductsComponent },
    {path: "store", component: StoreComponent },
    {path: "api", component: ApiComponent },
    {path: "", component: HomeComponent }

]
export const routing = RouterModule.forRoot(routes);