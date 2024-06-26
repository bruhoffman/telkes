"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frota_1 = require("./frota");
const adicionaCor = (frota, modelo, cor) => {
    let novoCarro;
    return (frota
        .filter((carro) => carro.modelo.toUpperCase() === modelo.toUpperCase())
        .map((carro) => novoCarro = Object.assign(Object.assign({}, carro), { cor: cor })));
};
console.table(adicionaCor(frota_1.frota, "uno", "Vermelho"));
//# sourceMappingURL=index.js.map