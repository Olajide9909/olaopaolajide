// Edit this file to update the portfolio content.
const img = (src, cap) => ({ type: 'image', src, cap });
const link = (href, label) => ({ type: 'link', href, label });
const site = (slug, href, title, cap) => ({ type: 'site', thumb: `assets/img/sites/${slug}.jpg`, href, title, cap });
const cert = (f, cap) => ({ type: 'image', src: `assets/img/certs/${f}.jpg`, cap });

window.PORTFOLIO = {
  roles: ['Social Media Manager', 'Web & AI Builder', 'Automation Engineer', 'Project Manager', 'Digital Skills Trainer', 'Video Creator'],
  folders: [
    {
      key: 'smm', title: 'Social Media Management', tag: 'Strategy & campaigns', color: '#ff6a3d',
      desc: 'Strategy, content pillars, calendars, paid ads (Meta, TikTok, YouTube, X) and monthly reporting. Led the CitiBIM BIM 2025 launch across 5 stakeholders (+15% engagement) and grew Seraphmedia ~30% across 9+ platforms.',
      items: [
        site('smm', 'https://olaopa-smm.vercel.app', 'Social media portfolio', 'Campaigns, calendars and results'),
        link('https://instagram.com/citibim', 'CitiBIM Nigeria on Instagram'),
        link('https://x.com/CitibimNG', 'CitiBIM Nigeria on X'),
        link('https://www.facebook.com/SeraphmediaChannel', 'Seraphmedia on Facebook'),
        link('https://www.facebook.com/DayspringSC', 'Dayspring Seraphic Church on Facebook'),
        link('https://linktr.ee/Seraphmediachannel', 'Seraphmedia: all channels')
      ]
    },
    {
      key: 'web', title: 'Websites & Web Apps', tag: 'AI-assisted builds', color: '#3dd6ff',
      desc: 'Websites, landing pages, LMS platforms and web apps built with React, Supabase and Vercel using AI coding tools (Cursor, Lovable, Claude). 11+ projects shipped for churches, schools, companies and professionals.',
      items: [
        site('seraphmedia', 'https://seraphmedia.com.ng', 'Seraph Media: C&S Digital Library', 'Sermons, hymnary, books, live stream and community'),
        site('spiritlifesom', 'https://spiritlifesom.org', 'Spirit Life School of Ministry', 'Website + LMS serving 56+ students'),
        site('citibimlms', 'https://citibimlms.vercel.app', 'CitiBIM Learning Platform', 'LMS for CitiBIM trainings'),
        site('citibimtlp', 'https://citibimtlp.vercel.app', 'CitiBIM Trainings landing page', '6 courses, pricing, WhatsApp CTA, FAQ'),
        site('cherubscove', 'https://cherubscove.net', 'Cherubs Cove Ministry', 'Events, gallery and conference registration'),
        site('abidemi', 'https://abidemiakinsehinwa.vercel.app', 'Abidemi Akinsehinwa', 'Client portfolio for a brand manager'),
        site('nurudeen', 'https://nurudeenokiki.netlify.app', 'Nurudeen Okikiola', 'Client portfolio for a project manager'),
        site('engaged-singles', 'https://spiritlife-engaged-singles.vercel.app', 'Engaged Singles attendance tracker', 'Login-based church admin app'),
        site('spiritualrank', 'https://spiritualrank.vercel.app', 'SpiritualRank', 'A light-hearted quiz app (fun project)'),
        link('https://tisbuilder.vercel.app', 'Web builder portfolio: all projects'),
        link('https://github.com/Olajide9909', 'GitHub')
      ]
    },
    {
      key: 'auto', title: 'AI Automation', tag: 'Make · n8n · Supabase', color: '#3dffa8',
      desc: 'Production Make.com and n8n workflows on Supabase and the Gmail API. At Spirit Life School of Ministry: emails in under 30 seconds instead of 24–72 hours, 0% errors on 50+ monthly receipts, 20+ hours a week saved and ₦3.8M projected annual savings.',
      items: [
        site('automation', 'https://olaopa-automation.vercel.app', 'AI automation portfolio', 'Case studies, workflows and results'),
        link('https://olaopa-automation.vercel.app', 'Student lifecycle emails: 4 branded paths, under 30 s, 100% delivery'),
        link('https://olaopa-automation.vercel.app', 'Payment receipts: numbered HTML receipts in under 1 minute, 0% errors'),
        link('https://olaopa-automation.vercel.app', 'Telegram AI community bot: 24/7 replies and moderation')
      ]
    },
    {
      key: 'pm', title: 'Project Management', tag: 'Agile · Scrum', color: '#7c5cff',
      desc: 'Scrum Master / PM for the SLSOM Digital Learning Platform (3 releases shipped, 11 governance documents, 30 user stories), COO at Primelle Hub, and campaigns run as projects. HND Quantity Surveying (Distinction) and 4 MTF project management certificates.',
      items: [
        site('pmscrum', 'https://olaopaolajide-pmscrum.vercel.app', 'PM / Scrum portfolio', '11 PM documents and a 16-sprint roadmap'),
        cert('mtf_professional_diploma_technical_project_management_2026', 'Professional Diploma in Technical Project Management (MTF, 2026)'),
        cert('mtf_pm_methodologies_agile_scrum_pmp_2026', 'PM Methodologies: Agile, Scrum & PMP (MTF, 2026)'),
        cert('asana_workflow_specialist_2025', 'Asana Workflow Specialist (2025)')
      ]
    },
    {
      key: 'video', title: 'Video & Creative', tag: 'Reels · design · livestream', color: '#ffc23d',
      desc: '50+ short-form videos (Premiere Pro, CapCut), 100+ graphics, AI video with Google Flow, Seedance and Higgsfield, and livestreams of major church events with OBS.',
      items: [
        link('https://olaopaolajide.my.canva.site', 'Graphics & video portfolio'),
        link('https://www.tiktok.com/@seraphmediasm/video/7433759616737021189', 'TikTok: Seraphmedia reel 1'),
        link('https://www.tiktok.com/@seraphmediasm/video/7433477531333840134', 'TikTok: Seraphmedia reel 2'),
        link('https://www.tiktok.com/@seraphmediasm/video/7428518564757245189', 'TikTok: Seraphmedia reel 3'),
        link('https://web.facebook.com/reel/5178449922232888', 'Facebook reel'),
        link('https://web.facebook.com/apostolicchristiancommunity/videos/3490251194596711', 'Livestream: Apostolic Christian Community'),
        link('https://www.tiktok.com/@seraphmediasm', 'All Seraphmedia videos on TikTok')
      ]
    },
    {
      key: 'train', title: 'Trainings', tag: 'Inscribe Hub Academy', color: '#ff3d8b',
      desc: 'Founder and trainer at Inscribe Hub (formerly Instructed Scribe). 40+ people trained in virtual assistance, social media and AI digital skills; one beginner landed a first client in 19 days. Built the whole platform with AI tools.',
      items: [
        site('inscribehub', 'https://theinscribehub.vercel.app', 'Inscribe Hub', 'Brand, websites and skills for professionals and ministries'),
        site('instructedva', 'https://instructedva.vercel.app', 'VA & Digital Literacy Masterclass', '4 weeks live: Zapier/Make, ChatGPT, Notion, Upwork'),
        site('instructedsmm', 'https://instructedsmm.vercel.app', 'SMM & AI Digital Literacy Masterclass', 'Brand strategy, Reels/TikTok, prompting, automation'),
        site('istcert', 'https://istcert.vercel.app', 'Certificate Portal', 'Students generate their own certificates')
      ]
    },
    {
      key: 'va', title: 'VA & Operations', tag: 'Admin · HR · ops', color: '#c8ff3d',
      desc: 'Virtual assistance, HR admin and operations for remote teams: Asana/Trello systems that cut missed deliverables by an estimated 40%, recruitment and onboarding, and now leading a business development team of 4 as COO at Primelle Hub.',
      items: [
        link('https://olaopaolajide.my.canva.site/va-portfolio', 'Virtual assistant portfolio'),
        cert('alx_virtual_assistant_2024', 'Virtual Assistant (ALX, 2024)')
      ]
    },
    {
      key: 'certs', title: 'Certificates', tag: 'Credentials', color: '#9ad0ff',
      desc: 'Professional certificates in social media, advertising, PR, community, automation and project management.',
      items: [
        cert('hubspot_digital_advertising_2026', 'Digital Advertising (HubSpot Academy, 2026)'),
        cert('mtf_professional_diploma_social_media_marketing_management_2025', 'Professional Diploma in Social Media Marketing & Management (MTF, 2025)'),
        cert('udemy_public_relations_master_professional_2025', 'Public Relations Master Professional (Udemy, 2025)'),
        cert('udemy_brand_reputation_management_2025', 'Brand Reputation Management (Udemy, 2025)'),
        cert('feverbee_successful_community_management', 'Successful Community Management (FeverBee)'),
        cert('udemy_n8n_ai_agent_creation_2025', 'n8n: AI Agent Creation Guide (Udemy, 2025)'),
        cert('mtf_professional_diploma_technical_project_management_2026', 'Professional Diploma in Technical Project Management (MTF, 2026)'),
        cert('mtf_pm_methodologies_agile_scrum_pmp_2026', 'PM Methodologies: Agile, Scrum & PMP (MTF, 2026)'),
        cert('asana_workflow_specialist_2025', 'Asana Workflow Specialist (2025)'),
        cert('alx_virtual_assistant_2024', 'Virtual Assistant (ALX, 2024)')
      ]
    }
  ],
  experience: [
    ['Mar 2025 – Present', 'Social Media Manager (Lead) + Quantity Surveyor, Cost Team', 'CitiBIM Nigeria Limited', 'Audited 5 platforms, built the strategy and ran the BIM 2025 course launch with paid ads, a 14-day calendar and a responsibility matrix for 5 stakeholders. Also on the APPM cost team for projects.', ['+15% engagement', 'Paid ads', 'Campaign PM', 'Analytics']],
    ['Jan 2026 – Present', 'Automation & Email Communications Lead', 'Spirit Life School of Ministry', 'Built production Make.com workflows on Supabase + Gmail API for student lifecycle emails and payment receipts; self-hosted n8n on AWS and Oracle Cloud.', ['₦3.8M/yr savings', '< 30 s emails', '0% errors', 'Make · n8n']],
    ['Jun 2026 – Present', 'Chief Operating Officer (Remote)', 'Primelle Hub', 'Lead operations for a growth-services company and a business development team of 4; set team structure, tracking standards and a twice-weekly reporting cadence.', ['Leadership', 'Operations', 'Reporting']],
    ['Jun 2019 – Present', 'Founder & Social Media Strategist', 'Seraphmedia', 'Built a faith-based media brand across 9+ platforms: 50+ videos, 100+ graphics, 3 volunteer contributors and livestreams of major annual events.', ['~30% growth', '9+ platforms', 'Video', 'Livestream']],
    ['May 2025 – Oct 2025', 'Virtual Assistant & Assistant Social Media Manager', 'Digital Process Innovations Ltd', 'Content, scheduling and community for client brands; Asana/Trello systems for remote teams; HR admin and recruitment for Engold Consulting.', ['Asana', '−40% missed deliverables', 'HR admin']],
    ['Jul 2023 – Jul 2024', 'Physics Teacher (NYSC)', 'Cross River State', 'Taught physics; CDS Group President and NCCF Zonal Coordinator; NYSC commendation letter.', ['Leadership', 'Teaching']]
  ],
  tools: ['Meta Business Suite', 'Canva', 'Photoshop', 'Premiere Pro', 'CapCut', 'OBS Studio', 'Make.com', 'n8n', 'Zapier', 'Supabase', 'React', 'Vercel', 'Cursor', 'Lovable', 'Claude', 'Asana', 'Trello', 'ClickUp', 'Jira', 'Notion', 'Google Analytics', 'Google Flow', 'Higgsfield']
};
