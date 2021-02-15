import Response from './Response';

const headers = {
  'Access-Control-Allow-Origin': '*',
};
const statusCode = 400;

export default class BadRequestResponse extends Response {
  constructor(message) {
    const body = { message };
    super({ body, headers, statusCode });
  }
}