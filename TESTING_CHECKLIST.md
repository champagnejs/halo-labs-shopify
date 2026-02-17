# Halo Labs Theme Testing Checklist

## Pre-Deployment Testing

### ✅ File Upload Verification
- [ ] All 5 section files uploaded to Sections folder
- [ ] All 2 snippet files uploaded to Snippets folder  
- [ ] Product template uploaded to Templates folder
- [ ] CSS file uploaded to Assets folder
- [ ] 2 JavaScript files uploaded to Assets folder
- [ ] No upload errors shown in Shopify

### ✅ Section Functionality
- [ ] Hero Halo section appears in theme customizer
- [ ] Category Grid section appears in theme customizer
- [ ] Featured Products section appears in theme customizer
- [ ] Halo Protocol section appears in theme customizer
- [ ] Trust Badges section appears in theme customizer
- [ ] All sections can be added to pages
- [ ] All sections can be reordered
- [ ] All sections can be deleted/re-added

### ✅ Schema Settings Work
#### Hero Halo
- [ ] Can edit heading text
- [ ] Can edit subheading text
- [ ] Can edit button 1 text and link
- [ ] Can edit button 2 text and link
- [ ] Changes reflect in preview

#### Category Grid
- [ ] Can edit section heading
- [ ] Can edit all 4 category titles
- [ ] Can edit all 4 category taglines
- [ ] Can edit all 4 category icons
- [ ] Can edit all 4 category links
- [ ] Changes reflect in preview

#### Featured Products
- [ ] Can edit section heading
- [ ] Can add product blocks
- [ ] Can select products from dropdown
- [ ] Can remove product blocks
- [ ] Selected products display correctly

#### Halo Protocol
- [ ] Can edit section heading
- [ ] Can edit all 3 column icons
- [ ] Can edit all 3 column titles
- [ ] Can edit all 3 column descriptions
- [ ] Changes reflect in preview

#### Trust Badges
- [ ] Can edit all 4 badge icons
- [ ] Can edit all 4 badge texts
- [ ] Can hide badges by clearing text
- [ ] Changes reflect in preview

### ✅ Visual Design
- [ ] Halo glow animation visible on hero section
- [ ] Halo glow pulses smoothly (3-second duration)
- [ ] Electric blue color (#00F0FF) appears correctly
- [ ] White backgrounds are clean and crisp
- [ ] Text is readable on all backgrounds
- [ ] Category cards have hover effects
- [ ] Product cards have hover effects
- [ ] Blue glow appears on hover
- [ ] Buttons have hover states
- [ ] Colors match brand guidelines

### ✅ Responsive Design
#### Mobile (< 768px)
- [ ] Hero section displays properly
- [ ] Category grid stacks vertically (1 column)
- [ ] Featured products scroll horizontally
- [ ] Halo Protocol stacks vertically (1 column)
- [ ] Trust badges stack vertically
- [ ] Text is readable (not too small)
- [ ] Buttons are touch-friendly (min 44px)
- [ ] No horizontal scrolling issues
- [ ] Images scale appropriately

#### Tablet (768px - 1024px)
- [ ] All sections display properly
- [ ] Category grid shows 2 columns
- [ ] Spacing looks appropriate
- [ ] No layout breaking issues

#### Desktop (> 1024px)
- [ ] All sections centered and max-width applied
- [ ] Category grid shows 2x2 layout
- [ ] Featured products show grid layout
- [ ] Halo glow is appropriate size
- [ ] Everything looks professional

### ✅ Animation & Interaction
- [ ] Halo pulse animation runs smoothly
- [ ] No janky or stuttering animations
- [ ] Hover effects are smooth (0.3s transition)
- [ ] Category cards lift on hover
- [ ] Product cards lift on hover
- [ ] Buttons transform on hover
- [ ] Blue glow effect appears on hover
- [ ] Animations respect reduced motion preference (if browser supports)

### ✅ Accessibility
- [ ] All images have alt text
- [ ] Buttons have proper labels
- [ ] Can navigate with keyboard (Tab key)
- [ ] Focus indicators visible when using keyboard
- [ ] Color contrast is sufficient
- [ ] ARIA labels present on decorative elements
- [ ] Screen reader friendly (test with screen reader if possible)

### ✅ Performance
- [ ] No JavaScript errors in console (F12 → Console)
- [ ] CSS file loads successfully
- [ ] JS files load successfully
- [ ] No 404 errors for assets
- [ ] Page loads in reasonable time (< 3 seconds)
- [ ] Animations are GPU-accelerated (check performance monitor)
- [ ] Images lazy load

### ✅ Links & Navigation
- [ ] Hero buttons link to correct pages
- [ ] Category cards link to correct collections
- [ ] Product cards link to correct product pages
- [ ] "View Product" buttons work
- [ ] No broken links (404 errors)

### ✅ Custom Product Template
- [ ] Can assign custom template to products
- [ ] Product template displays correctly
- [ ] All 4 tabs are visible
- [ ] Tab switching works correctly
- [ ] Product information displays
- [ ] Product images display
- [ ] Variant selector works (if product has variants)
- [ ] Payment buttons are visible (placeholder)
- [ ] Research disclaimer is prominent
- [ ] Mobile responsive layout works

### ✅ Browser Compatibility
Test in:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (desktop)
- [ ] Safari (iOS)
- [ ] Chrome (Android)

### ✅ Code Quality
- [ ] No console errors
- [ ] No console warnings (or only acceptable ones)
- [ ] Liquid syntax is valid
- [ ] JSON schema is valid
- [ ] CSS is valid
- [ ] JavaScript is valid

## Post-Deployment Verification

### ✅ Live Site Check
- [ ] All sections appear on live site
- [ ] Animations work on live site
- [ ] Images load correctly
- [ ] Mobile responsive on real devices
- [ ] Fast page load times
- [ ] No broken links

### ✅ SEO & Analytics
- [ ] Meta descriptions added
- [ ] Page titles are appropriate
- [ ] Analytics tracking installed (if needed)
- [ ] Facebook Pixel installed (if needed)

### ✅ Legal & Compliance
- [ ] Research disclaimer visible on product pages
- [ ] Terms & Conditions page exists
- [ ] Privacy Policy page exists
- [ ] Legal disclaimers appropriate for jurisdiction
- [ ] Age verification (if required)

## Issues Log

Use this section to track any issues found during testing:

| Issue # | Description | Severity | Status | Notes |
|---------|-------------|----------|--------|-------|
| 1       |             |          |        |       |
| 2       |             |          |        |       |
| 3       |             |          |        |       |

**Severity Levels:**
- 🔴 Critical: Blocks launch, must fix
- 🟡 High: Should fix before launch
- 🟢 Medium: Can fix after launch
- ⚪ Low: Nice to have

---

## Sign-Off

Testing completed by: ________________
Date: ________________
All critical issues resolved: [ ] Yes [ ] No
Ready for launch: [ ] Yes [ ] No

Notes:
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
