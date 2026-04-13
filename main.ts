import { Serie } from './serie.js';
import { series } from './data.js';

function renderSeriesInTable(seriesList: Serie[]): void {
    const tbody = document.getElementById('series-tbody') as HTMLTableSectionElement;
    tbody.innerHTML = '';

    for (const serie of seriesList) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
            <td>${serie.description}</td>
            <td><a href="${serie.webpage}" target="_blank">Ver</a></td>
            <td><img src="${serie.poster}" alt="${serie.name}" width="100"></td>
        `;
        tbody.appendChild(tr);
    }
}


function calcularPromedioTemporadas(series: Serie[]): number {
    let total = 0;
    series.forEach((serie) => {
        total += serie.seasons;
    });
    return total / series.length;
}

function mostrarPromedio(series: Serie[]): void {
    const promedio = calcularPromedioTemporadas(series);
    const promedioElement = document.getElementById("average-seasons");
    if (promedioElement) {
        promedioElement.innerText = `Promedio temporadas: ${promedio.toFixed(2)}`;
    }
}

renderSeriesInTable(series);
mostrarPromedio(series);
