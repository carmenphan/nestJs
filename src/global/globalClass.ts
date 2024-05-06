export class ResponseData<D> {
  data : D | D[];
  stausCode : number;
  message : string;
  constructor(data : D | D[], stausCode : number, message : string) {
    this.data = data;
    this.stausCode = stausCode;
    this.message = message;
  }
}