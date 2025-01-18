import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root' // This ensures the service is provided globally
})

export class CartServices{

    private apiUrl = "/api/Carts";

    constructor(
        private http: HttpClient
    ){}

    getCartItem():Observable<any>{
        return this.http.get(this.apiUrl);
    }
}