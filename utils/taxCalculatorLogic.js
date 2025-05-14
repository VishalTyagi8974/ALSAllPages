
export function calculateTaxOldRegime(income, age, deductions) {
    let taxableIncome = Math.max(0, income - deductions);
    let tax = 0;

    if (age < 60) {
        if (taxableIncome <= 250000) tax = 0;
        else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
        else if (taxableIncome <= 1000000)
            tax = (250000 * 0.05) + (taxableIncome - 500000) * 0.2;
        else
            tax = (250000 * 0.05) + (500000 * 0.2) + (taxableIncome - 1000000) * 0.3;
    } else {
        if (taxableIncome <= 300000) tax = 0;
        else if (taxableIncome <= 500000) tax = (taxableIncome - 300000) * 0.05;
        else if (taxableIncome <= 1000000)
            tax = (200000 * 0.05) + (taxableIncome - 500000) * 0.2;
        else
            tax = (200000 * 0.05) + (500000 * 0.2) + (taxableIncome - 1000000) * 0.3;
    }

    return tax + (0.04 * tax); // add 4% cess
}

export function calculateTaxNewRegime(income) {
    let tax = 0;

    const slabs = [
        { limit: 300000, rate: 0 },
        { limit: 600000, rate: 0.05 },
        { limit: 900000, rate: 0.10 },
        { limit: 1200000, rate: 0.15 },
        { limit: 1500000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 }
    ];

    let prevLimit = 0;
    for (let i = 0; i < slabs.length; i++) {
        let slab = slabs[i];
        if (income > slab.limit) {
            tax += (slab.limit - prevLimit) * slab.rate;
            prevLimit = slab.limit;
        } else {
            tax += (income - prevLimit) * slab.rate;
            break;
        }
    }

    return tax + (0.04 * tax); // add 4% cess
}

export default function showAverageTax(income, age, deductions) {
    const oldTax = calculateTaxOldRegime(income, age, deductions);
    const newTax = calculateTaxNewRegime(income);
    const avgTax = (oldTax + newTax) / 2;

    return { oldTax, newTax, avgTax }
}
