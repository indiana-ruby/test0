    require("babel-polyfill");
    //1
      var shuzhu = new Array(1,2,3,4,5);
      var max = Math.max.apply(null,shuzhu);
      console.log(max);

    //2
      var arr1 = new Array("1","2","3"),
      arr2 = new Array("4","5","6"),
      big = {};  
      big = Array.prototype.push.apply(arr1,arr2);  
      console.log(big);
      console.log(arr1);
      console.log(arr2);

    //3
      // function six (){
      //   "use strict";
        class test {
          constructor(one,two){
            this.one = one;
            this.two = two;
          }
          showtime() {
            return this.one;
          }
        }
        var abc = (...args)=>{return args[0];};
        console.log('the srgs[0] is ' + abc (1,2,3,4));
        let testman = new test(1,100);    
        console.log(testman.showtime());
      // }
      // six();

    //4
      var arr = ['apple','orange','pear'];
      console.log("found:", arr.indexOf("orange"));

      var arr2 = [
          {"name":"apple", "count": 2},
          {"name":"orange", "count": 5},
          {"name":"pear", "count": 3},
          {"name":"orange", "count": 16}
      ];
      var arrx = [];
      for (var man in arr2) {
        arrx[man] = arr2[man];
        console.log('the arrx are:',arrx);
      }
      var fulltone = arr2.filter(function(item){
        return item.name === 'apple';
      });
      console.log('the new one is',fulltone);

      var arr3 = [1,2,3,4,5,6,7,8];
      arr3.forEach(function(item,index){
        console.log('the num'+index,' is',item);
      });
      arr2.forEach(function(item,index){
        console.log('the arr2: num'+index,' is',item);
      });

    //5
      console.log('function length is',((a,b)=>{}).length);
      var aa = (...arr)=>{
        let crew = arr;
        return crew;
      };
      console.log('argument is',aa(1,2,3,4,5,6,7));
      let bb = aa(1,2,3,4,5,6);
      console.log('num3 argument is',bb[2]);

      let newarr = new Set ();
      newarr.add(1);
      newarr.add(2);
      for (let bb of newarr){
        console.log('set is',bb);
      }
      for (let bbs of newarr.entries()){
        console.log('entry set is',bbs);
      }
      let shuzhu2 = Array.from(new Set([1,2,2,2,3,4,5,6,7]));
      for (let aa in shuzhu2) {
        console.log('let set is',shuzhu2[aa]);
      }

      let team = ['a','b','c'];
      let nexter = team[Symbol.iterator]();   //数组自带遍历
      console.log('next is',nexter.next());
      console.log('next is',nexter.next().value);
      console.log('next is',nexter.next());
      console.log('next is',nexter.next());

      for (let cc of team) {
        console.log('use of to do:',cc);
      }

      let paras = document.querySelectorAll("h1");
      console.log("h1 are",...paras);
      for (let p of [...paras]) {    //[...] 必须
        p.classList.add("test");
        console.log('h1 class are:',p.classList);
      }

      console.log(5 + NaN + undefined);
      console.log(5 + NaN);
      console.log(5 + undefined);

      var clock = function *(_) {
        while (true) {
          yield 1;
          console.log('Tick!');
          yield 2;
          console.log('Tock!');
        }
      };

      var clockman = clock();
      clockman.next();
      clockman.next();
      clockman.next();

