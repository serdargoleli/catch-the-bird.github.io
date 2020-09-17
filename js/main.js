$(document).ready(function () {
  var game_area_height;
  var game_area_width;
  var cordinate_y;
  var cordinate_x;
  var score = 0;
  var heart = 3;
  var audio = $("#btn-sound")[0];
  var notBird = $("#btn-sound2")[0];
  $(".btn-play").click(function () {
    $(".play-game-box").addClass("hide");
    $(".game-area").css("display", "block");
    $(".game-over-box").css("zIndex", "-99");
    heart = 3;
    $("#heart").text(heart);
    audio.play();
  });

  $.random_position = function () {
    game_area_height = $(".game-area").height();
    game_area_width = $(".game-area").width();
    cordinate_y = Math.floor(Math.random() * (game_area_height - 150) + 1);
    cordinate_x = Math.floor(Math.random() * (game_area_width - 100) + 1);
    $("#bird").css({
      top: cordinate_y + "px",
      left: cordinate_x + "px",
      position: "absolute",
    });
    return;
  };

  var timer = setInterval(function () {
    $.random_position();
  }, 900);

  $("#bird").click(function () {
    score += 10;
    $("#score").text(score);
    $.random_position();
    audio.play();
    timer = 0;
  });

  $(document).click(function (event) {
    if (!$(event.target).closest("#bird,.btn-play,.play-game-box").length) {
      heart--;
      if (heart == 0) {
        $(".game-over-box h4").text("Score: " + score);
        score = 0;
        heart = 0;
        $("#score").text(score);
        $("#heart").text(heart);
        $(".game-over-box").css("zIndex", "99");
      }
      notBird.play();
      $("#heart").text(heart);
    }
  });
});
