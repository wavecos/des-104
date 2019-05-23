import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumlist'
})
export class EnumlistPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let items: any[] = [];

    for (let key in value) {
      items.push({ key: key, value: value[key] });
    }

    return items;
  }

}
