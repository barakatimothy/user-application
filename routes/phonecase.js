const express = require('express');
const router = express.Router();

const phoneData = [{
    _id:1001,
    title:'iphone 15',
    price: 1500.99,
    previousPrice:1600.99,
    description:'Lorem Ipsum has been the industrys standard dummy text',
    category:'phone',
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fapple-iphone-back-view&psig=AOvVaw0Qw016EFLYI8xovOoLSWvl&ust=1732492819387000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiYmOrU84kDFQAAAAAdAAAAABAE',
    isNew:true,
    brand:'Apple'
},
{
    _id:1002     ,
    title:'iphone 15',
    price: 1500.99,
    previousPrice:1600.99,
    description:'Lorem Ipsum has been the industrys standard dummy text',
    category:'phone',
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fapple-iphone-back-view&psig=AOvVaw0Qw016EFLYI8xovOoLSWvl&ust=1732492819387000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiYmOrU84kDFQAAAAAdAAAAABAE',
    isNew:true,
    brand:'Apple'
},
{
    _id:1003,
    title:'iphone 15',
    price: 1500.99,
    previousPrice:1600.99,
    description:'Lorem Ipsum has been the industrys standard dummy text',
    category:'phone',
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fapple-iphone-back-view&psig=AOvVaw0Qw016EFLYI8xovOoLSWvl&ust=1732492819387000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiYmOrU84kDFQAAAAAdAAAAABAE',
    isNew:true,
    brand:'Apple'
}]

router.get('/', (req, res) => {
  res.send(phoneData);
});

module.exports = router;
