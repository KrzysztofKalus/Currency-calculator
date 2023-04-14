{
    const welcome = () => {
        console.log("Cześć, miło mi, że tu zaglądasz");
    }
    welcome();

    const onValueCurency = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");

        const rateEURO = 4.6810;
        const rateUSD = 4.2917;
        const rateGBP = 5.3369;

        const amount = +amountElement.value;
        const currency = currencyElement.value;
        let result;

        switch (currency) {

            case "EURO":
                result = amount / rateEURO;
                break;

            case "USD":
                result = amount / rateUSD;
                break;

            case "GBP":
                result = amount / rateGBP;
                break;
        }
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("click", onValueCurency);
    }
    init();
}
