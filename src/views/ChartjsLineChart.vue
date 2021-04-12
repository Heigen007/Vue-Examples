<template>
    <div class="home">
        <div class = "title">Chart.js Line Chart Example(v2.5.0)</div>
        <div class="MainBox">
            <div class="line-chart">
                <div class="aspect-ratio">
                    <canvas id="chart"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Chart } from 'chart.js'
export default {
    name: 'Home',
    mounted(){
        var chart = document.getElementById('chart').getContext('2d'),
        gradient = chart.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
        gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
        gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');


        var data  = {
            labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
            datasets: [{
                    label: 'Custom Label Name',
                    backgroundColor: gradient,
                    pointBackgroundColor: 'white',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    borderWidth: 1,
                    borderColor: '#911215',
                    data: [50, 55, 80, 81, 54, 50]
            }]
        };


        var options = {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                easing: 'easeInOutQuad',
                duration: 520
            },
            scales: {
                x: [{
                    type: 'CategoryScale',
                    gridLines: {
                        color: 'rgba(200, 200, 200, 0.05)',
                        lineWidth: 1
                    }
                }],
                y: [{
                    type: 'CategoryScale',
                    gridLines: {
                        color: 'rgba(200, 200, 200, 0.08)',
                        lineWidth: 1
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: true
            },
            point: {
                backgroundColor: 'white'
            },
            tooltips: {
                titleFontFamily: 'Open Sans',
                backgroundColor: 'rgba(0,0,0,0.3)',
                titleFontColor: 'white',
                caretSize: 5,
                cornerRadius: 2,
                xPadding: 10,
                yPadding: 10
            }
        };

        new Chart(chart, {
            type: 'line',
            options: options,
            data: data,
        });
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.MainBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 100%;
  min-height: 90vh;
  background: #252429;
}

.line-chart {
  -webkit-animation: fadeIn 600ms cubic-bezier(0.57, 0.25, 0.65, 1) 1 forwards;
          animation: fadeIn 600ms cubic-bezier(0.57, 0.25, 0.65, 1) 1 forwards;
  opacity: 0;
  max-width: 640px;
  width: 60%;
  min-width: 360px;
}

.aspect-ratio {
  height: 0;
  padding-bottom: 50%;
}

@-webkit-keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
