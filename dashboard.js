 // ===== Real-time Data Simulation =====
      const regions = {
        global: {
          name: "Global Overview",
          affected: 12847,
          areas: 89,
          relief: 24,
          water: 2.1,
          trendAffected: "+2.3% today",
          trendAreas: "Stable",
          trendRelief: "+1 this week",
          trendWater: "+0.2",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [1.6, 2.0, 1.7, 2.3, 2.8, 3.2, 2.6],
          cities: [
            { name: "Riverton", population: 45200, affected: 1280, water: 2.5, status: "warn" },
            { name: "Bayview", population: 61400, affected: 2040, water: 3.1, status: "risk" },
            { name: "Greenfields", population: 27600, affected: 560, water: 1.8, status: "ok" },
            { name: "Stonebridge", population: 34900, affected: 980, water: 2.2, status: "warn" },
            { name: "Lakewood", population: 18300, affected: 300, water: 1.5, status: "ok" }
          ]
        },
        pakistan: {
          name: "Pakistan",
          affected: 6542,
          areas: 23,
          relief: 12,
          water: 2.8,
          trendAffected: "+5.1% today",
          trendAreas: "+2 today",
          trendRelief: "+2 this week",
          trendWater: "+0.4",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [1.8, 2.2, 2.5, 2.7, 2.9, 3.1, 2.8],
          cities: [
            { name: "Karachi", population: 14910000, affected: 3420, water: 3.2, status: "risk" },
            { name: "Lahore", population: 11126000, affected: 1850, water: 2.4, status: "warn" },
            { name: "Islamabad", population: 1095000, affected: 420, water: 1.9, status: "ok" },
            { name: "Peshawar", population: 1978000, affected: 650, water: 2.6, status: "warn" },
            { name: "Quetta", population: 1001000, affected: 202, water: 1.7, status: "ok" }
          ]
        },
        india: {
          name: "India",
          affected: 18754,
          areas: 45,
          relief: 32,
          water: 2.4,
          trendAffected: "+3.7% today",
          trendAreas: "+3 today",
          trendRelief: "+4 this week",
          trendWater: "+0.3",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [1.7, 2.1, 2.3, 2.5, 2.6, 2.8, 2.4],
          cities: [
            { name: "Mumbai", population: 12478000, affected: 5420, water: 3.4, status: "risk" },
            { name: "Kolkata", population: 4486700, affected: 2850, water: 2.8, status: "warn" },
            { name: "Chennai", population: 4681100, affected: 1650, water: 2.3, status: "warn" },
            { name: "Bangalore", population: 8443700, affected: 2420, water: 2.1, status: "ok" },
            { name: "Delhi", population: 16788000, affected: 6410, water: 2.9, status: "risk" }
          ]
        },
        bangladesh: {
          name: "Bangladesh",
          affected: 9325,
          areas: 28,
          relief: 18,
          water: 3.2,
          trendAffected: "+4.2% today",
          trendAreas: "+4 today",
          trendRelief: "+3 this week",
          trendWater: "+0.5",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [2.2, 2.5, 2.8, 3.0, 3.3, 3.6, 3.2],
          cities: [
            { name: "Dhaka", population: 8906000, affected: 3850, water: 3.8, status: "risk" },
            { name: "Chittagong", population: 2596500, affected: 1420, water: 3.2, status: "warn" },
            { name: "Khulna", population: 1403600, affected: 650, water: 2.8, status: "warn" },
            { name: "Rajshahi", population: 440600, affected: 220, water: 2.4, status: "ok" },
            { name: "Sylhet", population: 479800, affected: 185, water: 2.6, status: "ok" }
          ]
        },
        china: {
          name: "China",
          affected: 21500,
          areas: 52,
          relief: 38,
          water: 2.9,
          trendAffected: "+3.2% today",
          trendAreas: "+5 today",
          trendRelief: "+3 this week",
          trendWater: "+0.3",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [2.1, 2.4, 2.7, 2.8, 3.0, 3.2, 2.9],
          cities: [
            { name: "Guangzhou", population: 14043500, affected: 4850, water: 3.4, status: "risk" },
            { name: "Wuhan", population: 11212000, affected: 3420, water: 3.1, status: "warn" },
            { name: "Nanjing", population: 8470000, affected: 2150, water: 2.7, status: "warn" },
            { name: "Chongqing", population: 15872000, affected: 6250, water: 3.6, status: "risk" },
            { name: "Hangzhou", population: 9468000, affected: 1850, water: 2.4, status: "ok" }
          ]
        },
        indonesia: {
          name: "Indonesia",
          affected: 11250,
          areas: 31,
          relief: 22,
          water: 2.7,
          trendAffected: "+4.5% today",
          trendAreas: "+3 today",
          trendRelief: "+2 this week",
          trendWater: "+0.4",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [1.9, 2.2, 2.4, 2.6, 2.8, 3.0, 2.7],
          cities: [
            { name: "Jakarta", population: 10562000, affected: 4850, water: 3.5, status: "risk" },
            { name: "Surabaya", population: 2848000, affected: 1250, water: 2.8, status: "warn" },
            { name: "Bandung", population: 2426000, affected: 850, water: 2.3, status: "ok" },
            { name: "Medan", population: 2115000, affected: 950, water: 2.6, status: "warn" },
            { name: "Semarang", population: 1621000, affected: 350, water: 2.1, status: "ok" }
          ]
        },
        usa: {
          name: "United States",
          affected: 8750,
          areas: 35,
          relief: 28,
          water: 2.3,
          trendAffected: "+2.1% today",
          trendAreas: "+2 today",
          trendRelief: "+3 this week",
          trendWater: "+0.2",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [1.8, 2.0, 2.1, 2.2, 2.4, 2.5, 2.3],
          cities: [
            { name: "New Orleans", population: 391000, affected: 1850, water: 3.2, status: "risk" },
            { name: "Houston", population: 2320000, affected: 2450, water: 2.9, status: "warn" },
            { name: "Miami", population: 463000, affected: 850, water: 2.4, status: "warn" },
            { name: "St. Louis", population: 301000, affected: 420, water: 2.1, status: "ok" },
            { name: "Sacramento", population: 513000, affected: 180, water: 1.9, status: "ok" }
          ]
        },
        nepal: {
          name: "Nepal",
          affected: 4250,
          areas: 18,
          relief: 12,
          water: 2.5,
          trendAffected: "+3.8% today",
          trendAreas: "+2 today",
          trendRelief: "+1 this week",
          trendWater: "+0.3",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [1.8, 2.0, 2.2, 2.3, 2.5, 2.6, 2.5],
          cities: [
            { name: "Kathmandu", population: 975000, affected: 1850, water: 2.8, status: "warn" },
            { name: "Pokhara", population: 525000, affected: 850, water: 2.4, status: "warn" },
            { name: "Lalitpur", population: 284000, affected: 420, water: 2.1, status: "ok" },
            { name: "Bharatpur", population: 280000, affected: 350, water: 2.0, status: "ok" },
            { name: "Biratnagar", population: 242000, affected: 180, water: 1.8, status: "ok" }
          ]
        },
        thailand: {
          name: "Thailand",
          affected: 6850,
          areas: 25,
          relief: 16,
          water: 2.6,
          trendAffected: "+3.2% today",
          trendAreas: "+3 today",
          trendRelief: "+2 this week",
          trendWater: "+0.3",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [1.9, 2.1, 2.3, 2.4, 2.6, 2.7, 2.6],
          cities: [
            { name: "Bangkok", population: 8281000, affected: 2850, water: 3.1, status: "risk" },
            { name: "Chiang Mai", population: 1270000, affected: 650, water: 2.4, status: "warn" },
            { name: "Phuket", population: 418000, affected: 220, water: 2.1, status: "ok" },
            { name: "Hat Yai", population: 159000, affected: 180, water: 2.0, status: "ok" },
            { name: "Nakhon Ratchasima", population: 213000, affected: 95, water: 1.8, status: "ok" }
          ]
        },
        vietnam: {
          name: "Vietnam",
          affected: 7850,
          areas: 27,
          relief: 19,
          water: 2.8,
          trendAffected: "+4.1% today",
          trendAreas: "+3 today",
          trendRelief: "+2 this week",
          trendWater: "+0.4",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 2.8],
          cities: [
            { name: "Ho Chi Minh City", population: 8993000, affected: 3250, water: 3.2, status: "risk" },
            { name: "Hanoi", population: 8053000, affected: 2450, water: 2.9, status: "warn" },
            { name: "Da Nang", population: 1134000, affected: 650, water: 2.4, status: "warn" },
            { name: "Hai Phong", population: 2028000, affected: 420, water: 2.2, status: "ok" },
            { name: "Can Tho", population: 1230000, affected: 80, water: 1.9, status: "ok" }
          ]
        },
        philippines: {
          name: "Philippines",
          affected: 9250,
          areas: 32,
          relief: 21,
          water: 3.0,
          trendAffected: "+4.8% today",
          trendAreas: "+4 today",
          trendRelief: "+3 this week",
          trendWater: "+0.5",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [2.1, 2.4, 2.6, 2.8, 3.0, 3.2, 3.0],
          cities: [
            { name: "Manila", population: 17800000, affected: 4850, water: 3.5, status: "risk" },
            { name: "Cebu City", population: 922000, affected: 1250, water: 2.8, status: "warn" },
            { name: "Davao City", population: 1633000, affected: 850, water: 2.5, status: "warn" },
            { name: "Zamboanga City", population: 861000, affected: 420, water: 2.2, status: "ok" },
            { name: "Baguio", population: 345000, affected: 80, water: 1.9, status: "ok" }
          ]
        },
        brazil: {
          name: "Brazil",
          affected: 11250,
          areas: 38,
          relief: 25,
          water: 2.7,
          trendAffected: "+3.5% today",
          trendAreas: "+4 today",
          trendRelief: "+3 this week",
          trendWater: "+0.4",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 2.7],
          cities: [
            { name: "Rio de Janeiro", population: 6748000, affected: 2850, water: 3.1, status: "risk" },
            { name: "São Paulo", population: 12330000, affected: 4250, water: 2.9, status: "warn" },
            { name: "Salvador", population: 2880000, affected: 1250, water: 2.5, status: "warn" },
            { name: "Brasília", population: 3055000, affected: 650, water: 2.2, status: "ok" },
            { name: "Manaus", population: 2180000, affected: 250, water: 2.0, status: "ok" }
          ]
        },
        nigeria: {
          name: "Nigeria",
          affected: 10250,
          areas: 34,
          relief: 22,
          water: 2.9,
          trendAffected: "+4.2% today",
          trendAreas: "+3 today",
          trendRelief: "+2 this week",
          trendWater: "+0.5",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [2.0, 2.3, 2.5, 2.7, 2.9, 3.1, 2.9],
          cities: [
            { name: "Lagos", population: 14800000, affected: 4850, water: 3.4, status: "risk" },
            { name: "Port Harcourt", population: 1850000, affected: 1250, water: 2.9, status: "warn" },
            { name: "Benin City", population: 1490000, affected: 850, water: 2.5, status: "warn" },
            { name: "Kano", population: 2820000, affected: 650, water: 2.3, status: "ok" },
            { name: "Abuja", population: 1235000, affected: 250, water: 2.0, status: "ok" }
          ]
        }
      };

      // Initialize with global data
      let currentRegion = "global";
      let lastUpdate = new Date();

      // ===== Initialize Map =====
      const map = L.map('map').setView([20, 0], 2);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      // Add markers for flood-affected regions
      const markers = {
        pakistan: L.marker([30.3753, 69.3451]).bindPopup('Pakistan: Significant flooding in Sindh region'),
        india: L.marker([20.5937, 78.9629]).bindPopup('India: Flood alerts in multiple states'),
        bangladesh: L.marker([23.6850, 90.3563]).bindPopup('Bangladesh: River levels rising in coastal areas'),
        china: L.marker([35.8617, 104.1954]).bindPopup('China: Yangtze river basin monitoring'),
        indonesia: L.marker([-0.7893, 113.9213]).bindPopup('Indonesia: Jakarta flood warnings'),
        usa: L.marker([37.0902, -95.7129]).bindPopup('USA: Mississippi river flood watch'),
        nepal: L.marker([28.3949, 84.1240]).bindPopup('Nepal: Flooding in Himalayan regions'),
        thailand: L.marker([15.8700, 100.9925]).bindPopup('Thailand: Monsoon flooding in central regions'),
        vietnam: L.marker([14.0583, 108.2772]).bindPopup('Vietnam: Mekong Delta flooding'),
        philippines: L.marker([12.8797, 121.7740]).bindPopup('Philippines: Typhoon-related flooding'),
        brazil: L.marker([-14.2350, -51.9253]).bindPopup('Brazil: Amazon basin flooding'),
        nigeria: L.marker([9.0820, 8.6753]).bindPopup('Nigeria: Niger River flooding')
      };
      
      // Add all markers to map
      Object.values(markers).forEach(marker => marker.addTo(map));
      
      // Add click handlers to markers
      markers.pakistan.on('click', () => updateRegion('pakistan'));
      markers.india.on('click', () => updateRegion('india'));
      markers.bangladesh.on('click', () => updateRegion('bangladesh'));
      markers.china.on('click', () => updateRegion('china'));
      markers.indonesia.on('click', () => updateRegion('indonesia'));
      markers.usa.on('click', () => updateRegion('usa'));
      markers.nepal.on('click', () => updateRegion('nepal'));
      markers.thailand.on('click', () => updateRegion('thailand'));
      markers.vietnam.on('click', () => updateRegion('vietnam'));
      markers.philippines.on('click', () => updateRegion('philippines'));
      markers.brazil.on('click', () => updateRegion('brazil'));
      markers.nigeria.on('click', () => updateRegion('nigeria'));

      // ===== Chart Drawing Function =====
      const canvas = document.getElementById("chart");
      const ctx = canvas.getContext("2d");
      let labels = regions.global.labels;
      let values = regions.global.values;

      function resizeCanvas() {
        const ratio = window.devicePixelRatio || 1;
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;
        canvas.width = Math.floor(displayWidth * ratio);
        canvas.height = Math.floor(displayHeight * ratio);
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      }

      function drawChart() {
        resizeCanvas();
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;

        // Clear
        ctx.clearRect(0, 0, w, h);

        // Layout
        const padding = { top: 20, right: 16, bottom: 40, left: 38 };
        const chartW = w - padding.left - padding.right;
        const chartH = h - padding.top - padding.bottom;
        const maxValue = Math.max(4, Math.ceil(Math.max(...values) * 1.2));

        // Axes
        ctx.strokeStyle = "#e2e8f0";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padding.left, padding.top);
        ctx.lineTo(padding.left, padding.top + chartH);
        ctx.lineTo(padding.left + chartW, padding.top + chartH);
        ctx.stroke();

        // Y grid lines and labels
        ctx.fillStyle = "#475569";
        ctx.font = "12px system-ui, -apple-system, Segoe UI, Roboto, Arial";
        const ySteps = 4;
        for (let i = 0; i <= ySteps; i++) {
          const yVal = (maxValue / ySteps) * i;
          const y = padding.top + chartH - (yVal / maxValue) * chartH;
          ctx.strokeStyle = "#f1f5f9";
          ctx.beginPath();
          ctx.moveTo(padding.left, y);
          ctx.lineTo(padding.left + chartW, y);
          ctx.stroke();
          ctx.fillStyle = "#64748b";
          ctx.fillText(yVal.toFixed(1), 4, y + 4);
        }

        // Bars
        const barGap = 12;
        const barWidth = (chartW - barGap * (values.length - 1)) / values.length;
        for (let i = 0; i < values.length; i++) {
          const x = padding.left + i * (barWidth + barGap);
          const barHeight = (values[i] / maxValue) * chartH;
          const y = padding.top + chartH - barHeight;

          // Bar background (blue)
          ctx.fillStyle = "#0077b6";
          ctx.fillRect(x, y, barWidth, barHeight);

          // Top accent (green)
          ctx.fillStyle = "#2a9d8f";
          ctx.fillRect(x, y, barWidth, Math.min(10, barHeight));

          // Labels (x-axis)
          ctx.fillStyle = "#475569";
          ctx.textAlign = "center";
          ctx.fillText(labels[i], x + barWidth / 2, padding.top + chartH + 18);
        }
      }

      // ===== Update Dashboard with Region Data =====
      function updateRegion(regionKey) {
        if (!regions[regionKey]) return;
        
        currentRegion = regionKey;
        const region = regions[regionKey];
        
        // Update stats cards
        document.getElementById("affected-people").textContent = region.affected.toLocaleString();
        document.getElementById("areas-flooded").textContent = region.areas;
        document.getElementById("relief-centers").textContent = region.relief;
        document.getElementById("avg-water").textContent = region.water;
        
        document.getElementById("affected-trend").textContent = region.trendAffected;
        document.getElementById("areas-trend").textContent = region.trendAreas;
        document.getElementById("relief-trend").textContent = region.trendRelief;
        document.getElementById("water-trend").textContent = region.trendWater;
        
        // Update chart
        labels = region.labels;
        values = region.values;
        drawChart();
        
        // Update table
        document.getElementById("region-name").textContent = region.name;
        const tableBody = document.getElementById("region-data");
        tableBody.innerHTML = "";
        
        region.cities.forEach(city => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${city.name}</td>
            <td>${city.population.toLocaleString()}</td>
            <td>${city.affected.toLocaleString()}</td>
            <td>${city.water}</td>
            <td><span class="badge ${city.status}">${city.status === "ok" ? "Stable" : city.status === "warn" ? "Watch" : "High"}</span></td>
          `;
          tableBody.appendChild(row);
        });
        
        // Update region selector
        document.getElementById("region-select").value = regionKey;
        
        // Update last updated time
        lastUpdate = new Date();
        document.getElementById("last-updated").textContent = "just now";
        
        // Pan map to region if not global
        if (regionKey !== "global") {
          const regionCoords = {
            pakistan: [30.3753, 69.3451],
            india: [20.5937, 78.9629],
            bangladesh: [23.6850, 90.3563],
            china: [35.8617, 104.1954],
            indonesia: [-0.7893, 113.9213],
            usa: [37.0902, -95.7129],
            nepal: [28.3949, 84.1240],
            thailand: [15.8700, 100.9925],
            vietnam: [14.0583, 108.2772],
            philippines: [12.8797, 121.7740],
            brazil: [-14.2350, -51.9253],
            nigeria: [9.0820, 8.6753]
          };
          
          if (regionCoords[regionKey]) {
            map.setView(regionCoords[regionKey], 5);
          }
        } else {
          map.setView([20, 0], 2);
        }
      }

      // ===== Real-time Data Simulation =====
      function simulateRealTimeData() {
        // Simulate small changes in data every 30 seconds
        setInterval(() => {
          const region = regions[currentRegion];
          
          // Add small random fluctuations
          const fluctuation = (base, maxChange) => {
            const change = (Math.random() * maxChange * 2) - maxChange;
            return Math.max(0, Math.round(base + change));
          };
          
          region.affected = fluctuation(region.affected, 50);
          region.areas = fluctuation(region.areas, 2);
          region.water = Math.max(0.5, region.water + (Math.random() * 0.2 - 0.1));
          
          // Update water level chart with new data point
          region.values.push(Math.max(0.5, region.values[region.values.length-1] + (Math.random() * 0.4 - 0.2)));
          region.values.shift();
          region.labels.push(new Date().toLocaleDateString('en-US', { weekday: 'short' }));
          region.labels.shift();
          
          // Update the dashboard
          updateRegion(currentRegion);
          
          // Update last updated time
          const now = new Date();
          const minsAgo = Math.floor((now - lastUpdate) / 60000);
          let timeText = "just now";
          
          if (minsAgo > 0) {
            timeText = `${minsAgo} minute${minsAgo > 1 ? 's' : ''} ago`;
          }
          
          document.getElementById("last-updated").textContent = timeText;
          
        }, 30000); // Update every 30 seconds
      }

      // ===== Initialize Dashboard =====
      window.addEventListener("resize", drawChart);
      document.getElementById("region-select").addEventListener("change", (e) => {
        updateRegion(e.target.value);
      });
      
      // Initialize with global data
      updateRegion("global");
      drawChart();
      simulateRealTimeData();