# AI 时报 - AI Times

每周追踪人工智能领域的重要进展、技术突破与产业动态。

## 项目简介

AI 时报是一个静态网站项目，旨在以周报形式记录和分享 AI 领域的最新发展。通过精心策划的内容和交互式可视化，让读者快速了解 AI 行业的关键趋势。

## 特性

- 📊 **交互式数据可视化** - 使用 Chart.js 展示模型性能对比
- 📱 **响应式设计** - 适配各种设备屏幕
- 🎨 **现代化 UI** - 采用 Tailwind CSS 构建的优雅界面
- 🚀 **纯静态部署** - 无需后端，可直接部署到 GitHub Pages

## 项目结构

```
AI-report/
├── index.html          # 主页面，包含最新一期和往期归档
├── reports.js          # 报告元数据管理
├── reports/            # 周报文件目录
│   └── YYMMDD.html    # 具体周报（如 250726.html）
└── README.md          # 本文件
```

## 技术栈

- **前端框架**: 原生 JavaScript（无框架依赖）
- **CSS 框架**: Tailwind CSS (CDN)
- **图表库**: Chart.js (CDN)
- **字体**: Inter + Noto Sans SC (Google Fonts)

## 本地开发

1. 克隆仓库
```bash
git clone https://github.com/[your-username]/AI-report.git
cd AI-report
```

2. 启动本地服务器
```bash
# Python 3
python -m http.server 8000

# 或使用 Node.js
npx http-server
```

3. 访问 `http://localhost:8000`

## 添加新周报

1. 在 `reports/` 目录创建新的 HTML 文件，命名格式：`YYMMDD.html`
2. 参考现有报告结构（如 `reports/250726.html`）编写内容
3. 更新 `reports.js` 添加新报告的元数据：

```javascript
{
    id: 'YYMMDD',
    title: 'AI时报：YYYY年M月第N周',
    date: 'YYYY-MM-DD',
    year: YYYY,
    summary: '本周要点简述',
    highlights: ['要点1', '要点2', '要点3'],
    tags: ['标签1', '标签2', '标签3', '标签4']
}
```

## 部署

项目已配置为 GitHub Pages 自动部署。推送到 `main` 分支后，网站会自动更新。

访问地址：`https://[your-username].github.io/AI-report/`

## 内容板块

每期周报包含四个核心板块：

- **开发者革命** - AI 开发工具和范式变革
- **模型竞赛** - 最新模型发布和性能对比
- **产业脉搏** - 市场动态、就业影响、统计数据
- **全球博弈** - 政策法规和地缘政治影响

## 联系方式

- 📧 邮箱：promuggle@gmail.com
- 📝 博客：[CSDN Blog](https://blog.csdn.net/m0_52919859?type=blog)

## 许可证

本项目基于公开信息整理，旨在传播 AI 知识。

---

© 2025 AI Times. 洞察AI前沿，把握未来脉搏。