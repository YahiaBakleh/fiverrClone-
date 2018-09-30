"use strict";
module.exports = {

  database: process.env.DATABASE || 'mongodb://fiverrclone:fiverrclone@ds161162.mlab.com:61162/fiverrclone',
  // 'mongodb://root:abc123@ds139791.mlab.com:39791/arashfiverr',
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'fiverclone',

}
