// Example utility function
function _(key) {
    const config = {
        'domainCap': 'butt', // Example configuration value for 'domainCap'
    };
    return config[key];
}

// Object definition
const style = {
    strokeCap: _('domainCap')
};

console.log(style.strokeCap); // Output: butt
