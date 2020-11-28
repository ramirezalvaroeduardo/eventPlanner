

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add( fas )
//library.add( library )

var faArray = Object.keys( library.definitions.fas );
//var faLib   = Object.keys( library );

function getFAS() {
    //console.log( faArray );
    console.log( faArray.length );
    return faArray;
}

export default getFAS;
