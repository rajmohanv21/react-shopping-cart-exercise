const config = {
	countStart: 0,
	increment: 1,
	decrement: 1,
	cartAction: {
		addProduct: 'addProduct',
		removeProduct: 'removeProduct',
	},
	initialProductInCart: [],
	initialPurchasePrice: 0.00,
	percentageValue: 0.01,
	productList: [{
		id: 1001,
		brand: 'Teamspirit',
		name: 'Popcorn Textured Crew-Neck T-shirt',
		unitPrice: 250,
		availableQuantity: 4,
		discount: 10,
		// eslint-disable-next-line max-len
		image: 'https://assets.ajio.com/medias/sys_master/root/20220722/J9EC/62dabdccf997dd03e2eafa0c/teamspirit_beige_popcorn_textured_crew-neck_t-shirt.jpg',
	},
	{
		id: 1002,
		brand: 'Bullmer',
		name: 'Graphic Print Hooded T-shirt',
		unitPrice: 500,
		availableQuantity: 2,
		discount: 20,
		// eslint-disable-next-line max-len
		image: 'https://assets.ajio.com/medias/sys_master/root/20220825/KVo6/6306b8dff997dd394c2251cc/bullmer_tan_graphic_print_hooded_t-shirt.jpg',
	},
	{
		id: 1003,
		brand: 'EYEBOGLER',
		name: 'Colour-Blocked Polo T-shirt',
		unitPrice: 600,
		availableQuantity: 2,
		discount: 30,
		// eslint-disable-next-line max-len
		image: 'https://assets.ajio.com/medias/sys_master/root/20220902/10ZX/63119971f997dd1f8dd6ef6d/eyebogler_mauve_colour-blocked_polo_t-shirt.jpg',
	},
	{
		id: 1004,
		brand: 'EYEBOGLER',
		name: 'Striped Polo T-shirt',
		unitPrice: 450,
		availableQuantity: 3,
		discount: 10,
		// eslint-disable-next-line max-len
		image: 'https://assets.ajio.com/medias/sys_master/root/20220831/uxiG/630e750caeb269dbb357d1f8/eyebogler_yellow_striped_polo_t-shirt.jpg',
	},
	{
		id: 1005,
		brand: 'GESPO',
		name: 'Round-Neck T-shirt with Contrast Stripes',
		unitPrice: 350,
		availableQuantity: 0,
		discount: 10,
		// eslint-disable-next-line max-len
		image: 'https://assets.ajio.com/medias/sys_master/root/20220328/8mNu/6241ca6daeb26921affa4558/gespo_blue_%26_black_round-neck_t-shirt_with_contrast_stripes.jpg',
	},
	{
		id: 1006,
		brand: 'Campus Sutra',
		name: 'Colour-block Hooded Sweatshirt',
		unitPrice: 800,
		availableQuantity: 4,
		discount: 40,
		// eslint-disable-next-line max-len
		image: 'https://assets.ajio.com/medias/sys_master/root/20210806/0JhK/610c59d07cdb8cb824edd54e/campus_sutra_blue_%26_grey_colour-block_hooded_sweatshirt.jpg',
	}],

};

export default config;
