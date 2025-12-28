// Color Tool Specific JavaScript - Extended with 36+ palettes

// Master palette definitions - 36 professionally designed color palettes
const masterPalettes = {
    // Modern Category
    modernIndigo: {
        name: "Modern Indigo",
        description: "Clean and professional design",
        category: "modern",
        colors: {
            primary: "#0f172a",
            secondary: "#6366f1",
            accent: "#8b5cf6",
            neutral: "#f1f5f9",
            text: "#f59e0b"
        }
    },
    cyberpunk: {
        name: "Cyberpunk",
        description: "Futuristic neon aesthetic",
        category: "modern",
        colors: {
            primary: "#1a1b26",
            secondary: "#7aa2f7",
            accent: "#bb9af7",
            neutral: "#414868",
            text: "#ff9e64"
        }
    },
    minimalGray: {
        name: "Minimal Gray",
        description: "Clean monochrome design",
        category: "modern",
        colors: {
            primary: "#1f2937",
            secondary: "#6b7280",
            accent: "#9ca3af",
            neutral: "#f3f4f6",
            text: "#111827"
        }
    },
    
    // Vibrant Category
    vibrantPurple: {
        name: "Vibrant Purple",
        description: "Bold and energetic design",
        category: "vibrant",
        colors: {
            primary: "#1e293b",
            secondary: "#8b5cf6",
            accent: "#ec4899",
            neutral: "#f8fafc",
            text: "#fbbf24"
        }
    },
    electricBlue: {
        name: "Electric Blue",
        description: "High contrast vibrant blue",
        category: "vibrant",
        colors: {
            primary: "#0f0e17",
            secondary: "#3d5af1",
            accent: "#22d1ee",
            neutral: "#e2f3f5",
            text: "#ffd700"
        }
    },
    neonGreen: {
        name: "Neon Green",
        description: "Eye-catching neon palette",
        category: "vibrant",
        colors: {
            primary: "#0a0a0a",
            secondary: "#00ff9d",
            accent: "#00b4d8",
            neutral: "#16161a",
            text: "#ff005c"
        }
    },
    
    // Natural Category
    ecoGreen: {
        name: "Eco Green",
        description: "Fresh and natural design",
        category: "natural",
        colors: {
            primary: "#064e3b",
            secondary: "#10b981",
            accent: "#fef3c7",
            neutral: "#f8fafc",
            text: "#1f2937"
        }
    },
    forestDeep: {
        name: "Forest Deep",
        description: "Deep green nature tones",
        category: "natural",
        colors: {
            primary: "#052e16",
            secondary: "#166534",
            accent: "#22c55e",
            neutral: "#f0fdf4",
            text: "#14532d"
        }
    },
    oceanBreeze: {
        name: "Ocean Breeze",
        description: "Calm ocean-inspired colors",
        category: "natural",
        colors: {
            primary: "#0c4a6e",
            secondary: "#0ea5e9",
            accent: "#7dd3fc",
            neutral: "#f0f9ff",
            text: "#0369a1"
        }
    },
    
    // Dark Mode Category
    midnightDark: {
        name: "Midnight Dark",
        description: "Dark mode optimized",
        category: "dark",
        colors: {
            primary: "#0a0a0a",
            secondary: "#3b82f6",
            accent: "#60a5fa",
            neutral: "#1f2937",
            text: "#10b981"
        }
    },
    deepSpace: {
        name: "Deep Space",
        description: "Space-themed dark palette",
        category: "dark",
        colors: {
            primary: "#000000",
            secondary: "#8a2be2",
            accent: "#00ffff",
            neutral: "#1a1a2e",
            text: "#ff6b6b"
        }
    },
    obsidian: {
        name: "Obsidian",
        description: "Rich black and jewel tones",
        category: "dark",
        colors: {
            primary: "#000814",
            secondary: "#003566",
            accent: "#ffc300",
            neutral: "#001d3d",
            text: "#ffd60a"
        }
    },
    
    // Pastel Category
    pastelDreams: {
        name: "Pastel Dreams",
        description: "Soft and dreamy design",
        category: "pastel",
        colors: {
            primary: "#faf5ff",
            secondary: "#e9d5ff",
            accent: "#d8b4fe",
            neutral: "#c084fc",
            text: "#9333ea"
        }
    },
    cottonCandy: {
        name: "Cotton Candy",
        description: "Soft pink and blue pastels",
        category: "pastel",
        colors: {
            primary: "#fff0f3",
            secondary: "#ffccd5",
            accent: "#ffb3c1",
            neutral: "#ff8fa3",
            text: "#ff758f"
        }
    },
    mintCream: {
        name: "Mint Cream",
        description: "Fresh mint pastel palette",
        category: "pastel",
        colors: {
            primary: "#f0fff4",
            secondary: "#c6f6d5",
            accent: "#9ae6b4",
            neutral: "#68d391",
            text: "#38a169"
        }
    },
    
    // Professional Category
    corporateBlue: {
        name: "Corporate Blue",
        description: "Professional business palette",
        category: "professional",
        colors: {
            primary: "#1e3a8a",
            secondary: "#3b82f6",
            accent: "#93c5fd",
            neutral: "#f8fafc",
            text: "#1e293b"
        }
    },
    bankingGreen: {
        name: "Banking Green",
        description: "Trustworthy financial palette",
        category: "professional",
        colors: {
            primary: "#065f46",
            secondary: "#059669",
            accent: "#10b981",
            neutral: "#ecfdf5",
            text: "#047857"
        }
    },
    lawFirm: {
        name: "Law Firm",
        description: "Serious legal color scheme",
        category: "professional",
        colors: {
            primary: "#292524",
            secondary: "#57534e",
            accent: "#a8a29e",
            neutral: "#f5f5f4",
            text: "#1c1917"
        }
    },
    
    // Seasonal Category
    warmAutumn: {
        name: "Warm Autumn",
        description: "Cozy and inviting design",
        category: "seasonal",
        colors: {
            primary: "#7c2d12",
            secondary: "#ea580c",
            accent: "#fef3c7",
            neutral: "#fafaf9",
            text: "#292524"
        }
    },
    winterFrost: {
        name: "Winter Frost",
        description: "Cool winter blues and whites",
        category: "seasonal",
        colors: {
            primary: "#1e40af",
            secondary: "#3b82f6",
            accent: "#bfdbfe",
            neutral: "#f0f9ff",
            text: "#1e3a8a"
        }
    },
    springBloom: {
        name: "Spring Bloom",
        description: "Fresh spring flower colors",
        category: "seasonal",
        colors: {
            primary: "#4c0519",
            secondary: "#be185d",
            accent: "#f472b6",
            neutral: "#fce7f3",
            text: "#9d174d"
        }
    },
    
    // Additional Popular Palettes
    sunsetRed: {
        name: "Sunset Red",
        description: "Energetic and passionate design",
        category: "vibrant",
        colors: {
            primary: "#7f1d1d",
            secondary: "#dc2626",
            accent: "#fbbf24",
            neutral: "#fefce8",
            text: "#292524"
        }
    },
    earthTones: {
        name: "Earth Tones",
        description: "Natural and organic design",
        category: "natural",
        colors: {
            primary: "#78350f",
            secondary: "#92400e",
            accent: "#b45309",
            neutral: "#fef3c7",
            text: "#1c1917"
        }
    },
    berry: {
        name: "Berry",
        description: "Rich berry tones",
        category: "vibrant",
        colors: {
            primary: "#831843",
            secondary: "#9d174d",
            accent: "#db2777",
            neutral: "#fce7f3",
            text: "#f472b6"
        }
    },
    monochromeBlue: {
        name: "Monochrome Blue",
        description: "Single hue variations",
        category: "modern",
        colors: {
            primary: "#0c4a6e",
            secondary: "#0369a1",
            accent: "#0284c7",
            neutral: "#bae6fd",
            text: "#38bdf8"
        }
    },
    warmGray: {
        name: "Warm Gray",
        description: "Subtle and sophisticated",
        category: "modern",
        colors: {
            primary: "#292524",
            secondary: "#57534e",
            accent: "#78716c",
            neutral: "#f5f5f4",
            text: "#d6d3d1"
        }
    },
    sunrise: {
        name: "Sunrise",
        description: "Morning inspiration",
        category: "pastel",
        colors: {
            primary: "#fef3c7",
            secondary: "#fde68a",
            accent: "#fbbf24",
            neutral: "#f59e0b",
            text: "#d97706"
        }
    },
    forest: {
        name: "Forest",
        description: "Deep green nature",
        category: "natural",
        colors: {
            primary: "#052e16",
            secondary: "#14532d",
            accent: "#166534",
            neutral: "#bbf7d0",
            text: "#22c55e"
        }
    },
    lavender: {
        name: "Lavender",
        description: "Soft purple palette",
        category: "pastel",
        colors: {
            primary: "#f5f3ff",
            secondary: "#ede9fe",
            accent: "#ddd6fe",
            neutral: "#c4b5fd",
            text: "#8b5cf6"
        }
    },
    charcoal: {
        name: "Charcoal",
        description: "Dark sophisticated palette",
        category: "dark",
        colors: {
            primary: "#0f172a",
            secondary: "#1e293b",
            accent: "#334155",
            neutral: "#475569",
            text: "#cbd5e1"
        }
    },
    coralReef: {
        name: "Coral Reef",
        description: "Tropical ocean colors",
        category: "vibrant",
        colors: {
            primary: "#0d9488",
            secondary: "#14b8a6",
            accent: "#2dd4bf",
            neutral: "#ccfbf1",
            text: "#134e4a"
        }
    },
    goldRush: {
        name: "Gold Rush",
        description: "Rich gold and brown tones",
        category: "professional",
        colors: {
            primary: "#92400e",
            secondary: "#b45309",
            accent: "#d97706",
            neutral: "#fef3c7",
            text: "#78350f"
        }
    },
    arcticIce: {
        name: "Arctic Ice",
        description: "Cool icy blues",
        category: "seasonal",
        colors: {
            primary: "#0ea5e9",
            secondary: "#38bdf8",
            accent: "#7dd3fc",
            neutral: "#e0f2fe",
            text: "#0284c7"
        }
    },
    desertSand: {
        name: "Desert Sand",
        description: "Warm desert tones",
        category: "natural",
        colors: {
            primary: "#d97706",
            secondary: "#f59e0b",
            accent: "#fbbf24",
            neutral: "#fef3c7",
            text: "#92400e"
        }
    },
    royalPurple: {
        name: "Royal Purple",
        description: "Regal purple palette",
        category: "professional",
        colors: {
            primary: "#4c1d95",
            secondary: "#7c3aed",
            accent: "#a78bfa",
            neutral: "#f5f3ff",
            text: "#5b21b6"
        }
    },
    cherryBlossom: {
        name: "Cherry Blossom",
        description: "Soft Japanese aesthetic",
        category: "pastel",
        colors: {
            primary: "#fdf2f8",
            secondary: "#fce7f3",
            accent: "#fbcfe8",
            neutral: "#f9a8d4",
            text: "#ec4899"
        }
    },
    steel: {
        name: "Steel",
        description: "Industrial metal palette",
        category: "modern",
        colors: {
            primary: "#374151",
            secondary: "#4b5563",
            accent: "#6b7280",
            neutral: "#d1d5db",
            text: "#111827"
        }
    }
};

// Global variables
let currentCategory = 'all';
let currentSearch = '';
let displayedPalettes = 6;
const palettesPerLoad = 6;

// Initialize color tool when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePaletteTool();
});

// Main initialization function
function initializePaletteTool() {
    // Initialize with default palette
    initializePalettes();
    
    // Set up event listeners
    setupEventListeners();
    
    // Load initial palettes
    renderPalettes();
    
    // Select default palette
    selectPalette('modernIndigo');
}

// Initialize palettes object
let palettes = {};
function initializePalettes() {
    // Copy master palettes to working object
    palettes = JSON.parse(JSON.stringify(masterPalettes));
    
    // Update counts
    updatePaletteCount();
}

// Set up all event listeners
function setupEventListeners() {
    // Category filtering
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active category
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentCategory = this.getAttribute('data-category');
            displayedPalettes = 6;
            renderPalettes();
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('paletteSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearch = this.value.toLowerCase();
            displayedPalettes = 6;
            renderPalettes();
        });
    }
    
    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            displayedPalettes += palettesPerLoad;
            renderPalettes();
        });
    }
    
    // Copy buttons
    document.getElementById('copyCSS')?.addEventListener('click', copyCSSCode);
    document.getElementById('copyTailwind')?.addEventListener('click', copyTailwindCode);
    
    // Color picker functionality
    const colorPicker = document.getElementById('colorPicker');
    const colorHex = document.getElementById('colorHex');
    
    if (colorPicker && colorHex) {
        colorPicker.addEventListener('input', function() {
            colorHex.value = this.value.toUpperCase();
        });
        
        colorHex.addEventListener('input', function() {
            const color = this.value;
            if (/^#[0-9A-F]{6}$/i.test(color)) {
                colorPicker.value = color;
            }
        });
    }
    
    // Tool buttons
    document.getElementById('addColor')?.addEventListener('click', addColorToPalette);
    document.getElementById('generateRandom')?.addEventListener('click', generateRandomPalette);
    document.getElementById('createCustom')?.addEventListener('click', createCustomPalette);
    document.getElementById('sharePalette')?.addEventListener('click', sharePalette);
}

// Render palettes based on filters
function renderPalettes() {
    const container = document.getElementById('palettesContainer');
    if (!container) return;
    
    // Clear container
    container.innerHTML = '';
    
    // Filter palettes
    const filteredPalettes = filterPalettes();
    
    // Get palettes to display
    const palettesToShow = filteredPalettes.slice(0, displayedPalettes);
    
    // Create palette cards
    palettesToShow.forEach(paletteId => {
        const palette = palettes[paletteId];
        if (palette) {
            const card = createPaletteCard(palette, paletteId);
            container.appendChild(card);
        }
    });
    
    // Update load more button visibility
    updateLoadMoreButton(filteredPalettes.length);
    
    // Update counts
    updateDisplayCount(filteredPalettes.length);
}

// Filter palettes based on category and search
function filterPalettes() {
    return Object.keys(palettes).filter(paletteId => {
        const palette = palettes[paletteId];
        
        // Category filter
        if (currentCategory !== 'all' && palette.category !== currentCategory) {
            return false;
        }
        
        // Search filter
        if (currentSearch) {
            const searchTerm = currentSearch.toLowerCase();
            return palette.name.toLowerCase().includes(searchTerm) ||
                   palette.description.toLowerCase().includes(searchTerm) ||
                   Object.values(palette.colors).some(color => 
                       color.toLowerCase().includes(searchTerm.replace('#', ''))
                   );
        }
        
        return true;
    });
}

// Create a palette card element
function createPaletteCard(palette, paletteId) {
    const card = document.createElement('div');
    card.className = 'color-card bg-secondary rounded-lg shadow-md overflow-hidden';
    card.setAttribute('data-palette', paletteId);
    card.setAttribute('data-category', palette.category);
    
    const colors = Object.values(palette.colors);
    
    card.innerHTML = `
        <div class="flex">
            ${colors.map(color => 
                `<div class="color-swatch w-1/5" style="background-color: ${color}"></div>`
            ).join('')}
        </div>
        <div class="p-4">
            <h3 class="font-bold text-lg mb-2">${palette.name}</h3>
            <p class="text-sm text-secondary mb-3">${palette.description}</p>
            <div class="flex justify-between text-xs text-secondary">
                ${colors.map(color => 
                    `<span>${color}</span>`
                ).join('')}
            </div>
        </div>
    `;
    
    // Add click event
    card.addEventListener('click', function() {
        selectPalette(paletteId);
    });
    
    return card;
}

// Select a palette
function selectPalette(paletteId) {
    // Remove selected class from all cards
    document.querySelectorAll('.color-card').forEach(c => {
        c.classList.remove('selected');
    });
    
    // Add selected class to clicked card
    const selectedCard = document.querySelector(`[data-palette="${paletteId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    // Get palette data
    const palette = palettes[paletteId];
    
    // Update preview
    updatePreview(palette);
    
    // Show selected info
    showSelectedInfo(palette);
}

// Update preview with selected palette
function updatePreview(palette) {
    const previewArea = document.getElementById('previewArea');
    const previewTitle = document.getElementById('previewTitle');
    const previewSubtitle = document.getElementById('previewSubtitle');
    const previewCard1 = document.getElementById('previewCard1');
    const previewCard2 = document.getElementById('previewCard2');
    const previewButton = document.getElementById('previewButton');
    const previewButton2 = document.getElementById('previewButton2');
    
    if (!previewArea) return;
    
    // Apply colors to preview elements
    previewArea.style.backgroundColor = palette.colors.neutral;
    previewArea.style.borderColor = palette.colors.accent;
    previewTitle.style.color = palette.colors.primary;
    previewSubtitle.style.color = palette.colors.primary;
    
    if (previewCard1) {
        previewCard1.style.backgroundColor = palette.colors.neutral;
        previewCard1.style.borderColor = palette.colors.accent;
        previewCard1.querySelector('h3').style.color = palette.colors.primary;
        previewCard1.querySelector('p').style.color = palette.colors.text || palette.colors.primary;
    }
    
    if (previewCard2) {
        previewCard2.style.backgroundColor = palette.colors.neutral;
        previewCard2.style.borderColor = palette.colors.accent;
        previewCard2.querySelector('h3').style.color = palette.colors.primary;
        previewCard2.querySelector('p').style.color = palette.colors.text || palette.colors.primary;
    }
    
    if (previewButton) {
        previewButton.style.backgroundColor = palette.colors.secondary;
        previewButton.style.color = getContrastColor(palette.colors.secondary);
        previewButton.style.border = 'none';
    }
    
    if (previewButton2) {
        previewButton2.style.backgroundColor = palette.colors.secondary;
        previewButton2.style.color = getContrastColor(palette.colors.secondary);
        previewButton2.style.border = 'none';
    }
}

// Show selected palette information
function showSelectedInfo(palette) {
    // Update text content
    document.getElementById('selectedName').textContent = palette.name;
    document.getElementById('selectedDescription').textContent = palette.description;
    
    // Update color swatches
    const colorElements = ['selectedPrimary', 'selectedSecondary', 'selectedAccent', 'selectedNeutral', 'selectedText'];
    const hexElements = ['primaryHex', 'secondaryHex', 'accentHex', 'neutralHex', 'textHex'];
    const colorKeys = ['primary', 'secondary', 'accent', 'neutral', 'text'];
    
    colorKeys.forEach((key, index) => {
        const color = palette.colors[key];
        const colorEl = document.getElementById(colorElements[index]);
        const hexEl = document.getElementById(hexElements[index]);
        
        if (colorEl) colorEl.style.backgroundColor = color;
        if (hexEl) hexEl.textContent = color;
    });
    
    // Generate implementation code
    generateCodeBlocks(palette);
}

// Generate CSS and Tailwind code blocks
function generateCodeBlocks(palette) {
    const cssCode = document.getElementById('cssCode');
    const tailwindCode = document.getElementById('tailwindCode');
    
    if (cssCode) {
        cssCode.textContent = `/* CSS Variables */
:root {
  --color-primary: ${palette.colors.primary};
  --color-secondary: ${palette.colors.secondary};
  --color-accent: ${palette.colors.accent};
  --color-neutral: ${palette.colors.neutral};
  --color-accent2: ${palette.colors.text || palette.colors.accent};
}`;
    }
    
    if (tailwindCode) {
        tailwindCode.textContent = `/* Tailwind Configuration */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '${palette.colors.primary}',
        secondary: '${palette.colors.secondary}',
        accent: '${palette.colors.accent}',
        neutral: '${palette.colors.neutral}',
        accent2: '${palette.colors.text || palette.colors.accent}'
      }
    }
  }
}`;
    }
}

// Copy CSS code to clipboard
function copyCSSCode() {
    const code = document.getElementById('cssCode').textContent;
    copyToClipboard(code, this, 'CSS');
}

// Copy Tailwind code to clipboard
function copyTailwindCode() {
    const code = document.getElementById('tailwindCode').textContent;
    copyToClipboard(code, this, 'Tailwind');
}

// Generic copy to clipboard function
function copyToClipboard(text, button, type = 'Code') {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = `<i class="fas fa-check mr-1"></i> Copied!`;
        button.disabled = true;
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    });
}

// Add color to palette
function addColorToPalette() {
    const color = document.getElementById('colorHex')?.value;
    if (color) {
        alert(`Color ${color} added to your custom palette!`);
    }
}

// Generate random palette
function generateRandomPalette() {
    const filteredPalettes = filterPalettes();
    if (filteredPalettes.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * filteredPalettes.length);
    const randomPaletteId = filteredPalettes[randomIndex];
    
    selectPalette(randomPaletteId);
    
    // Show message
    const button = this;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-sync-alt mr-2"></i> Generated!';
    setTimeout(() => {
        button.innerHTML = originalText;
    }, 1500);
}

// Create custom palette
function createCustomPalette() {
    alert('Custom palette creator will be available in the next update!');
}

// Share palette
function sharePalette() {
    const selectedCard = document.querySelector('.color-card.selected');
    if (!selectedCard) {
        alert('Please select a palette first!');
        return;
    }
    
    const paletteName = document.getElementById('selectedName').textContent;
    const colors = ['primaryHex', 'secondaryHex', 'accentHex', 'neutralHex', 'textHex']
        .map(id => document.getElementById(id)?.textContent)
        .filter(Boolean);
    
    const paletteInfo = `Check out this color palette from Palettecraft:\n\n${paletteName}\n${colors.map((color, i) => 
        `${['Primary', 'Secondary', 'Accent', 'Neutral', 'Accent 2'][i]}: ${color}`
    ).join('\n')}\n\nFind more at: ${window.location.origin}`;
    
    navigator.clipboard.writeText(paletteInfo).then(() => {
        alert(`Palette "${paletteName}" copied to clipboard! Share it with others.`);
    });
}

// Update load more button visibility
function updateLoadMoreButton(totalFiltered) {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedPalettes >= totalFiltered ? 'none' : 'inline-block';
    }
}

// Update display counts
function updateDisplayCount(totalFiltered) {
    const showingCount = Math.min(displayedPalettes, totalFiltered);
    document.getElementById('showingCount').textContent = showingCount;
    document.getElementById('totalCount').textContent = totalFiltered;
}

// Update total palette count
function updatePaletteCount() {
    const total = Object.keys(palettes).length;
    document.getElementById('totalCount').textContent = total;
}

// Helper function to get contrast color
function getContrastColor(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    const r = parseInt(hexcolor.substr(0,2),16);
    const g = parseInt(hexcolor.substr(2,2),16);
    const b = parseInt(hexcolor.substr(4,2),16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#000000' : '#ffffff';
}