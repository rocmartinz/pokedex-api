module.exports = (error) => {
  return {
    statusCode: 500,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(error),
  }
}