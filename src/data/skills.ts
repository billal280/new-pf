import { SkillCategory } from "~/types/data";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "YAML", icon: `${SI}/yaml/red` },
      { name: "Groovy", icon: `${SI}/apachegroovy/green` },
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "Java", icon: `${DI}/java/java-original.svg` },
      { name: "HTML5", icon: `${DI}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DI}/css3/css3-original.svg` },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Django", icon: `${SI}/django/092E20` },
      { name: "Spring", icon: `${SI}/spring/6DB33F` },
    ],
  },
  {
    category: "Infrastructure & Orchestration",
    skills: [
      { name: "Terraform", icon: `${DI}/terraform/terraform-original.svg` },
      { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
      { name: "Kubernetes", icon: `${SI}/kubernetes/326CE5` },
      { name: "Helm", icon: `${SI}/helm/0F1689` },
    ],
  },
  {
    category: "Integration and continuous deployment (CI/CD)",
    skills: [
      { name: "Jenkins", icon: `${DI}/jenkins/jenkins-original.svg` },
      { name: "GitLab CI", icon: `${SI}/gitlab/FC6D26` },
      { name: "ArgoCD", icon: `${SI}/argo/EF7B4D` },
    ],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "GCP", icon: `${DI}/googlecloud/googlecloud-original.svg` },
      { name: "Hetzner", icon: `${SI}/hetzner/D50C2D` },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: `${DI}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    category: "Observability and ingestion",
    skills: [
      { name: "OpenSearch", icon: `${SI}/opensearch/005EB8` },
      { name: "ELK", icon: `${SI}/elastic/005571` },
      { name: "Prometheus", icon: `${DI}/prometheus/prometheus-original.svg` },
      { name: "Grafana", icon: `${DI}/grafana/grafana-original.svg` },
      { name: "Logstash", icon: `${SI}/logstash/ECD53F` },
      { name: "Kafka", icon: `${SI}/apachekafka/white` },


    ],
  },
  {
    category: "Security",
    skills: [
      { name: "Vault", icon: `${SI}/vault/FFEC6E` },
      { name: "Keycloak", icon: `${SI}/keycloak/000000` },
      { name: "TLS/mTLS", icon: `${SI}/istio/466BB0` },
      { name: "SonarQube", icon: `${SI}/sonarqubeserver/126ED3` },
      { name: "Trivy", icon: `${SI}/trivy/1904DA` },
    ],
  },
  {
    category: "Scripting & Automation",
    skills: [
      { name: "Bash", icon: `${DI}/bash/bash-original.svg` },
      { name: "N8N", icon: `${SI}/n8n/EA4B71` },
    ],
  },
];
