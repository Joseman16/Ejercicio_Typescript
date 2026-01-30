"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const fullName = (firstName, ...restoDeNombre) => {
        return `${firstName} ${restoDeNombre.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Leon');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map