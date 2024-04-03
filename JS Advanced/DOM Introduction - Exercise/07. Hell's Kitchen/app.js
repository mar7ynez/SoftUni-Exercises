function solve() {

   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs > textarea');
   let outputs = document.querySelector('#bestRestaurant > p');
   let bestWorkers = document.querySelector('#workers > p');
   
   function onClick() {
      let restaurantsList = JSON.parse(input.value);
      let restaurantsReg = {};
      let bestRestaurant = [];
      
      for (let restaurant of restaurantsList) {
         let [restName, workersInfo] = restaurant.split(' - ');
         let workers = workersInfo.split(', ');
         let totalSalary = [];
         
         for (let worker of workers) {
            let [, workerSalary] = worker.split(' ');
            workerSalary = Number(workerSalary);
            
            if (!restaurantsReg.hasOwnProperty(restName)) {
               restaurantsReg[restName] = {
                  name: restName,
                  workerNames: [],
                  avgSalary: 0,
                  bestSalary: 0,
               }
            }
            restaurantsReg[restName].workerNames.push(worker);
            totalSalary.push(workerSalary);
         }
         restaurantsReg[restName].avgSalary = (totalSalary.reduce((a, b) => a + b, 0) / restaurantsReg[restName].workerNames.length).toFixed(2);
         restaurantsReg[restName].bestSalary = (Math.max(...totalSalary)).toFixed(2);
         bestRestaurant.push(restaurantsReg[restName]);
      }
      bestRestaurant.sort((a, b) => b.avgSalary - a.avgSalary);
      bestWorkers.textContent = '';
      let namesAndSalarys = {};

      for (let workerSalary of bestRestaurant[0].workerNames) {
         let [worker, salary] = workerSalary.split(' ');
         namesAndSalarys[salary] = worker;
      }
      
      for (let key of Object.keys(namesAndSalarys).sort((a, b) => b - a)) {
         bestWorkers.textContent += ` Name: ${namesAndSalarys[key]} With Salary: ${key}`;
      }
      outputs.textContent = `Name: ${bestRestaurant[0].name} Average Salary: ${bestRestaurant[0].avgSalary} Best Salary: ${bestRestaurant[0].bestSalary}`;
   }
}