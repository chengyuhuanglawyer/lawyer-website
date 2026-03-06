// i18n Translation System
const translations = {
  en: {
    // Nav
    "nav.logo": "Cheng Yu Law Firm",
    "nav.free": "Free Consultation",
    "nav.services": "Services",
    "nav.pricing": "Fees",
    "nav.team": "Our Team",
    "nav.news": "Latest News",
    "nav.about": "About Us",
    "nav.contact": "Contact Us",

    // Hero
    "hero.subtitle": "ABOUT OUR FIRM",
    "hero.title": "Professional Defense, Trusted Representation",
    "hero.desc": "Cheng Yu Law Firm specializes in civil & criminal litigation, labor disputes, family law, real estate litigation, enforcement, legal consulting, and more. We also offer free legal consultations.",
    "hero.cta": "Free Consultation",
    "hero.line": "LINE Consult",

    // LINE Modal
    "modal.title": "Add LINE Friend",
    "modal.desc": "Scan the QR Code below for instant consultation",

    // Services
    "svc.title": "Services",
    "svc.civil": "Civil Disputes",
    "svc.civil.desc": "Assistance with tort claims, monetary debts, and contract disputes. We provide clear strategies and documentation to protect your legal rights.",
    "svc.criminal": "Criminal Law",
    "svc.criminal.desc": "Full accompaniment from investigation to trial, seeking deferred prosecution, acquittal, or reduced sentencing to minimize your risk.",
    "svc.family": "Family & Divorce",
    "svc.family.desc": "Handling divorce, custody, support, and property division while balancing rights and parent-child relationships for a stable transition.",
    "svc.inheritance": "Inheritance",
    "svc.inheritance.desc": "Pre-planning and dispute resolution combined. Assistance with estate inventory, division, and inheritance registration for transparent distribution.",
    "svc.consultant": "Legal Consulting",
    "svc.consultant.desc": "Dedicated legal counsel for businesses, community committees, and individuals. Contract review, risk management, and legal strategy for long-term protection.",
    "svc.labor": "Labor Disputes",
    "svc.labor.desc": "Handling dismissal, severance, overtime, transfers, occupational injuries, employee confidentiality and non-compete clauses. Assisting businesses with employment contracts, confidentiality agreements, disciplinary rules, and labor dispute mediation.",
    "svc.traffic": "Traffic Accidents",
    "svc.traffic.desc": "Comprehensive assistance with accident compensation, criminal liability, and insurance claims including evidence collection, negotiation, and litigation.",
    "svc.fraud": "Fraud Cases",
    "svc.fraud.desc": "Specializing in online fraud, investment scams, and property crimes. Providing reporting guidance, provisional attachment, and litigation strategies to recover losses.",
    "svc.realestate": "Real Estate Cases",
    "svc.realestate.desc": "Pre-sale property transactions, building damage disputes, demolition and land return, cancellation of mortgage registration, right of way for landlocked property, land division, boundary demarcation, and other real estate matters.",
    "svc.special": "Special Procedures",
    "svc.special.desc": "Applications for compulsory execution, provisional execution, payment orders, promissory note enforcement rulings, provisional attachment, and provisional injunctions.",
    "svc.other": "Other Services",
    "svc.other.desc": "Legal consultation, training, contract witnessing. Drafting of contracts, certified letters, attorney letters, legal opinions, and various documents.",

    // Pricing
    "price.title": "Service Process & Fees",
    "price.step1": "Free Consultation",
    "price.step1.desc": "Free consultation (LINE or first in-person visit) to clarify case direction.",
    "price.step2": "Paid Consultation",
    "price.step2.desc": "In-person consultation with one-on-one case discussion and professional analysis.",
    "price.step2.price": "From NT$ 2,000",
    "price.step3": "Formal Retainer",
    "price.step3.desc": "Sign a retainer agreement; attorney handles the case throughout.",
    "price.step3.price": "Case-based pricing",
    "price.table.title": "Attorney Fee Schedule",
    "price.table.badge": "■ Transparent, Affordable ■",
    "price.consult": "Paid Consultation",
    "price.consult.val": "NT$ 2,000 / 30 min",
    "price.letter": "Attorney Letter",
    "price.letter.val": "From NT$ 10,000",
    "price.certified": "Demand Letter",
    "price.certified.val": "From NT$ 6,000",
    "price.litigation": "Litigation Retainer",
    "price.litigation.val": "From NT$ 60,000 / trial",
    "price.brief": "Legal Brief Drafting",
    "price.brief.val": "From NT$ 15,000 / brief",
    "price.contract": "Contract Drafting",
    "price.contract.val": "From NT$ 12,000",
    "price.enforcement": "Enforcement Procedures",
    "price.enforcement.val": "Case-based quote",
    "price.othersvc": "Other Legal Services",
    "price.othersvc.val": "Case-based quote",
    "price.note": "☑ Service Areas: Taipei, New Taipei, Taoyuan, Hsinchu, Taichung, Tainan, Kaohsiung, and nationwide",

    // Testimonials
    "test.title": "Client Feedback",
    "test.desc": "Thank you for the encouragement — it drives us forward",
    "test.1": '"The lawyer made what I thought was a complicated divorce process smooth and successful. Very grateful."',
    "test.1.name": "— Mr. Ding",
    "test.2": '"The attorney was very professional and patient, carefully handling my case from start to finish. It gave me great peace of mind."',
    "test.2.name": "— Ms. Lu",
    "test.3": '"The free consultation gave me a clear direction for my case. I felt confident retaining them afterwards. Highly recommended."',
    "test.3.name": "— Mr. Weng",
    "test.4": '"They helped me secure a fair compensation amount for my traffic accident claim. The lawyer was very proactive throughout."',
    "test.4.name": "— Ms. Huang",

    // FAQ
    "faq.title": "FAQ",
    "faq.q1": "What is a free legal consultation? What can I ask?",
    "faq.a1": "Our firm offers free legal consultations (via LINE or first in-person visit). Our attorneys will help clarify your legal issues at no charge. Whether it involves civil, criminal, divorce, contract, inheritance, debt, enforcement, or child custody matters, our lawyers can provide preliminary analysis and direction. Through free consultation, you can first understand your situation before deciding on further legal action.",
    "faq.q2": "Is my case civil or criminal? How do I tell?",
    "faq.a2": "Many cases may involve both civil and criminal aspects. We recommend consulting a lawyer first. An attorney can help distinguish the type of litigation and provide a comprehensive strategy.",
    "faq.q3": "What is the difference between mediation and litigation?",
    "faq.a3": "Mediation is negotiation-based, with simpler and faster procedures. Litigation is more formal and requires a court ruling. A lawyer can assess your case and recommend trying mediation first.",
    "faq.q4": "Can I back out of a signed contract?",
    "faq.a4": "If a contract contains grossly unfair or illegal terms, it may be possible to apply for rescission or claim invalidity. A lawyer can review the contract and propose legal remedies.",
    "faq.q5": "Can I file a lawsuit if I was scammed?",
    "faq.a5": "Yes. A lawyer can assist with filing reports, gathering evidence, and initiating litigation or negotiation to protect the victim's rights.",
    "faq.q6": "How long does a lawsuit take?",
    "faq.a6": "Duration varies by case. Mediation may take weeks; litigation may take months or even years. A lawyer can help simplify issues and speed up the process.",
    "faq.cta.text": "Still have questions?",
    "faq.cta.btn": "Free Consultation Now",

    // Team
    "team.title": "Our Team",
    "team.name": "Attorney Chian-Ling Huang",
    "team.motto": "From court practice to attorney advocacy, protecting clients' rights with dual expertise.",
    "team.credentials": "Passed both the National Attorney Exam and Court Clerk Exam | Years of court and legal practice experience.",
    "team.bio": "With years of experience as a Tainan District Court clerk and deep attorney practice background, she thoroughly understands court operations and trial logic. Protecting clients\u0027 rights from both judicial system and legal strategy perspectives.",

    // Footer address
    "footer.address": "3F, No. 155, Ziqiang S. Rd., Zhubei City, Hsinchu County",

    // News
    "news.title": "Latest News",
    "news.tag.announce": "Announcement",
    "news.1.title": "New IG account: chengyuhuanglawyer and Threads account: chengyuhuanglawyer",
    "news.1.desc": "Follow us for legal updates and legal knowledge shared by our attorneys.",

    // About
    "about.title": "Cheng Yu Law Firm",
    "about.intro": "Cheng Yu Law Firm, guided by the principle of 'Professional Defense, Trusted Representation,' specializes in civil & criminal litigation, labor disputes, family law, real estate litigation, enforcement, legal consulting, and more. We also offer free legal consultations.",

    // Contact
    "contact.title": "Free Legal Consultation",
    "contact.desc": "We listen carefully to your concerns and arrange consultation promptly",
    "contact.address": "Address: 3F, No. 155, Ziqiang S. Rd., Zhubei City, Hsinchu County",
    "contact.phone": "Phone: 03-6581500",
    "contact.email": "Email: chengyuhuanglawyer@gmail.com",
    "contact.hours": "Mon–Fri 09:00 – 18:00",
    "form.name": "Name",
    "form.name.ph": "Enter your name",
    "form.phone": "Phone",
    "form.phone.ph": "Enter your phone number",
    "form.email": "Email",
    "form.email.ph": "Enter your email",
    "form.company": "Company",
    "form.company.ph": "Enter company name (optional)",
    "form.nationality": "Nationality",
    "form.nationality.ph": "Select nationality",
    "form.nationality.local": "Local",
    "form.nationality.foreign": "Foreign",
    "form.type": "Consultation Type",
    "form.type.ph": "Select consultation type",
    "form.type.civil": "Civil Disputes",
    "form.type.criminal": "Criminal Law",
    "form.type.family": "Family & Divorce",
    "form.type.inheritance": "Inheritance",
    "form.type.consultant": "Legal Consulting",
    "form.type.finance": "Financial Disputes",
    "form.type.traffic": "Traffic Accidents",
    "form.type.fraud": "Fraud Cases",
    "form.type.other": "Other",
    "form.referral": "How did you hear about us?",
    "form.referral.ph": "Please select",
    "form.referral.friend": "Friend/Family referral",
    "form.referral.other": "Other",
    "form.referral.detail": "Enter referrer name or other source",
    "form.time": "Preferred Contact Time",
    "form.time.ph": "e.g., Weekday afternoons 2-5 PM",
    "form.message": "Consultation Details",
    "form.message.ph": "Briefly describe your legal issue",
    "form.submit": "Submit Inquiry",

    // Footer
    "footer.firm": "Cheng Yu Law Firm",
    "footer.desc": "Guided by professionalism, defense, and trust, we fight for every client's best interests. Free legal consultations available so you never face legal issues alone.",
    "footer.cta": "Free Consultation Now",
    "footer.services": "Services",
    "footer.links": "Quick Links",
    "footer.contact": "Contact Info",
    "footer.civil": "Civil Disputes",
    "footer.criminal": "Criminal Law",
    "footer.family": "Family & Divorce",
    "footer.inheritance": "Inheritance",
    "footer.aboutus": "About Us",
    "footer.team": "Our Team",
    "footer.cases": "Case Studies",
    "footer.contactus": "Contact Us",
    "footer.copyright": "© 2026 Cheng Yu Law Firm. All Rights Reserved."
  }
};

let currentLang = 'zh';

function setLanguage(lang) {
  currentLang = lang;
  const btn = document.getElementById('langToggle');

  if (lang === 'en') {
    btn.textContent = '中';
    document.documentElement.lang = 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = translations.en[key];
      if (!val) return;

      // Store original Chinese text
      if (!el.hasAttribute('data-zh')) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('data-zh', el.placeholder);
        } else if (el.tagName === 'OPTION') {
          el.setAttribute('data-zh', el.textContent);
        } else {
          el.setAttribute('data-zh', el.innerHTML);
        }
      }

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.tagName === 'OPTION') {
        el.textContent = val;
      } else {
        // Preserve child elements like icons
        const icons = el.querySelectorAll('i, svg');
        if (icons.length > 0 && el.children.length > 0) {
          const iconHTML = Array.from(icons).map(i => i.outerHTML).join(' ');
          el.innerHTML = iconHTML + ' ' + val;
        } else {
          el.textContent = val;
        }
      }
    });
  } else {
    btn.textContent = 'EN';
    document.documentElement.lang = 'zh-Hant';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const zh = el.getAttribute('data-zh');
      if (!zh) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = zh;
      } else if (el.tagName === 'OPTION') {
        el.textContent = zh;
      } else {
        el.innerHTML = zh;
      }
    });
  }
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLanguage(currentLang === 'zh' ? 'en' : 'zh');
});
