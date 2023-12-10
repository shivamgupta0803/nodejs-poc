function apiKeys(req, res, next) {
  const api_key = "1234567";
  const userKey = req.query.api_key;
  if (userKey && (userKey === api_key)) {
    next();
  } else {
    res.json({
      message: "Not valid this url",
    });
  }
//   console.log(req.query);
//   console.log(req.query.api_key);
}

module.exports = apiKeys;
