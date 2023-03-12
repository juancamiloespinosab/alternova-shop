import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: 'button[downloadJson]',
})
export class DownloadJsonDirective {
  constructor() {}

  @Input() json: any;

  @HostListener('click')
  onClick() {
    const dataStr = JSON.stringify(this.json);
    const dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const date = new Date().toLocaleString();
    const exportFileDefaultName = `Order ${date}.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }
}
