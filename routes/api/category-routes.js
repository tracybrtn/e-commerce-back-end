const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//Get all categories
router.get('/', (req, res) => {
  Category.findAll({
    // be sure to include its associated Products
    include: [
      {
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'stock']
      }
    ]
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get category by ID
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products 
    include: [
      {
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'stock'
        ]
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//Post a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//Update an already existing category
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this ID'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//delete category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this ID'});
      return;
    }
    res.json({ message: 'Category deleted'});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//export routes
module.exports = router;
