const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        // be sure to include its associated Product data
      }
    ]
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: [  // be sure to include its associated Products 
        ]
      }
    ]
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create({
    //Tag params
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(
    {
      //params updated
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No Tag found with this ID'});
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No Tag found with this ID'});
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
