"use strict";
(function () {
    var _a;
    const htmlElement = (query) => document.querySelector(query);
    function patio() {
        function wride() {
        }
        function add(vehicle) {
            var _a;
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${vehicle.name}</td>
            <td>${vehicle.plate}</td>
            <td>${vehicle.date}</td>
            <td>
               <button class="dele" data-placa="${vehicle.plate}">X</button> 
            </td>
        `;
            (_a = htmlElement('#patio')) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        }
        function remove() {
        }
        function save() {
        }
        function render() {
        }
        return { wride, add, remove, save, render };
    }
    (_a = htmlElement('#btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b;
        const name = (_a = htmlElement('#name')) === null || _a === void 0 ? void 0 : _a.value;
        const plate = (_b = htmlElement('#plate')) === null || _b === void 0 ? void 0 : _b.value;
        if (!name || !plate) {
            window.alert('Todos os campos devem ser preenchidos');
            return;
        }
        patio().add({ name, plate, date: new Date() });
    });
})();
