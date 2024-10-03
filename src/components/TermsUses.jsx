import React from "react";

function TermsUses() {
  return (
    <div className="bg-gray-800 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Use</h1>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg">
            Welcome to Sweep Stakes! By using our services, you agree to the following Terms of Use. 
            Sweep Stakes is a free and cash-play betting platform focused on College Basketball 
            predictions. This platform provides users with opportunities to engage in Sweepstakes-style 
            betting in a legally compliant environment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">User Eligibility</h2>
          <p className="text-lg">
            Users must be 18 years or older to sign up and participate in Sweep Stakes. We offer two platforms:
            the free site and the cash-play site. When signing up, users will receive 5000 Free Sweeps Points 
            and Betting Points equal to their deposited amount.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Deposits and Withdrawals</h2>
          <p className="text-lg">
            Deposits can be made via Visa Debit, USDC, or Bank Account, while withdrawals are processed through 
            USDC or Bank Account. A 1% fee will be applied on withdrawals, with no trading allowed on the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Pricing and Market Determination</h2>
          <p className="text-lg">
            Our pricing model combines the features of Prophet.co and Polymarket, converting percentage 
            probabilities into US betting lines. We utilize web scraping techniques for real-time event 
            pricing and AI agents for routine task management and user engagement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Admin and AI Agents</h2>
          <p className="text-lg">
            Sweep Stakes utilizes AI Agents for liquidity, market-making, and chatbot functionalities. 
            A detailed admin panel will be provided for management, including the ability to seed multiple 
            markets. Monthly prizes will also be offered on the free site, rewarding users based on their 
            performance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Legal Compliance</h2>
          <p className="text-lg">
            Sweep Stakes operates under strict legal compliance. We reserve the right to block access to our 
            platform in jurisdictions where online betting is prohibited. By using Sweep Stakes, users agree 
            to our terms and conditions, including restrictions based on location and usage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Changes to Terms of Use</h2>
          <p className="text-lg">
            We reserve the right to modify these Terms of Use at any time. Continued use of our platform 
            after modifications implies agreement to the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsUses;
