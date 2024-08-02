const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://prod2-21.usgovtexas.logic.azure.us:443/workflows/4839d796eecb4d5f9048d015f9d4878c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1NYbRqQP8uddqPoncZLRXdFeKuNCMW1c-1BmfGUYidw', true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) 
    {
        const data = JSON.parse(xhr.responseText);

        // Time elapsed since it was last sampled
        const sampledUTC = new Date(data.sampled);
        const timeDiff = new Date().getTime() - sampledUTC; // time elapsed since this data was sampled (the most recent data), in milliseconds

        // Only show the data if it is less than 60 minutes old
        if (timeDiff < 3600000) // 3,600,000 milliseconds = 1 hour
        {
            //Display time since data was sampled
            if (timeDiff < 60000) // it was taken less than a minute ago, so show seconds
            {
                const timeDiffSeconds = timeDiff / 1000
                $("#aqs-sampled").html("Data sampled " + timeDiffSeconds.toFixed(0) + " second(s) ago");
            }
            else // it was taken more than a minute ago, so show minutes
            {
                const timeDiffMinutes = timeDiff / (1000 * 60);
                $("#aqs-sampled").html("Data sampled " + timeDiffMinutes.toFixed(0) + " minute(s) ago");
            }

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
            $("#aqs-aqi").html("Air Quality Rating: <b>" + aqitxt + "</b>");

            

            // The stat display is normally hidden, so who it since we were able to get data!
            $("#eaq-telemetry").css("display", "");
        }
    }
};

xhr.send();