const btn = document.querySelector('#btn');
const sidebar = document.querySelector('#sidebar');
const options = document.querySelectorAll('.options');
const content = document.querySelector('#content');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  btn.classList.toggle('active');
  sidebar.classList.toggle('active');
  content.classList.toggle('sidebar-closed');
});

options.forEach((option) => {
  option.addEventListener('click', (e) => {
    e.preventDefault();
    options.forEach((otherOption) => {
      otherOption.classList.remove('active');
    });
    option.classList.add('active');
  });
});
