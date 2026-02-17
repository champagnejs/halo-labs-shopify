# Halo Labs Theme - Quick Start Guide

## 🚀 5-Minute Setup

### 1. Upload Files to Shopify
```
Go to: Online Store → Themes → Edit Code

Upload to Sections folder:
├─ hero-halo.liquid
├─ category-grid.liquid
├─ featured-products.liquid
├─ halo-protocol.liquid
└─ trust-badges.liquid

Upload to Snippets folder:
├─ category-card.liquid
└─ product-card-custom.liquid

Upload to Templates folder:
└─ product.custom.liquid

Upload to Assets folder:
├─ halo-custom.css
├─ halo-animations.js
└─ payment-integration.js
```

### 2. Add Sections to Homepage
```
Go to: Online Store → Themes → Customize

Click "Add section" and add in this order:
1. Hero Halo
2. Category Grid
3. Featured Products
4. Halo Protocol
5. Trust Badges

Save and publish!
```

## 🎨 Quick Customization

### Change Brand Colors
Edit: `assets/halo-custom.css` (lines 17-21)
```css
--halo-accent: #00F0FF;  /* Change this to your accent color */
```

### Update Category Links
Edit in Theme Customizer:
```
Customize → Category Grid Section
→ Update each category's link to your collection URL
```

### Add Featured Products
Edit in Theme Customizer:
```
Customize → Featured Products Section
→ Add Product blocks
→ Select products from dropdown
```

## 📋 Checklist

Before Launch:
- [ ] All sections added to homepage
- [ ] Category links point to real collections
- [ ] Products added and images uploaded
- [ ] Custom product template assigned to key products
- [ ] Test on mobile device
- [ ] Verify all links work
- [ ] Add legal disclaimers (Terms, Privacy Policy)

## 🆘 Common Issues

**Sections not appearing?**
→ Check file names match exactly
→ Refresh theme customizer

**CSS not loading?**
→ Verify halo-custom.css is in Assets folder
→ Clear browser cache

**JavaScript errors?**
→ Check browser console (F12)
→ Verify .js files uploaded correctly

## 📞 Need Help?

See full documentation in README.md

---

**Quick Links:**
- Color Scheme: See lines 17-21 in halo-custom.css
- Animations: See lines 78-94 in halo-custom.css
- Payment Integration: See payment-integration.js (placeholder)
