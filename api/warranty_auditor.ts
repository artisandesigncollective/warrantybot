/**
 * WarrantyBot: Magnuson-Moss Violation Auditor
 * Detects illegal warranty exclusions (e.g., "Warranty Void if Seal Broken").
 */

export interface WarrantyClaim {
  exclusionReason: string;
  itemAgeMonths: number;
  thirdPartyRepair: boolean;
}

export function auditWarranty(claim: WarrantyClaim) {
  const illegalReasons = ["seal broken", "third party repair", "non-oem parts"];
  const isViolation = illegalReasons.some(r => claim.exclusionReason.toLowerCase().includes(r));

  return {
    isViolation,
    legalCode: "Magnuson-Moss Warranty Act (15 U.S.C. § 2302(c))",
    recommendation: isViolation ? "Generate Federal Warranty Enforcement Demand" : "Review manufacturer manual for specific terms"
  };
}
