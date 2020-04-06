import axios from 'axios';
import RequestDto from '../models/system/RequestDto';
import ResponseDto from '../models/system/ResponseDto';

class RequestHelper {

    private async callApi<T>(request: RequestDto, method: any): Promise<ResponseDto<T>> {
        if (request == null) {
            throw "Request is empty";
        }

        let fullUrl = request.apiUrl.toString();
        fullUrl += request.methodName.toString();

        if (method == "GET" && request.requestObject != null) {
            fullUrl += "?" + request.requestObject.toString();
        }

        const ajaxResponse = new ResponseDto<T>();

        await axios.request({
            method: method,
            url: fullUrl,
            data: request.requestObject,
        }).then(res => {
            ajaxResponse.statusCode = res.status;

            if (res.status == 200) {
                ajaxResponse.response = res.data;
            }
        }).catch(err => {
            console.log(err);
            ajaxResponse.statusCode = err.status;
        });


        return ajaxResponse;
    }

    async Post<T>(request: RequestDto): Promise<ResponseDto<T>> {
        return await this.callApi<T>(request, "POST");
    }

    async Get<T>(request: RequestDto): Promise<ResponseDto<T>> {
        return await this.callApi<T>(request, "GET");
    }
}

export default new RequestHelper;