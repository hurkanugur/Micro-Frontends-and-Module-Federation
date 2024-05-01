import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarButtonComponent } from "./sidebar-button/sidebar-button.component";
import { Router } from '@angular/router';
import { ApplicationService } from '../../services/application.service';
import { ApplicationType } from '../../enums/application-type';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, ButtonModule, SidebarButtonComponent]
})

export class SidebarComponent {

  constructor(private applicationService: ApplicationService, private _router: Router) { }

  buttonOnClicked(applicationTypeRouteName: string): void {
    this._router.navigate([applicationTypeRouteName]);
  }

  isSelected(applicationTypeString: string): boolean {
    let applicationType: ApplicationType = ApplicationType.getApplicationTypeFromString(applicationTypeString);
    return applicationType === this.applicationService.getActiveApplication();
  }
}
