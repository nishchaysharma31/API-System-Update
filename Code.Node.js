const fetch = require('./fetch');
const fs = require('fs');
const path = './data.json';
fetch.get('http://demo4657392.mockable.io/list-tag-ids', (err, res) => {
  if (err) {
    console.log(err);
  }
  fs.writeFile(path, JSON.stringify(res.student_id), { flag: 'w' }, function (
    error
  ) {
    if (error) throw error;
  });
});