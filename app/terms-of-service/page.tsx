export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-8 tracking-tight">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-secondary-muted font-light leading-relaxed">
            <section>
              <p className="text-sm text-secondary-muted mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p>
                Please read these Terms of Service carefully before using the ProScience Nutra website. By accessing or using our website, you agree to be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on ProScience Nutra's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content on this site is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Health Disclaimer</h2>
              <p>
                Our supplements are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new supplement regimen, especially if you have a medical condition or are taking medication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Limitation of Liability</h2>
              <p>
                In no event shall ProScience Nutra or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Revisions</h2>
              <p>
                ProScience Nutra may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:info@prosciencenutra.com" className="text-primary hover:underline">info@prosciencenutra.com</a><br />
                Phone: <a href="tel:+13024993725" className="text-primary hover:underline">+1 (302) 499-3725</a><br />
                Address: 1013 Centre Road, Suite 403A, City of Wilmington, Country of New Castle, Delaware 19805
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

