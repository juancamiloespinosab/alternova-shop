import { TABLE_COLUMN_FORMAT_VALUE } from '@core/enums';

export interface TableColumnsConfig {
  dataKey: string;
  align: 'left' | 'center' | 'right';
  format: TABLE_COLUMN_FORMAT_VALUE | string;
}
export interface TableActionConfig {
  name: string;
  icon: string;
  color: '' | 'primary' | 'accent' | 'warn';
}

export interface TableConfig {
  headersLabel: string[];
  columns: TableColumnsConfig[];
  actions?: TableActionConfig[];
}
