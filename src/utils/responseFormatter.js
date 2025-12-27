const responseFormatter = (success, message, data = null) => ({
    success,
    message,
    data,
  });
  
  export default responseFormatter;
  