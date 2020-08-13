window.onload = function() {
  let men = document.getElementById('male');
  let female = document.getElementById('female');
  let brands = document.getElementById('brand');
  let inv = document.getElementById('inv');
  let release = document.getElementById('new');
  let title = document.getElementById('featured');
  let sale = document.getElementById('sale');
  let releases = document.getElementById('releases');
  let invrelease = document.getElementById('newrelease');

  function getinv(num) {
    for (let i = 1; i < 12; i++) {
      if (i === num) {
        document.getElementById(`inv${num}`).style.display = 'block';
      } else {
        document.getElementById(`inv${i}`).style.display = 'none';
      }
    }
  }
  function getbut() {
    for (let i = 1; i < 12; i++) {
      document.getElementById(`but${i}`).addEventListener('click', function() {
        female.style.display = 'none';
        men.style.display = 'none';
        brands.style.display = 'none';
        inv.style.display = 'block';
        release.style.display = 'none';
        invrelease.style.display = 'none';
        getinv(i);
      });
    }
  }

  releases.addEventListener('click', function() {
    female.style.display = 'none';
    men.style.display = 'none';
    brands.style.display = 'none';
    inv.style.display = 'block';
    release.style.display = 'none';
    invrelease.style.display = 'block';
    getinv(0);
  });

  document.querySelector('#men').addEventListener('click', function() {
    female.style.display = 'none';
    brands.style.display = 'none';
    inv.style.display = 'none';
    men.style.display = 'block';
    release.style.display = 'none';
    title.innerHTML = 'Men';
    sale.style.display = 'none';
  });

  document.querySelector('#women').addEventListener('click', function() {
    female.style.display = 'block';
    men.style.display = 'none';
    brands.style.display = 'none';
    inv.style.display = 'none';
    release.style.display = 'none';
  });

  document.querySelector('#product').addEventListener('click', function() {
    female.style.display = 'block';
    men.style.display = 'block';
    brands.style.display = 'none';
    inv.style.display = 'none';
    release.style.display = 'none';
    title.innerHTML = 'Men';
    sale.style.display = 'none';
  });
  getbut();
};
