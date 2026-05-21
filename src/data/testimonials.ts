import { Testimonial } from "~/types/data";

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Yann CECCHERINI",
    role: "DevOps Engineer",
    company: "FDJ United",
    text: "Billal is an exceptional Cloud DevSecOps Engineer with a deep technical mastery of modern cloud-native infrastructures. He has a brilliant ability to design and provision scalable environments using Terraform and manage robust Kubernetes clusters with absolute precision. What truly sets Billal apart, however, is his outstanding expertise in ArgoCD. He spearheaded our GitOps workflows, turning complex deployments into seamless, fully automated, and highly secure processes. He is a proactive engineer who brings top-tier automation and security to any infrastructure team.",
    avatar: "/testimonials/yann-ceccherini.jpg",
    profileUrl: "https://fr.linkedin.com/in/yann-ceccherini-792871207",
  },
  {
    id: "test-2",
    name: "Romain MONIER",
    role: "DevSecOps Engineer",
    company: "Thales",
    text: "A strong recommendation for a DevSecOps engineer is to prioritize “security as code” at every stage of the CI/CD pipeline. Automate vulnerability scanning, enforce least-privilege access, and integrate security testing early (shift-left) rather than treating it as a final checkpoint. Focus on building secure-by-default infrastructure using tools like IaC (Terraform, etc.) and continuously monitor systems in production to detect and respond to threats in real time.",
    avatar: "/testimonials/romain-monier.jpg",
    profileUrl: "https://www.linkedin.com/in/romain-monier",
  },
  {
    id: "test-3",
    name: "Billel Souane",
    role: "Systems, Network & Security Engineer",
    company: "GAZOCEAN",
    text: "Beyond his strong technical expertise, Billal stands out for his excellent soft skills. He communicates clearly and effectively with both technical and non-technical stakeholders, making collaboration smooth across teams. He is highly proactive, always anticipating issues before they arise and proposing practical solutions. Billal is also reliable and disciplined in his work, consistently delivering high-quality results under pressure. His strong team spirit and willingness to share knowledge make him a valuable contributor to any engineering organization.",
    avatar: "/testimonials/billel-souane.jpg",
    profileUrl: "https://fr.linkedin.com/in/souane-billel",
  },
  {
    id: "test-4",
    name: "Ouassim Khaddioui",
    role: "DevSecOps & Platform Engineer",
    company: "FDJ United",
    text: "I strongly recommend Billal for any Cloud, DevSecOps, or modern infrastructure role. With his solid expertise in Kubernetes, Terraform, and ArgoCD, he is able to design reliable, secure, and fully automated environments. His proactive mindset, strong command of GitOps practices, and high-level technical skills make him a valuable asset for any team looking to modernize and strengthen its infrastructure.",
    avatar: "/testimonials/ouassim-khaddioui.jpg",
    profileUrl: "https://fr.linkedin.com/in/ouassim-khaddioui-240445222",
  },
];
