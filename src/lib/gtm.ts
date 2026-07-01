export const GTM_EVENTS = {
  LEAD_FORM_SUBMIT: "lead_form_submit",
  PHONE_CLICK: "phone_click",
  WHATSAPP_CLICK: "whatsapp_click",
} as const;

type DataLayerEvent = (typeof GTM_EVENTS)[keyof typeof GTM_EVENTS];

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushDataLayerEvent(
  event: DataLayerEvent,
  data?: Record<string, unknown>,
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

export function getGtmId() {
  return process.env.NEXT_PUBLIC_GTM_ID?.trim() || "";
}
