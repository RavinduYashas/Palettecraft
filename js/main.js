// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeLabels = document.querySelectorAll('.theme-label');

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);
updateThemeLabels(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update theme
    document.body.setAttribute('data-theme', newTheme);
    
    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update labels
    updateThemeLabels(newTheme);
});

function updateThemeLabels(theme) {
    themeLabels.forEach(label => {
        if (label.previousElementSibling && label.previousElementSibling.classList.contains('theme-toggle')) {
            label.textContent = theme === 'light' ? 'Light' : 'Dark';
        } else if (label.nextElementSibling && label.nextElementSibling.classList.contains('theme-toggle')) {
            label.textContent = theme === 'light' ? 'Light' : 'Dark';
        }
    });
}

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Color preview hover effect
document.querySelectorAll('.color-preview').forEach(preview => {
    preview.addEventListener('mouseenter', function() {
        const color = this.style.backgroundColor;
        const hex = rgbToHex(color);
        
        const tooltip = document.createElement('div');
        tooltip.className = 'absolute bg-dark text-white text-xs px-2 py-1 rounded -mt-8';
        tooltip.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--bg-secondary');
        tooltip.style.color = getComputedStyle(document.body).getPropertyValue('--text-primary');
        tooltip.textContent = hex;
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.zIndex = '10';
        
        this.appendChild(tooltip);
    });
    
    preview.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('div');
        if (tooltip) tooltip.remove();
    });
});

// Helper function to convert RGB to Hex
function rgbToHex(rgb) {
    if (!rgb) return '#020617';
    if (rgb.startsWith('#')) return rgb;
    
    const result = rgb.match(/\d+/g);
    if (!result) return '#020617';
    
    const r = parseInt(result[0]);
    const g = parseInt(result[1]);
    const b = parseInt(result[2]);
    
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}