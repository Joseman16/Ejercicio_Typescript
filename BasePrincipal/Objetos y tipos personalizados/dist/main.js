System.register("objects", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                let flash = {
                    name: "Barry Allen",
                    age: 20,
                    powers: ["SuperVelocidad", "Viaja en el tiempo"],
                    getName() {
                        return this.name;
                    }
                };
                let superman = {
                    name: "Clark Kent",
                    age: 50,
                    powers: ["SuperVelocidad", "fuerza"],
                };
                if (flash.getName) {
                    console.log(flash.getName());
                }
                else {
                    console.log(flash.name);
                }
            })();
        }
    };
});
System.register("tiposPersoanlizados", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                let flash = {
                    name: 'Barry Allen',
                    age: 24,
                    powers: [1, 2]
                };
                let superman = {
                    name: 'Clark Kent',
                    age: 60,
                    powers: [1],
                    getName() {
                        return this.name;
                    }
                };
            })();
        }
    };
});
System.register("union-types", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                let myCustomVariable = 'Josema';
                console.log(typeof myCustomVariable);
                myCustomVariable = 23;
                console.log(typeof myCustomVariable);
                myCustomVariable = {
                    name: 'Spiderman',
                    age: 21,
                    powers: [1, 2]
                };
                console.log(typeof myCustomVariable);
                console.log(myCustomVariable);
            })();
        }
    };
});
//# sourceMappingURL=main.js.map