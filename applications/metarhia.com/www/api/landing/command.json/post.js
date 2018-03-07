(client, callback) => {
  const cmd = client.fields.cmd;
  const data = {
    about: [
      'Metarhia is a Community and Technology Stack',
      'for Distributed Highload Applications and Data Storage',
      '',
      'Activities:',
      '• Academic fields: Research, Education and Open Lectures',
      '• Open Source Contribution e.g. Node.js, Impress, Metasync, etc.',
      '• Services and Products',
      '',
      'Metarhia provides following services:',
      '• Software Development',
      '• Software Audit, Quality Control and Code Review',
      '• Business Processes Analysis',
      '• Architecture Solutions and Consulting',
      '• Database structure and technical specification',
      '• Project planning: time and cost estimation',
      '• Education, Training, Team building and Recruiting',
      '',
      'Metarhia is a group of IT professionals, located in Kiev (Ukraine)',
      'and working together in software development, internet solutions',
      'and production automation. We are experienced in development and',
      'system integration, ours architects are over 20 years in information',
      'technologies. Ours software developers have practical knowledge in',
      'programming including C, C++, JavaScript, Rust, Go, Swift, Java,',
      'Objective-C, Kotlin, C#, Delpli, Assembler, Python, Haskell, etc.',
      'We provide solutions for Unix/Linux, Windows, OSX, Android, Internet',
      'solutions and Embedded systems.'
    ],
    fields: [
      'Software fields:',
      '• Highload applications, Scaling and Performance optimization',
      '• Corporate applications, Databases and Information Systems',
      '• Systems Architecture and System Integration',
      '• Interactive applications, games and second screen TV solutions',
      '• Clusterware and massively parallel distributed cluster/cloud',
      '• Big-data and big-memory solutions',
      '• Deep learning, Neural networks, Data analysis',
      '• Production automation, cybernetics, telemetry',
      '• Network applications and protocols',
      '• Mobile, Desktop and Web GUI Applications',
      '• Embedded systems, Hardware and System Programming',
      '',
      'Applied fields:',
      '• eGovernance Information Systems',
      '• Health Information Systems',
      '• Financial analytics and Trading Systems',
      '• Asset tracking solutions, RFID & GPS navigation',
      '• RFID (Radio Frequency IDentification)',
      '• Oil and gas transporting automation and telemetry',
      '• Social networking and Messaging solutions',
      '• Document flow automation, Timing and Planing solutions',
      '• Expert systems and CAD/CAM software',
    ],
    team: [
      'Metarhia core team:',
      '@tshemsedinov @aqrln @belochub @nechaido @GYFK @lidaamber',
      '@lundibundi @GreatAndPowerfulKing @grimelion @DzyubSpirit',
      '@RayGron @alinkedd @j-martyn @johnbizokk @bugagashenkj',
      '@Kowalski0805 @dimanadko @kuvichkamaksim @mille-nium',
      '@o-rumiantsev @Tariod',
    ],
    contacts: [
      'Timur Shemsedinov',
      'tshemsedinov@github',
      'timur.shemsedinov@gmail.com',
      'tshemsedinov@facebook',
      'marcusaurelius@habrahabr',
    ],
    links: [
      'Links:',
      '• Open Source code https://github.com/metarhia',
      '• Educational code Examples https://github.com/HowProgrammingWorks',
      '',
      'Meetup Groups:',
      '• https://www.meetup.com/HowProgrammingWorks',
      '• https://www.meetup.com/NodeUA',
      '• https://www.meetup.com/KievNodeJS',
      '',
      'Telegram Groups:',
      '• https://t.me/MetarhiaHPW',
      '• https://t.me/nodeua',
      '',
      'Telegram Channels:',
      '• https://t.me/HowProgrammingWorks',
      '• https://t.me/metarhia',
    ],
    stack: [
      'Metarhia Technology Stack Key Ideas:',
      '• Unification: API, data, contracts',
      '• Homogeneity of server infrastructure',
      '• No back compatibility (no legacy support)',
      '• Open Source & no vendor lock',
      '• Architectural decisions (single plan)',
      '• Community and trainings',
      '',
      'Impress Application Server',
      'for highload clusters and private clouds with Node.js',
      'https://github.com/metarhia/impress',
      '',
      'JSTP protocol',
      'RPC, event bus, db sync on TCP, TLS, WebSocket and JSON5;',
      'with SDK for mobile and desktop: JavaScript, Java, Swift,',
      'C++, Haskell, Python, Objective-C, PHP, Golang, C#',
      'https://github.com/metarhia/jstp',
      '',
      'GlobalStorage',
      'Distributed reactive in-memory DBMS, work in progress',
      'https://github.com/metarhia/globalstorage',
      '',
      'Metasync: asynchronous programming abstractions',
      'https://github.com/metarhia/metasync',
      '',
      'Maojian: testing framework',
      'https://github.com/metarhia/maojian',
    ]
  };
  callback({ response: data[cmd] });
}
