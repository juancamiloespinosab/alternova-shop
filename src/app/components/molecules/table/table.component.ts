import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CoreModule } from '@core/core.module';
import { TableActionConfig, TableConfig } from '@core/interfaces';
import { SharedModule } from '@shared/shared.module';
import { CartManagerService } from '@core/services/app/cart-manager.service';
import { CartProduct } from '@core/models';
import { Observable, Subject } from 'rxjs';
import { TableAction } from '@core/interfaces/table-action.interface';

@Component({
  imports: [CoreModule, SharedModule],
  selector: 'table[app-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
})
export class TableComponent implements AfterViewInit {
  @Input() data!: any;
  @Input() config!: TableConfig;

  @Output() actions: EventEmitter<TableAction> = new EventEmitter();

  constructor() {}

  emitAction(item: any, action: TableActionConfig) {
    const tableAction: TableAction = {
      actionName: action.name,
      item: item,
    };
    this.actions.emit(tableAction);
  }

  ngAfterViewInit(): void {}
}
