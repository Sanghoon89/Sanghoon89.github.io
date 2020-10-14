var Link = {
  setColor:function(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}

var Body = {
  setColor:function(color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function(color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandler(self) {
  var target = document.querySelector('body');
  if(self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Link.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Link.setColor('blue');
  }
}
/*
function nightDayHandler(self) {
  var target = document.querySelector('body');
  if(self.value === 'night') {
    target.style.background='black';
    target.style.color='white';
    self.value = 'day';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length) {
      alist[i].style.color = 'powderblue';
      i = i + 1;
    }
  } else {
    target.style.background='white';
    target.style.color='black';
    self.value = 'night';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length) {
      alist[i].style.color = 'blue';
      i = i + 1;
    }
  }
}
*/
