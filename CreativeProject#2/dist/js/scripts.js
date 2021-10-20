

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

document.getElementById("coinSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("coinInput").value;
    if (value === "")
        return;
    console.log(value);

    async function fetchInfo() {
        const response = await fetch('https://api.coinpaprika.com/v1/coins/' + value + '/ohlcv/latest/')
        const info = await response.json();
        return info;
    }

    fetchInfo().then(info => {
        const coinCurrentValue = info[0].open.toFixed(2);
        const coinLowValue = info[0].low.toFixed(2);
        const coinHighValue = info[0].high.toFixed(2);
        const coinVolume = info[0].volume.toFixed();
        const coinCloseValue = info[0].close.toFixed();

        //     console.log(json)
        let results = "";

        results += "<h1>" + "<u>" + value + "</u>" + "</h1>";
        results += "<h2>" + "Current Price: $" + coinCurrentValue + "</h1>";
        results += "<h3>" + "High: $" + coinHighValue + "</h2>";
        results += "<h3>" + "Low: $" + coinLowValue + "</h2>";
        results += "<h3>" + "Volume: " + coinVolume + "</h2>";
        results += "<h3>" + "Close: " + coinCloseValue + "</h2>";



        document.getElementById("cryptoInfo").innerHTML = results;
    })



    // // // This will get additional info from the exchanges api
    // async function fetchBackground() {
    //     const response2 = await fetch('https://api.coinpaprika.com/v1/tickers/' + value + '/historical')
    //     const background = await response2.json();
    //     console.log(background)
    //     return background;
    // }

    // fetchBackground().then(background => {
    //     const coinDescription = background.name;

    //     let results2 = "";
    //     results2 += "<h3>" + "Info:" + coinDescription + "</h3>";

    //     document.getElementById("cryptoInfo2").innerHTML = results2;
    // })




});












    // This is where the API comes in
    // Using Skyscanner API
    // document.getElementById("flightSubmit").addEventListener("click", function (event) {
    //     event.preventDefault();
    //     const originValue = document.getElementById("originInput").value;
    //     if (originValue === "")
    //         return;
    //     console.log(originValue);

//     fetch('https://api.coinpaprika.com/v1/coins')
//         .then(function (response) {
//             return response.json;
//             // }).then(function (json) {
//             //     let results = "";
//             //     results += '<h1>' + json.name + "</h2>";


//             // }).then(function (json) {
//             //     let results = "";
//             //     results += '<h1>' + json.name + "</h2>";
//             //     for (let i = 0; i < json.weather.length; i++) {
//             //         results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
//             //     }

//         });
// // });

// function httpGetAsync(url, callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", url, true); // true for asynchronous
//     xmlHttp.send(null);
// }

