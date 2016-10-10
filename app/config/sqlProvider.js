const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  users: {
    all: sql('./sql/user/all.sql'),
    find: sql('./sql/user/find.sql'),
    create: sql('.sql/user/create.sql'),
    delete: sql('./sql/user/delete.sql'),
  },
  questions: {
    all: sql('./sql/question/all.sql'),
    find: sql('./sql/question/find.sql'),
    create: sql('./sql/question/create.sql'),
    update: sql('./sql/question/update.sql'),
    delete: sql('./sql/question/delete.sql'),
  },
};

module.exports = sqlProvider;
