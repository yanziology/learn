function listentry(json) {
document.write('');
for (var i = 0; i < numposts; i++) {
var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var posturl;if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length;k++){
if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){
var commenttext=entry.link[k].title;
var commenturl=entry.link[k].href;
}
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;break;
}
}
/*var thumburl;
try {
thumburl=entry.media.url;
}catch (error)
{
s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){
thumburl=d;} else thumburl='http://2.bp.blogspot.com/-fyukB_HLG_w/UbManI7ySAI/AAAAAAAADsM/brwpVvFPtOM/s1600/nothumb.jpg';
}*/
document.write('<div class="sitemap-container">'+'<ul id="bloglist">'+'<li>');
var towrite='';var flag=0;
document.write('<div class="posttitle">'+'<a href="'+posturl+'">'+posttitle+'</a>'+'</div>');
document.write('</span></li>'+'</ul>'+'</div>');
document.write('<div class="fix"></div>');
}
}
