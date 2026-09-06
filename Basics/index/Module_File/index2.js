//!----default import

import addition from "./index1.js";

// console.log(addition);
addition(20,70)




//!------named import-------------------
// import { multiply } from "./index1.js";
// multiply(3,2)

// import { num } from "./index1.js";



//!---for multiple named import in one line
// import { multiply,num } from "./index1.js";
// multiply(30,30)
// console.log(num);



//!-----2 way of importing---------------------------------------------------------------------
// import { multiply,num} from "./index1.js";
// console.log(num);
// multiply(40,29);


//!---using alias----
// import { mul,n } from "./index1.js";
// mul(33,22)
// console.log(n);



//!----all imports at a time--------------------------------------------------------------

import * as data from "./index1.js";
console.log(data);

//!--to access default key or etc
//!---for default key accessing
data.default(10,2)



//!---to access named export keys
data.multiply(1,3)
data.mul(9,5)
console.log(data.n);







