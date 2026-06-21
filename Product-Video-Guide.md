# Product Video Guide

## Overview
This guide explains how to create and integrate a 15-second product demo video for the LYFTIUM hero section.

## Video Specifications

### File Location
```
/Users/pierrehegelen/lyftium-website/assets/videos/product-demo.mp4
```

### Technical Requirements
- **Duration**: 15 seconds (±2 seconds acceptable)
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
- **Frame Rate**: 30fps or 60fps
- **Bitrate**: 5-10 Mbps (for 1080p)
- **File Size**: Under 5MB for optimal loading
- **Aspect Ratio**: 16:9

### Poster Image
Create a poster image for the video thumbnail:
```
/Users/pierrehegelen/lyftium-website/assets/images/video-poster.jpg
```
- **Format**: JPG or PNG
- **Resolution**: 1920x1080
- **File Size**: Under 200KB

## Video Content Ideas

### Option 1: Problem-Solution Format
1. **0-3s**: Show business problem (manual work, inefficiency)
2. **3-7s**: Introduce LYFTIUM AI solution
3. **7-12s**: Show automation in action
4. **12-15s**: Results (time saved, cost reduction)

### Option 2: Feature Showcase
1. **0-4s**: Logo and tagline
2. **4-9s**: Quick feature highlights (3-4 key features)
3. **9-12s**: UI demonstration
4. **12-15s**: CTA (Start Free Trial)

### Option 3: Testimonial Style
1. **0-3s**: Client testimonial quote
2. **3-8s**: Show results achieved
3. **8-12s**: How LYFTIUM made it possible
4. **12-15s**: CTA

## Production Tools

### Video Creation
- **Adobe Premiere Pro**: Professional editing
- **Final Cut Pro**: Mac-based editing
- **DaVinci Resolve**: Free professional option
- **Camtasia**: Screen recording and editing
- **Loom**: Quick screen recordings

### Animation/Motion Graphics
- **Adobe After Effects**: Professional motion graphics
- **Canva**: Simple video creation
- **Vyond**: Animated explainer videos
- **Powtoon**: Animated presentations

### Stock Footage
- **Pexels**: Free stock videos
- **Pixabay**: Free stock footage
- **Storyblocks**: Premium stock footage
- **Envato Elements**: Premium assets

## Integration Steps

### 1. Create the Video
Use one of the tools above to create your 15-second product demo.

### 2. Optimize for Web
- Compress video using Handbrake or similar tool
- Ensure file size is under 5MB
- Test on mobile devices

### 3. Create Poster Image
Create an attractive thumbnail for the video.

### 4. Place in Assets Directory
Save files to:
```
/Users/pierrehegelen/lyftium-website/assets/videos/product-demo.mp4
/Users/pierrehegelen/lyftium-website/assets/images/video-poster.jpg
```

### 5. Update HTML
The HTML already has the video integration code. Uncomment and update:

```html
<!-- Uncomment in hero section -->
<div class="product-video-container">
    <video id="product-video" poster="assets/images/video-poster.jpg" playsinline muted loop>
        <source src="assets/videos/product-demo.mp4" type="video/mp4">
    </video>
    <button class="video-play-button" onclick="playVideo()">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z"/>
        </svg>
    </button>
</div>
```

### 6. Update JavaScript
Uncomment and update the video control code:

```javascript
function playVideo() {
    const video = document.getElementById('product-video');
    if (!video) return;
    
    video.muted = false;
    video.play();
    
    // Hide play button
    const playButton = document.querySelector('.video-play-button');
    if (playButton) {
        playButton.style.display = 'none';
    }
}
```

### 7. Update CSS
The CSS is already in place. Adjust if needed:
```css
.product-video-container {
    position: relative;
    max-width: 600px;
    margin: 2rem auto;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.product-video-container video {
    width: 100%;
    display: block;
}

.video-play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(8, 145, 178, 0.9);
    border: none;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.video-play-button:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgba(8, 145, 178, 1);
}
```

## Performance Optimization

### Compression Settings (Handbrake)
- **Video Codec**: H.264 (x264)
- **Quality**: RF 20-22
- **Preset**: Fast
- **Tune**: Film
- **Audio**: None (mute by default)

### Lazy Loading
Consider lazy loading the video:
```html
<video loading="lazy" poster="assets/images/video-poster.jpg">
```

### Autoplay Considerations
- Muted autoplay is supported in most browsers
- Consider user preference (don't autoplay on mobile)
- Add user interaction trigger

## Testing

1. Test video playback on different browsers
2. Verify loading performance
3. Test on mobile devices
4. Check poster image display
5. Verify play button functionality
6. Test with slow connections

## Accessibility

- Add captions/subtitles if possible
- Ensure keyboard navigation works
- Provide alternative text
- Consider audio-only users

## Resources

- **Video Compression**: https://handbrake.fr/
- **Free Stock Videos**: https://www.pexels.com/videos/
- **Video Best Practices**: https://web.dev/fast-autoplay-with-best-efforts/
- **Web Video Optimization**: https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs
