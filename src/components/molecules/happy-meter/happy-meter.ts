export const LoadHappyMeterComponent = (lang) => {
  /// remove old script , case if lang changed then reload it with the new lang
  document.getElementById("happiness-meter-widget-script")?.remove();

  const script = document.createElement("script");
  script.id = "happiness-meter-widget-script";
  script.src = "https://happinessmeter.gov.ae/webwidget/hminit.js";
  script.async = true;
  script.setAttribute("data-analytics-tag", "disabled");
  script.setAttribute("data-container-id", "happiness-meter-widget-container");

  script.setAttribute("data-language", lang);
  script.setAttribute(
    "data-key",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODJ9.6Tjm9aSZKrV-8LQQU_9kCD3oSF0ejt0UQW10BDgfW_Q"
  );
  script.setAttribute("data-on-finish", "console.log(textStatus)");
  script.setAttribute("data-entity-sequence-id", "110");
  script.setAttribute("data-main-service-sequence-id", "0");
  script.setAttribute("data-subservice-sequence-id", "0");
  script.setAttribute("data-subservice-complementary-id", "0");
  script.setAttribute("data-full-sequence-code", "000-000-000-000");
  script.setAttribute("data-service-name-en", "Service name En");
  script.setAttribute("data-service-name-ar", "Service name Ar");
  script.setAttribute("data-customer-id", "0");
  script.setAttribute("data-email", "email@email.id");
  script.setAttribute("data-phone", "+971000000000");
  script.setAttribute("data-transaction-id", "0");
  script.setAttribute("data-emirates-id", "0");
  script.setAttribute("data-version", "latest");
  script.setAttribute("data-delay", "0");
  script.setAttribute("data-mode", "auto");
  script.setAttribute("data-mode-click-id", "happiness-meter-widget-button");
  script.setAttribute(
    "data-css-url",
    "https://happinessmeter.gov.ae/webwidget/services.css"
  );
  script.setAttribute("data-origin-url", "https://happinessmeter.gov.ae");

  // head.appendChild(script);
  document.body.append(script);
};
