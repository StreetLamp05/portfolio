export const projects = [
    {
        id: 1,
        title: 'GlassGov (Cal Hacks 12.0)',
        description: 'Civic-tech platform that links local issues to real legislation with AI summaries and rep-contact scripts.',
        tech: ['Named Entity Recognition (NER)', 'LLM', 'Next.js', 'React', 'Tailwind CSS', 'Flask', 'PostgreSQL', 'Docker'],
        link: 'https://github.com/StreetLamp05/glassgov',
        // live: 'https://www.glassgov.tech',
        thumbnail: '/project-thumbnail/glassgov-thumb.png',
    },
    {
        id: 2,
        title: 'HealthWise (Hacklytics)',
        description: 'Flu risk forecasting with XGBoost + census data, rendered as an interactive heatmap.',
        tech: ['Next.js', 'React', 'Flask', 'XGBoost', 'Pandas', 'D3.js'],
        link: 'https://github.com/StreetLamp05/healthwise',
        // live: 'https://example.com',
        thumbnail: '/project-thumbnail/healthwise-thumb.jpg',
    },
    {
        id: 3,
        title: 'Weaver (UGA Hacks X)',
        description: 'Graph-style music discovery; click a song node to expand KNN-based recommendations. Now deprecated due to Spotify API changes.',
        tech: ['K-Nearest Neighbors (KNN)','Next.js', 'React', 'Tailwind CSS', 'Python', 'Node.js', 'Spotify API'],
        link: 'https://github.com/StreetLamp05/weaver',
        // live: 'https://example.com',
        thumbnail: '/project-thumbnail/weaver-thumb.png',
    },
    {
        id: 4,
        title: 'UGA Purity Test',
        description:
            'Built and deployed a web-based Rice Purity-style quiz tailored for UGA students. Integrated Google Sheets API for real-time response logging and analytics, reaching 160+ unique visitors within 48 hours of launch.',
        tech: ['Next.js', 'Google Sheets API', 'Google Cloud Platform'],
        link: 'https://ugapuritytest.com',
        thumbnail: '/project-thumbnail/uga-purity-thumb.png',
    },
    {
        id: 5,
        title: 'Rock Paper Scissors Game',
        description:
            'Browser-based rock-paper-scissors app demonstrating event-driven JavaScript logic with a fully responsive interface built using HTML and CSS.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        live: 'https://streetlamp05.github.io/rock-paper-scissors/',
        thumbnail: '/project-thumbnail/rps-thumb.png',
    },
];
