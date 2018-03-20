// don't refactor repeated code - scoping issue
var start_button = document.getElementById('startreset'),
  game_over = document.getElementById('gameover'),
  time_remaining = document.getElementById('timeremainingvalue'), //set to 60
  score = document.getElementById('score'),
  correct = document.getElementById('correct'),
  wrong = document.getElementById('wrong'),
  box_1 = document.getElementById('box1'),
  box_2 = document.getElementById('box2'),
  box_3 = document.getElementById('box3'),
  box_4 = document.getElementById('box4'),
  question = document.getElementById('question');
var answer_final;
correct.innerHTML = String(0);
wrong.innerHTML = String(0);
score.innerHTML = String(0);
var make_r = () => {
  return Math.floor(Math.random() * 99) * Math.floor(Math.random() * 99)
};
var makeQuestion = () => {
  return [Math.floor(Math.random() * 99), Math.floor(Math.random() * 99)]
};
var boxPicker = Math.round(Math.random() * 4);
var playing = false;
start_button.addEventListener('click', () => {
  var expos = makeQuestion();
  if (playing) {
    location.reload();
  } else {
    playing = !playing;
    question.innerHTML = `${expos[0]} * ${expos[1]} = ?`;
    var ex_0 = expos[0];
    var ex_1 = expos[1];
    console.log(ex_0, typeof ex_0);
    console.log(ex_1, typeof ex_1);
    var answer = ex_0 * ex_1;
    answer_final = answer;
    console.log(answer, typeof answer);
    score.innerHTML = 0;
    time_remaining.innerHTML = 60;
    // make random 4: pick box for right answer
    var random_picker = Math.round(Math.random() * 4);
    if (random_picker == 0) {
      box_1.innerHTML = String(answer);
      box_2.innerHTML = make_r();
      box_2.innerHTML = make_r();
      box_2.innerHTML = make_r();
    } else if (random_picker == 1) {
      box_2.innerHTML = String(answer);
      box_1.innerHTML = make_r();
      box_3.innerHTML = make_r();
      box_4.innerHTML = make_r();
    } else if (random_picker == 2) {
      box_3.innerHTML = String(answer);
      box_1.innerHTML = make_r();
      box_2.innerHTML = make_r();
      box_4.innerHTML = make_r();
    } else if (random_picker == 3) {
      box_4.innerHTML = String(answer);
      box_1.innerHTML = make_r();
      box_2.innerHTML = make_r();
      box_3.innerHTML = make_r();
    }
    var inter = setInterval(function() {
      if (time_remaining.innerHTML != 0) {
        time_remaining.innerHTML -= 1;
        start_button.innerHTML = 'reset';
      } else {
        game_over.classList.toggle('hide');
        playing = !playing;
        setTimeout(function() {
          location.reload();
        }, 10000);
        clearInterval(inter)
      }
    }, 1000);
  }
});
function omni_cycle() {
  var expos = makeQuestion();
  question.innerHTML = `${expos[0]} * ${expos[1]} = ?`;
  var ex_0 = expos[0];
  var ex_1 = expos[1];
  console.log(ex_0, typeof ex_0);
  console.log(ex_1, typeof ex_1);
  var answer = ex_0 * ex_1;
  answer_final = answer;
  console.log(answer, typeof answer);
  var random_picker = Math.round(Math.random() * 4);
  if (random_picker == 0) {
    box_1.innerHTML = String(answer);
    box_2.innerHTML = make_r();
    box_2.innerHTML = make_r();
    box_2.innerHTML = make_r();
  } else if (random_picker == 1) {
    box_2.innerHTML = String(answer);
    box_1.innerHTML = make_r();
    box_3.innerHTML = make_r();
    box_4.innerHTML = make_r();
  } else if (random_picker == 2) {
    box_3.innerHTML = String(answer);
    box_1.innerHTML = make_r();
    box_2.innerHTML = make_r();
    box_4.innerHTML = make_r();
  } else if (random_picker == 3) {
    box_4.innerHTML = String(answer);
    box_1.innerHTML = make_r();
    box_2.innerHTML = make_r();
    box_3.innerHTML = make_r();
  }
}
function reset_score_timer() {
  score.innerHTML = String(Number(score.innerHTML) + 1)
  correct.innerHTML = String(Number(correct.innerHTML) + 1)
  time_remaining.innerHTML = 60;
}
box_1.addEventListener('click', () => {
  console.log(`final answer is:`, answer_final);
  if (box_1.innerHTML == answer_final) {
    reset_score_timer();
    omni_cycle();
    // GENERATE Q:
  } else {
    // FIXME:
     wrong.innerHTML = Number(wrong.innerHTML) + 1;
  }
});
box_2.addEventListener('click', () => {
  console.log(`final answer is:`, answer_final);
  if (box_2.innerHTML == answer_final) {
    reset_score_timer();
    omni_cycle();
    // GENERATE Q:
  } else {
    wrong.innerHTML = Number(wrong.innerHTML) + 1;
  }
});
box_3.addEventListener('click', () => {
  console.log(`final answer is:`, answer_final);
  if (box_3.innerHTML == answer_final) {
    reset_score_timer()
    omni_cycle();
    // GENERATE Q:
  } else {
    wrong.innerHTML = Number(wrong.innerHTML) + 1;
  }
});
box_4.addEventListener('click', () => {
  console.log(`final answer is:`, answer_final);
  if (box_4.innerHTML == answer_final) {
    reset_score_timer();
    omni_cycle();
    // GENERATE Q:
  } else {
    wrong.innerHTML = Number(wrong.innerHTML) + 1;
  }
});
