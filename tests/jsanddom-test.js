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
    equal( typeof reverseString, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( reverseString( "Subscribers rock"), 2, 'Expected kcor srebircsbus as the result, the result was: ' + reverseString(  "Subscribers rock" ) );
});

module( "Find Min Value" );
test( "Find Min Value", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    var array = [7, 8, 9];
    ok( findMinValue(array), 2, 'Expected 7 as the result, the result was: ' + findMinValue(array) );
});

