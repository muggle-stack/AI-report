// Reports metadata - add new reports here
const reportsData = [
    {
        id: '250726',
        title: 'AI时报：2025年7月第四周',
        date: '2025-07-26',
        year: 2025,
        summary: 'GitHub Spark引领AI原生开发新纪元，阿里Qwen3模型性能超越GPT-4，美国发布激进AI政策',
        highlights: ['AI原生开发来临', '开源力量崛起', '全球战略对垒'],
        tags: ['GitHub Spark', 'Qwen3', 'AI政策', '模型竞赛']
    }
    // Add more reports here as they are created
];

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('zh-CN', options);
}

// Create report card HTML
function createReportCard(report, index) {
    const delay = index * 100; // Stagger animations
    return `
        <div class="bg-white rounded-xl shadow-lg p-6 card-hover report-card" style="animation-delay: ${delay}ms">
            <div class="mb-4">
                <span class="text-sm text-purple-600 font-semibold">${formatDate(report.date)}</span>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-3">${report.title}</h4>
            <p class="text-gray-600 mb-4 line-clamp-2">${report.summary}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
                ${report.tags.map(tag => `
                    <span class="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        ${tag}
                    </span>
                `).join('')}
            </div>
            
            <a href="reports/${report.id}.html" 
               class="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition">
                阅读全文
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M9 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    `;
}

// Create latest report card (featured style)
function createLatestReportCard(report) {
    return `
        <div class="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-2xl p-8 text-white card-hover">
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div class="flex-1 mb-6 lg:mb-0">
                    <div class="mb-4">
                        <span class="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                            最新发布
                        </span>
                        <span class="ml-3 text-purple-200">${formatDate(report.date)}</span>
                    </div>
                    <h4 class="text-3xl font-bold mb-4">${report.title}</h4>
                    <p class="text-purple-100 mb-6 text-lg">${report.summary}</p>
                    
                    <div class="mb-6">
                        <h5 class="font-semibold mb-3">本期亮点：</h5>
                        <ul class="space-y-2">
                            ${report.highlights.map(highlight => `
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    ${highlight}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <a href="reports/${report.id}.html" 
                       class="inline-flex items-center bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition transform hover:scale-105">
                        立即阅读
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Load latest report
function loadLatestReport() {
    const latestReport = reportsData[0]; // Assuming reports are sorted by date
    const container = document.getElementById('latest-report');
    if (container && latestReport) {
        container.innerHTML = createLatestReportCard(latestReport);
    }
}

// Load reports grid
function loadReportsGrid(year = null) {
    const container = document.getElementById('reports-grid');
    if (!container) return;
    
    let filteredReports = year 
        ? reportsData.filter(report => report.year === year)
        : reportsData;
    
    // Skip the first report if showing all (it's already in latest section)
    if (!year) {
        filteredReports = filteredReports.slice(1);
    }
    
    if (filteredReports.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-gray-500 text-lg">暂无${year || ''}年的报告</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredReports
        .map((report, index) => createReportCard(report, index))
        .join('');
}

// Year filter functionality
function setupYearFilter() {
    const buttons = document.querySelectorAll('[data-year]');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Update active state
            buttons.forEach(btn => {
                btn.classList.remove('bg-purple-600', 'text-white');
                btn.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');
            });
            
            e.target.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');
            e.target.classList.add('bg-purple-600', 'text-white');
            
            // Load filtered reports
            const year = parseInt(e.target.dataset.year);
            loadReportsGrid(year);
        });
    });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed header
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadLatestReport();
    loadReportsGrid(2025); // Show 2025 reports by default
    setupYearFilter();
    setupSmoothScroll();
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});