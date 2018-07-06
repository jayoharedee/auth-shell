import ifm = require('../Interfaces');

export class BearerCredentialHandler implements ifm.IRequestHandler {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401
  prepareRequest(options: any): void {
    options.headers['Authorization'] = 'Bearer ' + this.token;
    options.headers['X-TFS-FedAuthRedirect'] = 'Suppress';
  }

  // This handler cannot handle 401
  canHandleAuthentication(response: ifm.IHttpClientResponse): boolean {
    return false;
  }

  handleAuthentication(httpClient: ifm.IHttpClient, requestInfo: ifm.IRequestInfo, objs): Promise<ifm.IHttpClientResponse> {
    return null;
  }
}