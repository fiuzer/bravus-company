export default function sitemap() {
  const base = "https://www.bravuscompany.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicos/landing-page-sao-paulo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/servicos/site-para-clinicas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/servicos/site-para-barbearia`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
