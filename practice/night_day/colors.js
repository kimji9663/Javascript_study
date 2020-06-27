var Links = {
    setColor: function (color){
        //a color change
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
var Body = {
    setColor: function (color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    //함수 내에서 this는 전역 객체를 가리킨다. 웹브라우저에서는 Window.
    if(self.value === 'Night'){ 
        target.style.color = 'white';
        self.value = 'Day';
        Links.setColor('powderblue');
        Body.setBackgroundColor('black');
        Body.setColor('white');
    } else {
        target.style.color = 'black';
        self.value = 'Night';
        Links.setColor('blue');
        Body.setBackgroundColor('white');
        Body.setColor('black');
    }
}