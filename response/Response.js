export default class Response {
  constructor({ body, headers, statusCode }) {
    this.body = JSON.stringify(body);
    this.headers = headers;
    this.statusCode = statusCode;
  }
}