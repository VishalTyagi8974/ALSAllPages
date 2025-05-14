import React from 'react';
import CardOne from '../../../components/cardComponents/cardOne/CardOne';
import {
    FileText,
    Percent,
    CreditCard,
    Globe,
    AlertCircle,
    ArrowDownUp
} from 'lucide-react';

export default function Importance() {
    return (
        <section >

            <div className="maincontainer my-4  pt-3 my-md-5">
                <h2 className="text-center display-6 fw-semibold secondMainColor mainContainer mb-4">Why Filing Your Income Tax Return is Important</h2>

                <div className=" d-flex justify-content-center flex-wrap">
                    {/* Card 1 */}
                    <div className=" my-4 mx-2 mx-md-4">
                        <CardOne
                            title="Serves as Legal Documentation"
                            description="ITR is accepted as proof of identity and income for Aadhaar, property deals, and other official needs."
                            svg={
                                <FileText
                                    size={60}
                                    className="p-3 rounded-4"
                                    style={{
                                        backgroundColor: 'rgba(153,102,255,0.2)', color: '#9966ff',
                                        strokeWidth: 1.5
                                    }}
                                />
                            }
                        />
                    </div>

                    {/* Card 2 */}
                    <div className=" my-4 mx-2 mx-md-4">
                        <CardOne
                            title="Claim Tax Deductions"
                            description="Lower your taxable income by claiming deductions on investments, insurance premiums, tuition fees, and more."
                            svg={
                                <Percent
                                    size={60}
                                    className="p-3 rounded-4"
                                    style={{
                                        backgroundColor: 'rgba(255,215,0,0.2)', color: '#ffbb00',
                                        strokeWidth: 1.5
                                    }}
                                />
                            }
                        />
                    </div>

                    {/* Card 3 */}
                    <div className=" my-4 mx-2 mx-md-4">
                        <CardOne
                            title="Helps in Getting Loans"
                            description="Banks use your past ITRs to verify steady income and financial health, helping in smoother loan or credit approvals."
                            svg={
                                <CreditCard
                                    size={60}
                                    className="p-3 rounded-4"
                                    style={{
                                        backgroundColor: 'rgba(0,200,83,0.2)', color: '#00c853',
                                        strokeWidth: 1.5
                                    }}
                                />
                            }
                        />
                    </div>

                    {/* Card 4 */}
                    <div className=" my-4 mx-2 mx-md-4">
                        <CardOne
                            title="Supports Visa Applications"
                            description="Embassies often request ITRs to assess your financial stability during visa and immigration processes."
                            svg={
                                <Globe
                                    size={60}
                                    className="p-3 rounded-4"
                                    style={{
                                        backgroundColor: 'rgba(100,181,246,0.2)', color: '#42a5f5',
                                        strokeWidth: 1.5
                                    }}
                                />
                            }
                        />
                    </div>

                    {/* Card 5 */}
                    <div className=" my-4 mx-2 mx-md-4">
                        <CardOne
                            title="Avoid Fines & Penalties"
                            description="Non-filing can incur penalties up to ₹5,000 under the IT Act. File on time to stay compliant and stress-free."
                            svg={
                                <AlertCircle
                                    size={60}
                                    className="p-3 rounded-4"
                                    style={{
                                        backgroundColor: 'rgba(255,87,34,0.2)', color: '#ff5722',
                                        strokeWidth: 1.5
                                    }}
                                />
                            }
                        />
                    </div>

                    {/* Card 6 */}
                    <div className="my-4 mx-2 mx-md-4">
                        <CardOne
                            title="Carry Forward Losses"
                            description="Offset previous business or capital losses against future gains, helping reduce your tax liability in the upcoming years."
                            svg={
                                <ArrowDownUp
                                    size={60}
                                    className="p-3 rounded-4"
                                    style={{
                                        backgroundColor: 'rgba(156,39,176,0.2)', color: '#9c27b0',
                                        strokeWidth: 1.5
                                    }}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
