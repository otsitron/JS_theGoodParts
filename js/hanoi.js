var hanoi = function hanoi(disc, a, b, c){
    console.log("disc " + disc + 
        ' a:' + a + ' b:' + b + ' c:' + c);
    if (disc > 0){
        hanoi(disc-1, a, c, b);
        console.log('Move disc ' + disc + 
        ' from ' + a + ' to ' + b);
       
        hanoi (disc - 1, c, a, b);
    }
}
hanoi(4, 'a', 'b', 'c');