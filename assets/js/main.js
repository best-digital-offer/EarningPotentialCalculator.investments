// Main JavaScript for EarningPotentialCalculator.investments

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeSEO();
    initializeAdSense();
    initializeAnalytics();
});

// SEO Optimization Functions
function initializeSEO() {
    // Update dynamic meta tags if needed
    updateDynamicMetaTags();
    
    // Initialize structured data
    generateStructuredData();
}

function updateDynamicMetaTags() {
    // This can be expanded to update meta tags dynamically
    // based on page content or URL parameters
}

function generateStructuredData() {
    // Generate JSON-LD structured data for better SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Earning Potential Calculator",
        "url": "https://earningpotentialcalculator.investments/",
        "description": "Free investment calculators to project your earning potential and compare investment strategies.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://earningpotentialcalculator.investments/calculators/?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// AdSense Initialization
function initializeAdSense() {
    // AdSense will be initialized automatically with the script tag
    // This function can be used for custom AdSense implementations
    console.log('AdSense initialized');
}

// Analytics (you can add Google Analytics later)
function initializeAnalytics() {
    // Placeholder for analytics initialization
    console.log('Analytics initialized');
}

// Utility function for number formatting
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function formatPercentage(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value / 100);
}