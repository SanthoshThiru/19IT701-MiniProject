// Risk Policy
// Assesses risk level for credential access

export const RISK_LEVELS = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

/**
 * Assess risk level for a password
 */
export function assessRisk(passwordData) {
  // High risk: Financial services, payment platforms
  const highRiskDomains = ['paypal', 'bank', 'financial', 'credit', 'payment'];
  const domain = passwordData.name?.toLowerCase() || '';

  if (highRiskDomains.some(riskDomain => domain.includes(riskDomain))) {
    return RISK_LEVELS.HIGH;
  }

  // Medium risk: Social media, email
  const mediumRiskDomains = ['facebook', 'twitter', 'gmail', 'email', 'social'];
  if (mediumRiskDomains.some(riskDomain => domain.includes(riskDomain))) {
    return RISK_LEVELS.MEDIUM;
  }

  // Low risk: Everything else
  return RISK_LEVELS.LOW;
}

/**
 * Check if risk level requires confirmation
 */
export function requiresConfirmation(riskLevel) {
  return riskLevel === RISK_LEVELS.HIGH;
}




