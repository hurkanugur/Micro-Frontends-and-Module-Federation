import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent {
  @Input() buttonIcon: string | undefined;
  @Input() buttonText: string | undefined;
  @Input() isSelected: boolean | undefined;
  @Output() buttonClickEvent: EventEmitter<void>;

  constructor() {
    this.buttonClickEvent = new EventEmitter<void>()
  }

  onClick(): void {
    this.buttonClickEvent.emit();
  }
}
