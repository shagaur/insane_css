const submit = document.getElementById('submit');
const password = document.getElementById('password');

password.addEventListener('input',()=>{
  if(password.value.length >=6){
    submit.classList.remove('submit-hover');
  }
  if(password.value.length < 6){
    submit.classList.add('submit-hover');
  }
})