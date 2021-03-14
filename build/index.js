var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.initApp();
    }
    StatsApp.prototype.initApp = function () {
        // this.getFields();
        // this.watchInputs();
        this.getAndWatchDynamicField();
        this.getOutputFields();
    };
    StatsApp.prototype.getAndWatchDynamicField = function () {
        var _this = this;
        this.fieldsNumber = document.querySelector("#fieldsnumber");
        this.fieldsNumber.addEventListener("input", function () { return _this.watchFieldsNumber(); });
    };
    StatsApp.prototype.watchFieldsNumber = function () {
        this.generateFields(+this.fieldsNumber.value);
    };
    StatsApp.prototype.generateFields = function (fieldsNumber) {
        var _this = this;
        var inputsContainer = document.querySelector("#inputs");
        inputsContainer.innerHTML = "";
        var _loop_1 = function () {
            var div = document.createElement("div");
            var label = document.createElement("label");
            var input = document.createElement("input");
            var button = document.createElement("button");
            div.classList.add("form-field");
            label.setAttribute("for", "data" + i);
            label.innerHTML = "Data " + i;
            div.appendChild(label);
            input.setAttribute("id", "data" + i);
            input.classList.add("data");
            input.addEventListener("input", function () { return _this.calculateAndShowData(); });
            button.innerHTML = "Clear";
            button.addEventListener("click", function () {
                input.value = "";
                _this.calculateAndShowData();
            });
            div.appendChild(input);
            div.appendChild(button);
            inputsContainer.appendChild(div);
        };
        for (var i = 0; i < fieldsNumber; i++) {
            _loop_1();
        }
        var outputs = document.querySelector("#outputs");
        outputs.style.display = "flex";
    };
    StatsApp.prototype.getOutputFields = function () {
        // this.inputData1 = document.querySelector("#data1");
        // this.inputData2 = document.querySelector("#data2");
        // this.inputData3 = document.querySelector("#data3");
        // this.inputData4 = document.querySelector("#data4");
        this.outputData1 = document.querySelector("#output1");
        this.outputData2 = document.querySelector("#output2");
        this.outputData3 = document.querySelector("#output3");
        this.outputData4 = document.querySelector("#output4");
    };
    // public watchInputs(): void {
    //     this.inputData1.addEventListener('input', () => this.calculateAndShowData());
    //     this.inputData2.addEventListener('input', () => this.calculateAndShowData());
    //     this.inputData3.addEventListener('input', () => this.calculateAndShowData());
    //     this.inputData4.addEventListener('input', () => this.calculateAndShowData());
    // }
    StatsApp.prototype.calculateAndShowData = function () {
        var values = [];
        var sum = 0;
        var data = document.querySelectorAll(".data");
        for (var i = 0; i < +this.fieldsNumber.value; i++) {
            var input = data[i];
            values.push(+input.value);
            sum += +input.value;
        }
        var avg = sum / +this.fieldsNumber.value;
        var min = Math.min.apply(Math, values);
        var max = Math.max.apply(Math, values);
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
