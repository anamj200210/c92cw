player1 = localStorage.getItem("player_1")
player2 = localStorage.getItem("player_2")

 player1_score = 0;
 player2_score = 0;

document.getElementById("player_1").innerHTML = player1 + " : "
document.getElementById("player_2").innerHTML = player2 + " : "

document.getElementById("score_1").innerHTML = player1_score;
document.getElementById("score_2").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2;

function send()
{
  get_word = document.getElementById("word").value;
  word = get_word.toLowerCase();
  console.log("word in lowercase = " + word);
  
  charAt1 = word.charAt(1);

  middle_index = Math.floor(word.length/2);
  charAt2 = word.charAt(middle_index);

  last_index = word.length - 1;
  charAt3 = word.charAt(last_index);

  remove_charAt1 = word.replace(charAt1 , "_");
  remove_charAt2 = remove_charAt1.replace(charAt2 , "_");
  remove_charAt3 = remove_charAt2.replace(charAt3 , "_");

  question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
  input_box = "<br> Answer: <input type = 'text' id='input_check_box'>";
  check_button = "<br><br> <button class = 'btn btn-info' onclick='check()'>Check </button>";
  row = question_word + input_box + check_button;
  document.getElementById("output").innerHTML = row;
  document.getElementById("word").value = " ";
}

question_turn = "player_1"; 
answer_turn = "player_2";

function check()
{
  get_answer = document.getElementById("input_check_box").value;
  answer = get_answer.toLowerCase();

  if(answer == word)
  {
   if(answer_turn == "player_1")
   {
     player1_score = player1_score + 1;
     document.getElementById("score_1").innerHTML = player1_score;
   } 
   else{
     player2_score = player2_score + 1;
     document.getElementById("score_2").innerHTML = player2_score;
   }
  }

if(question_turn == "player_1")
{
 question_turn = "player_2";
 document.getElementById("player_question").innerHTML = "Question turn - " + player2;

}
else
{
question_turn = "player_1"
document.getElementById("player_question").innerHTML = "Question turn - " + player1;
}

if(answer_turn == "player_1")
{
  answer_turn = "player_2";
  document.getElementById("player_answer").innerHTML = "Answer turn - " + player2;
}

else
{
  answer_turn = "player_1"
  document.getElementById("player_answer").innerHTML = "Answer turn - " + player1;
}

document.getElementById("output").innerHTML = " "
}