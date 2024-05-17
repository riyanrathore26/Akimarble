// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const AWS = require('aws-sdk');
// const Post = require('./Models/product');
// const commentmodel = require('./Models/Comment');
// const app = express();
// const code = require('./Controllers/code')
// const port = process.env.PORT || 5000;
// require('dotenv').config();
// const bucketName = "marblestorebucket";

// app.use(cors(), express.json());
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const awsConfig = {
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'ap-south-1'
// };
// const mongoose = require('mongoose');
// const MongoURI = process.env.MONGO_URI;
// mongoose.connect(MongoURI)
//   .then(() => {
//     console.log("database is connected")
//   }).catch(() => {
//     console.log("database is not connected");
//   })


// const S3 = new AWS.S3(awsConfig);

// const uploadToS3 = (fileData) => {
//   return new Promise((resolve, reject) => {
//     const params = {
//       Bucket: bucketName,
//       Key: `Marbles_img/${fileData.originalname}`,
//       Body: fileData.buffer, // Extract the buffer from the file object
//     };
//     S3.upload(params, (err, data) => {
//       if (err) {
//         return reject(err);
//       }
//       return resolve(data);
//     });
//   });
// };
// app.post('/api/addProduct', upload.array('images', 3), async (req, res) => {
//   try {
//     const { name, description, price } = req.body;

//     // Wait for all promises to resolve before processing
//     const imagePaths = (await Promise.all(req.files.map(async file => {
//       if (file && file.originalname) {
//         const urlimg = await uploadToS3(file);
//         return urlimg.Location;
//       }
//       return null;
//     }))).flat(); // Flatten the array of arrays

//     // Now that all promises have resolved and the array is flattened, you can proceed with saving the data
//     const newProduct = new Post({
//       name,
//       description,
//       price,
//       images: imagePaths,
//     });


//     await newProduct.save();

//     res.status(201).send('Product added successfully!');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.get('/api/showProduct', async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// app.get('/fetchone/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = await Post.findById(id);

//     // Assuming data is fetched successfully
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// app.post('/addcomment', async (req, res) => {
//   try {
//     const { productId, comment, username } = req.body;
//     const datetime = new Date();
//     console.log(datetime);
//     const newProduct = new commentmodel({
//       productId,
//       comment,
//       username,
//       datetime,
//     });


//     await newProduct.save();

//     // Add comment to database logic (replace with your actual logic)
//     const success = true; // Replace with your function
//     //   await addCommentToDatabase(productid, comment)
//     if (success) {
//       res.status(200).send({ message: 'Comment added successfully!' });
//     } else {
//       res.status(500).send({ message: 'Failed to add comment' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Internal server error' });
//   }
// });
// app.get('/showcomments/:productId', async (req, res) => {
//   const productId = req.params.productId;
//   const commetsdata = await commentmodel.find({ productId });
//   res.json(commetsdata);
// });
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
