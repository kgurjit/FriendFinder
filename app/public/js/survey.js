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

    $("#submit").on("click", function(){
      var name = $.trim($("#name").val());
      var phone = $.trim($("#photo").val());

      if(name === '' || phone === '') {
        alert('Please fill all fields');
        return;
      }
      var allQuestionsAnswered = true;
      for(var x=1; x<=questions.length;x++){
          if($("#q_" + x).val() === '') {
            alert('Please fill all fields');
            allQuestionsAnswered = false;
            break;
          }
      }

      if(allQuestionsAnswered) {
        alert('Good to go');
      }
    });
});
