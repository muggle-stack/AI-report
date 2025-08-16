// Reports metadata - add new reports here
const reportsData = [
    {
        id: '250816',
        title: 'AI时报：前沿技术、市场竞争与伦理挑战的交织',
        date: '2025-08-16',
        year: 2025,
        summary: '本周AI产业呈现三大特征：基础研究范式突破、市场竞争深度博弈、伦理治理迫切警示，AI正从被动工具跃升为主动科学智能体',
        highlights: ['MIT利用AI设计新型抗生素', 'Perplexity提议收购Chrome', 'Meta聊天机器人伦理争议'],
        tags: ['科学智能体', '星际之门', 'Chrome收购', 'AI伦理', '算力竞赛']
    },
    {
        id: '250809',
        title: 'AI市场情报报告：2025年8月的分水岭之周',
        date: '2025-08-09',
        year: 2025,
        summary: '深度解析OpenAI、Anthropic与Google新模型的战略影响，AI巨头从趋同演化转向战略分化，各自划定并巩固其独特的竞争领地',
        highlights: ['OpenAI双线攻势：GPT-5与GPT-OSS', 'Anthropic精准打击：Claude Opus 4.1', 'Google范式转移：Genie 3世界模型'],
        tags: ['GPT-5', 'Claude Opus 4.1', 'Genie 3', 'GPT-OSS', '世界模型', 'AI战略']
    },
    {
        id: '250802',
        title: 'AI时报：2025年8月第一周',
        date: '2025-08-02',
        year: 2025,
        summary: '谷歌Gemini 2.5获数学奥赛金牌，万亿参数开源模型崛起，全球AI治理格局分化加剧',
        highlights: ['推理能力突破', '开源生态爆发', '监管路线分化'],
        tags: ['Gemini Deep Think', 'Kimi K2', '美国AI行动计划', '欧盟AI法案']
    },
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
    const isStarred = isReportStarred(report.id);
    return `
        <div class="bg-white rounded-xl shadow-lg p-6 card-hover report-card" style="animation-delay: ${delay}ms">
            <div class="mb-4 flex justify-between items-center">
                <span class="text-sm text-purple-600 font-semibold">${formatDate(report.date)}</span>
                <button onclick="toggleStar('${report.id}')" class="star-btn p-2 rounded-full hover:bg-gray-100 transition" data-report-id="${report.id}">
                    <svg class="w-5 h-5 ${isStarred ? 'text-yellow-500 fill-current' : 'text-gray-400'}" fill="${isStarred ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                </button>
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
    const isStarred = isReportStarred(report.id);
    return `
        <div class="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-2xl p-8 text-white card-hover">
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div class="flex-1 mb-6 lg:mb-0">
                    <div class="mb-4 flex justify-between items-center">
                        <div>
                            <span class="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                                最新发布
                            </span>
                            <span class="ml-3 text-purple-200">${formatDate(report.date)}</span>
                        </div>
                        <button onclick="toggleStar('${report.id}')" class="star-btn p-2 rounded-full hover:bg-white/20 transition" data-report-id="${report.id}">
                            <svg class="w-6 h-6 ${isStarred ? 'text-yellow-400 fill-current' : 'text-white/70'}" fill="${isStarred ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                            </svg>
                        </button>
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

// Star functionality
function getStarredReports() {
    const starred = localStorage.getItem('starredReports');
    return starred ? JSON.parse(starred) : [];
}

function saveStarredReports(starred) {
    localStorage.setItem('starredReports', JSON.stringify(starred));
}

function isReportStarred(reportId) {
    const starred = getStarredReports();
    return starred.includes(reportId);
}

function toggleStar(reportId) {
    let starred = getStarredReports();
    const index = starred.indexOf(reportId);
    
    if (index > -1) {
        // Remove from starred
        starred.splice(index, 1);
    } else {
        // Add to starred
        starred.push(reportId);
    }
    
    saveStarredReports(starred);
    
    // Update UI
    updateStarButtons(reportId);
    
    // Show feedback
    showStarFeedback(index === -1);
}

function updateStarButtons(reportId) {
    const buttons = document.querySelectorAll(`[data-report-id="${reportId}"]`);
    const isStarred = isReportStarred(reportId);
    
    buttons.forEach(button => {
        const svg = button.querySelector('svg');
        if (isStarred) {
            svg.classList.remove('text-gray-400', 'text-white/70');
            svg.classList.add('text-yellow-500', 'fill-current');
            svg.setAttribute('fill', 'currentColor');
        } else {
            svg.classList.remove('text-yellow-500', 'text-yellow-400', 'fill-current');
            svg.classList.add('text-gray-400');
            svg.setAttribute('fill', 'none');
            
            // Check if it's in the featured card
            if (button.closest('.bg-gradient-to-br')) {
                svg.classList.remove('text-gray-400');
                svg.classList.add('text-white/70');
            }
        }
    });
}

function showStarFeedback(added) {
    const message = added ? '已收藏到星标页面' : '已取消收藏';
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg transition-opacity duration-300 z-50';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}