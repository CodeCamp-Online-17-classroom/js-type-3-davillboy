// write code here
        let a = undefined;
        let b = ' ';
        let c = !b;

        
        let d = Boolean(a);
        let e = Boolean(b);
        let f = Boolean(c);

        console.log(d); 
        console.log(e); 
        console.log(f); 
    ผลลัพธ์
false
true
false
d = false: เนื่องจากตัวแปร a มีค่าเป็น undefined ซึ่งถือว่าเป็น false value
e = true: เนื่องจากตัวแปร b มีค่าเป็นช่องว่าง (space) ซึ่งไม่ถือว่าเป็น false value
f = false: เนื่องจากตัวแปร c ถูกนิเสธ (!b) จะกลายเป็น false
