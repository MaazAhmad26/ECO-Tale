
        // Initialize chart
        const ctx = document.getElementById('impact-chart').getContext('2d');
        const impactChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Temperature Rise', 'Sea Level Rise', 'Species at Risk', 'Extreme Weather'],
                datasets: [{
                    label: 'Impact Level',
                    data: [1.2, 0.4, 15, 60],
                    backgroundColor: [
                        'rgba(231, 111, 81, 0.7)',
                        'rgba(42, 157, 143, 0.7)',
                        'rgba(233, 196, 106, 0.7)',
                        'rgba(244, 162, 97, 0.7)'
                    ],
                    borderColor: [
                        'rgb(231, 111, 81)',
                        'rgb(42, 157, 143)',
                        'rgb(233, 196, 106)',
                        'rgb(244, 162, 97)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Impact Level'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
        
        // Update slider value displays
        const sliders = document.querySelectorAll('.slider');
        sliders.forEach(slider => {
            const valueDisplay = document.getElementById(`${slider.id.replace('-slider', '-value')}`);
            valueDisplay.textContent = `${slider.value}%`;
            
            slider.addEventListener('input', function() {
                valueDisplay.textContent = `${this.value}%`;
                document.querySelectorAll('.scenario-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.querySelector('[data-scenario="custom"]').classList.add('active');
            });
        });
        
        // Scenario buttons
        document.querySelectorAll('.scenario-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const scenario = this.dataset.scenario;
                if (scenario === 'current') {
                    setSliderValues([50, 70, 60, 65]);
                } else if (scenario === 'optimistic') {
                    setSliderValues([80, 40, 30, 40]);
                } else if (scenario === 'pessimistic') {
                    setSliderValues([20, 90, 80, 85]);
                }
                // Custom scenario does nothing when clicked
            });
        });
        
        function setSliderValues(values) {
            document.getElementById('energy-slider').value = values[0];
            document.getElementById('transport-slider').value = values[1];
            document.getElementById('agriculture-slider').value = values[2];
            document.getElementById('industry-slider').value = values[3];
            
            // Update the displayed values
            document.getElementById('energy-value').textContent = `${values[0]}%`;
            document.getElementById('transport-value').textContent = `${values[1]}%`;
            document.getElementById('agriculture-value').textContent = `${values[2]}%`;
            document.getElementById('industry-value').textContent = `${values[3]}%`;
        }
        
        // Simulation button
        document.getElementById('simulate-btn').addEventListener('click', runSimulation);
        document.getElementById('reset-btn').addEventListener('click', function() {
            document.querySelector('[data-scenario="current"]').click();
            runSimulation();
        });
        
        function runSimulation() {
            // Get slider values
            const energyVal = parseInt(document.getElementById('energy-slider').value);
            const transportVal = parseInt(document.getElementById('transport-slider').value);
            const agricultureVal = parseInt(document.getElementById('agriculture-slider').value);
            const industryVal = parseInt(document.getElementById('industry-slider').value);
            
            // Calculate impacts based on slider values (simplified model)
            const tempRise = calculateTemperatureRise(energyVal, transportVal, agricultureVal, industryVal);
            const seaLevelRise = tempRise * 0.3; // Simplified relationship
            const speciesRisk = 30 - (energyVal + transportVal + agricultureVal + industryVal) / 10;
            const extremeWeather = 100 - (energyVal + transportVal + agricultureVal + industryVal) / 4;
            
            // Update visualization
            const planet = document.getElementById('climate-planet');
            const tempDisplay = document.querySelector('.temperature-display');
            
            // Change planet color based on temperature
            if (tempRise < 1.5) {
                planet.style.background = 'linear-gradient(45deg, #2a9d8f, #264653, #e9c46a)';
            } else if (tempRise < 2.5) {
                planet.style.background = 'linear-gradient(45deg, #e9c46a, #f4a261, #e76f51)';
            } else {
                planet.style.background = 'linear-gradient(45deg, #e76f51, #d45a3c, #a33c20)';
            }
            
            // Update temperature display
            tempDisplay.textContent = `+${tempRise.toFixed(1)}°C`;
            
            // Update chart
            impactChart.data.datasets[0].data = [tempRise, seaLevelRise, speciesRisk, extremeWeather];
            impactChart.update();
            
            // Update impact summary
            document.querySelectorAll('.impact-item')[0].innerHTML = 
                `<i class="fas fa-temperature-high"></i>
                 <span>Global temperature rise: <strong>+${tempRise.toFixed(1)}°C</strong> by 2100</span>`;
                 
            document.querySelectorAll('.impact-item')[1].innerHTML = 
                `<i class="fas fa-water"></i>
                 <span>Sea level rise: <strong>${seaLevelRise.toFixed(1)} meters</strong> by 2100</span>`;
                 
            document.querySelectorAll('.impact-item')[2].innerHTML = 
                `<i class="fas fa-tree"></i>
                 <span>Species at risk: <strong>${speciesRisk.toFixed(0)}%</strong> of assessed species</span>`;
                 
            let weatherText;
            if (extremeWeather < 40) weatherText = "Slight increase";
            else if (extremeWeather < 70) weatherText = "Moderate increase";
            else weatherText = "Significant increase";
                 
            document.querySelectorAll('.impact-item')[3].innerHTML = 
                `<i class="fas fa-fire"></i>
                 <span>Extreme weather events: <strong>${weatherText}</strong></span>`;
        }
        
        function calculateTemperatureRise(energy, transport, agriculture, industry) {
            // Simplified calculation based on slider values
            // Each slider represents percentage of sustainable practices
            const unsustainableEnergy = 100 - energy;
            const unsustainableTransport = 100 - transport;
            const unsustainableAgriculture = 100 - agriculture;
            const unsustainableIndustry = 100 - industry;
            
            // Weighted average with energy having the most impact
            const overallImpact = (
                unsustainableEnergy * 0.4 + 
                unsustainableTransport * 0.3 + 
                unsustainableAgriculture * 0.2 + 
                unsustainableIndustry * 0.1
            ) / 100;
            
            // Scale to realistic temperature rise projection (1.0°C to 4.5°C)
            return 1.0 + (overallImpact * 3.5);
        }
        
        // Initialize with current scenario
        window.onload = function() {
            runSimulation();
        };