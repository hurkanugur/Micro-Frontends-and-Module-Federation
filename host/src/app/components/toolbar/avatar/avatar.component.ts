import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() avatarLetter: string | undefined;
  @Output() avatarClickEvent: EventEmitter<void>;

  constructor() {
    this.avatarClickEvent = new EventEmitter<void>();
  }

  onClick(): void {
    this.avatarClickEvent.emit();
  }
}
