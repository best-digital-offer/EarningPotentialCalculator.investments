// Core calculator functions for EarningPotentialCalculator.investments

// Future Value Calculator with monthly contributions
function calculateFutureValue(initialInvestment, monthlyContribution, annualReturn, years) {
    const monthlyReturn = annualReturn / 12;
    const months = years * 12;
    
    // Future value of initial investment
    const futureValueInitial = initialInvestment * Math.pow(1 + monthlyReturn, months);
    
    // Future value of monthly contributions (annuity due)
    const futureValueContributions = monthlyContribution * 
        ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn) * 
        (1 + monthlyReturn);
    
    return futureValueInitial + futureValueContributions;
}

// Compound Interest Calculator
function calculateCompoundInterest(principal, annualRate, years, compoundFrequency = 12) {
    const rate = annualRate / compoundFrequency;
    const periods = years * compoundFrequency;
    return principal * Math.pow(1 + rate, periods);
}

// ROI Calculator
function calculateROI(initialInvestment, currentValue) {
    return ((currentValue - initialInvestment) / initialInvestment) * 100;
}

// Dividend Reinvestment Calculator
function calculateDividendSnowball(initialInvestment, monthlyContribution, dividendYield, 
                                 dividendGrowth, stockGrowth, years) {
    let portfolioValue = initialInvestment;
    const monthlyDividendYield = dividendYield / 12;
    const monthlyStockGrowth = Math.pow(1 + stockGrowth, 1/12) - 1;
    const monthlyDividendGrowth = Math.pow(1 + dividendGrowth, 1/12) - 1;
    
    for (let month = 1; month <= years * 12; month++) {
        // Add monthly contribution
        portfolioValue += monthlyContribution;
        
        // Stock price appreciation
        portfolioValue *= (1 + monthlyStockGrowth);
        
        // Dividend payment and reinvestment
        const monthlyDividendRate = monthlyDividendYield * Math.pow(1 + monthlyDividendGrowth, month);
        const dividends = portfolioValue * monthlyDividendRate;
        portfolioValue += dividends;
    }
    
    return portfolioValue;
}

// Format currency for display
function formatCurrency(amount, currency = 'USD', decimals = 2) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(amount);
}

// Format percentage
function formatPercentage(value, decimals = 2) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(value / 100);
}

// Input validation
function validateNumberInput(input, min = 0, max = 1000000000) {
    let value = parseFloat(input);
    if (isNaN(value)) return min;
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add input validation to all number inputs
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('blur', function() {
            this.value = validateNumberInput(this.value, parseFloat(this.min) || 0, parseFloat(this.max) || 1000000000);
        });
    });
    
    // Initialize tooltips if any
    initializeCalculatorTooltips();
});

function initializeCalculatorTooltips() {
    // Can be expanded for tooltip functionality
    console.log('Calculator core initialized');
}