const express = require('express');
const  router = express.Router();
const Alien = require('../models/alien');



router.get('/',  async(req,res) => {
   try{
        const aliens = await Alien.find()
        res.json(aliens);
   }
   catch(err){
       res.send('Error' + err);
   }
});

//getting the data
router.get('/:id',  async(req,res) => {
    try{
         const alien = await Alien.findById(req.params.id)
         res.json(alien);
    }
    catch(err){
        res.send('Error' + err);
    }
 });


 //Add the data
router.post('/', async(req,res) =>{
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
        try{
            const a1 = await alien.save(); 
            res.json(a1);
        }
        catch(err){
            res.send('Error')
        }
});


//update the data
router.patch('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.send(a1)
    }
    catch{
        res.send('Error')
    }
});

//delete the data
router.delete('/:id',async(req,res)=> {
    const recipe = await Alien.findById(req.params.id)

    if(recipe) {
        await recipe.remove()
        res.json("Client is removed..")
    } else {
        res.status(404)
        throw new Error("Recipe not found")
    }
});

module.exports = router;

// const deleteRecipe = (async (req, res) => {

//     const recipe = await Alien.findById(req.params.id)

//     if(recipe) {
//         await recipe.remove()
//         res.json("Recipe removed")
//     } else {
//         res.status(404)
//         throw new Error("Recipe not found")
//     }
// })

// router.delete('/:id', (req, res) => {
//     const cl = new MongoClient("mongodb://localhost:27017");
//     async function run(){
//       try {
//         await cl.connect();
//         const dbs = cl.db("AlienDBex");
//         const coll = dbs.collection("aliens");
//         const qry = { };
//         const rst = await coll.deleteOne(qry);
//         if (rst.deletedCount === 1) {
//           console.log("One document deleted.");
//         } else {
//           console.log("No document was deleted.");
//         }
//       } finally {
//         await cl.close();
//       }
//     }
// });



// router.delete('/:id',async(req,res)=>{
//     try{
//         const aliendelete = await Alien.findByIdAndDelete(req.params.id)
//         aliendelete.id = req.body.id
    
//     }
//     catch{
//         res.send('Error')
//     }
// })

//delete the data
// router.delete =(req, res) => {
//     const id = req.params.id;
//     Alien.findByIdAndRemove(id)
//       .then(data => {
//         if (!data) {
//           res.status(404).send({
//             message: 'Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!'
//           });
//         } else {
//           res.send({
//             message: "Tutorial was deleted successfully!"
//           });
//         }
//       })

//       .catch(err => {
//         res.status(500).send({
//           message: "Could not delete Tutorial with id=" + id
//         });
//       });
//   };

