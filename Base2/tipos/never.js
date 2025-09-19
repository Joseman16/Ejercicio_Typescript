"use strict";
(() => {
    //never no es undefined
    //never no es void...
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio');
    console.log('Hola Mundo');
})();
//# sourceMappingURL=never.js.map