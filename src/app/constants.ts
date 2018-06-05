
//  Loiane Groner  https://loiane.com/2017/08/angular-tips-formatting-dates-with-a-custom-date-pipe-dd-mm-yyyy/


export class Constants {
  static readonly DATE_EDIT_FMT = 'M/d/y';
  static readonly DATE_FMT = 'dd/MMM/yyyy'; 
  static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} hh:mm:ss`;
  static readonly TIME_FMT = 'shortTime'; //   `hh:mm:ss`;
  static readonly TIME_EDIT_FMT = 'shortTime'; //   `hh:mm:ss`;
}
