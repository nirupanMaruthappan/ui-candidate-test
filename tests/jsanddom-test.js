/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

module( "String Reverse" );
test( "String Reverse", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the divide function is valid
    ok( reverseString( "Subscribers rock"), 2, 'Expected kcor srebircsbus as the result, the result was: ' + reverseString(  "Subscribers rock" ) );
});

module( "Find Min Value" );
test( "Find Min Value", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the  function is valid
    var array = [7, 8, 9];
    ok( findMinValue(array), 2, 'Expected 7 as the result, the result was: ' + findMinValue(array) );
});

module( "Find Distinct Values" );
test( "Find Distinct Values", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the  function is valid
    var array = [1, 1, 2, 3, 5, 7];
    ok( findDistinctValues(array), 2, 'Expected [1,2,3,5,7] as the result, the result was: ' + findDistinctValues(array) );
});

module( "Remove Fruits" );
test( "Remove Fruits", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    // Make sure the result from the  function is valid
    var array = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry']
    var arrayToRemove = ['pear', 'banana']
    ok( removeFruits(array,arrayToRemove), 2, ' the result was: ' + removeFruits(array,arrayToRemove) );
});

module( "Push Onto Array" );
test( "Push Onto Array", 2, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // Make sure the result from the  function is valid
    var array = [1, 2, 3, 4, 5]
    
    ok( pushOntoArray(array,6), 2, ' the result was: ' + removeFruits(array,[7,8,9]) );
});

module( "Split Using Comma" );
test( "Split Using Comma", 2, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    // Make sure the result from the  function is valid
    
    ok( splitListStrUsingComma('The, quick, brown, fox jumped over'), 2, ' the result was: ' + splitListStrUsingComma('The, quick, brown, fox jumped over') );
});

module( "Sum" );
test( "Sum", 2, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    // Make sure the result from the  function is valid
    var array = [1, 2, 3, 4, 5]
    
    ok( sum(array), 2, ' the result was: ' + sum(array) );
});

module( "isOnlyWhitespace" );
test( "isOnlyWhitespace", 2, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a sum function' ); 

    // Make sure the result from the  function is valid
    
    ok( isOnlyWhitespace("     "), 2, ' the result was: ' + isOnlyWhitespace("") );
});


