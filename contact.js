window.onload = function() {
  let order = document.getElementById('order');
  let comment = document.getElementById('comment');
  let question = document.getElementById('question');
  let orderno = document.getElementById('orderno');

  order.addEventListener('click', function() {
    orderno.style.display = 'block';
  });

  comment.addEventListener('click', function() {
    orderno.style.display = 'none';
  });

  question.addEventListener('click', function() {
    orderno.style.display = 'none';
  });
};
