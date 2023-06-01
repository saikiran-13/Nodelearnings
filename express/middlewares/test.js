function logger(req, res, next) {
  console.log(req.originalUrl);
  console.log('Entering into the posts page,checking validation');
  if (req.query.name == 'saikiran' && req.query.password == 'simform@123') {
    console.log('Authorization successful');
    next();
    return;
  }
  // next(); //comment this out to check for correct credentials
  res.send("You don't have access");
  console.log('Authorization Failure');
}
module.exports = { logger };
