import { BaseService } from ".";

class RequsetServiceClass extends BaseService {
    constructor() {
        super('api')
    }

    getRequests() {
        return this.httpClient.get(this.getPath('/request'))
    }
}

export const RequestService = new RequsetServiceClass();