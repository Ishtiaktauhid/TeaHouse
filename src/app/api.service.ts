import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    PHP_API_SERVER = "http://localhost/api";
    constructor (private httpClient:HttpClient){ }
    readProducts(): Observable <Product[]>{
        return this.httpClient.get<Product[]>(`${this.PHP_API_SERVER}/products.php`);
    }
}