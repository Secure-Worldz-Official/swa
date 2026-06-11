export const courses = [
  {
    id: 'cybersecurity-with-ai',
    aliases: ['cybersecurity', 'cybersecuritywithai'],
    title: 'Cybersecurity with AI',
    eyebrow: 'Enterprise defense bootcamp',
    preview:
      'Master AI driven threat detection and automate defensive workflows with live cyber operations training.',
    hook: 'Master AI driven threat detection and automate your defense mechanisms like an enterprise expert.',
    pricingLabel: 'Premium Package',
    originalPrice: '\u20B95,000',
    offerTag: 'Active Summer Offer',
    offerPrice: '\u20B92,000',
    duration: '1 Month Intensive Bootcamp',
    scheduleLabel: 'Daily 1 Hour Live Tracker',
    scheduleTime: '7:00 PM to 8:00 PM',
    timingTrack: '7:00 PM - 8:00 PM Daily',
    certificate: 'Verified Global Certificate of Completion',
    summary:
      "Master AI driven threat detection and learn to automate defensive workflows. Gain combat level deployment skills by simulating live enterprise cyber attacks, scripting automated patches, and analyzing real time threat patterns. You aren't just learning theory—you are breaking and building defense systems.",
    timelinePoints: [
      'Live tracking logs for daily guided execution',
      'Industry simulators for real time defense scenarios',
      'Certification parameters with verified completion',
    ],
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
    id: 'vibe-coding',
    aliases: ['vibecoding', 'vibe coding'],
    title: 'Vibe Coding',
    eyebrow: 'AI app builder accelerator',
    preview:
      'Stop fighting syntax errors and learn to architect production ready applications fast using AI code agents.',
    hook: 'Stop fighting syntax errors. Learn how to orchestrate full stack apps smoothly using natural language and cutting edge AI code agents.',
    pricingLabel: 'Original Price',
    originalPrice: '\u20B92,500',
    offerTag: 'Limited Executive Offer',
    offerPrice: '\u20B9999',
    duration: '3 Week Rapid Accelerator',
    scheduleLabel: 'Flexible Hands On Project Timeline',
    scheduleTime: 'Self paced project workflow with guided checkpoints',
    timingTrack: 'Flexible Hands On Milestones',
    certificate: 'Specialized Vibe Developer Badge and Certificate of Completion',
    summary:
      'Stop getting stuck in syntax hell. Learn to architect full stack web platforms and production ready applications fast by orchestrating advanced AI code agents. Master the art of structured system logic, codebase guidance, and prompt pipelines while shipping 3 major projects straight to your GitHub portfolio.',
    timelinePoints: [
      'Flexible hands on milestones for guided project work',
      '3 live MVP portfolio projects with review ready output',
      'Specialized Vibe Developer Badge and certificate confirmation',
    ],
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
    id: 'prompt-engineering',
    aliases: ['promptengineering', 'prompt engineering'],
    title: 'Prompt Engineering',
    eyebrow: 'Advanced LLM communication masterclass',
    preview:
      'Learn how to communicate with LLMs using structure, context, evaluation, and repeatable workflows that produce better results.',
    hook: 'Master the exact science of communication with LLMs. Move past basic prompts and unlock advanced reasoning patterns.',
    pricingLabel: 'Standard Track',
    originalPrice: '\u20B92,500',
    offerTag: 'Special Launch Pricing',
    offerPrice: '\u20B9999',
    duration: '2 Week Masterclass',
    scheduleLabel: 'Live Interactive Weekend Workshops',
    scheduleTime: 'Weekend sessions with live exercises',
    timingTrack: 'Live Weekend Workshops',
    certificate: 'Certified Prompt Engineer Credentials and downloadable framework assets',
    summary:
      'Unlock the hidden layers of Large Language Models. Move past basic questions and master advanced reasoning frameworks, chain of thought engineering, zero shot/few shot templates, and automated API enterprise workflows. Learn to design precise communication blueprints for corporate data environments.',
    timelinePoints: [
      'Live weekend workshops with structured exercises',
      'Advanced reasoning templates and workflow design',
      'Certified Prompt Engineer credentials with assets',
    ],
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
  course.aliases.forEach((alias) => {
    map[alias] = course;
  });
  return map;
}, {});
