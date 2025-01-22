'use client'; // Ensure this is marked as a Client Component

const pricingTiers = [
  {
    title: "Basic",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Access to 3 scholarship opportunities",
      "Basic application guidance",
      "Monthly email updates",
      "Community support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 10,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Access to 50+ scholarship opportunities",
      "Personalized application advice",
      "Weekly email updates",
      "Exclusive webinars",
      "Priority community support",
      "Essay review and feedback",
    ],
  },
  {
    title: "Premium",
    monthlyPrice: 20,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Unlimited scholarship access",
      "One-on-one mentorship",
      "Daily email updates",
      "Tailored scholarship recommendations",
      "Dedicated support manager",
      "Full application review",
      "Interview preparation",
      "Custom guidance for visa applications",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="bg-gradient-to-br from-purple-500 via-purple-900 to-purple-950 py-12 text-white">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className=" section-title text-3xl md:text-4xl font-bold text-white">
            Choose Your Plan
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80">
            Unlock opportunities with a plan that suits your needs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg transition-all ${
                tier.inverse
                  ? "bg-blue-600 text-white hover:scale-105"
                  : "bg-white text-gray-900 hover:scale-105"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{tier.title}</h3>
              <p className="text-xl font-semibold mb-6">
                ${tier.monthlyPrice}/month
              </p>
              {tier.popular && (
                <span className="text-sm uppercase font-semibold bg-yellow-300 text-black px-3 py-1 rounded-full mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <ul className="mb-6">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-center mb-2 gap-2"
                  >
                    <span className="text-green-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg ${
                  tier.inverse
                    ? "bg-white text-blue-600 hover:bg-gray-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                } transition`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
