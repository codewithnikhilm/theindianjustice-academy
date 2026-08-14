// Drop-in replacement for: src/pages/index.js
// Change vs. your current file: the logo now uses useBaseUrl() so it resolves
// correctly under the /theindianjustice-academy/ base path (it was hardcoded
// to "static/img/logo11.png", which 404s on GitHub Pages).
// Everything else is structurally unchanged — the Paper & Ink look comes from
// src/css/custom.css.

import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home() {
  const logoUrl = useBaseUrl("/img/logo11.png");

  return (
    <Layout
      title="The Indian Justice Academy"
      description="Learn Law. Think Justice."
    >
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <img
            src={logoUrl}
            alt="The Indian Justice Academy"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
            }}
          />

          <h1 style={{ fontSize: "3.5rem", marginBottom: "10px" }}>
            The Indian Justice Academy
          </h1>

          <p style={{ fontSize: "1.3rem", color: "#666" }}>
            Learn Law. Think Justice.
          </p>

          <Link className="button button--primary button--lg" to="/docs/intro">
            📚 Start Learning
          </Link>
        </div>

        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Subjects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <SubjectCard
            title="🏞️ Land Laws"
            description="Notes, PYQs and important concepts."
            link="/docs/category/land-laws"
          />

          <SubjectCard
            title="🏞️ Registration Act"
            description="Notes, PYQs and important concepts."
            link="/docs/registration-act/registration-establishments"
          />

          <SubjectCard
            title="⚖️ Professional Ethics"
            description="Legal profession, Bar Councils and the Advocates Act."
            link="/docs/professional-ethics/legal-profession-in-india"
          />

          <SubjectCard
            title="⚖️ Jurisprudence"
            description="Schools of law and legal theories."
          />


          <SubjectCard title="📖 CPC" description="Civil Procedure Code notes." />

          <SubjectCard title="👮 BNS" description="Bharatiya Nyaya Sanhita." />

          <SubjectCard
            title="🏠 Transfer of Property"
            description="Transfer of Property Act."
          />

          <SubjectCard
            title="🏭 Labour & Industrial Law"
            description="Labour law notes."
          />
        </div>
      </main>
    </Layout>
  );
}

function SubjectCard({ title, description, link }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3>{title}</h3>

      <p>{description}</p>

      {link && (
        <Link className="button button--secondary" to={link}>
          Open
        </Link>
      )}
    </div>
  );
}
