exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello World Lambda :)')
  };
  return response;
};