function agencyProfit(input) {

    let companyName = input[0];
    let adultTicketsNum = Number(input[1]);
    let kidTicketsNum = Number(input[2]);
    let nettoPriceAdultTicket = Number(input[3]);
    let taxesPrice = Number(input[4]);

    let kidPriceForTicket = nettoPriceAdultTicket - nettoPriceAdultTicket * 0.70;
    let ticketsPrice = (nettoPriceAdultTicket + taxesPrice) * adultTicketsNum + (kidPriceForTicket + taxesPrice) * kidTicketsNum;
    
    let agencyProfit = (ticketsPrice * 0.20).toFixed(2);

    console.log(`The profit of your agency from ${companyName} tickets is ${agencyProfit} lv.`);
    
}

agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"]);