import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Component, OnInit, Input } from '@angular/core';
Chart.register(...registerables, ChartDataLabels);


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent  implements OnInit {
  @Input() chartData!: any;
  constructor() { }
   ctx = document.getElementById('myChart');

  public valueBarVertical(valor: number, arrayValue: number[], heightBox: number){
    let maxNumber = 0;
    maxNumber = Math.max(...arrayValue)
    let rate;
    rate = (valor*heightBox)/maxNumber;
    return rate;
  }

  public valueBarHorizontal(valor: number, maxValue: number){
    let rate;
    rate = (valor*100)/maxValue;
    return rate;
  }
  

  

  ngOnInit() {}
  ngAfterViewInit() {

    // new Chart('myChart', {
    //   type: 'bar',
    //   data: {
    //     labels: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
    //     datasets: [{
    //       data: [12, 19, 3, 5, 2, 3],
    //       borderWidth: 0
    //     }]
    //   },
    //   options: {
    //     plugins: {
    //       datalabels: {
    //         anchor: 'end',
    //         align: 'top',
    //         color: 'white', // Mudar a cor dos datalabels
    //         formatter: (value, context) => value,
    //       }
    //     },
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //         grid: {
    //           display: false
    //         },
    //         ticks: {
    //           display: false
    //         }
    //       },
    //       x: {
    //         grid: {
    //           display: false
    //         },
    //         ticks: {
    //           display: false
    //         }
    //       }
    //     }
    //   }
    // });
   
    //  new Chart('myChart', {
    //   type: 'bar',
    //   data: {
    //     labels: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0'],
    //     datasets: [
    //       {
    //         backgroundColor: ['#54dc91', '#54dc91', '#ffcc00', '#ffcc00','#DC3545', '#DC3545', '#DC3545', '#DC3545', '#DC3545', '#DC3545', '#DC3545' ],
    //         data: [120, 80, 35, 25, 8, 8, 5, 5, 5, 2, 2],
    //       },
                    
    //     ]
    //   },
    //   options: {
    //     maintainAspectRatio: false,
    //     scales: {
    //       x: {
    //         stacked: false,
    //         grid: {
    //           display: false // Oculta as linhas de grade no eixo x
    //         },
    //         ticks: {
    //           font: {
    //             size: 15,  // Tamanho da fonte da escala Y
    //             family: 'Gotham',  // Nome da fonte Poppins
    //             weight: 'normal'
    //           }
    //         }
            
    //       },
    //       y: {               
    //         stacked: false,
    //         grid: {
    //           display: false // Oculta as linhas de grade no eixo y
    //         },
    //         ticks: {
    //           stepSize: 20,
    //           font: {
    //             size: 10,  // Tamanho da fonte da escala Y
    //             family: 'Gotham',
    //               // Nome da fonte Poppins
    //           }
    //         },
            
    //       },
          
    //     },
    //     plugins: {
    //       legend: {
    //               position: 'bottom', // Define a posição da legenda para 'bottom' (embaixo)
    //               display: false,
    //               labels: {
    //                 boxHeight: 12,
    //                 boxWidth: 12,
    //                 pointStyle: 'circle', // Usa um ponto colorido em vez de uma caixa de cor

    //                 font: {
    //                   size: 15,  // Tamanho da fonte da legenda
    //                   family: 'Gotham'  // Nome da fonte Poppins
    //                 },
    //                 useBorderRadius: true,
    //                 borderRadius: 4, 

    //                    }, 
    //       },
    //       datalabels: {
    //             anchor: 'end', // Alinha os rótulos no final da barra
    //             align: 'end',   // Alinha os rótulos no final da barra
    //             display: true,  // Exibe as etiquetas automaticamente
    //             font: {
    //               size: 15,
    //               family: 'Gotham',
    //               weight: 'bold'  // Nome da fonte
    //             },
    //             color: 'white'
    //       }
    //     },
    //     elements: {
    //       bar: {
    //         borderRadius: {
    //           topLeft: 15, // Ajuste o valor conforme necessário
    //           topRight: 15 // Ajuste o valor conforme necessário
    //         },
            
    //       },
    //       point: {
    //         borderWidth: 0
    //       }
    //     }
    //   }
      
    // });
    
    
    
  }
}
