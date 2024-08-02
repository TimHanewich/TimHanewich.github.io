const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://prod2-21.usgovtexas.logic.azure.us:443/workflows/4839d796eecb4d5f9048d015f9d4878c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1NYbRqQP8uddqPoncZLRXdFeKuNCMW1c-1BmfGUYidw', true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) 
    {
        const data = JSON.parse(xhr.responseText);
        console.log(data);

        $("#aqs-temp").html("Temperature: <b>" + data.temperaturef.toFixed(1) + "°F</b>");
        $("#aqs-humidity").html("Humidity: <b>" + (data.relhumidity*100).toFixed(0) + "%</b>, <b>" + data.abshumidity.toFixed(2) + " g/m<sup>3</sup></b>");
        $("#aqs-tvoc").html("Volatile Organic Compound Concentration: <b>" + data.tvoc.toFixed(0) + " ppb</b>");
        $("#aqs-eco2").html("CO<sub>2</sub> Concentration: <b>" + data.eco2.toFixed(0) + " ppm</b>");

        // Air Quality Index
        const aqi = data.aqi;
        let aqitxt = "yoser";
        if (aqi == 1)
        {
            aqitxt = "Excellent";
        }
        else if (aqi == 2)
        {
            aqitxt = "Good";
        }
        else if (aqi == 3)
        {
            aqitxt = "Moderate";
        }
        else if (aqi == 4)
        {
            aqitxt = "Poor";
        }
        else if (aqi == 5)
        {
            aqitxt = "Unhealthy";
        }
        $("#aqs-aqi").html("Air Quality Rating: <b>" + aqitxt + "</b>")

    }
    else 
    {
        ("#eaq-telemetry").hide()
    }
};

xhr.onerror = function() 
{
    ("#eaq-telemetry").hide()
};

xhr.send();