// Defense Click Policy
// Checks DOM safety before allowing password reveal

/**
 * Check if DOM is safe (no clickjacking attempts)
 */
export function checkDOMSafety() {
  // Check for iframes
  if (window.self !== window.top) {
    return { safe: false, reason: 'Page is inside an iframe' };
  }

  // Check for overlay elements that might be clickjacking
  const body = document.body;
  if (!body) {
    return { safe: false, reason: 'Document body not found' };
  }

  // Check for suspicious pointer-events manipulation
  const computedStyle = window.getComputedStyle(body);
  if (computedStyle.pointerEvents === 'none') {
    return { safe: false, reason: 'Suspicious pointer-events manipulation detected' };
  }

  // Check if document is focused
  if (!document.hasFocus()) {
    return { safe: false, reason: 'Document does not have focus' };
  }

  // Check for suspicious opacity manipulation
  const bodyOpacity = parseFloat(computedStyle.opacity);
  if (bodyOpacity < 0.1) {
    return { safe: false, reason: 'Suspicious opacity manipulation detected' };
  }

  // Check for multiple layers that might indicate overlay attack
  const allElements = document.querySelectorAll('*');
  let suspiciousOverlayCount = 0;
  
  allElements.forEach(el => {
    const style = window.getComputedStyle(el);
    const zIndex = parseInt(style.zIndex, 10);
    if (zIndex > 9999 && style.position !== 'static') {
      suspiciousOverlayCount++;
    }
  });

  if (suspiciousOverlayCount > 5) {
    return { safe: false, reason: 'Too many high z-index overlay elements detected' };
  }

  return { safe: true };
}




