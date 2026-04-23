const klaroConfig = {
  elementID: "klaro",
  storageMethod: "cookie",
  cookieName: "klaro-consent",
  mustConsent: true,

  services: [
    {
      name: "google-analytics",
      title: "Google Analytics",
      purposes: ["analytics"],
      cookies: [/^_ga/, /^_gid/],
      required: false,
    },
    {
      name: "clarity",
      title: "Microsoft Clarity",
      purposes: ["analytics"],
      required: false,
    },
  ],
};

export default klaroConfig;