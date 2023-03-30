const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome to the Pokemon App!</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #F2F2F2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          div {
            background-color: #FFFFFF;
            border-radius: 10px;
            box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
          }
          h1 {
            color: #F44336;
            font-size: 36px;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 20px;
          }
          a {
            background-color: #4CAF50;
            color: #FFFFFF;
            border: none;
            padding: 10px 20px;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>Welcome to the Pokemon App!</h1>
          <a href="/pokemon">Continue</a>
        </div>
      </body>
    </html>
  `)
})

module.exports = router