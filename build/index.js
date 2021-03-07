var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.initApp();
    }
    StatsApp.prototype.initApp = function () {
        this.getFields();
        this.watchInputs();
    };
    StatsApp.prototype.getFields = function () {
        this.inputData1 = document.querySelector("#data1");
        this.inputData2 = document.querySelector("#data2");
        this.inputData3 = document.querySelector("#data3");
        this.inputData4 = document.querySelector("#data4");
        this.outputData1 = document.querySelector("#output1");
        this.outputData2 = document.querySelector("#output2");
        this.outputData3 = document.querySelector("#output3");
        this.outputData4 = document.querySelector("#output4");
    };
    StatsApp.prototype.watchInputs = function () {
        var _this = this;
        this.inputData1.addEventListener('input', function () { return _this.calculateAndShowData(); });
        this.inputData2.addEventListener('input', function () { return _this.calculateAndShowData(); });
        this.inputData3.addEventListener('input', function () { return _this.calculateAndShowData(); });
        this.inputData4.addEventListener('input', function () { return _this.calculateAndShowData(); });
    };
    StatsApp.prototype.calculateAndShowData = function () {
        var input1 = +this.inputData1.value;
        var input2 = +this.inputData2.value;
        var input3 = +this.inputData3.value;
        var input4 = +this.inputData4.value;
        var sum = input1 + input2 + input3 + input4;
        var avg = sum / 4;
        var min = Math.min(input1, input2, input3, input4);
        var max = Math.max(input1, input2, input3, input4);
        this.showData(sum, avg, min, max);
    };
    StatsApp.prototype.showData = function (sum, avg, min, max) {
        this.outputData1.value = sum.toString();
        this.outputData2.value = avg.toString();
        this.outputData3.value = min.toString();
        this.outputData4.value = max.toString();
    };
    return StatsApp;
}());
var statApp = new StatsApp();