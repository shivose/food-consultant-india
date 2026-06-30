const rawPhone = process.env.NEXT_PUBLIC_PHONE ?? "919930693061";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.foodconsultpro.com";

export const siteBusiness = {
  name: "FoodConsultPro",
  tagline: "Restaurant Operations & FSSAI Compliance Consulting",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@foodconsultpro.com",
  grievanceOfficer: process.env.NEXT_PUBLIC_GRIEVANCE_OFFICER ?? "FoodConsultPro Support Team",
  jurisdiction: "Thane, Maharashtra, India",
  effectiveDate: "June 30, 2025",
};

export const siteContact = {
  phone: rawPhone.replace(/\D/g, ""),
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+91 9930693061",
  whatsappMessage:
    "Hi, I'd like to schedule a restaurant compliance consultation with FoodConsultPro.",
  address:
    process.env.NEXT_PUBLIC_OFFICE_ADDRESS ??
    "Lodha Signet 1, Unit No. 825, Premier Colony Ground, Thane, 421204",
};

export function getTelLink() {
  return `tel:+${siteContact.phone}`;
}

export function getWhatsAppLink() {
  return `https://wa.me/${siteContact.phone}?text=${encodeURIComponent(siteContact.whatsappMessage)}`;
}

export function getGoogleMapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteContact.address)}`;
}
