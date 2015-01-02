google.load("feeds", "1");

function initialize() {

var feed = new google.feeds.Feed("http://feed.tenki.jp/component/static_api/rss/earthquake/recent_entries.xml");

	feed.setNumEntries(feednum);
	feed.load(function(result) {
		if (!result.error) {
			var container = document.getElementById("feed");
			var useFeed = "";

			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i]; 
				 useFeed += '<li><a href="' + entry.link + '">' + entry.title + '</a></li>'; 
			}
			
			container.innerHTML=useFeed; 
			
  		}else{
		container.innerHTML =  "æ“¾o—ˆ‚Ü‚¹‚ñ‚Å‚µ‚½" ; 
		}
	}); 
} 
google.setOnLoadCallback(initialize);

function initialize2() {

var feed = new google.feeds.Feed("http://feed.tenki.jp/component/static_api/rss/warn/top.xml");

	feed.setNumEntries(feednum);
	feed.load(function(result) {
		if (!result.error) {
			var container = document.getElementById("feed2");
			var useFeed = "";

			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i]; 
				 useFeed += '<li class="six columns"><a href="' + entry.link + '">' + entry.title + '</a></li>'; 
			}
			
			container.innerHTML=useFeed; 
			
  		}else{
		container.innerHTML =  "æ“¾o—ˆ‚Ü‚¹‚ñ‚Å‚µ‚½"; 
		}
	}); 
} 


