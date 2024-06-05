function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let textAreaElement = document.querySelector('#inputs>textarea');
      let bestRestaurantArea = document.querySelector('#outputs>#bestRestaurant>p');
      let bestWorkersArea = document.querySelector('#outputs>#workers>p');
      let restaurants = JSON.parse(textAreaElement.value);

      let restaurantReg = { bestRestaurant: '', bestSal: 0, avgSalary: 0 };
      let bestWorkersReg = {};

      for (let curRestaurant of restaurants) {
         let [restaurantName, workerDetails] = curRestaurant.split(' - ');
         let workersInfo = workerDetails.split(', ');

         if (!bestWorkersReg.hasOwnProperty(restaurantName)) {
            bestWorkersReg[restaurantName] = {};
         }

         for (let worker of workersInfo) {
            let [workerName, workerSalary] = worker.split(' ');

            if (bestWorkersReg.hasOwnProperty(restaurantName)) {
               bestWorkersReg[restaurantName][workerName] += Number(workerSalary);
            }
            bestWorkersReg[restaurantName][workerName] = Number(workerSalary);
         }
      }

      for (let restaurant in bestWorkersReg) {
         let bestSalary = [];
         let curRestSalaries = 0;

         for (let name in bestWorkersReg[restaurant]) {
            curRestSalaries += Number(bestWorkersReg[restaurant][name]);
            bestSalary.push(bestWorkersReg[restaurant][name]);
         }

         if (restaurantReg.avgSalary < curRestSalaries / Object.values(bestWorkersReg[restaurant]).length) {
            restaurantReg.bestRestaurant = restaurant;
            restaurantReg.avgSalary = curRestSalaries / Object.values(bestWorkersReg[restaurant]).length;
            restaurantReg.bestSal = Math.max(...bestSalary);
         }
      }
      bestRestaurantArea.textContent = `Name: ${restaurantReg.bestRestaurant} Average Salary: ${restaurantReg.avgSalary.toFixed(2)} Best Salary: ${restaurantReg.bestSal.toFixed(2)}`;

      let bestEntries = Object.entries(bestWorkersReg[restaurantReg.bestRestaurant]).sort((a, b) => b[1] - a[1]);

      for (let [name, salary] of bestEntries) {
         bestWorkersArea.textContent += `Name: ${name} With Salary: ${salary} `;
      }
   }
}