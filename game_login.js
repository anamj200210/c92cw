function login()
{
  var player_name_1 = document.getElementById("player_name_1").value;

  var player_name_2 = document.getElementById("player_name_2").value;
localStorage.setItem("player_1" , player_name_1);
localStorage.setItem("player_2" , player_name_2);
  window.location = "game_page.html"
}

