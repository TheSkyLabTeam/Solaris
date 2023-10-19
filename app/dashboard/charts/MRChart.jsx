import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js'
import 'chartjs-adapter-moment';

ChartJs.register(CategoryScale, LinearScale, BarElement);

function MRChart({ datos, fechaInicio, fechaFin }) {

    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: true,
                    color:'rgba(156, 143, 128,0.2)'
                    
                }
            },
            y:{
               grid:{
                display: true,
                color:'rgba(156, 143, 128,0.2)'
               }
            }
        },
    }

    function filtrarTrues(datos, fechaInicio, fechaFin) {
        let inicio = new Date(fechaInicio);
        let fin = new Date(fechaFin);
    
        // Crear un objeto para almacenar las fechas y sus frecuencias
        let frecuencias = {};
    
        datos.filter(d => {
            let fecha = new Date(d.datetime);
            fecha.setHours(0, 0, 0, 0); // Normalizar la fecha a medianoche
    
            // Solo procesar las fechas dentro del rango
            if (fecha >= inicio && fecha <= fin && d.Rm_ind1 == "True") {
                // Convertir la fecha a una cadena en formato yyyy-mm-dd
                let fechaStr = fecha.toISOString().split('T')[0];
    
                // Incrementar la frecuencia para esta fecha
                if (fechaStr in frecuencias) {
                    frecuencias[fechaStr]++;
                } else {
                    frecuencias[fechaStr] = 1;
                }
            }
        });
    
        return frecuencias;
    }
    
    const frecuencias = filtrarTrues(datos, fechaInicio, fechaFin);

    const labels = Object.keys(frecuencias);
    const data = Object.values(frecuencias);

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Frecuencia',
            data: data,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
        }],
    };

    return <Bar data={chartData} options={options} />;
}

export default MRChart;
