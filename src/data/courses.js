export const courses = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity with AI',
    eyebrow: 'Enterprise defense bootcamp',
    hook: 'Master AI driven threat detection and automate your defense mechanisms like an enterprise expert.',
    pricing: 'Premium Package priced at \u20B95,000. Active Summer Offer: Get Full Access for just \u20B92,000.',
    duration: '1 Month Intensive Bootcamp',
    schedule: 'Daily 1 Hour Live Tracker from 7:00 PM to 8:00 PM',
    summary:
      'A practical cyber program for learners who want guided labs, clear explanations, and real confidence with modern AI assisted security workflows.',
    highlights: [
      {
        title: 'Real Time Industry Experience',
        body:
          'You will gain hands on combat level training by simulating live cyber attacks, deploying real time automated patches, and writing AI log scripts that help you understand how defenders think in active environments.',
      },
      {
        title: 'Official Credentials',
        body:
          'A verified Global Certificate of Completion is provided immediately upon project submission, helping you present your work clearly on your resume and portfolio.',
      },
      {
        title: 'Practical Tool Confidence',
        body:
          'You will learn how to read alerts, document incidents, use automation responsibly, and explain security decisions in language that teams and hiring managers understand.',
      },
    ],
    outcomes: [
      'Simulate attacks and document defensive actions',
      'Create AI assisted security scripts and reports',
      'Build a project submission ready for certificate review',
    ],
  },
  {
    id: 'vibecoding',
    title: 'Vibe Coding',
    eyebrow: 'AI app builder accelerator',
    hook: 'Stop fighting syntax errors. Learn how to orchestrate full stack apps smoothly using natural language and cutting edge AI code agents.',
    pricing: 'Original Price \u20B92,500. Limited Executive Offer: \u20B9999.',
    duration: '3 Week Rapid Accelerator',
    schedule: 'Flexible Hands On Project Timeline',
    summary:
      'A builder focused program for students, founders, creators, and operators who want to turn ideas into real software without getting stuck in repetitive syntax work.',
    highlights: [
      {
        title: 'The Future of Development',
        body:
          'Perfect for builders who want to launch MVPs, web tools, and software products fast. Learn how to properly guide AI code tools to generate clean scalable files while you focus on structural logic and architecture.',
      },
      {
        title: 'Project Portfolio',
        body:
          'Build and ship 3 live production ready web platforms directly onto your GitHub profile, with guided review so every project feels presentable and useful.',
      },
      {
        title: 'Certification',
        body:
          'A Specialized Vibe Developer Badge and Certificate of Completion are included so you can show both learning progress and shipped project proof.',
      },
    ],
    outcomes: [
      'Plan app structure before generating code',
      'Guide AI agents with clear product instructions',
      'Publish 3 portfolio projects with clean documentation',
    ],
  },
  {
    id: 'promptengineering',
    title: 'Prompt Engineering',
    eyebrow: 'Advanced LLM communication masterclass',
    hook: 'Master the exact science of communication with LLMs. Move past basic prompts and unlock advanced reasoning patterns.',
    pricing: 'Standard Track valued at \u20B92,500. Special Launch Pricing: \u20B9999.',
    duration: '2 Week Masterclass',
    schedule: 'Live Interactive Weekend Workshops',
    summary:
      'A focused masterclass for professionals, students, and creators who want stronger outputs from AI tools through structure, context, evaluation, and repeatable workflows.',
    highlights: [
      {
        title: 'Advanced Frameworks',
        body:
          'Learn structural system instructions, zero shot and few shot engineering, reasoning pattern design, and automated workflow pipelines for repeatable high quality outputs.',
      },
      {
        title: 'Enterprise Use Cases',
        body:
          'Learn how to engineer complex templates for corporate workflows, API automation, data analysis tasks, research briefs, and internal knowledge operations.',
      },
      {
        title: 'Certification',
        body:
          'Certified Prompt Engineer Credentials are included with downloadable framework assets that you can reuse for work, study, and client projects.',
      },
    ],
    outcomes: [
      'Write prompts that guide role, context, format, and quality',
      'Create reusable templates for business tasks',
      'Build a personal library of tested prompt frameworks',
    ],
  },
];

export const courseMap = courses.reduce((map, course) => {
  map[course.id] = course;
  return map;
}, {});
