export interface WidgetItem {
  id: string;
  name: string;
  shortCode: string;
  category: 'checkout' | 'merchandising' | 'urgency' | 'trust';
  description: string;
  elementorIcon: string;
  features: string[];
}

export const ELEMENTOR_WIDGETS: WidgetItem[] = [
  {
    id: 'checkout-form',
    name: 'Checkout Form',
    shortCode: 'Checkout Form',
    category: 'checkout',
    description:
      'Drops a complete, conversion-ready one-page checkout into any Elementor page or post.',
    elementorIcon: 'CreditCard',
    features: ['Custom field mapping', 'Inline validation', 'AJAX submission']
  },
  {
    id: 'live-checkout',
    name: 'Live Checkout',
    shortCode: 'Live Checkout',
    category: 'checkout',
    description:
      'Interactive checkout container that recalculates totals and shipping with no page reload.',
    elementorIcon: 'Zap',
    features: ['Instant total refresh', 'Dynamic gateway loader', 'Zero-flicker layout']
  },
  {
    id: 'smart-combo-builder',
    name: 'Smart Combo Builder',
    shortCode: 'Smart Combo Builder',
    category: 'merchandising',
    description:
      'Bundle products into one offer block where shoppers pick variations, add-ons and quantities.',
    elementorIcon: 'Boxes',
    features: ['Multi-product bundles', 'Dynamic combo pricing', 'Add-on picker']
  },
  {
    id: 'action-button',
    name: 'Action Button',
    shortCode: 'Action Button',
    category: 'checkout',
    description:
      'High-intent call-to-action that jumps straight into checkout with the product pre-filled.',
    elementorIcon: 'MousePointerClick',
    features: ['Pre-selects variation', 'Custom button states', 'Deep-link ready']
  },
  {
    id: 'product-grid',
    name: 'Product Grid',
    shortCode: 'Product Grid',
    category: 'merchandising',
    description:
      'Responsive product grid with one-click select and direct checkout integration.',
    elementorIcon: 'LayoutGrid',
    features: ['Column controls', 'Add-to-cart bypass', 'Price badges']
  },
  {
    id: 'product-showcase',
    name: 'Product Showcase',
    shortCode: 'Product Showcase',
    category: 'merchandising',
    description:
      'Hero product presentation with gallery zoom, key specs and an attached checkout form.',
    elementorIcon: 'Package',
    features: ['Hero presentation', 'Specification lists', 'Stock status indicator']
  },
  {
    id: 'shop-grid',
    name: 'Shop Grid',
    shortCode: 'Shop Grid',
    category: 'merchandising',
    description:
      'Flexible catalog grid built for funnel landing pages and limited collection drops.',
    elementorIcon: 'ShoppingBag',
    features: ['Category filtering', 'Load more', 'Sale tags']
  },
  {
    id: 'pricing-table',
    name: 'Pricing Table',
    shortCode: 'Pricing Table',
    category: 'merchandising',
    description:
      'Tiered pricing cards with a featured plan highlight and direct buy links.',
    elementorIcon: 'Tags',
    features: ['Tier comparison', 'Badge callouts', 'Direct checkout trigger']
  },
  {
    id: 'offer-card',
    name: 'Offer Card',
    shortCode: 'Offer Card',
    category: 'urgency',
    description:
      'Discount card built for order bumps, cross-sells and seasonal bundles.',
    elementorIcon: 'Sparkles',
    features: ['One-click checkbox bump', 'Discount callout', 'Highlight border']
  },
  {
    id: 'offer-bar',
    name: 'Offer Bar',
    shortCode: 'Offer Bar',
    category: 'urgency',
    description:
      'Sticky or inline banner announcing free shipping thresholds or limited-time savings.',
    elementorIcon: 'SlidersHorizontal',
    features: ['Sticky top / bottom', 'Threshold meter', 'Dismissible state']
  },
  {
    id: 'sales-popup',
    name: 'Sales Popup',
    shortCode: 'Sales Popup',
    category: 'urgency',
    description:
      'On-page offer alert triggered by scroll depth or exit intent to keep visitors around.',
    elementorIcon: 'Bell',
    features: ['Scroll depth trigger', 'Exit-intent detection', 'One-click apply']
  },
  {
    id: 'countdown-timer',
    name: 'Countdown Timer',
    shortCode: 'Countdown Timer',
    category: 'urgency',
    description:
      'Dynamic countdown clock for flash sales, pre-orders and checkout deadlines.',
    elementorIcon: 'Clock',
    features: ['Evergreen or fixed time', 'Auto-hide on expiry', 'Styled digits']
  },
  {
    id: 'flip-box',
    name: 'Flip Box',
    shortCode: 'Flip Box',
    category: 'merchandising',
    description:
      'Dual-sided card that reveals benefits, guarantees or bonus specs on hover.',
    elementorIcon: 'RotateCw',
    features: ['3D flip animation', 'Dual-face content', 'Front / back CTA']
  },
  {
    id: 'feature-card',
    name: 'Feature Card',
    shortCode: 'Feature Card',
    category: 'trust',
    description:
      'Modular value proposition card for shipping speed, warranty or product advantages.',
    elementorIcon: 'CheckCircle2',
    features: ['Icon picker', 'Accent styling', 'Responsive spacing']
  },
  {
    id: 'product-carousel',
    name: 'Product Carousel',
    shortCode: 'Product Carousel',
    category: 'merchandising',
    description:
      'Touch-enabled slider for related products, accessories or bundles before checkout.',
    elementorIcon: 'Images',
    features: ['Touch swipe', 'Autoplay options', 'Direct checkout link']
  },
  {
    id: 'size-guide',
    name: 'Size Guide',
    shortCode: 'Size Guide',
    category: 'trust',
    description:
      'Pop-up or inline sizing chart that cuts sizing questions and product returns.',
    elementorIcon: 'Ruler',
    features: ['Tabular metrics', 'Modal trigger', 'Unit switcher']
  },
  {
    id: 'support-card',
    name: 'Support Card',
    shortCode: 'Support Card',
    category: 'trust',
    description:
      'Customer assistance card with direct WhatsApp, phone or live email support.',
    elementorIcon: 'Headphones',
    features: ['WhatsApp link', 'Call hotline', 'Business hours']
  },
  {
    id: 'thank-you-page',
    name: 'Thank You Page',
    shortCode: 'Thank You Page',
    category: 'checkout',
    description:
      'Post-purchase confirmation widget with order recap, payment instructions and next steps.',
    elementorIcon: 'Receipt',
    features: ['Order summary', 'Bank transfer details', 'Next steps guidance']
  },
  {
    id: 'trust-badges',
    name: 'Trust Badges',
    shortCode: 'Trust Badges',
    category: 'trust',
    description:
      'Security and payment assurance badges: COD, SSL, verified merchant, safe payments.',
    elementorIcon: 'ShieldCheck',
    features: ['COD badge', 'Payment logos', 'Return guarantee']
  },
  {
    id: 'chatty-widget',
    name: 'Chatty Widget',
    shortCode: 'Chatty Widget',
    category: 'trust',
    description:
      'Floating chat bubble that keeps support and pre-sale questions one tap away.',
    elementorIcon: 'MessageCircle',
    features: ['Floating bubble', 'WhatsApp / Messenger', 'Pre-filled greeting']
  }
];

export const WIDGET_COUNT = ELEMENTOR_WIDGETS.length;

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'checkout', label: 'Checkout' },
  { id: 'merchandising', label: 'Merch' },
  { id: 'urgency', label: 'Urgency' },
  { id: 'trust', label: 'Trust' }
] as const;
