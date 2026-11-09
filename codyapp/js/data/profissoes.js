/* Profissões de desenvolvimento de software exibidas na seção "Profissões".
   As imagens ficam em assets/ (arquivo informado em "imagem"). */
const PROFISSOES = [
  {
    "id": "frontend",
    "titulo": "Desenvolvedor Frontend",
    "imagem": "frontend.jpg",
    "resumo": "Profissional responsável por desenvolver a interface de usuário de um site ou aplicativo web.",
    "tecnologias": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "Vue.js",
      "SASS",
      "Bootstrap",
      "Webpack",
      "TypeScript"
    ]
  },
  {
    "id": "backend",
    "titulo": "Desenvolvedor Backend",
    "imagem": "backend.jpg",
    "resumo": "Profissional que desenvolve e mantém a lógica do lado do servidor de aplicações web.",
    "tecnologias": [
      "Node.js",
      "Java",
      "Python",
      "Ruby on Rails",
      "PHP",
      ".NET",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL"
    ]
  },
  {
    "id": "fullstack",
    "titulo": "Desenvolvedor Fullstack",
    "imagem": "fullstack.jpg",
    "resumo": "Profissional que desenvolve tanto a parte frontend quanto backend de aplicações web.",
    "tecnologias": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "Vue.js",
      "Node.js",
      "Python",
      "Ruby on Rails",
      "Java",
      "PHP",
      ".NET",
      "SQL",
      "MongoDB",
      "Docker",
      "Git",
      "RESTful APIs",
      "GraphQL",
      "AWS",
      "Azure",
      "Firebase"
    ]
  },
  {
    "id": "ia_ml",
    "titulo": "Especialista em Inteligência Artificial e Machine Learning",
    "imagem": "ia_ml.jpg",
    "resumo": "Profissional que desenvolve modelos e algoritmos de inteligência artificial e machine learning.",
    "tecnologias": [
      "Python",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "R",
      "Jupyter Notebooks",
      "Google Cloud AI",
      "IBM Watson",
      "AWS SageMaker"
    ]
  },
  {
    "id": "cientista_dados",
    "titulo": "Cientista de Dados",
    "imagem": "cientista_dados.jpg",
    "resumo": "Profissional que analisa e interpreta dados complexos para apoiar a tomada de decisões.",
    "tecnologias": [
      "Python",
      "R",
      "SQL",
      "Hadoop",
      "Spark",
      "Tableau",
      "Power BI",
      "SAS",
      "Jupyter Notebooks",
      "Apache Kafka"
    ]
  },
  {
    "id": "devops",
    "titulo": "DevOps",
    "imagem": "devops.jpg",
    "resumo": "Profissional que promove a integração contínua e entrega contínua (CI/CD) de software, automatizando e monitorando a infraestrutura.",
    "tecnologias": [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
      "Ansible",
      "Terraform",
      "AWS",
      "Azure",
      "Google Cloud",
      "Prometheus",
      "Grafana"
    ]
  },
  {
    "id": "mobile",
    "titulo": "Desenvolvedor Mobile",
    "imagem": "mobile.jpg",
    "resumo": "Profissional que cria e mantém aplicativos móveis para plataformas como iOS e Android.",
    "tecnologias": [
      "Swift",
      "Kotlin",
      "Java",
      "Flutter",
      "React Native",
      "Xamarin",
      "Objective-C",
      "Firebase"
    ]
  },
  {
    "id": "robotica",
    "titulo": "Engenheiro de Robótica",
    "imagem": "robotica.jpg",
    "resumo": "Profissional que projeta, constrói e programa robôs para realizar tarefas específicas.",
    "tecnologias": [
      "ROS",
      "Python",
      "C++",
      "MATLAB",
      "Arduino",
      "Raspberry Pi",
      "V-REP",
      "Gazebo",
      "SolidWorks"
    ]
  },
  {
    "id": "cloud_computing",
    "titulo": "Especialista em Cloud Computing",
    "imagem": "computing.jpg",
    "resumo": "Profissional que gerencia serviços e infraestruturas de TI na nuvem.",
    "tecnologias": [
      "AWS",
      "Azure",
      "Google Cloud Platform",
      "Docker",
      "Kubernetes",
      "OpenStack",
      "Terraform",
      "Ansible",
      "CloudFormation"
    ]
  },
  {
    "id": "ciberseguranca",
    "titulo": "Especialista em Cibersegurança",
    "imagem": "ciberseguranca.jpg",
    "resumo": "Profissional que protege sistemas de informação contra ameaças cibernéticas.",
    "tecnologias": [
      "firewalls",
      "SIEM",
      "IDS/IPS",
      "Wireshark",
      "Metasploit",
      "Kali Linux",
      "Splunk",
      "Nessus",
      "Nmap"
    ]
  },
  {
    "id": "software",
    "titulo": "Desenvolvedor de Software",
    "imagem": "desenvolvedor_de_software.jpg",
    "resumo": "Profissional que cria, testa e mantém software para diversas plataformas.",
    "tecnologias": [
      "Python",
      "Java",
      "C#",
      "C++",
      "JavaScript",
      "Git",
      "SQL",
      "Docker",
      "Agile/Scrum",
      "Visual Studio"
    ]
  },
  {
    "id": "arquiteto_infra",
    "titulo": "Arquiteto de Redes e Infraestrutura",
    "imagem": "especialista_redes.jpg",
    "resumo": "Profissional que planeja e projeta a infraestrutura de redes e sistemas de TI.",
    "tecnologias": [
      "Cisco",
      "Juniper",
      "VMware",
      "AWS",
      "Azure",
      "SD-WAN",
      "Fortinet",
      "Palo Alto Networks",
      "Ansible",
      "Terraform"
    ]
  },
  {
    "id": "design_ux_ui",
    "titulo": "Especialista em Design e UX/UI",
    "imagem": "especialista_ux_ui.jpg",
    "resumo": "Profissional que cria interfaces de usuário atraentes e intuitivas, focando na experiência do usuário.",
    "tecnologias": [
      "Adobe XD",
      "Figma",
      "Sketch",
      "InVision",
      "Axure",
      "HTML",
      "CSS",
      "JavaScript",
      "Balsamiq",
      "Zeplin"
    ]
  },
  {
    "id": "analista_e_desenvolvedor_de_sistemas",
    "titulo": "Analista e Desenvolvedor de Sistemas",
    "imagem": "analista_sistemas.jpg",
    "resumo": "Profissional que analisa, projeta, desenvolve, testa e mantém software e sistemas informáticos.",
    "tecnologias": [
      "Java",
      "C#",
      "Python",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS",
      "Angular",
      "React",
      "Node.js",
      "Git",
      "Docker",
      "RESTful APIs",
      "Agile",
      "Scrum"
    ],
    "atuacao": "Atua em áreas como finanças, saúde, educação, e-commerce e tecnologia, garantindo a funcionalidade e eficiência das soluções tecnológicas."
  },
  {
    "id": "analista_de_sistemas",
    "titulo": "Analista de Sistemas de Informação",
    "imagem": "analista_sistemas_informacao.jpg",
    "resumo": "Profissional que analisa e modela sistemas de informação, define requisitos, realiza testes e implementa soluções tecnológicas.",
    "tecnologias": [
      "Java",
      "C#",
      "Python",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "React"
    ],
    "atuacao": "Atua em áreas como finanças, saúde, educação e e-commerce, garantindo que os sistemas atendam às necessidades dos usuários e sejam eficientes e seguros."
  }
];
