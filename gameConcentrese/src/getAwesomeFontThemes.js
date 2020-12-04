
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add( fas );

var fasArray = Object.keys( library.definitions.fas );

function getFAS() {
    return fasArray;
}

export default getFAS;
