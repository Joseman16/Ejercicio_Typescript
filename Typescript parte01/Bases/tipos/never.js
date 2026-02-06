"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    //never != void
    //never != undefined
    //never == never}
    //Nerver: mi función no deber teminar exitosamente
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio, necesito ayuda');
    console.log('Sigo vivo');
})();
//# sourceMappingURL=never.js.map