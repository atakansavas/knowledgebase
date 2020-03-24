// import { ApiUrl } from '../common/enums/ApiUrl'
// import { Dictionary } from './system/Dictionary';

export default class ResponseDto<T> {
    statusCode!: number;
    response!: T;
}