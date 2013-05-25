function Calculator(){
   if (!(this instanceof Calculator)){
   		return new Calculator();
   }
   this.expression = '';
   

   this.getExpression = function(){
       return this.expression;
   }

   this.append = function(ch){
      this.expression = this.expression+ ch;
   }


    this.cleanEntry = function(){
       substrigg(0,n.length-1);
     }

	this.clear = function(){
	
	};

	this.calculate = function(){
	
	}
}