const translations = {
    fr: {
        // Navigation
        navAbout: "À propos",
        navExperience: "Expérience",
        navProjects: "Projets",
        navSkills: "Compétences",
        navFormation: "Formation",
        navEngagements: "Engagements",
        navContact: "Contact",

        // Hero
        heroSubtitle: "Ingénieur terrain – Je programme vos automates Siemens, Allen-Bradley & Omron, et je conçois votre supervision SCADA. Livraison clé en main, du chiffrage à la mise en service.",
        heroTagline: "Je transforme vos process en solutions connectées.",
        heroDesc: "Spécialiste PLC multi-marques (Siemens · Allen-Bradley · Omron) et architectures SCADA/MES sur mesure, j'allie programmation automate, supervision temps réel et digitalisation industrielle pour livrer des systèmes fiables, traçables et évolutifs — du chiffrage jusqu'à la mise en service.",
        heroAvailability: "Disponible immédiatement — CDI, CDD ou freelance – Interventions sur site",
        btnDownloadCV: "Télécharger CV",
        btnContactMe: "Me contacter",
        cvNote: "CV complet au format PDF – 2 pages synthétiques",

        // About
        aboutTitle: "Résumé Professionnel",
        aboutDesc: "Ingénieur Automatisme & SCADA orienté résultats, spécialisé dans l'automatisation industrielle, l'Industrie 4.0 et la maintenance. Maîtrise des plateformes PLC multi-marques (Siemens, Allen-Bradley, Omron) et intégration avancée (variateurs, IO-Link, vision, axes Festo). Conception et déploiement de solutions SCADA (WinCC, Ignition, Flask) intégrant des fonctionnalités MES : KPIs, traçabilité, GMAO. Transformation numérique complète d'une unité de dessalement avec supervision temps réel. Livraison de <strong>5 machines spéciales</strong> clés en main.",
        aboutSectors: "Secteurs d'intervention : Énergie, Dessalement, Packaging, Automobile.",

        // Trust
        trustTitle: "Ils m'ont fait confiance",
        trustOCP: "Centrale Thermique de Safi | Audit SNCC",
        trustER: "Programmation 5 Machines Spéciales | TIA Portal, Studio 5000",
        trustSango: "Digitalisation & SCADA | Unité de Dessalement",
        trustGEP: "R&D Automatisation | Énergies Renouvelables",
        trustCoficab: "Maintenance & Data Analytics | Faisceaux Automobiles",
        trustBigor: "Maintenance Industrielle & Convoyage",

        // Experience
        expTitle: "Expérience Professionnelle",
        exp1Date: "Mars 2026 – Présent",
        exp1Role: "Consultant Automatisme & SCADA",
        exp1Company: "Auto-entrepreneur",
        exp1Line1: "Pilotage de missions de conseil en automatisation et SCADA sur mesure (Ignition, WinCC, Flask).",
        exp1Line2: "Études techniques : dimensionnement, schémas de contrôle, cybersécurité OT (ISA/IEC 62443).",
        exp1Line3: "Développement d'un démonstrateur SCADA open source (Flask, Chart.js, SQL) – vitrine avant-vente.",
        exp1Line4: "Dépannage et maintenance corrective pour améliorer la disponibilité des équipements.",

        exp2Date: "Sep 2025 – Fév 2026 · 6 mois",
        exp2Role: "Ingénieur en Automatisation",
        exp2Company: "ER Ingenierie – Tanger",
        exp2Line1: "5 machines spéciales : programmation PLC/IHM (Siemens S7-1200, Allen-Bradley CompactLogix, Omron NJ).",
        exp2Line2: "Cycle complet sur 2 projets : chiffrage, étude, prog, FAT/SAT, formation, documentation.",
        exp2Line3: "Intégration vision (ifm/Keyence), axes Festo, IO-Link, pneumatique proportionnelle.",
        exp2Line4: "Standardisation des blocs → <strong style=\"color:var(--cyan)\">gain de 15% sur le temps de développement</strong>.",
        exp2Line5: "Réussite de tous les FAT/SAT sans non-conformité, démarrage productif sur chaque affaire.",

        exp3Date: "Mar 2025 – Août 2025 · 6 mois",
        exp3Role: "Ingénieur Automatisation & SCADA Freelance",
        exp3Company: "SANGOTECH / GEP Benguerir",
        exp3Line1: "Refonte contrôle-commande d'une unité de dessalement par osmose inverse (S7-1200 + IHM locale).",
        exp3Line2: "Développement d'une SCADA web (Flask) : contrôle distant, KPIs, traçabilité, alarmes, historisation.",
        exp3Line3: "<strong style=\"color:var(--cyan)\">Fiabilité +40% · Temps opérateur -30% · Reporting manuel -20h/semaine.</strong>",

        exp4Date: "Fév 2024 – Juin 2024 · 5 mois",
        exp4Role: "Ingénieur Maintenance Industrielle (Stage PFE)",
        exp4Company: "OCP Safi – Centrale Thermique",
        exp4Line1: "Diagnostic SNCC, RCA (Pareto, 5 Why), 12 vulnérabilités identifiées.",
        exp4Line2: "Plans de maintenance corrective/préventive, déploiement TPM.",
        exp4Line3: "24 recommandations techniques, réduction surface d'attaque OT de 25%.",

        exp5Date: "Avr 2022 – Juin 2022 · 3 mois",
        exp5Role: "Chargé d'Analyse Maintenance & Performance (Stage)",
        exp5Company: "Coficab Tanger",
        exp5Line1: "Diagnostic pannes machine E-Beam, RCA, analyse Pareto des arrêts.",
        exp5Line2: "Outil de visualisation maintenance (Flask/MySQL), maintenance prédictive.",
        exp5Line3: "<strong style=\"color:var(--cyan)\">Réduction arrêts imprévus de 25%.</strong>",

        exp6Date: "Sep 2018 – Nov 2019",
        exp6Role: "Technicien en Automatisation Industrielle",
        exp6Company: "Bigor SARL",
        exp6Line1: "Maintenance corrective/préventive sur lignes automatisées (conditionnement, convoyage, dosage).",
        exp6Line2: "Diagnostic pannes électromécaniques : variateurs, capteurs, IHM.",
        exp6Line3: "Mise en service de nouvelles lignes, amélioration continue.",

        // Projects
        projTitle: "Projets",
        projAll: "Tous",
        proj1Title: "Plateforme SCADA orientée MES",
        proj1Desc: "Supervision temps réel avec Ignition Perspective, simulation TIA Portal, calcul OEE, historisation SQL. Vitrine complète d'intégration IT/OT.",
        proj1Res: "↑ KPI production · OEE automatisé · Tableaux de bord dynamiques",
        proj2Title: "GMAO Légère",
        proj2Desc: "Application desktop Python/Tkinter pour suivi des ordres de maintenance corrective et préventive avec base MySQL et exports de rapports.",
        proj2Res: "→ Planification préventive · Alertes automatiques · Export rapports",
        proj3Title: "Arrosage Intelligent Automatisé",
        proj3Desc: "Raspberry Pi, capteurs (humidité, temp, luminosité), dashboard Flask, API météo, commande électrovanne et notifications email.",
        proj3Res: "↓ 40% consommation eau sur ferme pilote",
        proj4Title: "Robot Reconnaissance Panneaux",
        proj4Desc: "CNN sur Raspberry Pi 4, TensorFlow Lite, OpenCV, dataset GTSRB 43 classes, traitement 15 FPS. Participation challenge national interuniversitaire.",
        proj4Res: "→ 92% taux de reconnaissance · Challenge national robotique",

        // Skills
        skillsTitle: "Compétences Techniques",
        skillsPLC: "PLC & Automatisation",
        skillsSCADA: "SCADA & MES",
        skillsNet: "Réseaux & Cybersécurité OT",
        skillsProg: "Programmation & Data",
        skillsCAD: "CAO & Gestion de projet",
        skillsMaint: "Maintenance & Fiabilité",
        skillArg: "⇒ Argument clé pour vos projets",

        // Education
        eduTitle: "Formation",
        edu1Deg: "Master – Technologies Industrielles pour l'Usine du Futur",
        edu1Sch: "Université Mohammed VI Polytechnique (UM6P)",
        edu2Deg: "Licence Pro – Opérations Industrielles et Digitalisation",
        edu2Sch: "Université Mohammed VI Polytechnique (UM6P)",
        edu3Deg: "Technicien Spécialisé – Systèmes Automatisés",
        edu3Sch: "IFMIA Casablanca",
        edu4Deg: "Baccalauréat Sciences Physiques",
        edu4Sch: "Lycée Chahid Saleh Esserghini – Benguerir",
        certTitle: "Certifications & Formations",
        certDone: "✓ Obtenu",
        certProg: "⟳ En cours",
        cert1: "Google Project Management",
        cert2: "SCADA – Formation avancée",
        cert3: "Ignition Core – Inductive Automation",
        cert4: "Cybersécurité OT / ISA 62443",

        // Engagements
        engTitle: "Engagements & Leadership",
        eng1Role: "Responsable R&D – Association Basmat Amal",
        eng1Desc: "Structuration du club autour de projets robotique et technologies éducatives. Organisation de bootcamps, ateliers pratiques et séances d'initiation à la robotique. Animation de workshops pour enseignants dans des établissements partenaires.",
        eng2Role: "Co-fondateur & Président – Club CYBORGS (UM6P)",
        eng2Desc: "Gestion d'un club de <strong>150 membres</strong>, projets interdisciplinaires, ateliers robotique, collaboration interinstitutionnelle. Développement d'une culture technique et scientifique au sein de l'université.",

        // Contact
        contactTitle: "Contact",
        contactTalk: "Parlons de votre prochain projet.",
        contactDesc: "Disponible pour des missions en CDI, CDD ou freelance — terrain, mise en service, programmation PLC/SCADA, digitalisation industrielle.",
        contactLang: "Arabe · Français · Anglais",
        contactTravel: "Disponible déplacements",
        formName: "Nom complet",
        formNamePl: "Votre nom",
        formEmail: "Email",
        formEmailPl: "votre@email.com",
        formSubj: "Sujet",
        formSubjPl: "Mission freelance, CDI, collaboration...",
        formMsg: "Message",
        formMsgPl: "Décrivez votre besoin...",
        btnSend: "Envoyer le message",
        formNote: "* Remplacez VOTRE_ID par votre identifiant Formspree pour activer le formulaire.",
        errorReq: "Ce champ est requis",
        errorEmail: "Email invalide",
        footerRights: "Tous droits réservés.",
        footerQuote: "// Automatiser · Connecter · Optimiser",
        loaderInit: "INITIALISATION..."
    },
    en: {
        // Navigation
        navAbout: "About",
        navExperience: "Experience",
        navProjects: "Projects",
        navSkills: "Skills",
        navFormation: "Education",
        navEngagements: "Leadership",
        navContact: "Contact",

        // Hero
        heroSubtitle: "Field Engineer – I program your Siemens, Allen-Bradley & Omron PLCs, and design your SCADA supervision. Turnkey delivery, from quotation to commissioning.",
        heroTagline: "I transform your processes into connected solutions.",
        heroDesc: "Multi-brand PLC specialist (Siemens · Allen-Bradley · Omron) and custom SCADA/MES architectures. I combine PLC programming, real-time supervision, and industrial digitalization to deliver reliable, traceable, and scalable systems — from estimation to commissioning.",
        heroAvailability: "Available immediately — Full-time, Contract or Freelance – On-site interventions",
        btnDownloadCV: "Download CV",
        btnContactMe: "Contact Me",
        cvNote: "Full CV in PDF format – 2 concise pages",

        // About
        aboutTitle: "Professional Summary",
        aboutDesc: "Results-oriented Automation & SCADA Engineer, specialized in industrial automation, Industry 4.0, and maintenance. Proficiency in multi-brand PLC platforms (Siemens, Allen-Bradley, Omron) and advanced integration (VFDs, IO-Link, vision, Festo axes). Design and deployment of SCADA solutions (WinCC, Ignition, Flask) integrating MES functionalities: KPIs, traceability, CMMS. Complete digital transformation of a desalination unit with real-time supervision. Delivery of <strong>5 special machines</strong> as turnkey projects.",
        aboutSectors: "Intervention Sectors: Energy, Desalination, Packaging, Automotive.",

        // Trust
        trustTitle: "Trusted By",
        trustOCP: "Safi Thermal Power Plant | DCS Audit",
        trustER: "Programming 5 Special Machines | TIA Portal, Studio 5000",
        trustSango: "Digitalization & SCADA | Desalination Unit",
        trustGEP: "R&D Automation | Renewable Energies",
        trustCoficab: "Maintenance & Data Analytics | Automotive Wiring",
        trustBigor: "Industrial Maintenance & Conveying",

        // Experience
        expTitle: "Professional Experience",
        exp1Date: "March 2026 – Present",
        exp1Role: "Automation & SCADA Consultant",
        exp1Company: "Freelance",
        exp1Line1: "Leading custom automation and SCADA consulting missions (Ignition, WinCC, Flask).",
        exp1Line2: "Technical studies: sizing, control schematics, OT cybersecurity (ISA/IEC 62443).",
        exp1Line3: "Developed an open-source SCADA demonstrator (Flask, Chart.js, SQL) – presales showcase.",
        exp1Line4: "Troubleshooting and corrective maintenance to improve equipment availability.",

        exp2Date: "Sep 2025 – Feb 2026 · 6 months",
        exp2Role: "Automation Engineer",
        exp2Company: "ER Ingenierie – Tangier",
        exp2Line1: "5 special machines: PLC/HMI programming (Siemens S7-1200, Allen-Bradley CompactLogix, Omron NJ).",
        exp2Line2: "Full cycle on 2 projects: estimation, study, programming, FAT/SAT, training, documentation.",
        exp2Line3: "Integration of vision (ifm/Keyence), Festo axes, IO-Link, proportional pneumatics.",
        exp2Line4: "Block standardization → <strong style=\"color:var(--cyan)\">15% development time saved</strong>.",
        exp2Line5: "Successful FAT/SAT without non-conformities, productive startup on every project.",

        exp3Date: "Mar 2025 – Aug 2025 · 6 months",
        exp3Role: "Freelance Automation & SCADA Engineer",
        exp3Company: "SANGOTECH / GEP Benguerir",
        exp3Line1: "Revamped control system for a reverse osmosis desalination unit (S7-1200 + local HMI).",
        exp3Line2: "Developed a web SCADA (Flask): remote control, KPIs, traceability, alarms, data logging.",
        exp3Line3: "<strong style=\"color:var(--cyan)\">Reliability +40% · Operator time -30% · Manual reporting -20h/week.</strong>",

        exp4Date: "Feb 2024 – Jun 2024 · 5 months",
        exp4Role: "Industrial Maintenance Engineer (Intern)",
        exp4Company: "OCP Safi – Thermal Power Plant",
        exp4Line1: "DCS diagnostics, RCA (Pareto, 5 Why), identified 12 vulnerabilities.",
        exp4Line2: "Corrective/preventive maintenance plans, TPM deployment.",
        exp4Line3: "24 technical recommendations, reduced OT attack surface by 25%.",

        exp5Date: "Apr 2022 – Jun 2022 · 3 months",
        exp5Role: "Maintenance & Performance Analyst (Intern)",
        exp5Company: "Coficab Tangier",
        exp5Line1: "Diagnosed E-Beam machine breakdowns, RCA, Pareto analysis of stops.",
        exp5Line2: "Maintenance visualization tool (Flask/MySQL), predictive maintenance.",
        exp5Line3: "<strong style=\"color:var(--cyan)\">Reduced unplanned downtime by 25%.</strong>",

        exp6Date: "Sep 2018 – Nov 2019",
        exp6Role: "Industrial Automation Technician",
        exp6Company: "Bigor SARL",
        exp6Line1: "Corrective/preventive maintenance on automated lines (packaging, conveying, dosing).",
        exp6Line2: "Electromechanical troubleshooting: VFDs, sensors, HMIs.",
        exp6Line3: "Commissioning of new lines, continuous improvement.",

        // Projects
        projTitle: "Projects",
        projAll: "All",
        proj1Title: "MES-Oriented SCADA Platform",
        proj1Desc: "Real-time supervision with Ignition Perspective, TIA Portal simulation, OEE calculation, SQL logging. Complete IT/OT integration showcase.",
        proj1Res: "↑ Production KPIs · Automated OEE · Dynamic Dashboards",
        proj2Title: "Light CMMS",
        proj2Desc: "Python/Tkinter desktop application for tracking corrective and preventive maintenance work orders with MySQL database and report exports.",
        proj2Res: "→ Preventive planning · Auto alerts · Report export",
        proj3Title: "Smart Automated Watering",
        proj3Desc: "Raspberry Pi, sensors (humidity, temp, light), Flask dashboard, Weather API, solenoid valve control and email notifications.",
        proj3Res: "↓ 40% water consumption on pilot farm",
        proj4Title: "Traffic Sign Recognition Robot",
        proj4Desc: "CNN on Raspberry Pi 4, TensorFlow Lite, OpenCV, GTSRB 43 classes dataset, 15 FPS processing. National inter-university challenge participation.",
        proj4Res: "→ 92% recognition rate · National robotics challenge",

        // Skills
        skillsTitle: "Technical Skills",
        skillsPLC: "PLC & Automation",
        skillsSCADA: "SCADA & MES",
        skillsNet: "OT Networks & Cybersecurity",
        skillsProg: "Programming & Data",
        skillsCAD: "CAD & Project Management",
        skillsMaint: "Maintenance & Reliability",
        skillArg: "⇒ Key selling point for your projects",

        // Education
        eduTitle: "Education",
        edu1Deg: "Master's – Industrial Technologies for the Factory of the Future",
        edu1Sch: "Mohammed VI Polytechnic University (UM6P)",
        edu2Deg: "Bachelor's – Industrial Operations and Digitalization",
        edu2Sch: "Mohammed VI Polytechnic University (UM6P)",
        edu3Deg: "Specialized Technician – Automated Systems",
        edu3Sch: "IFMIA Casablanca",
        edu4Deg: "High School Diploma in Physical Sciences",
        edu4Sch: "Chahid Saleh Esserghini High School – Benguerir",
        certTitle: "Certifications & Training",
        certDone: "✓ Completed",
        certProg: "⟳ In Progress",
        cert1: "Google Project Management",
        cert2: "SCADA – Advanced Training",
        cert3: "Ignition Core – Inductive Automation",
        cert4: "OT Cybersecurity / ISA 62443",

        // Engagements
        engTitle: "Leadership & Engagements",
        eng1Role: "R&D Manager – Basmat Amal Association",
        eng1Desc: "Structured the club around robotics projects and educational technologies. Organized bootcamps, practical workshops, and robotics introductions. Led workshops for teachers in partner schools.",
        eng2Role: "Co-founder & President – CYBORGS Club (UM6P)",
        eng2Desc: "Managed a club of <strong>150 members</strong>, interdisciplinary projects, robotics workshops, inter-institutional collaboration. Fostered a technical and scientific culture within the university.",

        // Contact
        contactTitle: "Contact",
        contactTalk: "Let's discuss your next project.",
        contactDesc: "Available for Full-time, Contract, or Freelance missions — fieldwork, commissioning, PLC/SCADA programming, industrial digitalization.",
        contactLang: "Arabic · French · English",
        contactTravel: "Available for travel",
        formName: "Full Name",
        formNamePl: "Your name",
        formEmail: "Email",
        formEmailPl: "your@email.com",
        formSubj: "Subject",
        formSubjPl: "Freelance mission, Job offer, Collaboration...",
        formMsg: "Message",
        formMsgPl: "Describe your needs...",
        btnSend: "Send Message",
        formNote: "* Replace VOTRE_ID with your Formspree ID to activate the form.",
        errorReq: "This field is required",
        errorEmail: "Invalid email",
        footerRights: "All rights reserved.",
        footerQuote: "// Automate · Connect · Optimize",
        loaderInit: "INITIALIZING..."
    }
};

let currentLang = localStorage.getItem('siteLang') || 'fr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang);
    document.documentElement.lang = lang;

    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = dict[key];
            } else {
                el.innerHTML = dict[key];
            }
        }
    });

    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.textContent = lang === 'fr' ? 'EN' : 'FR';
        btn.title = lang === 'fr' ? 'Switch to English' : 'Passer en Français';
    }
}

function toggleLanguage() {
    setLanguage(currentLang === 'fr' ? 'en' : 'fr');
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});
