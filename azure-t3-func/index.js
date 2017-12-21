module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function azure_t3 processed a request.');

	length = 40000
	var items = []
	for (var k = (length - 1); k >= 0; k--) {
	    items.push((Math.random()*10))
	}

	var length = items.length;
	for (var i = (length - 1); i >= 0; i--) {
	    for (var j = (length - i); j > 0; j--) {
	        if (items[j] < items[j - 1]) {
	            var tmp = items[j];
	            items[j] = items[j - 1];
	            items[j - 1] = tmp;
	        }
	    }
	}

	context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Hellow"
    };

    context.done();
};
