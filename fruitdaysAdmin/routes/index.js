var express = require('express');
var router = express.Router();
var GoodsModel = require("../model/Goods")
var multiparty = require('multiparty');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/addgoodsAction', function(req, res, next) {
 		var form = new multiparty.Form({
    	uploadDir: "public/images"
    })
 			var result = {
			code: 1,
			message: "商品信息保存成功"
		};
    form.parse(req, function(err, fields, files) {
    	var goodname = fields.goodname[0]
    	var myprice = fields.myprice[0]
    	var goodsimg = fields.goodsimg[0]
    	var gm = new GoodsModel();
    	gm.goodname = goodname;
    	gm.myprice = myprice;
    	gm.goodsimg = goodsimg;
    	gm.save(function(err){
    		if(err){
    			result.code = -1000;
    			result.message = "商品信息保存失败"
    		}
    		res.json(result)
    	})
   	});
});

router.post('/api/removegoods', function(req, res, next) {
	var result = {
			code: 1,
			message: "商品删除失败"
		};
	console.log(req.body.goodId)
		GoodsModel.remove({goodname:req.body.goodId}, function (err,docs) {
			if(!err){
				result.code = -444;
    		result.message = "商品删除成功"
			}
			res.json(result)
		});
});
router.get('/api/load', function(req, res, next) {
	GoodsModel.find({}, 
		function (err, docs) {
			res.json(docs)
	});
		
});

module.exports = router;
