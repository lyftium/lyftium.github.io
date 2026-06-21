# Lottie Logo Animation Guide

## Overview
This guide explains how to create and integrate a Lottie animation for the LYFTIUM logo.

## Tools Required

### Option 1: Adobe After Effects + LottieFiles Plugin (Recommended)
1. Install Adobe After Effects
2. Install LottieFiles plugin: https://aescripts.com/learn/lottiefiles/
3. Create your logo animation in After Effects
4. Export as Lottie JSON using the plugin

### Option 2: Online Tools
- **LottieFiles**: https://lottiefiles.com/create
- **Haiku Animator**: https://www.haiku.ai/
- **Rive**: https://rive.app/

## Animation Specifications

### File Location
```
/Users/pierrehegelen/lyftium-website/assets/animations/logo-animation.json
```

### Recommended Animation Properties
- **Duration**: 2-3 seconds
- **Loop**: Yes (infinite loop)
- **Frame Rate**: 60fps
- **Size**: 200x200px (scalable)
- **Colors**: Match LYFTIUM brand colors (#0891b2, #6366f1)

### Animation Concept Ideas
1. **Floating Logo**: Logo gently floats up and down with subtle rotation
2. **Pulse Effect**: Logo pulses with gradient border glow
3. **Particle Trail**: Logo appears with particle trail effect
4. **Morphing**: Logo morphs from simple to detailed version
5. **Tech Reveal**: Logo reveals itself with digital/tech effect

## Integration Steps

### 1. Create the Animation
Use one of the tools above to create your logo animation.

### 2. Export as JSON
Export the animation as a JSON file.

### 3. Place in Assets Directory
Save the file to:
```
/Users/pierrehegelen/lyftium-website/assets/animations/logo-animation.json
```

### 4. Update HTML
The HTML already has the Lottie integration code. Uncomment and update:

```html
<!-- Uncomment in hero section -->
<div id="lottie-logo" class="lottie-logo-container"></div>
```

### 5. Update JavaScript
Uncomment and update the Lottie initialization code:

```javascript
function initLottieLogo() {
    const lottieContainer = document.getElementById('lottie-logo');
    if (!lottieContainer) return;

    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/logo-animation.json'
    });
}
```

### 6. Remove CSS Animation
Once Lottie is integrated, remove the temporary CSS animation:
```css
/* Remove these styles */
.css-logo-animation
@keyframes logoFloat
@keyframes logoPulse
@keyframes gradientBorder
```

## Performance Considerations

- Keep file size under 100KB for optimal loading
- Use SVG renderer for best quality
- Optimize animation complexity
- Test on mobile devices

## Testing

1. Test animation on different browsers
2. Verify smooth playback on mobile
3. Check loading performance
4. Ensure animation doesn't block page load

## Resources

- LottieFiles Documentation: https://docs.lottiefiles.com/
- Lottie GitHub: https://github.com/airbnb/lottie-web
- Animation Inspiration: https://lottiefiles.com/animations
