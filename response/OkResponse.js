import Response from './Response';

const headers = {
  'Access-Control-Allow-Origin': '*',
};
const statusCode = 200;

export default class OkResponse extends Response {
  constructor(body) {
    super({ body, headers, statusCode });
  }
}