const router = require('express').Router();

router.get('/', (req, res) => {
  const ipaddress = req.headers['host'];
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.send({
    ipaddress,
    language,
    software
  });
});

module.exports = router;
