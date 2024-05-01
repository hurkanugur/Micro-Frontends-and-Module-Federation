import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarButtonComponent } from "./toolbar-button/toolbar-button.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ToolbarModule, ButtonModule, InputTextModule, ToolbarButtonComponent, AvatarComponent]
})
export class ToolbarComponent {
  searchBarValue: string | undefined;

  menuButtonOnClick() {
    alert('Menu Button');
  }

  avatarOnClick() {
    alert('Avatar Button');
  }

  searchButtonOnClick() {
    alert('Search Button');
  }
}
