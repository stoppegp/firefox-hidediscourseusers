
function onError(error) {
  console.log(`Error: ${error}`);
}

var hideusers = [];


function onGot(item) {
  if (item.hideusers) {
    hideusers = item.hideusers.split(",");
  }
  console.log(hideusers);

	$.initialize(".topic-post", function() {
			var target = $(this);
			
			if ($.inArray(target.find("span.username a").text(), hideusers) !== -1) {
				target.hide();
			}
			
			console.log("huhu2");
	}
	);
  
}

var getting = browser.storage.local.get(["hideusers"]);
getting.then(onGot, onError);

	
