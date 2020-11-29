

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( fas );
//library.add( FontAwesomeIcon )

var fasArray = Object.keys( library.definitions.fas );
//var faArray = Object.keys( library.FontAwesomeIcon );
//var faLib   = Object.keys( library );

function getFAS() {
    return fasArray;
}

/* function getFA() {
    return faArray;
}
 */

export default getFAS;
