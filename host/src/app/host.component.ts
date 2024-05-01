import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ContentComponent } from "./components/content/content.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";


@Component({
  selector: 'app-host',
  standalone: true,
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  imports: [CommonModule, RouterModule, ToolbarComponent, ContentComponent, SidebarComponent]
})
export class HostComponent {

}
