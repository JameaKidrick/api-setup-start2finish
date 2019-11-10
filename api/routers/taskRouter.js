const express = require('express');
const tasks = require('../helpers/taskModel')

const router = express.Router();

router.get('/', (req, res) => {
  tasks.find()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      res.status(500).json({ error: '(ヘ･_･)ヘ┳━┳ Internal Server Error (╯°□°）╯︵ ┻━┻' })
    })
})

router.get('/:id', (req, res) => {
  tasks.find(req.params.id)
    .then(task => {
      if(!task){
        res.status(404).json({ error: `(ヘ･_･)ヘ┳━┳ ID ${req.params.id} not found (╯°□°）╯︵ ┻━┻` })
      }else{
        res.status(200).json(task)
      }
    })
    .catch(err => {
      res.status(500).json({ error: '(ヘ･_･)ヘ┳━┳ Internal Server Error (╯°□°）╯︵ ┻━┻' })
    })
})

module.exports = router;