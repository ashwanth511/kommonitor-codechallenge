import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpclient:HttpClient){
  }
  url='https://demo.kommonitor.de/data-management/management/public/';
  getgeoresourcesdata(id:string,date:string):Observable<any>{
    console.log("the id received",id)
    return this.httpclient.get(`${this.url}/georesources/${id}/${date}`)
  }

  getspatialdata(id:string,date:string):Observable<any>{
return this.httpclient.get(`${this.url}/spatial-units/${id}/${date}`)
  }

}


