export type TName = 'Autumn' | 'Summar' | 'Fall';

export type TMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TCode = '01' | '02' | '03';

export type TAcademicSemester = {
  name: TName;
  year: Date;
  code: TCode;
  startMonth: TMonth;
  endMonth: TMonth;
};
