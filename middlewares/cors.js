const allowedCors = [
  'http://movies.annamolly888.nomoredomainswork.ru',
  'https://movies.annamolly888.nomoredomainswork.ru',
  'http://localhost:3000',
  'https://localhost:3000',
];

const cors = (req, res, next) => {
  const { origin } = req.headers;
  console.log('Origin:', origin);
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', requestHeaders || '');

    if (method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
      res.header('Access-Control-Allow-Headers', requestHeaders);
      res.header('Access-Control-Max-Age', 3600);
      return res.status(200).send();
    }
  }

  return next();
};

module.exports = { cors };
