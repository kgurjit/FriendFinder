var allFriends = [];

var getDiff = function(scores1, scores2) {
	var totalDiff = 0;
	console.log('Comparing ' + scores1 + ' to ' + scores2);
	for(var x=0;x<scores1.length;x++){
		var diff = Math.abs(scores1[x] - scores2[x]);
		totalDiff += diff;
	}
	return totalDiff;
};

var saveFriend = function(friend) {
	allFriends.push(friend);
	console.log('saved ' + friend.scores);
};

exports.clearAll = function(){
	allFriends = [];
};

exports.saveAndFindFriend = function(friend){
	var scores = friend.scores;
	var lastDiff = 0;
	var match = null;
	for(var x=0;x<allFriends.length;x++){
		var f = allFriends[x];
		var diff = getDiff(scores, f.scores);
		if(x === 0) {
			match = f;
			lastDiff = diff;
		} else {
			if(diff <= lastDiff) {
				match = f;
				lastDiff = diff;
			}
		}
	}
	saveFriend(friend);
	return match;
};
