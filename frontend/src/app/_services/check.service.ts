import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private router:Router) { }
  isauthenticated():boolean{
    if(sessionStorage.getItem('token')!==null){
    return true;
  }
      return false;
  }
  accessibility(){
    if(!this.isauthenticated)
    {
      this.router.navigate(["/login"]);
    }
  }
}
