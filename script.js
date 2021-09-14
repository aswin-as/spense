var menuBtn = document.getElementById('menuBtn');
var cancel = document.getElementById('cancel');

menuBtn.addEventListener('click',function(){
    document.querySelector('.menu_screen').style.visibility = 'visible';
  });

  cancel.addEventListener('click',function(){
    document.querySelector('.menu_screen').style.visibility = 'hidden';
  });
