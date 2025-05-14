export const itrFormsData = {
    "ITR 1": {
        formNumber: "ITR-1 (Sahaj)",
        description: "ITR-1 is for Resident individuals who have income from salary, pension, one house property, and other sources like interest income, and their total income does not exceed ₹50 lakh. This is the simplest ITR form and is primarily for salaried individuals.",
        forWho: [
            "Resident individuals with total income up to ₹50 lakh",
            "Income from salary/pension, one house property, and other sources (excluding lottery and racehorse winnings)",
            "Agricultural income up to ₹5,000"
        ],
        whoNotTo: [
            "Individuals with income over ₹50 lakh",
            "Income from more than one house property, capital gains, or business/profession",
            "Directors in a company or those holding unlisted equity shares",
            "Non-residents or RNORs",
            "Individuals with foreign assets or foreign income"
        ],
        documents: [
            "PAN and Aadhaar cards",
            "Form 16 from employer",
            "Salary slips",
            "Interest certificates from banks/post office",
            "Form 26AS and Annual Information Statement (AIS)",
            "Investment proofs (e.g., LIC, PPF, ELSS)",
            "Rent receipts (if claiming HRA)"
        ]
    },
    "ITR 2": {
        formNumber: "ITR-2",
        description: "ITR-2 is for individuals and Hindu Undivided Families (HUFs) who do not have income from business or profession but have income from salary, house property, capital gains, or other sources, or foreign assets/income. This form is typically used by individuals with more complex income structures than those using ITR-1.",
        forWho: [
            "Individuals and HUFs not having income from business or profession",
            "Income from salary/pension, multiple house properties, capital gains, foreign assets/income, or agricultural income over ₹5,000",
            "Directors in a company or those holding unlisted equity shares",
            "Non-residents or RNORs"
        ],
        whoNotTo: [
            "Individuals with income from business or profession"
        ],
        documents: [
            "All documents listed under ITR-1",
            "Capital gains statements (e.g., sale of property, mutual funds, stocks)",
            "Foreign income and asset details",
            "Details of unlisted equity shares",
            "Dividend income statements"
        ]
    },
    "ITR 3": {
        formNumber: "ITR-3",
        description: "ITR-3 is for individuals and HUFs with income from business or profession, including those who are partners in a firm. It also applies to those earning income from salary/pension, house property, capital gains, or other sources. It is a more complex form for taxpayers involved in business or self-employment.",
        forWho: [
            "Individuals and HUFs with income from business or profession",
            "Partners in a firm",
            "Directors in a company or those holding unlisted equity shares",
            "Income from salary/pension, house property, capital gains, or other sources",
            "Income from intraday trading or futures and options"
        ],
        whoNotTo: [
            "Companies, trusts, LLPs, and other entities"
        ],
        documents: [
            "All documents listed under ITR-2",
            "Profit and Loss statement and Balance Sheet",
            "Audit reports (if applicable)",
            "Details of business loans and assets",
            "GST returns (if registered)"
        ]
    },
    "ITR 4": {
        formNumber: "ITR-4 (Sugam)",
        description: "ITR-4 is for Resident individuals, HUFs, and firms (other than LLPs) who have income under the presumptive taxation scheme under Sections 44AD, 44ADA, or 44AE. It is a simplified form for those with smaller business turnovers or professional receipts.",
        forWho: [
            "Resident individuals, HUFs, and firms (other than LLPs) with income under the presumptive taxation scheme under Sections 44AD, 44ADA, or 44AE",
            "Total income up to ₹50 lakh",
            "Business turnover up to ₹2 crore or professional receipts up to ₹50 lakh"
        ],
        whoNotTo: [
            "Individuals with income from more than one house property, capital gains, or foreign assets/income",
            "Directors in a company or those holding unlisted equity shares",
            "Individuals with agricultural income over ₹5,000"
        ],
        documents: [
            "All documents listed under ITR-1",
            "Details of business/profession income",
            "Bank statements",
            "Investment proofs",
            "Form 26AS and AIS"
        ]
    },
    "ITR 5": {
        formNumber: "ITR-5",
        description: "ITR-5 is meant for entities such as firms, LLPs, AOPs, BOIs, artificial juridical persons, estates of deceased or insolvent individuals, business trusts, and investment funds. It is used by non-individuals who have business or professional income.",
        forWho: [
            "Firms, LLPs, Association of Persons (AOPs), Body of Individuals (BOIs), Artificial Juridical Persons (AJPs), estates of deceased or insolvent individuals, business trusts, and investment funds"
        ],
        whoNotTo: [
            "Individuals, HUFs, and companies"
        ],
        documents: [
            "PAN of the entity",
            "Partnership deed or LLP agreement",
            "Profit and Loss statement and Balance Sheet",
            "Audit reports (if applicable)",
            "Details of partners/members",
            "Form 26AS and AIS"
        ]
    },
    "ITR 6": {
        formNumber: "ITR-6",
        description: "ITR-6 is for companies that are not claiming exemption under Section 11, which pertains to income from property held for charitable or religious purposes. This form is specifically used by corporate taxpayers.",
        forWho: [
            "Companies not claiming exemption under Section 11 (i.e., income from property held for charitable or religious purposes)"
        ],
        whoNotTo: [
            "Companies claiming exemption under Section 11"
        ],
        documents: [
            "PAN of the company",
            "Certificate of Incorporation",
            "Profit and Loss statement and Balance Sheet",
            "Audit reports",
            "Details of directors and shareholders",
            "Form 26AS and AIS"
        ]
    },
    "ITR 7": {
        formNumber: "ITR-7",
        description: "ITR-7 is for entities that are required to file returns under Sections 139(4A) to 139(4D). This includes trusts, political parties, research bodies, educational institutions, and other entities that are involved in charitable, religious, or social work.",
        forWho: [
            "Entities required to file returns under Sections 139(4A) to 139(4D), including:",
            "Trusts",
            "Political parties",
            "Research associations",
            "News agencies",
            "Educational or medical institutions",
            "Trade unions",
            "Universities and colleges",
            "Hospitals",
            "Infrastructure debt funds",
            "Investment funds"
        ],
        whoNotTo: [],
        documents: [
            "PAN of the entity",
            "Registration certificate under relevant sections",
            "Income and expenditure statement",
            "Balance Sheet",
            "Audit reports",
            "Details of donors and grants received",
            "Form 26AS and AIS"
        ]
    }
};


