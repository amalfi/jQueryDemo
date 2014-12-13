function validateForm()
{
	   $('#name').validateEmptyField({
	    	text : 'Test'   
	    });	
	    $('#email').validateEmail({
    	text : 'Test'   
	    });
	    $('#number').validateNumeric();
}