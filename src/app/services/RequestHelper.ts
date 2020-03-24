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
            console.log(res);

            ajaxResponse.statusCode = res.status;

            if (res.status == 200) {
                ajaxResponse.response = res.data;
            }

            console.log("bitti");
        }).catch(err => {
            console.log(err);
            ajaxResponse.statusCode = err.status;

        });


        return ajaxResponse;
    }

    async Post<T>(request: RequestDto): Promise<ResponseDto<T>> {
        return this.callApi<T>(request, "POST");


        const ajaxResponse = new ResponseDto<T>();

        axios.get(request.apiUrl)
            .then(res => {
                ajaxResponse.statusCode = res.status;

                if (res.status == 200) {
                    ajaxResponse.response = res.data;
                }
            })

        return ajaxResponse;
    }

    async Get<T>(request: RequestDto): Promise<ResponseDto<T>> {
        console.log("basladi");
        return await this.callApi<T>(request, "GET");

        const ajaxResponse = new ResponseDto<T>();


        axios.get(request.apiUrl + request.methodName + "?name=kari")
            .then(res => {
                ajaxResponse.statusCode = res.status;

                if (res.status == 200) {
                    ajaxResponse.response = res.data;
                }
            })

        return ajaxResponse;
    }
}

export default new RequestHelper;