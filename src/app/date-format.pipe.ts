//  Loiane Groner  https://loiane.com/2017/08/angular-tips-formatting-dates-with-a-custom-date-pipe-dd-mm-yyyy/

import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Constants } from './constants';


@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform  {

  transform(value: any, args?: any): any {

    return super.transform(value, Constants.DATE_EDIT_FMT);
  }

}
