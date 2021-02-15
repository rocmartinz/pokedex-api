import Response from './Response';

const headers = {
  'Access-Control-Allow-Origin': '*',
};
const statusCode = 500;

export default class InternalServerErrorResponse extends Response {
  constructor(body) {
    super({ body, headers, statusCode });
  }
}