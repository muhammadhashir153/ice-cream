import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private apiUrl = "/api/Users";

    constructor (private Http: HttpClient){}

    getUser() :Observable<any>{
        return this.Http.get<any[]>(this.apiUrl);
    }

    createUser(data:any) :Observable<any>{
        return this.Http.post(this.apiUrl, data);
    }
}
