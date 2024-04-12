import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}


    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders:{
                'x-rapidapi-key':'9037939a91msh6613bfac2da4929p15ee2cjsn0cee449337cd',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams:{
                key: ''
            }
        });
    }
}