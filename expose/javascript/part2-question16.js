let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (cars in statistics){
    if (cars.startsWith('r') || statistics[cars] % 2 != 0){
        console.log('${a}: ${statistics[cars]}');
    }
}