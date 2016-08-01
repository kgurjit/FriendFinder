var friendsApi = require('../data/friends');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json({msg: 'Shukar'});
    });

    app.post('/api/friends', function(req, res){
    	var match = friendsApi.saveAndFindFriend(req.body);
        console.log('Matched friend: ' + match);
        res.json(match);
    });

    app.get('/clearall', function(req, res){
    	friendsApi.clearAll();
    	res.send('Done');
    });
}