const app = require('express')
const express = app()
const PORT = process.env.PORT || 9000

// start server
express.listen(PORT, console.log('server start at port => ' + PORT))

// middler ware
express.use(app.json(true))
express.use('*', (req, res) => {
  const date = Date.now()
  console.log(`LOG|${date}| -> |REQ_URL|${req.originalUrl}|REQ_HEADER|${JSON.stringify(req.headers)}|REQ_BODY|${JSON.stringify(req.body)}`);
  req.next()
})

express.get('/', (req, res) => {
  res.status(200).json(users)
})

express.get('/:id', (req, res) => {
  const headers = req.headers
  const userId = req.params

  const foundUser = users.find(user => user.id === userId.id)
  console.log('foundUser: ', foundUser);

  if (foundUser) {
    res.status(200).json(foundUser)
  } else {
    res.status(404).json({message: 'data not found'})
  }
})


const users = [
  {
    id: '1',
    fname: 'user 01\'s first name',
    lname: 'user 01\'s last name'
  },
  {
    id: '2',
    fname: 'user 02\'s first name',
    lname: 'user 02\'s last name'
  },
  {
    id: '3',
    fname: 'user 03\'s first name',
    lname: 'user 03\'s last name'
  },
  {
    id: '4',
    fname: 'user 04\'s first name',
    lname: 'user 04\'s last name'
  }
]
