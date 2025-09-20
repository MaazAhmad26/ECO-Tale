
        // Simple progress tracking for demonstration
        document.querySelectorAll('.module-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.classList.contains('btn')) return;
                
                const progressBar = this.querySelector('.progress');
                const currentWidth = parseInt(progressBar.style.width);
                
                if (currentWidth < 100) {
                    progressBar.style.width = (currentWidth + 30) + '%';
                    
                    if (currentWidth + 30 >= 100) {
                        progressBar.style.width = '100%';
                        this.querySelector('.btn').textContent = 'Review';
                    }
                }
            });
        });

        // -----------------------------
// Progress Tracking (your code)
// -----------------------------
document.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('btn')) return;
        
        const progressBar = this.querySelector('.progress');
        const currentWidth = parseInt(progressBar.style.width);
        
        if (currentWidth < 100) {
            progressBar.style.width = (currentWidth + 30) + '%';
            
            if (currentWidth + 30 >= 100) {
                progressBar.style.width = '100%';
                this.querySelector('.btn').textContent = 'Review';
            }
        }
    });
});

// -----------------------------
// AI Learning Plan Integration
// -----------------------------
const form = document.getElementById("learning-form");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const level = document.getElementById("level").value;
        const interest = document.getElementById("interest").value;

        const aiPlanDiv = document.getElementById("ai-plan");
        aiPlanDiv.innerHTML = "⏳ Generating your learning plan...";

        try {
            const response = await fetch("http://localhost:5000/generate-plan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ level, interest })
            });

            const data = await response.json();
            aiPlanDiv.innerHTML = `<p>${data.plan}</p>`;
        } catch (error) {
            aiPlanDiv.innerHTML = "❌ Error generating plan. Please try again.";
            console.error("AI API Error:", error);
        }
    });
}
