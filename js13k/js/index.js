var titleEl = document.querySelector('.title-screen');
var endEl = document.querySelector('.end-screen');
var enemies = document.querySelectorAll('[mixin="cube enemy"]');
var deadEnemies = [];
var scoreEl = document.querySelector('.score');
var score = 0;
var increaseCounter = function(e) {
  var enemy = e.currentTarget;
  if (deadEnemies.indexOf(enemy) != -1) { return; }
  deadEnemies.push(enemy);
  score+=1;
  scoreEl.innerHTML = 'Score: ' + score;
  if (enemies.length === deadEnemies.length) {
    endEl.style.display = 'block';
  }
}
titleEl.addEventListener('click', function() { titleEl.style.display = 'none'; });
enemies = Array.prototype.slice.call(enemies);
enemies.forEach(function(enemyEl) {
  enemyEl.addEventListener('hit', increaseCounter);
});
