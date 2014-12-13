/**
 * 
 */
/*
 *Plugin functions :
 - validateEmptyField - function which write some error promopt if field is empty
 - validateEmai l - function which write some error prompt if field doesnt pass
 e-mail regexp test
 - validateString - check if value from input is text
 - validateNumber - check if value from input is number
 */
/*
 <!--  
- Nazwa albumu -> nie dluzsza niz 30 znakow
- Nazwa artysty -> Nie dluzsa niz 30 znakow
- cena albumu -> Musi byc liczba(cyfra)w formacie dziesietnym 
- e-mail wydawcy -> Musi spelniac regexp prawidlowego adresu email 
-->
 */
(function($) {
	//
    $.fn.validateEmptyField = function(options) 
    {

    	//Parameters
    	 var settings = $.extend({
             text  : 'Hello, World!'         
    	      }, options);
    
    	 var objectValue = this.val(); //value of object of which is this function called
    	 if(objectValue==='')
    	 {
	    	 return this.each( function()
	    	 {
	    		 $(this).val( settings.text );
	    		 
	    	 }); 
    	 }
    };
    
    $.fn.validateEmail = function(options) 
    {
	   	 var settings = $.extend({
	            text  : 'Hello, World!'         
	   	      }, options);
	   
	   	 var objectValue = this.val(); 
	   	 //regexp for validating email adresses
	   	 var email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
	   	 console.log(email.test(objectValue));
	   	 if (email.test(objectValue)===false) 
   	 	 {
	            alert('Not validate e-mail adress !');
         }

    };
    
    $.fn.validateNumeric = function(options) 
    {
	   	 var settings = $.extend({}, options);
	   
	   	 var objectValue = this.val(); 
	   	 if ($.isNumeric(objectValue)==false) 
   	 	 {
	            alert('Not numeric !');
         }

    };

}(jQuery));