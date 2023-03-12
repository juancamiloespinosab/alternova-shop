import { Component, Input } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { TableConfig } from '@core/interfaces';
import { SharedModule } from '@shared/shared.module';

@Component({
  imports: [CoreModule, SharedModule],
  selector: 'table[app-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
})
export class TableComponent {
  @Input() data!: any;

  @Input() config!: TableConfig;
}
