import { Experience } from "~/types/data";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Thales",
    role: "Software DevOps Engineer",
    period: "Sept 2024 - Present",
    location: "Aix-en-Provence",
    website: "https://www.thalesgroup.com/fr",
    highlights: [
      "DevOps Consultant, responsible for setting up and continuously improving a functional observability platform using OpenSearch and OpenSearch Dashboards. Worked with a wide range of DevOps tools and adopted a GitOps/MLOps approach.",
    ],
    techUsed: ["Opensearch dashboards", "OpenSearch", "Logstash", "Kubernetes", "Terraform", "ArgoCD", "Jenkins"],
  },
  {
    id: "exp-2",
    company: "Kaiman",
    role: "Full Stack Developer",
    period: "Sept 2023 -Sept 2024",
    location: "Aix-en-Provence",
    website: "https://kaiman.fr/",
    highlights: [
      "Development, deployment, and scalable maintenance of websites using WordPress, PrestaShop, and Symfony. Handled customer support via phone and ticketing system, and implemented task automation within a specialized communication agency.",
    ],
    techUsed: ["WordPress", "PrestaShop", "Symfony", "PHP", "JavaScript", "MySQL", "WooCommerce", "Google Analytics", "GTM"],
  },
  {
    id: "exp-3",
    company: "GCZ Design",
    role: "Web Developer",
    period: "Jan 2023 - Mar 2024",
    location: "Marseille",
    website: "https://www.gczdesign.com/",
    highlights: [
      "Development, maintenance, payment integration, and management of updates and bug fixes.",
    ],
    techUsed: ["PrestaShop", "Mailchimp", "PHP", "JavaScript", "MySQL"],
  },
];
