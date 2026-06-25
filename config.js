// ════════════════════════════════════════════════════════════
// CONFIGURATION ONLY TENTACLES
// ════════════════════════════════════════════════════════════
// ⚠️ Ce fichier contient uniquement des clés PUBLIQUES.
// Une clé "publique"/"anon" est faite pour être visible dans le
// navigateur — ce n'est pas un secret, donc pas un problème de
// sécurité même si quelqu'un regarde le code source sur GitHub.
// Le vrai secret (le secret webhook Buy Me a Coffee) reste
// UNIQUEMENT dans Supabase (jamais ici, jamais sur GitHub).
//
// Remplis les valeurs ci-dessous après avoir suivi SETUP.md.

window.OT_CONFIG = {
  // Dans Supabase Dashboard > Project Settings > API
  SUPABASE_URL: "https://tioojipunomcuksvstbf.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_CYNMuibsKLsZO1ezkPmuqA_emMeEFvR",

  // Ton URL publique Buy Me a Coffee, ex : "https://buymeacoffee.com/tonpseudo"
  // C'est vers cette page que les boutons "S'abonner" du site renvoient.
  BMC_PAGE_URL: "https://buymeacoffee.com/Dreadlocktopus",

  // Noms tels que configurés dans ton dashboard Buy Me a Coffee
  // (Membership > Levels). Ils servent uniquement à l'affichage des prix
  // sur le site ; le vrai matching de palier se fait côté backend à
  // partir du nom envoyé par BMC dans le webhook.
  TIER_SUB_LABEL: "Abonné",
  TIER_SUB_PRICE: "1,00€",
  TIER_VIP_LABEL: "VIP",
  TIER_VIP_PRICE: "3,00€",

  CURRENCY: "EUR",
};
