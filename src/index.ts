class StatsApp {

    //inputs
    public inputData1: HTMLInputElement;
    public inputData2: HTMLInputElement;
    public inputData3: HTMLInputElement;
    public inputData4: HTMLInputElement;

    //outputs
    public outputData1: HTMLInputElement;
    public outputData2: HTMLInputElement;
    public outputData3: HTMLInputElement;
    public outputData4: HTMLInputElement;

    constructor() {
        this.initApp();
    }

    public initApp(): void {
        this.getFields();
        this.watchInputs();
    }


    public getFields(): void {
        this.inputData1 = document.querySelector("#data1");
        this.inputData2 = document.querySelector("#data2");
        this.inputData3 = document.querySelector("#data3");
        this.inputData4 = document.querySelector("#data4");

        this.outputData1 = document.querySelector("#output1");
        this.outputData2 = document.querySelector("#output2");
        this.outputData3 = document.querySelector("#output3");
        this.outputData4 = document.querySelector("#output4");
    }


    public watchInputs(): void {
        this.inputData1.addEventListener('input', () => this.calculateAndShowData());
        this.inputData2.addEventListener('input', () => this.calculateAndShowData());
        this.inputData3.addEventListener('input', () => this.calculateAndShowData());
        this.inputData4.addEventListener('input', () => this.calculateAndShowData());
    }

    public calculateAndShowData(): void {
        const input1 = +this.inputData1.value;
        const input2 = +this.inputData2.value;
        const input3 = +this.inputData3.value;
        const input4 = +this.inputData4.value;

        const sum = input1 + input2 + input3 + input4;
        const avg = sum / 4;
        const min = Math.min(input1, input2, input3, input4);
        const max = Math.max(input1, input2, input3, input4);

        this.showData(sum, avg, min, max);
    }

    public showData(sum: number, avg: number, min: number, max: number): void {
        this.outputData1.value = sum.toString();
        this.outputData2.value = avg.toString();
        this.outputData3.value = min.toString();
        this.outputData4.value = max.toString();
    }
}

const statApp = new StatsApp();