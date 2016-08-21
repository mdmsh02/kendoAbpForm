angular.module("KendoDemos", ["kendo.directives"])
    .factory('multiselectService', multiselectService);

function multiselectService() {

    var data = [{
        ProductID: 100000000,
        ProductName: "ALL",
        isChecked: false
    }, {
        ProductID: 1,
        ProductName: "Chai",
        isChecked: true
    },
    {
        ProductID: 2,
        ProductName: "Sugar",
        isChecked: true
    },
    {
        ProductID: 3,
        ProductName: "Milk",
        isChecked: false
    },
    {
        ProductID: 4,
        ProductName: "Coffee",
        isChecked: false
    }
    ];

    return {
        getData: []
    };
}