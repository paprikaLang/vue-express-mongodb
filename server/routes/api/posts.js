const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//GET posts
router.get('/', async (req, res) => {
	const posts = await dbCollection();
	res.send(await posts.find({}).toArray());
});
//ADD post
router.post('/', async (req, res) => {
	const posts = await dbCollection();
	await posts.insertOne({
		text: req.body.text,
		createdAt: new Date()
	});

	res.status(201).send();

});

//DELETE post
router.delete('/:id', async (req, res) => {
	const posts = await dbCollection();
	const id = new mongodb.ObjectID(req.params.id) ;
	await posts.deleteOne({_id: id});
	res.status(200).send();
})

async function dbCollection() {
	const client  = await mongodb.MongoClient.connect('mongodb://tiyo:tiyo00@ds227243.mlab.com:27243/vue-posts',{
		useNewUrlParser: true
	});
	return client.db('vue-posts').collection('posts');
}
module.exports = router;
