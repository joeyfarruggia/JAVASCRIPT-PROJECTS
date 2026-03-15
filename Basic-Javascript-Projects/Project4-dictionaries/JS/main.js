function my_Dictionary() {
    var Vehicle = {
        Year:"2022",
        Make:"Tesla",
        Model:"Model Y",
        Trim:"Performance",
        Horsepower: 500,
        Fuel: "Electric"
    };
    delete Vehicle.Horsepower;
    document.getElementById("Dictionary").innerHTML = Vehicle.Horsepower
}