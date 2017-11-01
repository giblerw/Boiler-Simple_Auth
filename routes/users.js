const express = require('express');
const userDB = require('../db/userQueries')

const router = express.Router();

router.post('/create', (req, res, next) => {
  req.body.code = generateCode();

userDB.insert(req.body)
  .then(code => {
    res.redirect(`/show-code?code=${code}`)
  })
});

function generateCode() {
  const alphaNum = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

const code = [];

for (var i = 0; i < 5; i++) {
  const r = Math.floor(Math.random() * alphaNum.length);
  code.push(alphaNum[r]);
}
return code.join('');
}

module.exports = router;
