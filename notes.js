/* // Variable containers
var         - global variable container (not recommended)
let         - within scope variable container
const       - a strict variable container
*/
let v = 0;

/* // Function containers
function ...{}  - container to build a function
variable        - name for the function
v               - parameters set for the function

(nesting a function in a function is possible)
*/
function variable(v){
    function variable2(){

    }
}

/* // Types
100         - number
"100"       - string
True/False  - boolean
undefined   - undefined
null        - object (empty object reference)
*/

console.log(typeof v);

/* // Basic Operators
()          - grouping
+           - addition
++          - increment
-           - subtraction
--          - decrement
=           - assignment
==          - equates to
===         - strictly equates to
!           - not
!=          - not equates to
!==         - strictly not equates to
>           - more than
>=          - more than / equals to
<           - less than
<=          - less than / equals to
/           - division
*           - multiplication
&&          - and
||          - or

for more
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
*/

console.log(v++);
