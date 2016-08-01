$(document).ready(function(){
    var questions = [
      {id:1, ques: 'Your mind is always buzzing with unexplored ideas and plans.'},
      {id:2, ques: 'Generally speaking, you rely more on your experience than your imagination.'},
      {id:3, ques: 'You find it easy to stay relaxed and focused even when there is some pressure.'},
      {id:4, ques: 'You rarely do something just out of sheer curiosity.'},
      {id:5, ques: 'People can rarely upset you.'},
      {id:6, ques: 'It is often difficult for you to relate to other people’s feelings.'},
      {id:7, ques: 'In a discussion, truth should be more important than people’s sensitivities.'},
      {id:8, ques: 'You rarely get carried away by fantasies and ideas.'},
      {id:9, ques: 'You think that everyone’s views should be respected regardless of whether they are supported by facts or not.'},
      {id:10, ques: 'You feel more energetic after spending time with a group of people.'}
    ];

    var quesHtml = Mustache.render($("#quesTemplate").html(), {questions: questions});
    $("#questions").html(quesHtml);

    var clearFields = function(){
      $("#name").val('');
      $("#photo").val('');
      //reset all select boxes
      $.each($("select"), function(idx,select){
       var ops = $(select).find("option");
       ops.eq(0).attr('selected','selected');
     });
    };

    $("#submit").on("click", function(){
      var name = $.trim($("#name").val());
      var photo = $.trim($("#photo").val());

      if(name === '' || photo === '') {
        alert('Please fill all fields');
        return;
      }

      var data = {'name': name, 'photo': photo};

      var allQuestionsAnswered = true;
      var scores = [];
      for(var x=1; x<=questions.length;x++){
          var ans = $("#q_" + x).val();
          if(ans === '') {
            alert('Please fill all fields');
            allQuestionsAnswered = false;
            break;
          }
          scores.push(ans);
      }
      data['scores'] = scores;
      if(allQuestionsAnswered) {
        $.ajax({
            type: "POST",
            url: "/api/friends",
            processData: false,
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(match) {
              if(match === null) {
                alert("No matches found. You're the first one on the system.");
                clearFields();
              } else {
                var modal = $("#myModal");
                modal.find("#matchName").eq(0).html(match.name);
                modal.find("#matchImg").eq(0).attr('src', match.photo);
                modal.modal('toggle');
                clearFields();
              }
            }
        });
      }
    });
});
