import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavPanelComponent {

  constructor(
    private menuService: MenuService
  ) {}

  closeMenu(): void {
    this.menuService.closeMenu();
  }
}
