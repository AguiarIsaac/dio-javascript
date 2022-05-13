interface Vehicle {
    name: string,
    plate: string,
    date: Date
}

(function() {
     const htmlElement = ( query: string ): HTMLInputElement | null => document.querySelector(query);


     function patio(){
        function wride() {

        }

        function add(vehicle: Vehicle) {
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${vehicle.name}</td>
            <td>${vehicle.plate}</td>
            <td>${vehicle.date}</td>
            <td><button class="dele" data-placa="${vehicle.plate}">X</button></td>
        `;
            htmlElement('#patio')?.appendChild(row)
        }

        function remove() {

        }

        function save() {

        }

        function render(){

        }

        return {wride, add, remove, save, render}
     }

     htmlElement('#btn')?.addEventListener('click', () => {
         const name = htmlElement('#name')?.value;
         const plate = htmlElement('#plate')?.value;

         if(!name || !plate) {
             window.alert('Todos os campos devem ser preenchidos');
             return;
         }

         patio().add({ name, plate,date: new Date() })
     })
})();
