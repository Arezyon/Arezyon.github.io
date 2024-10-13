// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Thanh Hoa",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://youtu.be/dQw4w9WgXcQ?si=2klFq_NSiV_bE0d9",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Social",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "workspace",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "Drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
            {
              name: "Messenger",
              url: "https://www.messenger.com/",
              icon: "brand-messenger",
              icon_color: palette.blue,
            },
            {
              name: "Zalo",
              url: "https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F#",
              icon: "letter-z",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "Youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "work",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "research",
          links: [
            {
              name: "Github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "Udemy",
              url: "https://www.udemy.com/",
              icon: "underline",
              icon_color: palette.peach,
            },
            {
              name: "FMHY",
              url: "https://fmhy.net/",
              icon: "baseline-density-medium",
              icon_color: palette.red,
            },,
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "Lambda AI",
              url: "https://lambda.chat/chatui/",
              icon: "message-chatbot",
              icon_color: palette.red,
            }
          ],
        },
      ],
    },
    {
      name: "relax",
      background_url: "src/img/banners/cbg-1.gif",
      categories: [
        {
          name: "Game Related",
          links: [
            {
              name: "Masterduel Meta",
              url: "https://www.masterduelmeta.com/",
              icon: "cards",
              icon_color: palette.green,
            },
            {
              name: "Steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "Fun Stuff",
          links: [
            {
              name: "Typing",
              url: "https://monkeytype.com/",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "Pokemon Showdown",
              url: "https://pokemonshowdown.com/",
              icon: "pokeball",
              icon_color: palette.peach,
            },
          ],
        },
    
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
