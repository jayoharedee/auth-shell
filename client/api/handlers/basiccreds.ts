import ifm = require('../Interfaces');

export class BasicCredentialHandler implements ifm.IRequestHandler {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401
  prepareRequest(options: any): void {
    options.headers['Authorization'] = 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64');
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