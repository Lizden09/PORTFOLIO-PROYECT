import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from "./skills/skills.component";
import { CommonModule } from '@angular/common';
import { ProyectsComponent } from "./proyects/proyects.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SkillsComponent, CommonModule, ProyectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PORTFOLIO';
}
