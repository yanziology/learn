function list_blog_entries(json) {

	for (var i = 0; i < numposts; i++) {
		var entry = json.feed.entry[i];
		var posttitle = entry.title.$t;
		var posturl;
		if (i == json.feed.entry.length)
			break;
		for (var k = 0; k < entry.link.length;k++){
			if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){
				var commenttext=entry.link[k].title;
				var commenturl=entry.link[k].href;
			}
			if (entry.link[k].rel == 'alternate') {
				posturl = entry.link[k].href;
				break;
				}
			}

		document.write('<div class="sitemap-container">'+'<ul id="postentrylist">'+'<li>');
		document.write('<div class="posttitle">'+'<a href="'+posturl+'">'+posttitle+'</a>'+'</div>');
		document.write('</span></li>'+'</ul>'+'</div>');
		document.write('<div class="fix"></div>');
}
