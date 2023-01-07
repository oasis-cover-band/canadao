import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopPanelComponent {

  constructor(
    private menuService: MenuService
  ) {
  }

  toggleMenu(): void {
    this.menuService.toggleMenu();
  }
}
