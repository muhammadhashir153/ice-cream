import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdminSubject = new BehaviorSubject<boolean>(this.getAdminStatus());

  isAdmin$ = this.isAdminSubject.asObservable();

  constructor() {}

  private getAdminStatus(): boolean {
    return !!sessionStorage.getItem('IsAdmin');
  }

  updateAdminStatus(isAdmin: boolean): void {
    if (isAdmin) {
      sessionStorage.setItem('IsAdmin', 'true');
    } else {
      sessionStorage.removeItem('IsAdmin');
    }
    this.isAdminSubject.next(isAdmin);
  }

  logout(): void {
    sessionStorage.clear();
    this.isAdminSubject.next(false);
  }
}
