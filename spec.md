# Viaana Skin Care Website

## Current State
New project. No existing frontend or backend pages.

## Requested Changes (Diff)

### Add
- Full single-page website for Viaana Skin Care clinic
- Sticky navigation bar with smooth scroll links
- Hero section: animated gradient background, floating particle effects, clinic name, tagline, CTA buttons (Call, Directions, Book Appointment)
- Stats section: 10,000+ patients, 10+ years experience, 4.9 star rating, 463 reviews
- About/Doctor section: elegant card for Dr. Komal Patel, MD Dermatologist, bio text
- Services section: Skin Therapy, Hair Therapy, Advanced Technology, Personalized Care (with icons)
- Reviews section: 3 customer reviews with star ratings, animated cards
- Ratings breakdown bar chart (5-star to 1-star distribution)
- Contact/Info section: address, phone, hours, map link button
- Floating "Book Appointment" button (fixed position)
- Footer with clinic info and social links placeholders
- Intersection Observer fade-in animations on scroll
- Fully responsive mobile-first design

### Modify
- None

### Remove
- None

## Implementation Plan
1. Build single App.tsx with all sections as components
2. Implement sticky navbar with smooth scroll
3. Hero: CSS animated gradient + particle effect using canvas or CSS keyframes
4. Stats counter section with animated numbers
5. Doctor card with gradient placeholder image
6. Services grid with SVG icons
7. Reviews cards with star ratings
8. Ratings bar chart (pure CSS/Tailwind)
9. Contact section with formatted address, phone, hours
10. Floating CTA button
11. Footer
12. Intersection Observer hook for fade-in animations
