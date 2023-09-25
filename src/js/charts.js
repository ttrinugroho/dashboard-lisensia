// #top-device
(function () {
    var options = {
        series: [32, 56, 34, 77],
        chart: {
            type: "donut",
            with: 300
        },
        legend: {
            show: true,
            position: 'bottom'
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "85%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontWeight: 400,
                            offsetY: 20,
                            color: undefined,
                        },
                        value: {
                            show: true,
                            fontSize: '28px',
                            fontWeight: 600,
                            offsetY: -20,
                            color: undefined,
                            formatter: function (val) {
                                return val
                            }
                        },
                        total: {
                            show: true,
                            label: 'Proyek Tahun Ini',
                            color: '#696974',
                            fontWeight: 400,
                            fontSize: 14,
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                },
            },
        },
        labels: ["Provinsi", "Lokasi", "Kota", "Proyek"],
        colors: ["#1565D8", "#FFC542", "#FF6D00", "#3DD598"],
    };
    var chart = document.querySelector("#top-device");

    if (chart != null) {
        new ApexCharts(chart, options).render();
    }
})();

(function () {
    var options = {
        chart: {
            height: 350,
            type: "line",
            stacked: false
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#1DAB5C", "#FFC454"],
        series: [
            {
                name: "Project Team",
                data: [30,40,50,60,70,100]
            },
            {
                name: "Product Team",
                data: [40,50,60,70]
            }
        ],
        stroke: {
            width: [4, 4]
        },
        plotOptions: {
            bar: {
                columnWidth: "20%"
            }
        },
        xaxis: {
            categories: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul']
        },
        yaxis: [
            {
                axisBorder: {
                    show: false
                },
                labels: {
                    style: {
                        colors: "#687588"
                    },
                    formatter: function(val, index) {
                        return val+'K';
                    }
                }
            },
        ],
        tooltip: {
            shared: false,
            intersect: true,
            x: {
                show: false
            }
        },
        legend: {
            position:"top",
            horizontalAlign: "left",
            offsetX: -16
        }
    };

    var chart = document.querySelector("#performance-by-day");

    if (chart != null) {
        new ApexCharts(chart, options).render();
    }
})();
(function(){
    var options = {
        series: [{
          name: "Data User",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
        chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width:2,
        curve: 'smooth'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['2022-01','2022-02','2022-03', '2022-04','2022-05', '2022-06','2022-07', '2022-08','2022-09'],
      }
      };
      if(document.querySelector("#daftar-user-chart")){
          new ApexCharts(document.querySelector("#daftar-user-chart"), options);
      }
})();
(function(){
    var options = {
        series: [{
          name: "Data Mitra",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
        chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width:2,
        curve: 'smooth'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['2022-01','2022-02','2022-03', '2022-04','2022-05', '2022-06','2022-07', '2022-08','2022-09'],
      }
      };
      if(document.querySelector("#daftar-mitra-chart")){
        new ApexCharts(document.querySelector("#daftar-mitra-chart"), options);
      }
})();
