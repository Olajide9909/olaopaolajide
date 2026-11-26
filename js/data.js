// Edit this file to update the portfolio content.
const img = (src, cap) => ({ type: 'image', src, cap });
const link = (href, label) => ({ type: 'link', href, label });
const site = (slug, href, title, cap) => ({ type: 'site', thumb: `assets/img/sites/${slug}.jpg`, href, title, cap });
const reel = (n, cap) => ({ type: 'reel', src: `assets/video/${n}.mp4`, poster: `assets/img/citibim/${n}-poster.jpg`, cap });
const drive = (id, label) => link(`https://drive.google.com/drive/folders/${id}`, label);
const doc = (slug, id, title, cap, kind = 'document') => ({ type: 'doc', thumb: `assets/img/docs/${slug}.jpg`, href: `https://docs.google.com/${kind}/d/${id}/view`, title, cap, kind });
const deck = (slug, id, title, cap) => doc(slug, id, title, cap, 'presentation');
const vid = (n, cap, wide) => ({ type: wide ? 'mp4' : 'reel', src: `assets/video/${n}.mp4`, poster: `assets/img/citibim/${n}-poster.jpg`, cap });
const cert = (f, cap) => ({ type: 'image', src: `assets/img/certs/${f}.jpg`, cap });

window.PORTFOLIO = {
  roles: ['Social Media Manager', 'Web & AI Builder', 'Automation Engineer', 'Project Manager', 'Digital Skills Trainer', 'Video Creator'],
  folders: [
    {
      key: 'proof', title: 'Strategy, Reports & Proof', tag: 'Audits · plans · results', color: '#ffd166',
      desc: 'The documents behind the work: audits, strategies, content calendars and performance reports, written for real clients. Each one opens in Google Docs.',
      items: [
        doc('citibim-report-aug26', '1s_ble8JSMqFPvWGJEJkTQWtf74pCvbPxHqKLoYCjCU4', 'CitiBIM: August 2026 performance report', 'LinkedIn 14.9% engagement rate · TikTok 26,537 views'),
        doc('citibim-staff-challenge', '1Z85lD4jcJEY3VJ6I5jbcm4BNgiP-5iudqb6vIRl_dYE', 'CitiBIM: Staff Challenge campaign report', 'Impressions +390.5% · reactions +366.7% · 58 new followers'),
        doc('citibim-report-q3-25', '1qizXRLHnw8ejVobpcgfR1FE_J3qzJ-b-GKKxBEYJFcE', 'CitiBIM: Q3 2025 performance report', '+757 followers · ~18% average engagement rate'),
        doc('citibim-presence-review', '1AIs_g6UM-ha9kKcsJE-uabyD9VGRrJ8SebAgYy9YAp4', 'CitiBIM: social media presence review', 'Audit of 5 platforms with recommendations'),
        doc('citibim-90day-strategy', '12XXbsRxdonSENWZYWOeExocu18jzaEM0IZKG12zVrDA', 'CitiBIM: 90-day social media strategy', 'Pillars, cadence and KPI targets'),
        doc('unikke-audit', '1XhoDwuj7bDrDOHN-31SLTcQ-9JPU6nVxtYQo2PrivZ0', 'Unikke Furniture: social media audit', 'Platform-by-platform review and fixes'),
        deck('tukio-strategy', '1b2E2IfJVf8__3UQqb2jvgKNRoJ93hWbyGsZq6GziR58', 'Tukio Konsult: content & social strategy', 'One-off strategy deck'),
        doc('robovolt-plan', '18pC32zG2fv7uKsbSy4pyxl-0jAuo0xLa_DdenZMXbnY', 'Robovolt: launch publicity plan', 'One-off launch plan'),
        doc('ad-budget', '13e70zrVQSVAyg_3NbAeNgUq24Fx7aHVb5DZaRGPLy04', 'Proposed monthly advertising budget', 'Meta ads plan for CitiBIM trainings'),
        doc('citibim-calendar-aug26', '1IkDH_eO-jWYLbjhO6Gc9uFlfst0xAMl_0Vxyeh12nkU', 'CitiBIM: August 2026 content calendar', 'Month plan across 5 platforms'),
        doc('citibim-calendar-nov25', '1TR22QmoGgPjCesnQy3uKQ6L4gjTx4eNbeIeZ-qwbE74', 'CitiBIM: November 2025 content calendar', 'Weekly themes, formats and CTAs'),
        doc('engold-calendar', '1UoNf2g_8PoBwmjJ96QE-7g08CQd99mqWSur1_GPTNN8', 'Engold Consulting: June 2025 calendar', 'HR consultancy content plan'),
        doc('unikke-calendar', '1zPFUlS6wxgJ0gWMf5Ba9R-AIyAe0YeOTn9qOCj82pFE', 'Unikke Furniture: weekly calendar', 'Captions, formats and platforms'),
        doc('seraphmedia-calendar', '1Z0FX0OLgelvFkDIj7SltleO3ANhjohzR_f0-7WtVgUc', 'Seraphmedia: content calendar', 'Faith media brand plan'),
        doc('camp-nehemiah-calendar', '1VVYRcJZrLY5e9Ei9TSahMOwukX6T0D7b2uy091eF2Do', 'Camp Nehemiah: 60-day countdown calendar', 'Event publicity plan'),
        doc('quivers-media-plan', '1gJRavePpQCUGHPku1W7ElWmI1mVMbnV4QNNveq7hYBI', 'Quiver\u2019s Conference: media budget & plan', 'Equipment, crew and budget'),
        doc('citibim-reel-scripts', '1jOJTEKtijQZtcdOk8sEaXiYvzXk4prdURH9w9d-0Ass', 'CitiBIM: reel scripts', 'Hooks, shots, captions and CTAs'),
        link('https://drive.google.com/drive/folders/1l2Fl5ekJ7vvZtfVwsIz6b95WBwiNvk4H', 'Full work portfolio on Google Drive')
      ]
    },
    {
      key: 'smm', title: 'Social Media Management', tag: 'Strategy & campaigns', color: '#ff6a3d',
      desc: 'Strategy, content pillars, calendars, paid ads (Meta, TikTok, YouTube, X) and monthly reporting. Led the CitiBIM BIM 2025 launch (+15% engagement). October 2026 at CitiBIM: LinkedIn reactions +61% (379 → 610), comments 4 → 38, Instagram interactions +84%.',
      items: [
        img('assets/img/citibim/m400-launch.jpg', 'CitiBIM: DJI Matrice 400 launch poster'),
        img('assets/img/citibim/enrol-2026.jpg', 'CitiBIM: 2026 BIM courses enrolment'),
        img('assets/img/citibim/drone-course.jpg', 'CitiBIM: drone mapping course flyer'),
        img('assets/img/citibim/one-skill.jpg', 'CitiBIM: educational post'),
        img('assets/img/citibim/tsunami-carousel.jpg', 'CitiBIM: Tsunami Awareness Day carousel'),
        img('assets/img/citibim/office-visit.jpg', 'CitiBIM: office visit carousel'),
        drive('1nVy5pLwgk1INi9PCk9FTZYtZI1lQSy3O', 'Strategy, audits & plans (CitiBIM, Unikke Furniture, plus one-off work for Tukio Konsult and Robovolt)'),
        drive('1-PtmfcC4EwO4nHi-TUHY0UtzrN--W7YB', 'Content calendars (CitiBIM, Engold, Unikke, Seraphmedia)'),
        drive('1eS0syj_JTWei5Mkug7Lsts8zYvHCMCvx', 'Performance reports'),
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
        site('citibimlms', 'https://learn.citibim.com', 'CitiBIM Learning Platform', 'learn.citibim.com: LMS for CitiBIM trainings'),
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
      key: 'design', title: 'Graphic Design', tag: 'Flyers · logos · brands', color: '#ff8fd0',
      desc: 'Flyers, logos and brand designs for churches, ministries, small businesses and events, made in Canva and Photoshop.',
      items: [
        img('assets/img/citibim/bim-explainer-carousel.jpg', 'CitiBIM: BIM explainer carousel'),
        img('assets/img/citibim/monday-motivation-carousel.jpg', 'CitiBIM: Monday motivation carousel'),
        img('assets/img/citibim/unikke-new-year.jpg', 'Unikke Furniture: New Year post'),
        img('assets/img/citibim/making-of-a-prophet-banner.jpg', 'The Making of a Prophet: pre-order banner'),
        deck('carousel-bim-basics', '1tmOi1JAELskpZ_x_UTRvvt4mO82AvzN7qrSeaznjtjM', 'CitiBIM carousel: BIM Basics', 'Slides'),
        deck('carousel-bim-trends', '1DaqoRHn_WD7MUhAWlNKfaPJ22LCZgCScOI18uEmn6Y8', 'CitiBIM carousel: 5 BIM Trends', 'Slides'),
        deck('carousel-bim-efficiency', '14Knx_zHulChobLUrlNlqq53mX_G9pNWFahPuP2xHLo0', 'CitiBIM carousel: How BIM Improves Efficiency', 'Slides'),
        deck('carousel-nepo-lapo', '1r2Q9GZ6tx819QXN6bOEcMbHy-I3BP0mYGkS4GmWVvhQ', 'CitiBIM carousel: Nepo vs Lapo', 'Slides'),
        deck('citibim-brand-deck', '1s5CkgeNDt1wzbpkJG51J1d7bM5YZi-PKwT8ZUrwKm10', 'CitiBIM: Who We Are Becoming', 'Brand deck'),
        deck('camp-nehemiah-logos', '1KkakaWsmSs8LDjgqYJrz8sP04-YVG1BVuHSCg-B7c2k', 'Camp Nehemiah: logo concepts', 'Logo options'),
        doc('youtube-thumbnails', '1OIBUg3YnJUbDlJcOrKLK0KxRE6Rr400PIurSVo2sZpA', 'YouTube thumbnail designs', 'Thumbnail set')
      ].concat([1, 2, 3, 4, 5, 6, 7, 8].map(n => img(`assets/img/designs/logo-0${n}.jpg`, 'Logo design')))
        .concat(Array.from({ length: 16 }, (_, i) => img(`assets/img/designs/flyer-${String(i + 1).padStart(2, '0')}.jpg`, 'Flyer design')))
        .concat([drive('1tpz2OeUeIYtIw1URmE5aYX0_WvbJ1dRw', 'All graphics, carousels & logos'), drive('1EDCO1Kdt3lRCVpXohsEYZVf_AxgfOpg7', 'Church & ministry media'), link('https://olaopaolajide.my.canva.site', 'Canva portfolio')])
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
        vid('making-of-a-prophet-trailer', 'The Making of a Prophet: AI trailer', true),
        vid('robovolt-launch-preview', 'Robovolt launch video (first 45 s)', true),
        vid('skinpop-ai-ad', 'Skinpop Matcha Glow: AI ad sample'),
        vid('sermon-fake-proves-original', 'Seraph Media: sermon clip'),
        vid('sermon-challenge-is-life', 'Seraph Media: sermon clip'),
        vid('sermon-how-do-you-hear-god', 'Seraph Media: sermon clip'),
        vid('citibim-x-launch', 'CitiBIM: X launch reel'),
        vid('citibim-office-vr-demo', 'CitiBIM: office VR demo reel'),
        vid('citibim-bootcamp-recap', 'CitiBIM: bootcamp recap'),
        vid('camp-nehemiah-15-days', 'Camp Nehemiah: 15 days to go (TikTok)'),
        vid('slcsc-intro', 'Spirit Life C&S Church: animated intro', true),
        vid('logo-intro-robot', 'Logo intro animation'),
        reel('bim-explainer', 'CitiBIM: BIM explainer reel'),
        reel('drone-highway', 'CitiBIM: drone highway reel'),
        reel('masterclass-highlight', 'CitiBIM: masterclass highlight'),
        reel('citibim-labubu-trend', 'CitiBIM: trend remake'),
        reel('citibim-trend-remake', 'CitiBIM: trend remake'),
        drive('1V_fF2N4-JDZfAPaFjAkzT41DcAyGeZ-W', 'All videos & reels (CitiBIM, Seraph Media, Skinpop and more)'),
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
        site('istcert', 'https://istcert.vercel.app', 'Certificate Portal', 'Students generate their own certificates'),
        doc('instructed-va-outline', '1nHFGgoACrftQ1c6vUURYRuvsGM1jQOklIBZzBAjyONc', 'Virtual Assistant Training: course outline', '4-week masterclass syllabus'),
        deck('coyep-presentation', '1_qvbER1lTShYNu8UtEyuj7LTUmz3Bg_GXmnRoW0N-jY', 'COYEP: Introduction to AI & AI Automation', 'Talk slides'),
        drive('1h5mvbJ7jbQU1GNUHUru1okw1Jz4l2-yo', 'All course outlines, guides and prompts')
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

// Tools shown as rings in About (label, short mark, level 0-100)
window.PORTFOLIO.rings = [['Meta Ads', 'Ads', 90], ['Canva', 'Cv', 95], ['Premiere Pro', 'Pr', 80], ['Make.com', 'Mk', 90], ['n8n', 'n8n', 80], ['React', 'Re', 75], ['Supabase', 'Sb', 75], ['Asana', 'As', 90]];

// GitHub: projects with their stack. private = repo is private or belongs to a client organisation.
window.PORTFOLIO.github = [
  { name: 'seraphmediaapp', desc: 'C&S Digital Library: sermons, hymnary, books, live stream and community.', stack: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Playwright'], live: 'https://seraphmedia.com.ng', private: true },
  { name: 'spiritlifesom', desc: 'Spirit Life School of Ministry website and LMS for 56+ students.', stack: ['React', 'TypeScript', 'Supabase', 'Tailwind'], live: 'https://spiritlifesom.org', private: true },
  { name: 'certify-me', desc: 'Inscribe Hub certificate portal: students generate their own certificates.', stack: ['TanStack Start', 'React', 'Supabase', 'Tailwind'], live: 'https://istcert.vercel.app', private: true },
  { name: 'theinscribehub', desc: 'Inscribe Hub: brand, services, packages and academy.', stack: ['React', 'TypeScript', 'Tailwind', 'Playwright'], live: 'https://theinscribehub.vercel.app', private: true },
  { name: 'tisbuilder', desc: 'Web builder portfolio listing 11+ shipped projects.', stack: ['React', 'TypeScript', 'Tailwind'], live: 'https://tisbuilder.vercel.app', private: true },
  { name: 'instructedva', desc: 'VA & Digital Literacy Masterclass landing page.', stack: ['React', 'TypeScript', 'Tailwind'], live: 'https://instructedva.vercel.app', private: true },
  { name: 'instructedsmm', desc: 'SMM & AI Digital Literacy Masterclass landing page.', stack: ['React', 'TypeScript', 'Tailwind'], live: 'https://instructedsmm.vercel.app', private: true },
  { name: 'spiritlife-web-app', desc: 'Engaged Singles attendance tracker for Spirit Life church.', stack: ['Vite', 'Tailwind'], live: 'https://spiritlife-engaged-singles.vercel.app', private: true },
  { name: 'adedayo-portfolio', desc: '3D portfolio for a video editor and cinematographer.', stack: ['three.js', 'anime.js', 'JavaScript'], live: 'https://adelumola.netlify.app', repo: 'https://github.com/Olajide9909/adedayo-portfolio' }
];
