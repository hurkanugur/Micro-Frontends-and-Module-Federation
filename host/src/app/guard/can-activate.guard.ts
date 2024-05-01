import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ApplicationType } from '../enums/application-type';
import { ApplicationService } from '../services/application.service';
import { ThemeService } from '../services/theme.service';

export const canActivateGuard: CanActivateFn = (_route, _state) => {
  let applicationService: ApplicationService = inject(ApplicationService);
  let themeService: ThemeService = inject(ThemeService);

  applicationService.setActiveApplication(_route.data['applicationType'] as ApplicationType);
  themeService.switchTheme(applicationService.getActiveApplication());
  return true;
};
