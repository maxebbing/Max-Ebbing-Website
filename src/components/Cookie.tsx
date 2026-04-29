"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import styles from "./css/Cookie.module.css";

const GA_ID = "G-RT7C4EPBS6";
const CLARITY_ID = "wgdwan2m2w";

export default function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookie-consent");

    if (storedConsent === "accepted" || storedConsent === "rejected") {
      setConsent(storedConsent);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
  }

  function rejectCookies() {
    localStorage.setItem("cookie-consent", "rejected");
    setConsent("rejected");
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}
          </Script>

          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />

          <Script id="ga" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div className={styles.cookieBanner}>
          <div className={styles.cookieBannerContent}>
            <div>
              <p className={styles.cookieTitle}>Cookies & Analyse</p>
              <p className={styles.cookieText}>
                Diese Website nutzt Google Analytics und Microsoft Clarity, um
                die Nutzung der Website zu analysieren und sie zu verbessern.
              </p>
            </div>

            <div className={styles.cookieActions}>
              <button
                type="button"
                className={`${styles.cookieButton} ${styles.secondary}`}
                onClick={rejectCookies}
              >
                Ablehnen
              </button>

              <button
                type="button"
                className={`${styles.cookieButton} ${styles.primary}`}
                onClick={acceptCookies}
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}