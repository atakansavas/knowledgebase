import { MethodName } from '../../common/enums/MethodName'
import { ApiUrl } from '../../common/enums/ApiUrl'
import { Dictionary } from './Dictionary';

export default class RequestDto {
    apiUrl!: ApiUrl; //Which api need to use.
    methodName!: MethodName; //Which api need to use.
    useToken!: boolean; //True if need Authorization or token.
    headers!: Dictionary<string>; //Custom headers.
    requestObject!: any;
}