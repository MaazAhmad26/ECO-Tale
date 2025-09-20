
        // Earthquake data (simulated real-time updates)
        const earthquakeData = {
            currentStatus: "Normal", // "Alert", "Warning", "Normal"
            lastUpdate: new Date(),
            recentEarthquakes: [
                { time: "Oct 15, 2023 08:23 PST", location: "Hindu Kush Region", magnitude: 4.7, depth: "120 km", impact: "Minor shaking reported" },
                { time: "Oct 12, 2023 14:56 PST", location: "Northern Areas", magnitude: 3.8, depth: "80 km", impact: "No damage reported" },
                { time: "Oct 5, 2023 05:41 PST", location: "Balochistan", magnitude: 5.1, depth: "60 km", impact: "Light damage in rural areas" },
                { time: "Sep 28, 2023 19:30 PST", location: "Khyber Pakhtunkhwa", magnitude: 4.2, depth: "100 km", impact: "Felt in Peshawar, no damage" },
                { time: "Sep 20, 2023 11:15 PST", location: "Azad Kashmir", magnitude: 5.8, depth: "40 km", impact: "Moderate damage, 12 injured" }
            ],
            recentActivity: 2,
            latestMagnitude: 4.7,
            latestLocation: "Hindu Kush Region"
        };

        // Initialize the page
        function initializePage() {
            updateEarthquakeDisplay();
            simulateRealTimeUpdates();
            setupMuteButton();
        }

        // Update the display with current earthquake data
        function updateEarthquakeDisplay() {
            document.getElementById('currentStatus').textContent = earthquakeData.currentStatus;
            document.getElementById('lastUpdated').textContent = earthquakeData.lastUpdate.toLocaleTimeString();
            document.getElementById('recentActivity').textContent = earthquakeData.recentActivity;
            document.getElementById('latestMagnitude').textContent = earthquakeData.latestMagnitude;
            document.getElementById('latestLocation').textContent = earthquakeData.latestLocation;
            
            // Update alert banner based on status
            const alertBanner = document.getElementById('earthquakeAlert');
            const alertText = document.getElementById('alertText');
            
            if (earthquakeData.currentStatus === "Alert") {
                alertText.innerHTML = `<strong>Earthquake Alert:</strong> Magnitude ${earthquakeData.latestMagnitude} earthquake detected in ${earthquakeData.latestLocation}`;
                alertBanner.classList.remove('hidden');
                playAlertSound();
            } else if (earthquakeData.currentStatus === "Warning") {
                alertText.innerHTML = `<strong>Earthquake Warning:</strong> Increased seismic activity detected`;
                alertBanner.classList.remove('hidden');
            } else {
                alertBanner.classList.add('hidden');
            }
            
            // Show/hide markers based on activity
            document.getElementById('marker1').style.display = earthquakeData.recentActivity > 0 ? 'block' : 'none';
            document.getElementById('marker2').style.display = earthquakeData.recentActivity > 1 ? 'block' : 'none';
        }

        // Simulate real-time updates (in a real application, this would fetch from an API)
        function simulateRealTimeUpdates() {
            setInterval(() => {
                // Simulate occasional new earthquakes
                if (Math.random() < 0.1) { // 10% chance every interval
                    const newMagnitude = (Math.random() * 2 + 3.5).toFixed(1); // Between 3.5 and 5.5
                    const locations = ["Hindu Kush Region", "Northern Areas", "Balochistan", "Khyber Pakhtunkhwa", "Azad Kashmir"];
                    const newLocation = locations[Math.floor(Math.random() * locations.length)];
                    
                    earthquakeData.currentStatus = newMagnitude > 5.0 ? "Alert" : "Warning";
                    earthquakeData.lastUpdate = new Date();
                    earthquakeData.recentActivity += 1;
                    earthquakeData.latestMagnitude = newMagnitude;
                    earthquakeData.latestLocation = newLocation;
                    
                    // Add to recent earthquakes
                    earthquakeData.recentEarthquakes.unshift({
                        time: new Date().toLocaleString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric',
                            hour: '2-digit', 
                            minute: '2-digit',
                            timeZoneName: 'short'
                        }),
                        location: newLocation,
                        magnitude: parseFloat(newMagnitude),
                        depth: `${Math.floor(Math.random() * 100) + 10} km`,
                        impact: newMagnitude > 5.0 ? "Potential damage expected" : "Light shaking possible"
                    });
                    
                    // Keep only the 5 most recent
                    if (earthquakeData.recentEarthquakes.length > 5) {
                        earthquakeData.recentEarthquakes.pop();
                    }
                    
                    updateEarthquakeDisplay();
                    updateEarthquakeTable();
                }
                
                // Simulate returning to normal status after some time
                if (earthquakeData.currentStatus !== "Normal" && Math.random() < 0.3) {
                    earthquakeData.currentStatus = "Normal";
                    updateEarthquakeDisplay();
                }
            }, 10000); // Update every 10 seconds
        }

        // Update the earthquake table with new data
        function updateEarthquakeTable() {
            const tableBody = document.getElementById('earthquakeTableBody');
            tableBody.innerHTML = '';
            
            earthquakeData.recentEarthquakes.forEach(quake => {
                const row = document.createElement('tr');
                
                // Determine magnitude class
                let magnitudeClass = 'low';
                if (quake.magnitude >= 4.5 && quake.magnitude < 5.5) magnitudeClass = 'medium';
                if (quake.magnitude >= 5.5) magnitudeClass = 'high';
                
                row.innerHTML = `
                    <td>${quake.time}</td>
                    <td>${quake.location}</td>
                    <td><span class="magnitude ${magnitudeClass}">${quake.magnitude}</span></td>
                    <td>${quake.depth}</td>
                    <td>${quake.impact}</td>
                `;
                
                tableBody.appendChild(row);
            });
        }

        // Play alert sound (would play in case of real earthquake)
        function playAlertSound() {
            // In a real implementation, this would play an alert sound
            console.log("Alert sound would play here");
        }

        // Set up the mute button functionality
        function setupMuteButton() {
            const muteButton = document.getElementById('muteAlert');
            let muted = false;
            
            muteButton.addEventListener('click', () => {
                muted = !muted;
                if (muted) {
                    muteButton.innerHTML = '<i class="fas fa-volume-up"></i> Unmute';
                    // In a real implementation, this would stop the alert sound
                } else {
                    muteButton.innerHTML = '<i class="fas fa-volume-mute"></i> Mute';
                }
            });
        }

        // Initialize the page when loaded
        window.onload = initializePage;