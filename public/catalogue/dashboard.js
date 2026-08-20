document.addEventListener('DOMContentLoaded', () => {
    // Registering the data labels
    Chart.register(ChartDataLabels);
    // --- UTILITY FUNCTIONS ---
    // Function to generate random colors for charts
    const generateColors = (numColors) => {
        const colors = [];
        for (let i = 0; i < numColors; i++) {
            const r = Math.floor(Math.random() * 200);
            const g = Math.floor(Math.random() * 200);
            const b = Math.floor(Math.random() * 200);
            colors.push(`rgba(${r}, ${g}, ${b}, 0.7)`);
        }
        return colors;
    };

    // --- DATA AGGREGATION FUNCTIONS ---
    const processDataForChart = (data, key) => {
        const counts = data.reduce((acc, item) => {
            const value = item[key];
            acc[value] = (acc[value] || 0) + 1;
            return acc;
        }, {});
        
        const sortedEntries = Object.entries(counts).sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }));
        
        return {
            labels: sortedEntries.map(entry => entry[0]),
            values: sortedEntries.map(entry => entry[1]),
        };
    };
    
    // --- RENDER FUNCTIONS ---
    // 1. Render Summary Cards
    const renderSummaryCards = (data) => {
        const totalProjects = data.length;
        const paidProjects = data.filter(p => p.Monetization === 'Paid').length;
        const valuableProjects = data.filter(p => p['Business Value Realized'] && p['Business Value Realized'].trim() !== '').length;

        document.getElementById('total-projects').textContent = totalProjects;
        document.getElementById('paid-projects-pct').textContent = `${Math.round((paidProjects / totalProjects) * 100)}%`;
        document.getElementById('valuable-projects-pct').textContent = `${Math.round((valuableProjects / totalProjects) * 100)}%`;
    };

    // 2. Render Line Chart (Projects by Period)
    const renderProjectsByPeriodChart = (data) => {
        const chartData = processDataForChart(data, 'Period');
        const ctx = document.getElementById('projects-by-period-chart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: '# of Projects',
                    data: chartData.values,
                    borderColor: '#C0A54B',
                    backgroundColor: 'rgba(192, 165, 75, 0.2)',
                    fill: true,
                    tension: 0.1,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true },
                    tooltip: { enabled: true },
                    datalabels: {
                        display: true,
                        color: '#363838',
                        anchor: 'end',
                        align: 'top',
                        font: {
                            weight: 'bold'
                        },
                        formatter: (value) => {
                            // Only display labels for values greater than 0
                            return value > 0 ? value : '';
                        }
                    }
                },
                scales: {
                    y: { ticks: { color: '#363838' } },
                    x: { ticks: { color: '#363838' } }
                }
            }
        });
    };

    // 3. Render Bar Charts
    const renderBarChart = (data, elementId, key, label) => {
        const chartData = processDataForChart(data, key);

        // --- NEW: Sorting Logic ---
        // Combine labels and values into an array of objects to sort them together
        const combinedData = chartData.labels.map((label, index) => {
            return {
                label: label,
                value: chartData.values[index]
            };
        });

        // Sort the combined data array in descending order based on the value
        combinedData.sort((a, b) => b.value - a.value);

        // Separate the sorted labels and values back into their own arrays
        const sortedLabels = combinedData.map(item => item.label);
        const sortedValues = combinedData.map(item => item.value);
        // --- End of Sorting Logic ---

        const ctx = document.getElementById(elementId).getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: sortedLabels, // Use the new sorted labels
                datasets: [{
                    label: label,
                    data: sortedValues, // Use the new sorted values
                    backgroundColor: generateColors(sortedLabels.length),
                }]
            },
            options: {
                maintainAspectRatio: true,
                indexAxis: 'y', // For vertical orientation
                responsive: true,
                plugins: {
                    legend: { display: false },
                    datalabels: {
                        display: false,
                        color: '#363838',
                        anchor: 'end',
                        align: 'top',
                        font: {
                            weight: 'bold'
                        },
                        formatter: (value) => {
                            // Only display labels for values greater than 0
                            return value > 0 ? value : '';
                        }
                    }
                },
                scales: {
                    y: { ticks: { color: '#363838' } },
                    x: { ticks: { color: '#363838' } }
                }
            }
        });
    };
    
    // 4. Render Donut & Treemap
    const renderMonetizationDonut = (data) => {
        const chartData = processDataForChart(data, 'Monetization');
        const ctx = document.getElementById('projects-by-monetization-chart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: chartData.labels,
                datasets: [{
                    data: chartData.values,
                    backgroundColor: ['#C0A54B', '#363838'], // Beige for Paid, Grey for Portfolio
                    borderColor: '#000000',
                    borderWidth: 2
                }]
            },
            options: { 
                responsive: true, 
                plugins: { 
                    legend: { labels: { color: '#363838' } },
                    datalabels: {
                        display: true,
                        color: '#dde8e8ff',
                        anchor: 'center',
                        align: 'center',
                        font: {
                            weight: 'bold'
                        },
                        formatter: (value) => {
                            // Only display labels for values greater than 0
                            return value > 0 ? value : '';
                        }
                    }
                } 
            }
        });
    };

    const renderOutputsTreemap = (data) => {
    const chartData = processDataForChart(data, 'Outputs');
    
    // Format data specifically for the treemap plugin
    const treemapData = chartData.labels.map((label, index) => ({
        g: label, // The group/label for the rectangle
        v: chartData.values[index] // The value for the rectangle's size
    }));

    const ctx = document.getElementById('projects-by-outputs-chart').getContext('2d');
    new Chart(ctx, {
        type: 'treemap',
        data: {
            datasets: [{
                tree: treemapData,
                key: 'v',
                groups: ['g'],
                labels: {
                    display: true,
                    color: 'white',
                    font: { size: 14, weight: 'bold' },
                    // UPDATED: More reliable way to get the label
                    formatter: (ctx) => ctx.raw ? ctx.raw.g : null
                },
                backgroundColor: (ctx) => {
                    if (ctx.type !== 'data') return 'transparent';
                    // Using the shared color generator
                    const colors = generateColors(chartData.labels.length);
                    return colors[ctx.dataIndex];
                }
            }]
        },
        options: { 
            maintainAspectRatio: true,
            responsive: true, 
            plugins: { 
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        // Custom tooltip to show label and value
                        label: function(context) {
                            const item = context.raw;
                            return `${item.g}: ${item.v}`;
                        }
                    }
                },
                datalabels: {
                        display: false,
                        color: '#363838',
                        anchor: 'end',
                        align: 'top',
                        font: {
                            weight: 'bold'
                        },
                        formatter: (value) => {
                            // Only display labels for values greater than 0
                            return value > 0 ? value : '';
                        }
                    }
            } 
        }
    });
};

    // 5. Render Table and Filters
    const renderTableAndFilters = (data) => {
        // Populate filters
        const filters = ['Period', 'Entity', 'Monetization', 'Outputs'];
        filters.forEach(key => {
            const select = document.getElementById(`${key.toLowerCase()}-filter`);
            const uniqueValues = [...new Set(data.map(item => item[key]))].sort();
            uniqueValues.forEach(val => {
                const option = document.createElement('option');
                option.value = val;
                option.textContent = val;
                select.appendChild(option);
            });
        });

        // Create table
        const table = new Tabulator("#project-table", {
            data: data,
            layout: "fitColumns",
            initialSort: [{ column: "Period", dir: "desc" }],
            columns: [
                { title: "Name", field: "Name", minWidth: 200, headerFilter: "input" },
                { title: "Period", field: "Period", width: 100 },
                { title: "Entity", field: "Entity", width: 200, headerFilter: "select", headerFilterParams: { values: true } },
                { title: "Function", field: "Function", width: 150 },
                { title: "Monetization", field: "Monetization", width: 150 },
                { title: "Outputs", field: "Outputs", width: 200 },
                { title: "Business Value Realized", field: "Business Value Realized", minWidth: 300, formatter: "textarea" }
            ],
        });

        // Set up filter logic
        const filterSelects = document.querySelectorAll('select[id$="-filter"]');
        filterSelects.forEach(select => {
            select.addEventListener('change', () => {
                const activeFilters = [];
                filterSelects.forEach(s => {
                    if (s.value) {
                        const field = s.id.replace('-filter', '').replace(/\b\w/g, l => l.toUpperCase());
                        activeFilters.push({ field: field, type: "=", value: s.value });
                    }
                });
                table.setFilter(activeFilters);
            });
        });
    };

    // --- MAIN FUNCTION ---
    const initializeDashboard = (data) => {
        renderSummaryCards(data);
        renderProjectsByPeriodChart(data);
        renderBarChart(data, 'projects-by-entity-chart', 'Entity', 'Projects by Entity');
        renderBarChart(data, 'projects-by-function-chart', 'Function', 'Projects by Function');
        renderMonetizationDonut(data);
        renderOutputsTreemap(data);
        renderTableAndFilters(data);
    };

    // --- FETCH DATA and START ---
    fetch('details.json')
        .then(response => response.json())
        .then(data => initializeDashboard(data))
        .catch(error => console.error('Error loading dashboard data:', error));
});