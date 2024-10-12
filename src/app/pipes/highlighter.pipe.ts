import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlighterPipe implements PipeTransform {
  transform(value: any, search: string): string {
    if (!search) {
      return value;
    }

    const stringValue = String(value);

    const regex = new RegExp(`(${search})`, 'gi');
    
    return stringValue.replace(regex, `<span class="marker">$1</span>`);
  }
}
