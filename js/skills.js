document.addEventListener('DOMContentLoaded', function () {

    var text = 'Gimp Gimp Gimp jQuery jQuery jQuery jQuery jQuery JavaScript JavaScript JavaScript JavaScript JavaScript HTML HTML HTML HTML HTML HTML CSS CSS CSS CSS CSS C# C# C# C# TortoiseSVN TortoiseSVN TortoiseSVN TortoiseSVN GitHub GitHub GitHub SQL-Server SQL-Server SQL-Server SQL-Server SQL-Server Knockout Knockout Knockout Data-Structures Data-Structures Data-Structures Highcharts Highcharts Highcharts Restful-API Restful-API Restful-API ag-Grid ag-Grid ag-Grid Nodejs  Nodejs MySQL MySQL Elastic-Search Elastic-Search Rasa Rasa';
    var lines = text.split(/[,\. ]+/g),
        data = Highcharts.reduce(lines, function (arr, word) {
            var obj = Highcharts.find(arr, function (obj) {
                return obj.name === word;
            });
            if (obj) {
                obj.weight += 1;
            } else {
                obj = {
                    name: word,
                    weight: 1
                };
                arr.push(obj);
            }
            return arr;
        }, []);
        
    var myChart = Highcharts.chart('stackContent', {
        accessibility: {
            screenReaderSection: {
                beforeChartFormat: '<h5>{chartTitle}</h5>' +
                    '<div>{chartSubtitle}</div>' +
                    '<div>{chartLongdesc}</div>' +
                    '<div>{viewTableButton}</div>'
            }
        },
        series: [{
            type: 'wordcloud',
            data: data,
            name: 'Occurrences',
            colors: [ '#adabab','#ccca62', '#6d8f9a']
        }],
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        chart: {
            backgroundColor: '#000000',
            style: {
                fontFamily: 'Poppins'
            }
        },
        tooltip: { enabled: false }
    });


    var myChart = Highcharts.chart('skillCompareContainer', {
        chart: {
            type: 'lollipop',
            backgroundColor: '#000000'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Data Structures', 'JavaScript', 'NodeJS', 'C#', "MySQL","Elastic Search", "JQuery", "SQL Server", "HTML5","KnockoutJS","Restful API","CSS3"]
        },
        yAxis: {
            title: {
                text: 'Skills'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        }]
    });

});



