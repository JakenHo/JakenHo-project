const express = require('express')
const app = express()

app.use((request, response, next) => {
	console.log('有人请求服务器1了');
	// console.log('请求来自于',request.get('Host'));
	// console.log('请求的地址',request.url);
	next()
})

app.get('/students', (request, response) => {
	const students = [{
			id: '001',
			name: 'root',
			pwd: "123456"
		},
		{
			id: '002',
			name: 'jerry',
			pwd: "111111"
		},
		{
			id: '003',
			name: 'tony',
			pwd: "111111"
		},
	]
	response.send(students)
})
app.get('/shopCar', (request, response) => {
	const shopCar = [{
			id: '003',
			title: 'nubia Z30Pro 浩瀚黑 12GB+256GB',
			price: 3399.00,
			countPrice: 0
		},
		{
			id: '004',
			title: 'nubia Z30Pro 星际银 16GB+512GB',
			price: 5399.00,
			countPrice: 0
		},
		{
			id: '005',
			title: 'nubia Z30Pro 黑金传奇 8GB+256GB',
			price: 4399.00,
			countPrice: 0
		},
	]
	response.send(shopCar)
})

app.listen(5000, (err) => {
	if (!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/students');
})
