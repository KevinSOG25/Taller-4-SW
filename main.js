import { Serie } from './serie.js';
import { series } from './data.js';
function renderSeriesInTable(seriesList) {
    const tbody = document.getElementById('series-tbody');
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
            <td><img src="${serie.poster}" width="100"></td>
        `;
        const celdas = tr.querySelectorAll('td');
        celdas.forEach(td => {
            td.addEventListener('click', () => {
                mostrarDetalle(serie);
            });
        });
        tbody.appendChild(tr);
    }
}
function calcularPromedioTemporadas(series) {
    let total = 0;
    series.forEach((serie) => {
        total += serie.seasons;
    });
    return total / series.length;
}
function mostrarPromedio(series) {
    const promedio = calcularPromedioTemporadas(series);
    const promedioElement = document.getElementById("average-seasons");
    if (promedioElement) {
        promedioElement.innerText = `Promedio temporadas: ${promedio.toFixed(2)}`;
    }
}
function mostrarDetalle(serie) {
    const detail = document.getElementById('series-detail');
    if (!detail)
        return;
    detail.innerHTML = `
        <div class="card">
            <img src="${serie.poster}" class="card-img-top" alt="${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.webpage}" target="_blank" class="btn btn-primary">
                    Ver más
                </a>
            </div>
        </div>
    `;
}
renderSeriesInTable(series);
mostrarPromedio(series);
//# sourceMappingURL=main.js.map