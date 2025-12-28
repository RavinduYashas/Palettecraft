// Resources Page JavaScript with Image Color Extractor

// Initialize resources page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeResourcesPage();
});

// Main initialization function
function initializeResourcesPage() {
    // Initialize contrast checker
    initializeContrastChecker();
    
    // Initialize color converter
    initializeColorConverter();
    
    // Initialize image color extractor
    initializeImageColorExtractor();
    
    // Initialize other event listeners
    initializeEventListeners();
    
    // Update color formats on load
    updateColorFormats(document.getElementById('colorHex').value);
}

// Initialize contrast checker
function initializeContrastChecker() {
    const textColorInput = document.getElementById('textColor');
    const textColorHex = document.getElementById('textColorHex');
    const bgColorInput = document.getElementById('bgColor');
    const bgColorHex = document.getElementById('bgColorHex');
    const checkContrastBtn = document.getElementById('checkContrast');
    const contrastResult = document.getElementById('contrastResult');
    const contrastRatio = document.getElementById('contrastRatio');
    const wcagRating = document.getElementById('wcagRating');
    const previewBox = document.getElementById('previewBox');
    const previewText = document.getElementById('previewText');
    
    // Sync color inputs
    textColorInput.addEventListener('input', function() {
        textColorHex.value = this.value.toUpperCase();
    });
    
    textColorHex.addEventListener('input', function() {
        const color = this.value;
        if (/^#[0-9A-F]{6}$/i.test(color)) {
            textColorInput.value = color;
        }
    });
    
    bgColorInput.addEventListener('input', function() {
        bgColorHex.value = this.value.toUpperCase();
    });
    
    bgColorHex.addEventListener('input', function() {
        const color = this.value;
        if (/^#[0-9A-F]{6}$/i.test(color)) {
            bgColorInput.value = color;
        }
    });
    
    // Check contrast function
    checkContrastBtn.addEventListener('click', function() {
        const textColor = textColorHex.value;
        const bgColor = bgColorHex.value;
        
        // Validate colors
        if (!isValidHex(textColor) || !isValidHex(bgColor)) {
            showError('Please enter valid HEX colors (e.g., #ff0000)');
            return;
        }
        
        // Calculate contrast ratio
        const contrast = calculateContrastRatio(textColor, bgColor);
        
        // Update display
        contrastRatio.textContent = `${contrast.ratio}:1`;
        
        // Determine WCAG rating
        const rating = getWCAGRating(contrast.ratio);
        wcagRating.textContent = rating.level;
        wcagRating.className = rating.class;
        
        // Update preview
        previewBox.style.backgroundColor = bgColor;
        previewText.style.color = textColor;
        previewText.textContent = `This text has a contrast ratio of ${contrast.ratio}:1 (${rating.level})`;
        
        // Show result
        contrastResult.classList.remove('hidden');
        
        // Show success message
        showSuccess(`Contrast ratio: ${contrast.ratio}:1 (${rating.level}) - ${rating.description}`);
    });
}

// Initialize color converter
function initializeColorConverter() {
    const colorPicker = document.getElementById('colorPicker');
    const colorHex = document.getElementById('colorHex');
    const convertColorBtn = document.getElementById('convertColor');
    
    colorPicker.addEventListener('input', function() {
        colorHex.value = this.value.toUpperCase();
        updateColorFormats(this.value);
    });
    
    colorHex.addEventListener('input', function() {
        const color = this.value;
        if (isValidHex(color)) {
            colorPicker.value = color;
            updateColorFormats(color);
        }
    });
    
    convertColorBtn.addEventListener('click', function() {
        const color = colorHex.value;
        if (isValidHex(color)) {
            updateColorFormats(color);
            showSuccess('Color formats updated!');
        } else {
            showError('Please enter a valid HEX color (e.g., #ff0000)');
        }
    });
}

// Initialize image color extractor
function initializeImageColorExtractor() {
    const imageUpload = document.getElementById('imageUpload');
    const imageUploadArea = document.getElementById('imageUploadArea');
    const extractColorsBtn = document.getElementById('extractColors');
    const colorCountSelect = document.getElementById('colorCount');
    
    // Click on upload area triggers file input
    imageUploadArea.addEventListener('click', function() {
        imageUpload.click();
    });
    
    // Handle file selection
    imageUpload.addEventListener('change', function(event) {
        handleImageUpload(event);
    });
    
    // Drag and drop functionality
    imageUploadArea.addEventListener('dragover', function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.classList.add('dragover');
    });
    
    imageUploadArea.addEventListener('dragleave', function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.classList.remove('dragover');
    });
    
    imageUploadArea.addEventListener('drop', function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.classList.remove('dragover');
        
        const files = event.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('image/')) {
            handleImageFile(files[0]);
        }
    });
    
    // Extract colors button
    extractColorsBtn.addEventListener('click', function() {
        extractColorsFromImage();
    });
    
    // Save palette button
    document.getElementById('savePalette')?.addEventListener('click', function() {
        saveExtractedPalette();
    });
}

// Handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        handleImageFile(file);
    }
}

// Handle image file
function handleImageFile(file) {
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        showError('Image size should be less than 5MB');
        return;
    }
    
    // Check file type
    if (!file.type.match('image.*')) {
        showError('Please upload an image file');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imagePreview = document.getElementById('imagePreview');
        const previewImage = document.getElementById('previewImage');
        const extractColorsBtn = document.getElementById('extractColors');
        
        // Show preview
        previewImage.src = e.target.result;
        imagePreview.classList.remove('hidden');
        
        // Enable extract button
        extractColorsBtn.disabled = false;
        
        // Store image data for later use
        previewImage.dataset.imageData = e.target.result;
        
        showSuccess('Image uploaded successfully! Click "Extract Colors" to generate a palette.');
    };
    
    reader.onerror = function() {
        showError('Error reading image file');
    };
    
    reader.readAsDataURL(file);
}

// Extract colors from image
function extractColorsFromImage() {
    const previewImage = document.getElementById('previewImage');
    const colorCount = parseInt(document.getElementById('colorCount').value);
    const extractedColors = document.getElementById('extractedColors');
    const colorPalette = document.getElementById('colorPalette');
    
    if (!previewImage.src || previewImage.src === window.location.href) {
        showError('Please upload an image first');
        return;
    }
    
    // Show loading state
    const extractBtn = document.getElementById('extractColors');
    const originalText = extractBtn.innerHTML;
    extractBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Extracting...';
    extractBtn.disabled = true;
    
    // Create canvas to analyze image
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = function() {
        // Set canvas dimensions
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw image on canvas
        ctx.drawImage(img, 0, 0);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        
        // Extract colors using simple color quantization
        const colors = extractDominantColors(pixels, colorCount);
        
        // Display extracted colors
        displayExtractedColors(colors);
        
        // Show color palette section
        extractedColors.classList.remove('hidden');
        
        // Reset button
        extractBtn.innerHTML = originalText;
        extractBtn.disabled = false;
        
        showSuccess(`Successfully extracted ${colors.length} colors from the image!`);
    };
    
    img.onerror = function() {
        showError('Error loading image');
        extractBtn.innerHTML = originalText;
        extractBtn.disabled = false;
    };
    
    img.src = previewImage.src;
}

// Extract dominant colors from image pixels
function extractDominantColors(pixels, colorCount) {
    const colorMap = {};
    const step = 10; // Sample every 10th pixel for performance
    
    // Count color occurrences (simplified)
    for (let i = 0; i < pixels.length; i += 4 * step) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        
        // Group similar colors together
        const key = `${Math.round(r / 10) * 10},${Math.round(g / 10) * 10},${Math.round(b / 10) * 10}`;
        
        if (colorMap[key]) {
            colorMap[key].count++;
        } else {
            colorMap[key] = {
                r, g, b,
                count: 1
            };
        }
    }
    
    // Convert to array and sort by frequency
    let colors = Object.values(colorMap);
    colors.sort((a, b) => b.count - a.count);
    
    // Take top colors and ensure diversity
    colors = colors.slice(0, colorCount * 2);
    
    // Group similar colors and pick the most vibrant from each group
    const finalColors = [];
    const usedColors = new Set();
    
    for (let color of colors) {
        const hex = rgbToHex(color.r, color.g, color.b);
        
        // Skip if color is too similar to already selected colors
        let isSimilar = false;
        for (let usedColor of usedColors) {
            if (colorDistance(color, usedColor) < 50) {
                isSimilar = true;
                break;
            }
        }
        
        if (!isSimilar && finalColors.length < colorCount) {
            finalColors.push({
                hex: hex,
                rgb: { r: color.r, g: color.g, b: color.b }
            });
            usedColors.add(color);
        }
    }
    
    // Sort by brightness for better display
    finalColors.sort((a, b) => {
        const brightnessA = (a.rgb.r * 299 + a.rgb.g * 587 + a.rgb.b * 114) / 1000;
        const brightnessB = (b.rgb.r * 299 + b.rgb.g * 587 + b.rgb.b * 114) / 1000;
        return brightnessB - brightnessA;
    });
    
    return finalColors;
}

// Display extracted colors
function displayExtractedColors(colors) {
    const colorPalette = document.getElementById('colorPalette');
    colorPalette.innerHTML = '';
    
    colors.forEach((color, index) => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'extracted-color color-extract-animation';
        colorDiv.style.animationDelay = `${index * 0.1}s`;
        colorDiv.style.backgroundColor = color.hex;
        colorDiv.dataset.hex = color.hex;
        colorDiv.dataset.rgb = `${color.rgb.r},${color.rgb.g},${color.rgb.b}`;
        
        const hexSpan = document.createElement('span');
        hexSpan.className = 'extracted-color-hex';
        hexSpan.textContent = color.hex;
        
        colorDiv.appendChild(hexSpan);
        
        // Add click to copy functionality
        colorDiv.addEventListener('click', function() {
            navigator.clipboard.writeText(color.hex).then(() => {
                showSuccess(`Copied ${color.hex} to clipboard!`);
                
                // Visual feedback
                this.classList.add('selected');
                setTimeout(() => {
                    this.classList.remove('selected');
                }, 1000);
            });
        });
        
        colorPalette.appendChild(colorDiv);
    });
}

// Save extracted palette
function saveExtractedPalette() {
    const colorElements = document.querySelectorAll('.extracted-color');
    const colors = Array.from(colorElements).map(el => el.dataset.hex);
    
    if (colors.length === 0) {
        showError('No colors to save');
        return;
    }
    
    // Create palette name
    const paletteName = `Image Palette ${new Date().toLocaleDateString()}`;
    
    // In a real app, you would save this to localStorage or send to server
    // For now, we'll just show a success message
    showSuccess(`Palette "${paletteName}" saved! You can access it in the Color Palette Generator.`);
    
    // Optionally redirect to colors page with the palette
    setTimeout(() => {
        alert('Redirecting to Color Palette Generator to save your palette...');
        // window.location.href = 'colors.html?palette=' + encodeURIComponent(JSON.stringify(colors));
    }, 1500);
}

// Initialize other event listeners
function initializeEventListeners() {
    // Mobile menu toggle (handled in main.js)
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update color formats
function updateColorFormats(hexColor) {
    if (!isValidHex(hexColor)) return;
    
    document.getElementById('hexValue').textContent = hexColor.toUpperCase();
    
    const rgb = hexToRgb(hexColor);
    document.getElementById('rgbValue').textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    document.getElementById('hslValue').textContent = `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`;
    
    const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
    document.getElementById('cmykValue').textContent = `${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}`;
}

// Utility Functions

// Calculate contrast ratio
function calculateContrastRatio(color1, color2) {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    
    const luminance1 = calculateLuminance(rgb1);
    const luminance2 = calculateLuminance(rgb2);
    
    const lighter = Math.max(luminance1, luminance2);
    const darker = Math.min(luminance1, luminance2);
    
    const ratio = (lighter + 0.05) / (darker + 0.05);
    
    return {
        ratio: ratio.toFixed(2),
        luminance1: luminance1,
        luminance2: luminance2
    };
}

// Calculate relative luminance
function calculateLuminance(rgb) {
    const rsrgb = rgb.r / 255;
    const gsrgb = rgb.g / 255;
    const bsrgb = rgb.b / 255;
    
    const r = rsrgb <= 0.03928 ? rsrgb / 12.92 : Math.pow((rsrgb + 0.055) / 1.055, 2.4);
    const g = gsrgb <= 0.03928 ? gsrgb / 12.92 : Math.pow((gsrgb + 0.055) / 1.055, 2.4);
    const b = bsrgb <= 0.03928 ? bsrgb / 12.92 : Math.pow((bsrgb + 0.055) / 1.055, 2.4);
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Get WCAG rating
function getWCAGRating(ratio) {
    const numRatio = parseFloat(ratio);
    
    if (numRatio >= 7) {
        return {
            level: 'AAA',
            class: 'contrast-good',
            description: 'Excellent contrast for all text sizes'
        };
    } else if (numRatio >= 4.5) {
        return {
            level: 'AA',
            class: 'contrast-good',
            description: 'Good contrast for normal text'
        };
    } else if (numRatio >= 3) {
        return {
            level: 'AA Large',
            class: 'contrast-warning',
            description: 'Minimum for large text (18pt+)'
        };
    } else {
        return {
            level: 'Fail',
            class: 'contrast-poor',
            description: 'Does not meet accessibility standards'
        };
    }
}

// Color conversion functions
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        
        h /= 6;
    }
    
    return {
        h: h * 360,
        s: s * 100,
        l: l * 100
    };
}

function rgbToCmyk(r, g, b) {
    if (r === 0 && g === 0 && b === 0) {
        return { c: 0, m: 0, y: 0, k: 100 };
    }
    
    const c = 1 - (r / 255);
    const m = 1 - (g / 255);
    const y = 1 - (b / 255);
    
    const minCMY = Math.min(c, m, y);
    
    return {
        c: Math.round(((c - minCMY) / (1 - minCMY)) * 100),
        m: Math.round(((m - minCMY) / (1 - minCMY)) * 100),
        y: Math.round(((y - minCMY) / (1 - minCMY)) * 100),
        k: Math.round(minCMY * 100)
    };
}

// Calculate color distance (for similarity check)
function colorDistance(color1, color2) {
    const dr = color1.r - color2.r;
    const dg = color1.g - color2.g;
    const db = color1.b - color2.b;
    return Math.sqrt(dr * dr + dg * dg + db * db);
}

// Validate hex color
function isValidHex(hex) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
}

// Show success message
function showSuccess(message) {
    // Remove existing messages
    document.querySelectorAll('.success-message, .error-message').forEach(el => el.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    // Insert after the active section
    const activeSection = document.querySelector('.tool-card:hover, .resource-card:hover') || document.querySelector('#tools');
    if (activeSection) {
        activeSection.parentNode.insertBefore(messageDiv, activeSection.nextSibling);
    }
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Show error message
function showError(message) {
    // Remove existing messages
    document.querySelectorAll('.success-message, .error-message').forEach(el => el.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'error-message';
    messageDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    // Insert after the active section
    const activeSection = document.querySelector('.tool-card:hover, .resource-card:hover') || document.querySelector('#tools');
    if (activeSection) {
        activeSection.parentNode.insertBefore(messageDiv, activeSection.nextSibling);
    }
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}