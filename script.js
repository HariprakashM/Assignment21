var div=document.createElement("div");
div.setAttribute("id","out");
var a=document.createElement("div");
a.setAttribute("id","count");
var b=document.createElement("div");
b.setAttribute("id","msg");
b.innerHTML="HAPPY INDEPENDENCE DAY";
document.body.append(div);
div.append(a,b);
var count = document.getElementById('count');
var msg = document.getElementById('msg');
msg.style.visibility = 'hidden';

count.innerHTML = 10;
 setTimeout(()=>{
     count.innerHTML = 9;
     setTimeout(()=>{
        count.innerHTML = 8;
        setTimeout(()=>{
             count.innerHTML = 7;
            setTimeout(()=>{
                count.innerHTML = 6;
                setTimeout(()=>{
                    count.innerHTML = 5;
                    setTimeout(()=>{
                        count.innerHTML = 4;
                         setTimeout(()=>{
                             count.innerHTML = 3;
                             setTimeout(()=>{
                                 count.innerHTML = 2;
                                setTimeout(()=>{
                                     count.innerHTML = 1;
                                    setTimeout(()=>{
                                        count.style.visibility = 'hidden';
                                        msg.style.visibility = 'visible';
                                            
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

