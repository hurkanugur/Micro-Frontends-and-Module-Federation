import { Injectable } from '@angular/core';
import { ApplicationType } from '../enums/application-type';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private activeApplication: ApplicationType;

  constructor() {
    this.activeApplication = ApplicationType.home;

  }

  setActiveApplication(applicationType: ApplicationType): void {
    this.activeApplication = applicationType;
  }

  getActiveApplication(): ApplicationType {
    return this.activeApplication;
  }
}
