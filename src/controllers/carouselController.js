
/*
* Handler to return available group of images
* TODO: Get info from db or service
*/
module.exports.getCarouselInfo = function(req, res/*, next*/) {
	var data = [
		{
			title: "First Block",
			images: [
				'http://shop.stelladot.com/style/media/catalog/product/cache/0/image/450x682/9df78eab33525d08d6e5fb8d27136e95/e/2/e282g-isadora_hoops_gold_v2.jpg', 
				'http://shop.stelladot.com/style/media/catalog/product/cache/0/image/450x682/9df78eab33525d08d6e5fb8d27136e95/c/a/capri_tunic_wrap_blue_paisley_.jpg', 
				'http://shop.stelladot.com/style/media/catalog/product/cache/0/gallery_image/226x333/9df78eab33525d08d6e5fb8d27136e95/n/3/n353s_calypso_coin_1.jpg',
				'http://shop.stelladot.com/style/media/catalog/product/cache/0/gallery_image/226x333/9df78eab33525d08d6e5fb8d27136e95/n/5/n508bh_birdie_necklace_main_v.jpg'
			]
		},
		{
			title: "Second Block",
			images: [
				'http://shop.stelladot.com/style/media/catalog/product/cache/0/image/450x682/9df78eab33525d08d6e5fb8d27136e95/r/1/r167s_pave-chevron_hero_2.jpg',
				'http://shop.stelladot.com/style/media/catalog/product/cache/0/image/450x682/9df78eab33525d08d6e5fb8d27136e95/n/5/n513s_marina_necklace_main.jpg', 
				'http://shop.stelladot.com/style/media/catalog/product/cache/0/image/450x682/9df78eab33525d08d6e5fb8d27136e95/c/r/crescent_ear_jacket_main_r1.jpg',
				'http://shop.stelladot.com/style/media/catalog/product/cache/0/gallery_image/226x333/9df78eab33525d08d6e5fb8d27136e95/n/3/n353s_calypso_coin_1.jpg'
			]
		},
		{
			title: "Third Block",
			images: ['http://shop.stelladot.com/style/media/catalog/product/cache/0/gallery_image/226x333/9df78eab33525d08d6e5fb8d27136e95/n/5/n535g_zia.jpg',
			'http://shop.stelladot.com/style/media/catalog/product/cache/0/gallery_image/226x333/9df78eab33525d08d6e5fb8d27136e95/n/5/n540s_freya_fringe_hero_v.jpg'
			]

		}];
	res.json(data);
};