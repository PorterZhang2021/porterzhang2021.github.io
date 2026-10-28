// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-work",
          title: "work",
          description: "Systems and tools I build, maintain, and study.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-what-makes-a-message-queue-useful-in-production",
        
          title: "What Makes a Message Queue Useful in Production?",
        
        description: "A message queue is more than a fast path between services. Its value depends on the guarantees and operational clarity it gives its users.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/what-makes-a-message-queue-useful/";
          
        },
      },{id: "post-how-i-explore-an-unfamiliar-codebase",
        
          title: "How I Explore an Unfamiliar Codebase",
        
        description: "A repeatable way to build a useful mental model before making changes in a new repository.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/how-i-explore-an-unfamiliar-codebase/";
          
        },
      },{id: "projects-robustmq",
          title: 'RobustMQ',
          description: "A high-performance, cloud-native message queue for multiple messaging protocols.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_robustmq/";
            },},{id: "projects-oryxos",
          title: 'OryxOS',
          description: "An open-source distributed AI agent operating system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_oryxos/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%6F%72%74%65%72%7A%68%61%6E%67%32%30%32%31@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/PorterZhang2021", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
