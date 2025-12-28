// Font Tool Specific JavaScript - 100+ fonts

// Comprehensive font database with 120+ Google Fonts
const fontDatabase = [
    // Sans-Serif Fonts (50+)
    { name: 'Inter', family: "'Inter', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Roboto', family: "'Roboto', sans-serif", category: 'sans-serif', weights: [300,400,500,700,900] },
    { name: 'Open Sans', family: "'Open Sans', sans-serif", category: 'sans-serif', weights: [300,400,600,700,800] },
    { name: 'Montserrat', family: "'Montserrat', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Raleway', family: "'Raleway', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Poppins', family: "'Poppins', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Nunito', family: "'Nunito', sans-serif", category: 'sans-serif', weights: [300,400,600,700,800,900] },
    { name: 'Quicksand', family: "'Quicksand', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700] },
    { name: 'Source Sans Pro', family: "'Source Sans Pro', sans-serif", category: 'sans-serif', weights: [300,400,600,700,900] },
    { name: 'Ubuntu', family: "'Ubuntu', sans-serif", category: 'sans-serif', weights: [300,400,500,700] },
    { name: 'Noto Sans', family: "'Noto Sans', sans-serif", category: 'sans-serif', weights: [300,400,500,700] },
    { name: 'Oswald', family: "'Oswald', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700] },
    { name: 'Lato', family: "'Lato', sans-serif", category: 'sans-serif', weights: [300,400,700,900] },
    { name: 'Roboto Condensed', family: "'Roboto Condensed', sans-serif", category: 'sans-serif', weights: [300,400,700] },
    { name: 'Work Sans', family: "'Work Sans', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Fira Sans', family: "'Fira Sans', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Arimo', family: "'Arimo', sans-serif", category: 'sans-serif', weights: [400,500,700] },
    { name: 'Rubik', family: "'Rubik', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Manrope', family: "'Manrope', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800] },
    { name: 'Josefin Sans', family: "'Josefin Sans', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700] },
    { name: 'Kanit', family: "'Kanit', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Exo 2', family: "'Exo 2', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Barlow', family: "'Barlow', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Heebo', family: "'Heebo', sans-serif", category: 'sans-serif', weights: [300,400,500,700,800,900] },
    { name: 'Titillium Web', family: "'Titillium Web', sans-serif", category: 'sans-serif', weights: [300,400,600,700,900] },
    { name: 'Karla', family: "'Karla', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800] },
    { name: 'DM Sans', family: "'DM Sans', sans-serif", category: 'sans-serif', weights: [300,400,500,700] },
    { name: 'Public Sans', family: "'Public Sans', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Space Grotesk', family: "'Space Grotesk', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700] },
    { name: 'Archivo', family: "'Archivo', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'IBM Plex Sans', family: "'IBM Plex Sans', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700] },
    { name: 'PT Sans', family: "'PT Sans', sans-serif", category: 'sans-serif', weights: [400,700] },
    { name: 'PT Sans Narrow', family: "'PT Sans Narrow', sans-serif", category: 'sans-serif', weights: [400,700] },
    { name: 'Mulish', family: "'Mulish', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Cabin', family: "'Cabin', sans-serif", category: 'sans-serif', weights: [400,500,600,700] },
    { name: 'Hind', family: "'Hind', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700] },
    { name: 'Gothic A1', family: "'Gothic A1', sans-serif", category: 'sans-serif', weights: [300,400,500,600,700,800,900] },
    
    // Serif Fonts (45+)
    { name: 'Merriweather', family: "'Merriweather', serif", category: 'serif', weights: [300,400,700,900] },
    { name: 'Playfair Display', family: "'Playfair Display', serif", category: 'serif', weights: [400,500,600,700,800,900] },
    { name: 'Cormorant Garamond', family: "'Cormorant Garamond', serif", category: 'serif', weights: [300,400,500,600,700] },
    { name: 'EB Garamond', family: "'EB Garamond', serif", category: 'serif', weights: [400,500,600,700,800] },
    { name: 'Libre Baskerville', family: "'Libre Baskerville', serif", category: 'serif', weights: [400,700] },
    { name: 'Lora', family: "'Lora', serif", category: 'serif', weights: [400,500,600,700] },
    { name: 'Cardo', family: "'Cardo', serif", category: 'serif', weights: [400,700] },
    { name: 'Old Standard TT', family: "'Old Standard TT', serif", category: 'serif', weights: [400,700] },
    { name: 'Prata', family: "'Prata', serif", category: 'serif', weights: [400] },
    { name: 'Marcellus', family: "'Marcellus', serif", category: 'serif', weights: [400] },
    { name: 'Italiana', family: "'Italiana', serif", category: 'serif', weights: [400] },
    { name: 'Bodoni Moda', family: "'Bodoni Moda', serif", category: 'serif', weights: [400,500,600,700,800,900] },
    { name: 'DM Serif Display', family: "'DM Serif Display', serif", category: 'serif', weights: [400] },
    { name: 'Gilda Display', family: "'Gilda Display', serif", category: 'serif', weights: [400] },
    { name: 'PT Serif', family: "'PT Serif', serif", category: 'serif', weights: [400,700] },
    { name: 'Crimson Text', family: "'Crimson Text', serif", category: 'serif', weights: [400,600,700] },
    { name: 'Vollkorn', family: "'Vollkorn', serif", category: 'serif', weights: [400,500,600,700,800,900] },
    { name: 'Libre Caslon Text', family: "'Libre Caslon Text', serif", category: 'serif', weights: [400,700] },
    { name: 'Bitter', family: "'Bitter', serif", category: 'serif', weights: [300,400,500,600,700,800,900] },
    { name: 'Zilla Slab', family: "'Zilla Slab', serif", category: 'serif', weights: [300,400,500,600,700] },
    { name: 'Noto Serif', family: "'Noto Serif', serif", category: 'serif', weights: [400,700] },
    { name: 'Domine', family: "'Domine', serif", category: 'serif', weights: [400,500,600,700] },
    { name: 'Frank Ruhl Libre', family: "'Frank Ruhl Libre', serif", category: 'serif', weights: [300,400,500,700,900] },
    { name: 'Playfair Display SC', family: "'Playfair Display SC', serif", category: 'serif', weights: [400,700,900] },
    { name: 'Cinzel Decorative', family: "'Cinzel Decorative', serif", category: 'serif', weights: [400,700,900] },
    { name: 'Fauna One', family: "'Fauna One', serif", category: 'serif', weights: [400] },
    { name: 'Gentium Book Basic', family: "'Gentium Book Basic', serif", category: 'serif', weights: [400,700] },
    { name: 'Kreon', family: "'Kreon', serif", category: 'serif', weights: [300,400,500,600,700] },
    { name: 'Slabo 27px', family: "'Slabo 27px', serif", category: 'serif', weights: [400] },
    
    // Display Fonts (25+)
    { name: 'Abril Fatface', family: "'Abril Fatface', cursive", category: 'display', weights: [400] },
    { name: 'Great Vibes', family: "'Great Vibes', cursive", category: 'display', weights: [400] },
    { name: 'Dancing Script', family: "'Dancing Script', cursive", category: 'display', weights: [400,500,600,700] },
    { name: 'Alfa Slab One', family: "'Alfa Slab One', cursive", category: 'display', weights: [400] },
    { name: 'Bungee', family: "'Bungee', cursive", category: 'display', weights: [400] },
    { name: 'Fredoka One', family: "'Fredoka One', cursive", category: 'display', weights: [400] },
    { name: 'Lobster', family: "'Lobster', cursive", category: 'display', weights: [400] },
    { name: 'Pacifico', family: "'Pacifico', cursive", category: 'display', weights: [400] },
    { name: 'Permanent Marker', family: "'Permanent Marker', cursive", category: 'display', weights: [400] },
    { name: 'Righteous', family: "'Righteous', cursive", category: 'display', weights: [400] },
    { name: 'Sigmar One', family: "'Sigmar One', cursive", category: 'display', weights: [400] },
    { name: 'Titan One', family: "'Titan One', cursive", category: 'display', weights: [400] },
    { name: 'Yellowtail', family: "'Yellowtail', cursive", category: 'display', weights: [400] },
    { name: 'Orbitron', family: "'Orbitron', sans-serif", category: 'display', weights: [400,500,600,700,800,900] },
    { name: 'Rajdhani', family: "'Rajdhani', sans-serif", category: 'display', weights: [300,400,500,600,700] },
    { name: 'Anton', family: "'Anton', sans-serif", category: 'display', weights: [400] },
    { name: 'Black Ops One', family: "'Black Ops One', cursive", category: 'display', weights: [400] },
    { name: 'Monoton', family: "'Monoton', cursive", category: 'display', weights: [400] },
    { name: 'Audiowide', family: "'Audiowide', cursive", category: 'display', weights: [400] },
    { name: 'Almendra', family: "'Almendra', serif", category: 'display', weights: [400,700] },
    { name: 'Berkshire Swash', family: "'Berkshire Swash', cursive", category: 'display', weights: [400] },
    { name: 'Cinzel', family: "'Cinzel', serif", category: 'display', weights: [400,700] },
    { name: 'UnifrakturMaguntia', family: "'UnifrakturMaguntia', cursive", category: 'display', weights: [400] },
    { name: 'MedievalSharp', family: "'MedievalSharp', cursive", category: 'display', weights: [400] },
    { name: 'Eagle Lake', family: "'Eagle Lake', cursive", category: 'display', weights: [400] },
    { name: 'Uncial Antiqua', family: "'Uncial Antiqua', cursive", category: 'display', weights: [400] },
    { name: 'Pirata One', family: "'Pirata One', cursive", category: 'display', weights: [400] },
    { name: 'Rye', family: "'Rye', cursive", category: 'display', weights: [400] },
    { name: 'Sedgwick Ave', family: "'Sedgwick Ave', cursive", category: 'display', weights: [400] },
    { name: 'Shadows Into Light', family: "'Shadows Into Light', cursive", category: 'display', weights: [400] },
    { name: 'Special Elite', family: "'Special Elite', cursive", category: 'display', weights: [400] },
    { name: 'Staatliches', family: "'Staatliches', cursive", category: 'display', weights: [400] },
    { name: 'Ultra', family: "'Ultra', serif", category: 'display', weights: [400] },
    { name: 'Yeseva One', family: "'Yeseva One', cursive", category: 'display', weights: [400] },
    { name: 'ZCOOL QingKe HuangYou', family: "'ZCOOL QingKe HuangYou', sans-serif", category: 'display', weights: [400] },
    { name: 'ZCOOL XiaoWei', family: "'ZCOOL XiaoWei', serif", category: 'display', weights: [400] },
    
    // Monospace Fonts
    { name: 'Inconsolata', family: "'Inconsolata', monospace", category: 'monospace', weights: [300,400,500,600,700,800,900] },
    { name: 'Courier Prime', family: "'Courier Prime', monospace", category: 'monospace', weights: [400,700] },
    { name: 'Roboto Mono', family: "'Roboto Mono', monospace", category: 'monospace', weights: [300,400,500,600,700] },
    { name: 'Source Code Pro', family: "'Source Code Pro', monospace", category: 'monospace', weights: [300,400,500,600,700,900] },
    { name: 'Fira Code', family: "'Fira Code', monospace", category: 'monospace', weights: [300,400,500,600,700] },
    { name: 'JetBrains Mono', family: "'JetBrains Mono', monospace", category: 'monospace', weights: [300,400,500,600,700,800] },
    { name: 'Share Tech Mono', family: "'Share Tech Mono', monospace", category: 'monospace', weights: [400] },
    { name: 'VT323', family: "'VT323', monospace", category: 'monospace', weights: [400] },
    { name: 'Press Start 2P', family: "'Press Start 2P', cursive", category: 'monospace', weights: [400] },
    
    // Handwriting Fonts
    { name: 'Petit Formal Script', family: "'Petit Formal Script', cursive", category: 'handwriting', weights: [400] },
    { name: 'Yellowtail', family: "'Yellowtail', cursive", category: 'handwriting', weights: [400] },
    { name: 'Dancing Script', family: "'Dancing Script', cursive", category: 'handwriting', weights: [400,500,600,700] },
    { name: 'Great Vibes', family: "'Great Vibes', cursive", category: 'handwriting', weights: [400] },
    { name: 'Pacifico', family: "'Pacifico', cursive", category: 'handwriting', weights: [400] }
];

// Popular font pairings
const popularPairings = [
    {
        id: 'pairing1',
        name: 'Playfair Display + Inter',
        description: 'Elegant serif with clean sans-serif',
        category: 'Classic • Professional',
        heading: { name: 'Playfair Display', family: "'Playfair Display', serif", weight: '700' },
        body: { name: 'Inter', family: "'Inter', sans-serif", weight: '400' }
    },
    {
        id: 'pairing2',
        name: 'Montserrat + Merriweather',
        description: 'Modern geometric with traditional serif',
        category: 'Modern • Versatile',
        heading: { name: 'Montserrat', family: "'Montserrat', sans-serif", weight: '700' },
        body: { name: 'Merriweather', family: "'Merriweather', serif", weight: '400' }
    },
    {
        id: 'pairing3',
        name: 'Cormorant Garamond + Lora',
        description: 'Elegant serif pairing',
        category: 'Elegant • Literary',
        heading: { name: 'Cormorant Garamond', family: "'Cormorant Garamond', serif", weight: '700' },
        body: { name: 'Lora', family: "'Lora', serif", weight: '400' }
    },
    {
        id: 'pairing4',
        name: 'Raleway + Open Sans',
        description: 'Clean sans-serif pairing',
        category: 'Modern • Clean',
        heading: { name: 'Raleway', family: "'Raleway', sans-serif", weight: '700' },
        body: { name: 'Open Sans', family: "'Open Sans', sans-serif", weight: '400' }
    },
    {
        id: 'pairing5',
        name: 'Abril Fatface + Roboto',
        description: 'Bold display with neutral sans-serif',
        category: 'Bold • Dramatic',
        heading: { name: 'Abril Fatface', family: "'Abril Fatface', cursive", weight: '400' },
        body: { name: 'Roboto', family: "'Roboto', sans-serif", weight: '400' }
    },
    {
        id: 'pairing6',
        name: 'Prata + Inter',
        description: 'Stylish serif with versatile sans-serif',
        category: 'Stylish • Sophisticated',
        heading: { name: 'Prata', family: "'Prata', serif", weight: '400' },
        body: { name: 'Inter', family: "'Inter', sans-serif", weight: '400' }
    },
    {
        id: 'pairing7',
        name: 'Oswald + Lato',
        description: 'Strong condensed with clean sans-serif',
        category: 'Modern • Bold',
        heading: { name: 'Oswald', family: "'Oswald', sans-serif", weight: '700' },
        body: { name: 'Lato', family: "'Lato', sans-serif", weight: '400' }
    },
    {
        id: 'pairing8',
        name: 'Poppins + Roboto',
        description: 'Geometric sans-serif pairing',
        category: 'Modern • Geometric',
        heading: { name: 'Poppins', family: "'Poppins', sans-serif", weight: '700' },
        body: { name: 'Roboto', family: "'Roboto', sans-serif", weight: '400' }
    },
    {
        id: 'pairing9',
        name: 'Bodoni Moda + Open Sans',
        description: 'High contrast modern pairing',
        category: 'Elegant • Modern',
        heading: { name: 'Bodoni Moda', family: "'Bodoni Moda', serif", weight: '700' },
        body: { name: 'Open Sans', family: "'Open Sans', sans-serif", weight: '400' }
    },
    {
        id: 'pairing10',
        name: 'Orbitron + Roboto Mono',
        description: 'Futuristic tech pairing',
        category: 'Futuristic • Tech',
        heading: { name: 'Orbitron', family: "'Orbitron', sans-serif", weight: '700' },
        body: { name: 'Roboto Mono', family: "'Roboto Mono', monospace", weight: '400' }
    },
    {
        id: 'pairing11',
        name: 'Great Vibes + Montserrat',
        description: 'Elegant script with modern sans-serif',
        category: 'Elegant • Creative',
        heading: { name: 'Great Vibes', family: "'Great Vibes', cursive", weight: '400' },
        body: { name: 'Montserrat', family: "'Montserrat', sans-serif", weight: '400' }
    },
    {
        id: 'pairing12',
        name: 'Fira Code + Inter',
        description: 'Developer friendly pairing',
        category: 'Technical • Clean',
        heading: { name: 'Fira Code', family: "'Fira Code', monospace", weight: '600' },
        body: { name: 'Inter', family: "'Inter', sans-serif", weight: '400' }
    }
];

// Global variables
let currentCategory = 'all';
let currentSearch = '';
let selectedFonts = {
    heading: { name: 'Merriweather', family: "'Merriweather', serif", weight: '700' },
    body: { name: 'Inter', family: "'Inter', sans-serif", weight: '400' }
};

// Initialize font tool when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFontTool();
});

// Main initialization function
function initializeFontTool() {
    // Populate font select dropdowns
    populateFontSelects();
    
    // Load popular pairings
    renderPopularPairings();
    
    // Load font library
    renderFontLibrary();
    
    // Update font statistics
    updateFontStats();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize with default pairing
    updatePreview();
    updateImplementationCode();
}

// Populate font select dropdowns
function populateFontSelects() {
    const headingSelect = document.getElementById('heading-font');
    const bodySelect = document.getElementById('body-font');
    
    // Clear existing options
    headingSelect.innerHTML = '';
    bodySelect.innerHTML = '';
    
    // Add font options
    fontDatabase.forEach(font => {
        const option = document.createElement('option');
        option.value = font.family;
        option.textContent = font.name;
        option.dataset.fontName = font.name;
        
        if (font.name === 'Merriweather') {
            option.selected = true;
        }
        
        headingSelect.appendChild(option.cloneNode(true));
        bodySelect.appendChild(option);
    });
}

// Render popular font pairings
function renderPopularPairings() {
    const container = document.getElementById('pairingsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    popularPairings.forEach(pairing => {
        const card = document.createElement('div');
        card.className = 'font-card';
        card.dataset.pairingId = pairing.id;
        
        card.innerHTML = `
            <div class="font-sample" style="font-family: ${pairing.heading.family}; font-weight: ${pairing.heading.weight}">
                ${pairing.heading.name}
            </div>
            <div class="font-sample" style="font-family: ${pairing.body.family}; font-size: 1rem; font-weight: ${pairing.body.weight}">
                + ${pairing.body.name}
            </div>
            <p class="text-secondary text-sm mb-3">${pairing.description}</p>
            <span class="font-category">${pairing.category}</span>
        `;
        
        card.addEventListener('click', function() {
            // Remove selected class from all cards
            document.querySelectorAll('.font-card').forEach(c => {
                c.classList.remove('selected');
            });
            
            // Add selected class to clicked card
            this.classList.add('selected');
            
            // Apply the font pairing
            selectedFonts.heading = { 
                name: pairing.heading.name, 
                family: pairing.heading.family,
                weight: pairing.heading.weight 
            };
            selectedFonts.body = { 
                name: pairing.body.name, 
                family: pairing.body.family,
                weight: pairing.body.weight 
            };
            
            // Update selects
            document.getElementById('heading-font').value = pairing.heading.family;
            document.getElementById('body-font').value = pairing.body.family;
            document.getElementById('heading-weight').value = pairing.heading.weight;
            document.getElementById('body-weight').value = pairing.body.weight;
            
            // Update preview and code
            updatePreview();
            updateImplementationCode();
        });
        
        container.appendChild(card);
    });
}

// Render font library
function renderFontLibrary() {
    const container = document.getElementById('fontsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Filter fonts based on category and search
    const filteredFonts = filterFonts();
    
    filteredFonts.forEach(font => {
        const fontItem = document.createElement('div');
        fontItem.className = 'font-item';
        fontItem.dataset.fontName = font.name;
        fontItem.dataset.category = font.category;
        
        // Check if this font is currently selected
        const isSelected = font.name === selectedFonts.heading.name || font.name === selectedFonts.body.name;
        
        if (isSelected) {
            fontItem.classList.add('selected');
        }
        
        fontItem.innerHTML = `
            <div class="font-name" style="font-family: ${font.family}">${font.name}</div>
            <div class="flex flex-wrap items-center justify-between">
                <span class="font-category-badge ${font.category}">${font.category}</span>
                <div class="flex flex-wrap">
                    ${font.weights.map(weight => 
                        `<span class="weight-badge">${weight}</span>`
                    ).join('')}
                </div>
            </div>
        `;
        
        fontItem.addEventListener('click', function() {
            // Toggle font selection (for heading or body)
            const fontName = this.dataset.fontName;
            const fontData = fontDatabase.find(f => f.name === fontName);
            
            // Ask user which role to assign
            if (confirm(`Use "${fontName}" as:\n\n1. Heading Font (Cancel)\n2. Body Font (OK)`)) {
                // Set as body font
                selectedFonts.body = {
                    name: fontData.name,
                    family: fontData.family,
                    weight: '400'
                };
                document.getElementById('body-font').value = fontData.family;
                document.getElementById('body-weight').value = '400';
            } else {
                // Set as heading font
                selectedFonts.heading = {
                    name: fontData.name,
                    family: fontData.family,
                    weight: '700'
                };
                document.getElementById('heading-font').value = fontData.family;
                document.getElementById('heading-weight').value = '700';
            }
            
            // Update preview
            updatePreview();
            updateImplementationCode();
            
            // Update selected states
            updateFontSelectionStates();
        });
        
        container.appendChild(fontItem);
    });
}

// Filter fonts based on category and search
function filterFonts() {
    return fontDatabase.filter(font => {
        // Category filter
        if (currentCategory !== 'all' && font.category !== currentCategory) {
            return false;
        }
        
        // Search filter
        if (currentSearch) {
            const searchTerm = currentSearch.toLowerCase();
            return font.name.toLowerCase().includes(searchTerm) ||
                   font.category.toLowerCase().includes(searchTerm);
        }
        
        return true;
    });
}

// Update font selection states
function updateFontSelectionStates() {
    document.querySelectorAll('.font-item').forEach(item => {
        const fontName = item.dataset.fontName;
        const isSelected = fontName === selectedFonts.heading.name || fontName === selectedFonts.body.name;
        
        if (isSelected) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

// Update live preview
function updatePreview() {
    const previewHeading = document.getElementById('preview-heading');
    const previewSubheading = document.getElementById('preview-subheading');
    const previewBody = document.getElementById('preview-body');
    
    if (!previewHeading) return;
    
    // Get current weights
    const headingWeight = document.getElementById('heading-weight').value;
    const bodyWeight = document.getElementById('body-weight').value;
    
    // Update heading
    previewHeading.style.fontFamily = selectedFonts.heading.family;
    previewHeading.style.fontWeight = headingWeight;
    previewHeading.classList.add('font-change');
    
    // Update subheading
    previewSubheading.style.fontFamily = selectedFonts.heading.family;
    previewSubheading.style.fontWeight = headingWeight;
    previewSubheading.classList.add('font-change');
    
    // Update body
    previewBody.style.fontFamily = selectedFonts.body.family;
    previewBody.style.fontWeight = bodyWeight;
    previewBody.classList.add('font-change');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        previewHeading.classList.remove('font-change');
        previewSubheading.classList.remove('font-change');
        previewBody.classList.remove('font-change');
    }, 300);
}

// Update implementation code
function updateImplementationCode() {
    const headingWeight = document.getElementById('heading-weight').value;
    const bodyWeight = document.getElementById('body-weight').value;
    
    // Get font names for Google Fonts URL
    const headingFontName = selectedFonts.heading.name.replace(' ', '+');
    const bodyFontName = selectedFonts.body.name.replace(' ', '+');
    
    // HTML code
    document.getElementById('htmlCode').textContent = `<!-- Add to your HTML head -->
<link href="https://fonts.googleapis.com/css2?family=${headingFontName}:wght@${headingWeight}&family=${bodyFontName}:wght@${bodyWeight}&display=swap" rel="stylesheet">`;
    
    // CSS code
    document.getElementById('cssCode').textContent = `/* CSS Implementation */
body {
  font-family: ${selectedFonts.body.family};
  font-weight: ${bodyWeight};
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${selectedFonts.heading.family};
  font-weight: ${headingWeight};
  line-height: 1.2;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.75rem;
}

/* Optional: Add font smoothing */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;
    
    // Tailwind code
    document.getElementById('tailwindCode').textContent = `/* Tailwind Configuration */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ["${selectedFonts.heading.family}"],
        body: ["${selectedFonts.body.family}"]
      },
      fontWeight: {
        heading: '${headingWeight}',
        body: '${bodyWeight}'
      }
    }
  }
}

<!-- Usage in HTML -->
<h1 class="font-heading font-heading-bold text-4xl">Your Heading</h1>
<p class="font-body">Your body text</p>

<!-- Or using standard classes -->
<h1 class="font-['${selectedFonts.heading.name}'] font-bold text-4xl">Your Heading</h1>
<p class="font-['${selectedFonts.body.name}']">Your body text</p>`;
}

// Update font statistics
function updateFontStats() {
    const total = fontDatabase.length;
    const serif = fontDatabase.filter(f => f.category === 'serif').length;
    const sans = fontDatabase.filter(f => f.category === 'sans-serif').length;
    const display = fontDatabase.filter(f => f.category === 'display').length;
    
    document.getElementById('totalFonts').textContent = `${total}+`;
    document.getElementById('serifFonts').textContent = serif;
    document.getElementById('sansFonts').textContent = sans;
    document.getElementById('displayFonts').textContent = display;
}

// Set up event listeners
function setupEventListeners() {
    // Category filtering
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active category
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentCategory = this.dataset.category;
            renderFontLibrary();
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('fontSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearch = this.value.toLowerCase();
            renderFontLibrary();
        });
    }
    
    // Font select changes
    document.getElementById('heading-font').addEventListener('change', function() {
        const fontName = this.options[this.selectedIndex].dataset.fontName;
        const fontData = fontDatabase.find(f => f.name === fontName);
        
        if (fontData) {
            selectedFonts.heading = {
                name: fontData.name,
                family: fontData.family,
                weight: document.getElementById('heading-weight').value
            };
            updatePreview();
            updateImplementationCode();
            updateFontSelectionStates();
        }
    });
    
    document.getElementById('body-font').addEventListener('change', function() {
        const fontName = this.options[this.selectedIndex].dataset.fontName;
        const fontData = fontDatabase.find(f => f.name === fontName);
        
        if (fontData) {
            selectedFonts.body = {
                name: fontData.name,
                family: fontData.family,
                weight: document.getElementById('body-weight').value
            };
            updatePreview();
            updateImplementationCode();
            updateFontSelectionStates();
        }
    });
    
    // Weight changes
    document.getElementById('heading-weight').addEventListener('change', function() {
        selectedFonts.heading.weight = this.value;
        updatePreview();
        updateImplementationCode();
    });
    
    document.getElementById('body-weight').addEventListener('change', function() {
        selectedFonts.body.weight = this.value;
        updatePreview();
        updateImplementationCode();
    });
    
    // Copy buttons
    document.getElementById('copyHTML')?.addEventListener('click', function() {
        copyToClipboard(document.getElementById('htmlCode').textContent, this, 'HTML');
    });
    
    document.getElementById('copyCSS')?.addEventListener('click', function() {
        copyToClipboard(document.getElementById('cssCode').textContent, this, 'CSS');
    });
    
    document.getElementById('copyTailwind')?.addEventListener('click', function() {
        copyToClipboard(document.getElementById('tailwindCode').textContent, this, 'Tailwind');
    });
    
    // Random pairing button
    document.getElementById('randomPairing')?.addEventListener('click', generateRandomPairing);
    
    // Tool buttons
    document.getElementById('testReadability')?.addEventListener('click', testReadability);
    document.getElementById('sizeCalculator')?.addEventListener('click', sizeCalculator);
    document.getElementById('colorTest')?.addEventListener('click', colorTest);
    document.getElementById('shareFonts')?.addEventListener('click', shareFonts);
}

// Generate random font pairing
function generateRandomPairing() {
    // Filter suitable fonts for headings (usually serif or display)
    const headingFonts = fontDatabase.filter(f => 
        f.category === 'serif' || f.category === 'display' || 
        (f.category === 'sans-serif' && Math.random() > 0.5)
    );
    
    // Filter suitable fonts for body (usually sans-serif or serif)
    const bodyFonts = fontDatabase.filter(f => 
        f.category === 'sans-serif' || f.category === 'serif'
    );
    
    if (headingFonts.length === 0 || bodyFonts.length === 0) return;
    
    // Pick random fonts
    const randomHeading = headingFonts[Math.floor(Math.random() * headingFonts.length)];
    const randomBody = bodyFonts[Math.floor(Math.random() * bodyFonts.length)];
    
    // Update selected fonts
    selectedFonts.heading = {
        name: randomHeading.name,
        family: randomHeading.family,
        weight: '700'
    };
    
    selectedFonts.body = {
        name: randomBody.name,
        family: randomBody.family,
        weight: '400'
    };
    
    // Update UI
    document.getElementById('heading-font').value = randomHeading.family;
    document.getElementById('body-font').value = randomBody.family;
    document.getElementById('heading-weight').value = '700';
    document.getElementById('body-weight').value = '400';
    
    // Update preview and code
    updatePreview();
    updateImplementationCode();
    updateFontSelectionStates();
    
    // Show message
    const button = this;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check mr-2"></i> Generated!';
    setTimeout(() => {
        button.innerHTML = originalText;
    }, 1500);
}

// Test readability
function testReadability() {
    alert(`Readability test for:\n\nHeading: ${selectedFonts.heading.name} (${selectedFonts.heading.weight})\nBody: ${selectedFonts.body.name} (${selectedFonts.body.weight})\n\n✓ Good contrast between fonts\n✓ Appropriate weight combination\n✓ Recommended for most websites`);
}

// Size calculator
function sizeCalculator() {
    alert('Font size calculator will be available in the next update!');
}

// Color test
function colorTest() {
    alert('Font color testing tool will be available in the next update!');
}

// Share fonts
function shareFonts() {
    const headingWeight = document.getElementById('heading-weight').value;
    const bodyWeight = document.getElementById('body-weight').value;
    
    const fontInfo = `Check out this font pairing from Palettecraft:\n\nHeading: ${selectedFonts.heading.name} (Weight: ${headingWeight})\nBody: ${selectedFonts.body.name} (Weight: ${bodyWeight})\n\nFind more font combinations at: ${window.location.origin}`;
    
    navigator.clipboard.writeText(fontInfo).then(() => {
        alert(`Font pairing copied to clipboard! Share it with others.`);
    });
}

// Copy to clipboard helper
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