// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
var constructLaptop = {
    make: "hp",
    model: "Pavilion 15-cc0xx",
    year: 2023,
    Operating_System: "Windows 10 Pro",
    describe: function () {
        console.log("This laptop is \"".concat(this.make, " ").concat(this.model, " ").concat(this.year, " ").concat(this.Operating_System, ".\""));
    },
};
constructLaptop.describe();
