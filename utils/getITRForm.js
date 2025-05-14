export const getITRForm = (user) => {
    const {
        entityType,
        isResident, // Now expects "Yes" / "No"


        incomeSources,

        turnover,
        numberOfHouseProperties,
        agriculturalIncome,

        usesPresumptiveScheme,
        isDirectorInCompany,
        holdsUnlistedShares,
        hasForeignAssets,
        isPartnerInFirm
    } = user;

    // Entity-based returns
    const itr7Entities = [
        "Trust", "NGO", "Political Party", "Research Body", "Educational Institution", "Investment Fund"
    ];
    if (itr7Entities.includes(entityType)) return "ITR 7";
    if (entityType === "Company") return "ITR 6";
    if (["Firm", "LLP"].includes(entityType)) return "ITR 5";
    if (!["Individual", "HUF"].includes(entityType)) return "Unsupported Entity";


    // Non-resident individuals
    if (isResident.value === "No") {
        if (incomeSources.includes("Business Income") || incomeSources.includes("Professional Income")) return "ITR 3";
        return "ITR 2";
    }

    // Business or profession income
    if (incomeSources.includes("Business Income") || incomeSources.includes("Professional Income")) {
        const specialDisclosures = [
            "Crypto Currency",
            "Clubbing Income",
            "Lottery / Gambling",
            "Dividend Income > 10L",
            "ESOP from Foreign Company",
            "Freelance Export Income"
        ];
        const simplePresumptive = usesPresumptiveScheme &&
            turnover <= 5000000 &&
            !isPartnerInFirm &&
            !isDirectorInCompany &&
            !holdsUnlistedShares &&
            !hasForeignAssets &&
            !incomeSources.some(source => specialDisclosures.includes(source));
        return simplePresumptive ? "ITR 4" : "ITR 3";
    }

    // Partner in firm
    if (isPartnerInFirm) return "ITR 3";

    // Special disclosures → ITR 2
    const specialDisclosures = [
        "Crypto Currency",
        "Clubbing Income",
        "Lottery / Gambling",
        "Dividend Income > 10L",
        "ESOP from Foreign Company",
        "Freelance Export Income"
    ];
    const needsITR2 = (
        isDirectorInCompany ||
        holdsUnlistedShares ||
        hasForeignAssets ||
        incomeSources.some(source => specialDisclosures.includes(source))
    );
    if (needsITR2) return "ITR 2";

    // Capital gains, foreign, >1 house, agri > 5K
    if (
        incomeSources.includes("Capital Gains") ||
        incomeSources.includes("Foreign Income") ||
        numberOfHouseProperties > 1 ||
        agriculturalIncome > 5000
    ) return "ITR 2";

    // Salary + interest + 1 house + agri <= 5K → ITR-1
    const basicSources = ["Salary", "House Property", "Interest Income"];
    const basicIncomeOnly = incomeSources.every(source => basicSources.includes(source));
    if (
        incomeSources.includes("Salary") &&
        basicIncomeOnly &&
        turnover === 0 &&
        agriculturalIncome <= 5000
    ) return "ITR 1";

    // Default fallback
    return "ITR 2";
};
