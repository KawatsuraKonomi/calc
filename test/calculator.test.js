test('コンストラクタのテスト',function(){

      var c = new Calculator();
	  
	  ok( c instanceof Calculator, 'new演算子を付けてコンストラクタを呼び出す検査');
	  
	  c =  Calculator();
	  
	  ok( c instanceof Calculator, 'new演算子を付けないでコンストラクタを呼び出す検査');
});

test('getExpresssion',function(){

      var c = new Calculator();
      
     var result= c.getExpression();
     
     equal(result, '');
});

test('append',function(){

     var c = new Calculator();
    
     c.append('a');
    
     var result=c.getExpression();
	 equal(result, 'a');
});

test('cleanEntry',function(){

     var c = new Calculator();
     
     var result = c.getExpression();
     equal(result, 'n.lenght-1');
});