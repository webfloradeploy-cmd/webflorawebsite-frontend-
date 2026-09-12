"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  ShoppingCart,
  Store,
  Layers,
  Briefcase,
  CreditCard,
  Truck,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Sliders,
  Database,
  Search,
  Users,
  Building2,
  Package,
  RefreshCw,
  Clock,
  PhoneCall,
  ChevronDown,
  ChevronUp,
  Cpu,
  BarChart3,
  Globe,
  MapPin,
  Laptop,
  Smartphone,
  Tag,
  Check,
  Percent,
  Lock,
  Boxes,
  Compass,
  Code2,
  Activity,
  Award,
  HelpCircle,
  X,
  Send,
  SlidersHorizontal,
  Workflow,
  ExternalLink,
  BookOpen,
  DollarSign,
  FileCode2,
  HeartHandshake,
  Star,
  Shirt,
  Tv,
  Apple,
  Factory,
  CheckCircle,
  Receipt,
  Scale,
  PieChart,
  MessageSquare,
  Flame,
  ArrowUpRight,
  Server
} from "lucide-react";
import API_BASE_URL from "../config";

const BRAND = "#ff3b00";

const clientLogos = [
  { name: "DBM", src: "/client-logo/DBM.png" },
  { name: "Diamond Resort", src: "/client-logo/DiamondResort.png" },
  { name: "Edugen World School", src: "/client-logo/Edugen-world-school.png" },
  { name: "Feedrani", src: "/client-logo/feedrani-logo.png" },
  { name: "Krisivarsha", src: "/client-logo/Krisivarsha-logo.png" },
  { name: "RGMS", src: "/client-logo/RGMS-logo.jpeg" },
  { name: "Team Excellent", src: "/client-logo/Team-excellentlogo.webp" },
  { name: "Best For Everyone", src: "/client-logo/best-for-everyone.png" },
  { name: "Heo Sahyog", src: "/client-logo/heo-sahyog.png" },
  { name: "Vidya Bharti", src: "/client-logo/vidya-bharti.png" },
];

// Interactive Store Simulator Widget
const StoreSimulator = () => {
  const [activeTab, setActiveTab] = useState("storefront");
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Premium Ergonomic Chair", price: 14999, qty: 1, stock: 8, image: "solar:armchair-linear" },
    { id: 2, name: "Noise-Cancelling Headphones", price: 6499, qty: 1, stock: 15, image: "solar:headphones-round-linear" }
  ]);
  const [couponCode, setCouponCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentStep, setPaymentStep] = useState("idle"); // idle, processing, success
  const [orderId, setOrderId] = useState("WF-89241");
  const [stockLevel, setStockLevel] = useState(8);
  const [activeOrderStep, setActiveOrderStep] = useState(3); // 0 to 6

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = discountApplied ? Math.round(subtotal * 0.15) : 0;
  const shipping = subtotal > 5000 ? 0 : 250;
  const total = subtotal - discount + shipping;

  const updateQty = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, Math.min(item.stock, item.qty + delta));
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "WEBFLORA" || couponCode.trim().toUpperCase() === "FLORA15") {
      setDiscountApplied(true);
    } else {
      alert("Invalid coupon! Try 'WEBFLORA' or 'FLORA15'");
    }
  };

  const handleSimulatePayment = () => {
    setPaymentStep("processing");
    setTimeout(() => {
      setPaymentStep("success");
      setStockLevel(prev => Math.max(0, prev - 1));
      setOrderId("WF-" + Math.floor(10000 + Math.random() * 90000));
    }, 1500);
  };

  const orderStatuses = ["New Order", "Confirmed", "Processing", "Packed", "Shipped", "Out for Delivery", "Delivered"];

  return (
    <div className="w-full bg-[#080808] rounded-3xl border border-white/10 p-5 md:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Glow highlight */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FF3B00]/15 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Live eCommerce Operations Architecture
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
            End-to-End Online Store Operations
          </h3>
        </div>

        {/* Tab pills */}
        <div className="flex bg-neutral-900/90 p-1.5 rounded-xl border border-white/10 overflow-x-auto">
          {[
            { id: "storefront", label: "Storefront & Cart", icon: ShoppingBag },
            { id: "fulfillment", label: "Order Pipeline", icon: Truck },
            { id: "inventory", label: "Inventory Logic", icon: Boxes },
            { id: "analytics", label: "Admin Analytics", icon: BarChart3 },
          ].map((tab) => {
            const IconComp = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id === "storefront") setPaymentStep("idle");
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#FF3B00] text-white shadow-lg shadow-[#FF3B00]/25"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab 1: Storefront & Cart */}
      {activeTab === "storefront" && (
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-[#FF3B00]" />
                Cart Items ({cartItems.reduce((a, b) => a + b.qty, 0)})
              </h4>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                Free Shipping Qualified (&gt; ₹5,000)
              </span>
            </div>

            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-neutral-900/60 border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-white/10 flex items-center justify-center text-[#FF3B00]">
                      <Icon icon={item.image} width={24} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.name}</div>
                      <div className="text-xs text-neutral-400 font-mono">₹{item.price.toLocaleString("en-IN")} each</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-neutral-800 rounded-lg border border-white/10">
                      <button onClick={() => updateQty(item.id, -1)} className="px-2.5 py-1 text-neutral-400 hover:text-white cursor-pointer">-</button>
                      <span className="px-2 text-xs font-mono font-bold text-white">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="px-2.5 py-1 text-neutral-400 hover:text-white cursor-pointer">+</button>
                    </div>
                    <div className="text-sm font-bold text-white font-mono w-24 text-right">
                      ₹{(item.price * item.qty).toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Apply coupon (try 'WEBFLORA')"
                className="flex-1 bg-neutral-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF3B00]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold transition cursor-pointer"
              >
                Apply
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 bg-neutral-900/80 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 pb-3 border-b border-white/10">
                Order Summary & Checkout
              </h4>
              
              <div className="space-y-2.5 py-4 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount (15% promo)</span>
                    <span className="font-mono">-₹{discount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-400">
                  <span>Standard Logistics (India)</span>
                  <span className="font-mono text-emerald-400 font-semibold">{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Estimated GST (18%)</span>
                  <span className="font-mono text-neutral-400">Included in MRP</span>
                </div>
                <div className="pt-3 border-t border-white/10 flex justify-between text-sm font-bold text-white">
                  <span>Total Payable</span>
                  <span className="font-mono text-[#FF3B00] text-base">₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Supported payment badges */}
              <div className="bg-neutral-950/60 p-3 rounded-xl border border-white/5 mb-4">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-2">
                  Unified Gateway Integration
                </div>
                <div className="flex items-center gap-2 flex-wrap text-[11px] text-neutral-300">
                  <span className="bg-white/5 px-2 py-1 rounded border border-white/10 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#FF3B00]" /> Instant UPI (GPay, PhonePe, Paytm)
                  </span>
                  <span className="bg-white/5 px-2 py-1 rounded border border-white/10">Cards / NetBanking</span>
                  <span className="bg-white/5 px-2 py-1 rounded border border-white/10">COD Available</span>
                </div>
              </div>
            </div>

            {paymentStep === "idle" && (
              <button
                onClick={handleSimulatePayment}
                className="w-full py-3.5 bg-[#FF3B00] hover:bg-[#ff4e1a] text-white rounded-xl text-sm font-bold tracking-wide shadow-lg shadow-[#FF3B00]/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Lock className="w-4 h-4" />
                Simulate Secure One-Click Checkout
              </button>
            )}

            {paymentStep === "processing" && (
              <div className="w-full py-3.5 bg-neutral-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin text-[#FF3B00]" />
                Verifying UPI Webhook & Authorizing Gateway...
              </div>
            )}

            {paymentStep === "success" && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                  <Check className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-white">Payment Authorized Successfully!</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Order ID: <span className="font-mono text-emerald-400">{orderId}</span></div>
                <div className="text-[10px] text-neutral-500 mt-1">Invoice generated & WhatsApp notification triggered automatically.</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Order Fulfillment Pipeline */}
      {activeTab === "fulfillment" && (
        <div className="pt-6 space-y-6">
          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#FF3B00]">Tracking Order #{orderId}</span>
                <h4 className="text-lg font-bold text-white">Live Lifecycle Order Status Transition</h4>
              </div>
              <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-neutral-300 font-mono">
                Logistics Carrier: Shiprocket / Delhivery API
              </span>
            </div>

            {/* Stepper bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {orderStatuses.map((st, i) => {
                const isPassed = i <= activeOrderStep;
                const isCurrent = i === activeOrderStep;
                return (
                  <button
                    key={st}
                    onClick={() => setActiveOrderStep(i)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-[#FF3B00] border-[#FF3B00] text-white shadow-lg shadow-[#FF3B00]/25"
                        : isPassed
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-neutral-950/60 border-white/5 text-neutral-500"
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider">Step 0{i + 1}</div>
                    <div className="text-xs font-bold mt-1">{st}</div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-neutral-950/80 rounded-xl border border-white/5 flex items-center justify-between">
              <div className="text-xs text-neutral-300">
                Current Status: <strong className="text-white">{orderStatuses[activeOrderStep]}</strong>
              </div>
              <div className="text-xs text-neutral-400 font-mono">
                AWB #SR-{Math.floor(10000000 + Math.random() * 90000000)} | Auto-Synced to Database
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Inventory Logic */}
      {activeTab === "inventory" && (
        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-neutral-400">Warehouse 1: Delhi NCR Hub</div>
              <div className="text-2xl font-bold text-white mt-2 font-mono">{stockLevel} Units Available</div>
              <p className="text-xs text-neutral-400 mt-2">
                Real-time stock deduction triggered upon checkout authorization.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 pt-3 border-t border-white/5">
              Status: In Stock (Safe Threshold &gt; 5)
            </div>
          </div>

          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-neutral-400">Warehouse 2: Patna Regional Hub</div>
              <div className="text-2xl font-bold text-white mt-2 font-mono">14 Units Available</div>
              <p className="text-xs text-neutral-400 mt-2">
                Automated multi-warehouse routing allocates nearest fulfillment center by pincode.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 pt-3 border-t border-white/5">
              Status: Operational & Fast Dispatch
            </div>
          </div>

          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-neutral-400">Multi-Channel Sync</div>
              <div className="space-y-2 mt-3 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Next.js Web Storefront</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Physical Retail POS Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Amazon / Flipkart Sync Webhook</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ERP & Tally Database Sync</span>
                </div>
              </div>
            </div>
            <div className="text-[11px] font-mono text-neutral-500 pt-3 border-t border-white/5">
              Sync Latency: &lt; 250ms
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Admin Analytics */}
      {activeTab === "analytics" && (
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Today's Sales Revenue", val: "₹1,48,920", sub: "+24.5% vs yesterday", color: "text-emerald-400" },
            { label: "Total Orders (This Month)", val: "1,248 Orders", sub: "98.2% Fulfillment Rate", color: "text-white" },
            { label: "Average Order Value (AOV)", val: "₹2,640", sub: "Upsell rules active", color: "text-[#FF3B00]" },
            { label: "Abandoned Cart Recovery", val: "32.4%", sub: "Automated WhatsApp sequences", color: "text-cyan-400" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-neutral-900/60 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono uppercase text-neutral-400">{stat.label}</div>
              <div className={`text-2xl font-bold font-mono mt-2 ${stat.color}`}>{stat.val}</div>
              <div className="text-[11px] text-neutral-500 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function EcommerceWebsiteDevelopmentPage() {
  const [openFaqs, setOpenFaqs] = useState({ 0: true });

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Quote Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Custom eCommerce Website",
    budget: "₹60,000–₹1,50,000",
    message: ""
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          subject: `eCommerce Website Development Inquiry: ${formState.projectType}`
        })
      });
      if (res.ok) {
        setFormSuccess(true);
      } else {
        alert("Submission error. Please call +91 8540814729 directly.");
      }
    } catch (err) {
      alert("Network error. Please WhatsApp us directly at +91 8540814729.");
    } finally {
      setFormLoading(false);
    }
  };

  const servicesList = [
    {
      title: "Custom eCommerce Website Development",
      icon: Code2,
      link: "/technology/nextjs-development",
      desc: "Tailored Next.js & Node.js online stores with zero sales cuts, bespoke pricing tiers, custom checkout workflows, and multi-warehouse synchronization."
    },
    {
      title: "B2B eCommerce Platform Development",
      icon: Building2,
      link: "/industries/manufacturing",
      desc: "Enterprise wholesale portals with dealer logins, negotiated price lists, bulk CSV ordering, minimum order quantities (MOQs), and Tally/ERP sync."
    },
    {
      title: "D2C eCommerce Storefronts",
      icon: Zap,
      link: "/industries/retail",
      desc: "High-conversion direct-to-consumer brand storefronts with 1-click UPI checkout, subscription commerce, customer loyalty, and WhatsApp automation."
    },
    {
      title: "Multi-Vendor Marketplace Development",
      icon: Users,
      link: "/it-company-in-patna/software-development-company-in-patna",
      desc: "Marketplace platforms like Amazon or Flipkart with vendor dashboards, automated commission calculations, seller payouts, and central admin control."
    },
    {
      title: "Shopify Store Design & Development",
      icon: ShoppingBag,
      link: "/technology/shopify-development",
      desc: "End-to-end Shopify store setup, bespoke Liquid theme design, private app development, payment/shipping setup, and headless Shopify engineering."
    },
    {
      title: "WooCommerce Website Development",
      icon: Globe,
      link: "/technology/wordpress-development",
      desc: "WordPress & WooCommerce online stores with custom plugins, lightweight database queries, high-speed Redis caching, and payment integration."
    },
    {
      title: "eCommerce Mobile App Development",
      icon: Smartphone,
      link: "/it-company-in-patna/mobile-app-development-company-in-patna",
      desc: "Native and cross-platform mobile shopping apps for Android and iOS using Flutter and React Native with push notifications and live GPS tracking."
    },
    {
      title: "eCommerce Payment & Shipping Integration",
      icon: CreditCard,
      link: "/it-company-in-patna/ai-automation-company-in-patna",
      desc: "Seamless integration of Razorpay, Cashfree, Stripe, Shiprocket, Delhivery, Blue Dart, Tally, Zoho Books, and WhatsApp notification engines."
    },
    {
      title: "eCommerce UI/UX Design & Optimization",
      icon: Laptop,
      link: "/it-company-in-patna/website-development-company-in-patna",
      desc: "Conversion rate optimized (CRO) design systems, intuitive search filtering, sticky one-page checkout, and lightning-fast sub-second mobile page loads."
    }
  ];

  const faqs = [
    {
      q: "What does an eCommerce website development company do?",
      a: "An eCommerce website development company designs, builds, and maintains online stores and digital commerce platforms. This encompasses user interface (UI/UX) design, product catalog structure, shopping cart engineering, secure payment gateway integrations (UPI, Cards, NetBanking), automated shipping and logistics connections, inventory tracking across warehouses, customer account management, and CRM/ERP synchronization (such as Tally or SAP). The company ensures the store is secure, fast, mobile-friendly, and optimized for search engines to generate consistent online sales."
    },
    {
      q: "How much does an eCommerce website cost in India?",
      a: "The cost of developing an eCommerce website in India typically ranges from ₹30,000 to ₹5,00,000+ depending on your business requirements. A basic starter online store on Shopify or WooCommerce costs around ₹30,000 to ₹60,000. A custom-designed professional D2C storefront with automated courier and WhatsApp integrations ranges from ₹60,000 to ₹1,50,000. Advanced custom platforms (Next.js/Node.js), B2B wholesale portals with ERP sync, and multi-vendor marketplaces range from ₹1,50,000 to ₹5,00,000+. Final pricing is determined by custom workflows, SKU count, and third-party APIs."
    },
    {
      q: "How long does it take to develop an eCommerce website?",
      a: "A standard eCommerce store built on Shopify or WooCommerce typically takes 2 to 4 weeks to design, configure, test, and launch. A professional custom-designed store with specialized payment, shipping, and automated messaging workflows takes 4 to 8 weeks. Enterprise B2B platforms requiring complex ERP integrations, custom wholesale pricing tiers, or multi-vendor marketplace functionality generally take 8 to 16+ weeks. We provide clear milestone timelines during the initial scope discovery."
    },
    {
      q: "Which platform is best for an ecommerce website?",
      a: "The best platform depends entirely on your operational model and growth strategy. Shopify is ideal for startups and D2C brands wanting managed hosting and rapid time-to-market. WooCommerce is best for WordPress-based businesses wanting full content control and zero recurring platform fees. Custom eCommerce (Next.js, React, Node.js) is best for high-volume retailers, B2B wholesalers, and brands requiring proprietary workflows, sub-second load times, ERP synchronization, and zero percentage cuts on sales."
    },
    {
      q: "Can you build a custom eCommerce website?",
      a: "Yes, absolutely. Webflora Technologies specializes in custom eCommerce development using Next.js App Router, React, Node.js, Express, and PostgreSQL/MongoDB. Custom development gives you 100% code ownership, zero monthly transaction cuts, tailored B2B quotation workflows, dynamic multi-warehouse routing, bespoke customer-specific pricing matrices, and direct bi-directional synchronization with Tally Prime, Zoho Books, or SAP."
    },
    {
      q: "Can you develop a Shopify store?",
      a: "Yes. Our certified Shopify developers design bespoke Liquid themes from scratch, build custom private apps, configure Indian payment gateways (Razorpay, Paytm, Cashfree), connect Shiprocket logistics, and implement Shopify SEO. We also build Headless Shopify architectures utilizing Next.js for brands demanding extreme mobile performance."
    },
    {
      q: "Can you develop a WooCommerce website?",
      a: "Yes. We engineer high-performance WooCommerce stores built on WordPress. We write custom plugins, optimize MySQL queries, implement Redis in-memory caching, build customized one-page checkouts, and connect local payment and logistics carriers, ensuring your WordPress store loads in under 1.5 seconds without bloat."
    },
    {
      q: "Can you build a B2B ecommerce website?",
      a: "Yes. We build enterprise B2B eCommerce platforms tailored for manufacturers, distributors, and wholesalers. Features include dealer and distributor login portals, customer-specific negotiated price lists, bulk CSV ordering, Minimum Order Quantities (MOQs), instant Request for Quote (RFQ) generation, GST tax invoicing, credit payment terms, and live Tally or SAP ERP ledger synchronization."
    },
    {
      q: "Can you build a multi-vendor ecommerce website?",
      a: "Yes. We engineer scalable multi-vendor marketplaces similar to Amazon, Flipkart, or Nykaa. The platform includes a unified customer storefront with multi-seller split carts, dedicated vendor self-service dashboards (product listings, orders, payouts), and a master administrator control panel with automated commission calculation and payout disbursements."
    },
    {
      q: "Can you integrate payment gateways?",
      a: "Yes. We integrate all major Indian and international payment gateways including Razorpay, Cashfree, PayU, Paytm, PhonePe PG, Stripe, and PayPal. We support Instant UPI (Google Pay, PhonePe, Paytm QR & Intent), Credit/Debit Cards, Net Banking across 50+ banks, Cardless EMIs, and Cash on Delivery (COD) with automated OTP verification."
    },
    {
      q: "Can you integrate shipping services?",
      a: "Yes. We integrate automated shipping APIs including Shiprocket, Delhivery, Blue Dart, Ecom Express, and India Post. This enables automatic AWB generation upon order confirmation, bulk shipping label and manifest printing, real-time courier rate comparison, and live GPS package tracking with automated WhatsApp/SMS delivery updates to customers."
    },
    {
      q: "Can you integrate an ecommerce website with ERP or CRM?",
      a: "Yes. We provide seamless bi-directional API integration connecting your eCommerce website with ERP and accounting software including Tally Prime, Zoho Books & Inventory, SAP Business One, Marg ERP, Busy, and Salesforce. This automates invoice creation, tax compliance, customer records, and real-time inventory adjustments."
    },
    {
      q: "Can you develop an ecommerce mobile app?",
      a: "Yes. We develop high-performance cross-platform eCommerce mobile applications for Android and iOS using Flutter and React Native. The mobile apps sync seamlessly in real-time with your web store database, supporting push notification marketing, one-tap biometric checkout, and offline catalog browsing."
    },
    {
      q: "Is ecommerce website development SEO-friendly?",
      a: "Yes. Technical SEO is embedded into every online store we build. We structure clean semantic URLs, logical product and category hierarchies, dynamic XML sitemaps, canonical tags to prevent duplicate faceted filter indexing, Product and FAQPage Schema JSON-LD structured data, and sub-second Core Web Vitals performance for top Google search visibility."
    },
    {
      q: "Do you provide ecommerce website maintenance?",
      a: "Yes. We provide comprehensive post-launch technical support and maintenance agreements. Our team handles routine security patches, speed audits, database optimization, third-party API updates, automated backups, conversion rate optimization (CRO) testing, and continuous feature enhancements."
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#FF3B00] selection:text-white pt-24 pb-20 overflow-hidden">
      
      {/* ── Background Glow Elements ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#FF3B00]/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[20%] left-[15%] w-[450px] h-[450px] bg-emerald-900/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 1. Hero Section & H1 ── */}
        <section className="text-center pt-8 pb-16 md:pt-14 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hover:border-[#FF3B00]/40 transition"
          >
            <Sparkles className="w-4 h-4 text-[#FF3B00]" />
            <span className="text-xs md:text-sm font-medium text-neutral-200">
              eCommerce Website Development Company in India | <span className="text-[#FF3B00] font-semibold">Webflora Technologies</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15]"
          >
            eCommerce Website <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#FF3B00]">
              Development Company
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-left sm:text-center space-y-3"
          >
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              <strong className="text-white font-semibold">Webflora Technologies</strong> is an <strong className="text-white font-semibold">eCommerce website development company in India</strong> that builds custom online stores for startups, <Link href="/industries/retail" className="text-[#FF3B00] underline hover:text-white">D2C brands</Link>, retailers, <Link href="/industries/manufacturing" className="text-neutral-200 underline hover:text-[#FF3B00]">manufacturers</Link>, wholesalers and growing businesses.
            </p>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              We develop eCommerce websites that combine high-converting UI/UX, secure payments, product management, inventory, order processing, shipping integrations and SEO-friendly architecture. Depending on your business requirements, we build stores using Shopify, WooCommerce or custom technologies such as <Link href="/technology/nextjs-development" className="text-[#FF3B00] underline hover:text-white">Next.js</Link>, React and Node.js.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Whether you need a small online store, a B2B ordering portal, a D2C storefront or a <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-neutral-300 underline hover:text-[#FF3B00]">multi-vendor marketplace</Link>, our eCommerce development team can design and develop a solution around your products, customers and business workflow.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#consultation-form"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF3B00] hover:bg-[#ff4e1a] text-white text-sm font-bold tracking-wide shadow-[0_0_30px_rgba(255,59,0,0.4)] hover:shadow-[0_0_40px_rgba(255,59,0,0.6)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#consultation-form"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/10 hover:border-white/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileCode2 className="w-4 h-4 text-[#FF3B00]" />
              <span>Request an eCommerce Quote</span>
            </a>
          </motion.div>

          {/* Quick Pillars */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { icon: Zap, title: "Modern & Fast", sub: "Sub-second mobile checkout", link: "/technology/nextjs-development" },
              { icon: ShieldCheck, title: "100% Code Ownership", sub: "Zero monthly sales cuts", link: "/compare/custom-software-vs-saas" },
              { icon: CreditCard, title: "UPI & All Gateways", sub: "Razorpay, Paytm, Cashfree", link: "/it-company-in-patna/software-development-company-in-patna" },
              { icon: Truck, title: "Automated Shipping", sub: "Shiprocket & Delhivery APIs", link: "/it-company-in-patna/ai-automation-company-in-patna" },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Link key={idx} href={item.link} className="group bg-neutral-900/50 hover:bg-neutral-900/90 border border-white/5 hover:border-[#FF3B00]/40 p-3.5 rounded-2xl flex items-center gap-3 transition">
                  <div className="w-9 h-9 rounded-xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00] shrink-0 group-hover:scale-105 transition-transform">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-[#FF3B00] transition-colors leading-tight">{item.title}</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">{item.sub}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── 2. TRUST: Real Clients / Projects / Reviews ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="my-10 relative rounded-3xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start gap-1.5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                    />
                  ))}
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-bold">
                  Verified Google Reviews
                </span>
              </div>

              <div className="hidden sm:block w-px h-10 bg-white/10" />

              <div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  Trusted eCommerce Website Developers
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light mt-0.5">
                  Helping businesses across India build scalable online stores, B2B platforms, and digital marketplaces.
                </p>
              </div>
            </div>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-2.5 backdrop-blur-sm shrink-0">
              <span className="text-white font-black text-2xl tracking-tighter mr-2 font-mono">5.0</span>
              <div className="h-4 w-[2px] bg-amber-400/50 mx-2" />
              <span className="text-[10px] text-neutral-300 font-bold uppercase tracking-widest leading-none">
                Client<br />Rating
              </span>
            </div>
          </div>

          <div className="pt-6">
            <div className="text-center mb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                Trusted by Fast-Growing Brands & Companies Across India
              </span>
            </div>

            <div className="relative flex overflow-x-hidden w-full">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

              <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-2">
                <div className="flex items-center gap-8 md:gap-14 px-4">
                  {clientLogos.map((logo, index) => (
                    <div
                      key={`trust-logo-1-${index}`}
                      className="w-28 h-9 md:w-32 md:h-10 shrink-0 relative flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        fill
                        className="object-contain"
                        sizes="128px"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-8 md:gap-14 px-4" aria-hidden="true">
                  {clientLogos.map((logo, index) => (
                    <div
                      key={`trust-logo-2-${index}`}
                      className="w-28 h-9 md:w-32 md:h-10 shrink-0 relative flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        fill
                        className="object-contain"
                        sizes="128px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Interactive Live Store Simulator ── */}
        <section className="py-12 md:py-16">
          <StoreSimulator />
        </section>

        {/* ── 3. H2: eCommerce Website Development Services ── */}
        <section id="services" className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Layers className="w-3.5 h-3.5" /> What We Build
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Development Services
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-4 font-light">
              Every business sells differently. That's why we develop ecommerce websites tailored specifically around your products, target customers, sales channels, and growth targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="group bg-neutral-900/40 hover:bg-neutral-900/80 border border-white/5 hover:border-[#FF3B00]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,59,0,0.1)] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white/5 group-hover:bg-[#FF3B00]/20 border border-white/10 group-hover:border-[#FF3B00]/40 flex items-center justify-center text-[#FF3B00] transition-colors mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B00] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <Link
                      href={srv.link}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF3B00] hover:underline group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 4. H2: Custom eCommerce Website Development ── */}
        <section className="py-16 md:py-24 border-t border-white/5 bg-gradient-to-b from-transparent via-[#FF3B00]/5 to-transparent rounded-3xl p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
                <Code2 className="w-3.5 h-3.5" /> Bespoke Engineering
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Custom eCommerce Website Development
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                Standard templates and closed SaaS platforms force your brand into rigid constraints, recurring percentage cuts on sales, and limited customization.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                With our custom eCommerce website development using <Link href="/technology/nextjs-development" className="text-[#FF3B00] underline hover:text-white">Next.js</Link>, Node.js, and PostgreSQL/MongoDB, you get 100% source code ownership, sub-second page speeds, custom database schemas, and tailored checkout flows. Check out our <Link href="/compare/custom-software-vs-saas" className="text-[#FF3B00] underline hover:text-white">custom development vs SaaS breakdown</Link>.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/technology/nextjs-development" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Next.js App Router</Link>
                <Link href="/technology/nodejs-development" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Node.js / Express APIs</Link>
                <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Custom REST & GraphQL</Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="text-xs font-mono uppercase text-[#FF3B00] mb-3">Custom eCommerce is essential when you need:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Complex product variant matrices & custom sizing",
                  "Customer-specific negotiated pricing & dealer tiers",
                  "B2B bulk ordering & instant RFQ generation",
                  "Zero recurring transaction cuts on gross sales",
                  "Multi-warehouse logistics routing & live deduction",
                  "Deep ERP & CRM integrations (Tally, Zoho, SAP)",
                  "Custom financial & GST invoice generation",
                  "Frictionless 1-page OTP checkout workflows",
                  "Recurring subscriptions & membership billing",
                  "Full database & user data privacy control"
                ].map((item, idx) => (
                  <div key={idx} className="bg-neutral-900/70 border border-white/5 rounded-xl p-3.5 flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. H2: eCommerce Website Features ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Workflow className="w-3.5 h-3.5" /> Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Features
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              A high-converting eCommerce website must deliver a frictionless shopping journey for customers while providing your back-office team complete operational control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Product Catalog Management",
                icon: Package,
                points: ["Unlimited Products & Categories", "SKUs, Variants & Swatches", "Dynamic Pricing & Discounts", "High-Resolution Image Zoom", "Technical Specifications & Guides"]
              },
              {
                title: "Smart Search & Faceted Filters",
                icon: Search,
                points: ["Instant Autocomplete Search", "Filter by Price, Brand & Size", "Category & Availability Filter", "Product Attribute Tagging", "Spell Correction & Synonyms"]
              },
              {
                title: "Cart & Sticky Mini-Cart",
                icon: ShoppingCart,
                points: ["Instant Client-Side Calculations", "Free Delivery Progress Bar", "Coupon Code Validation", "Cart Cross-Sell Recommendations", "Save Cart for Later"]
              },
              {
                title: "Frictionless One-Page Checkout",
                icon: ShieldCheck,
                points: ["Instant Phone OTP Login", "Address Book & PIN Validation", "GSTIN & Business Invoicing", "Delivery Method Selection", "Order Summary & Live Tax Breakdown"]
              },
              {
                title: "Payment Gateway Integration",
                icon: CreditCard,
                points: ["Instant UPI (GPay, PhonePe, Paytm)", "Credit / Debit Cards & EMIs", "Net Banking & Digital Wallets", "Cash on Delivery (COD) with OTP", "International Cards (Stripe)"]
              },
              {
                title: "Automated Order Lifecycle",
                icon: ShoppingBag,
                points: ["Status: New → Confirmed → Shipped", "Automated GST Tax Invoices", "Cancellation & Return Workflows", "WhatsApp & SMS Status Alerts", "Customer Re-Order Trigger"]
              },
              {
                title: "Multi-Warehouse Inventory",
                icon: Boxes,
                points: ["Real-time Stock Deductions", "Multi-Location Warehouse Sync", "Automated Low-Stock Alerts", "Restock Notification Triggers", "POS & Channel Integration"]
              },
              {
                title: "Customer Self-Service Portal",
                icon: Users,
                points: ["Order History & Re-ordering", "Live Courier Package Tracking", "Wishlist & Saved Products", "Address Book Management", "Downloadable Tax Invoices"]
              },
              {
                title: "Automated Shipping & Tracking",
                icon: Truck,
                points: ["Shiprocket, Delhivery, Blue Dart APIs", "Instant AWB Generation", "Shipping Label & Manifest Printing", "Doorstep Delivery Verification", "Reverse Pickup Management"]
              },
              {
                title: "Discount & Coupon Engine",
                icon: Tag,
                points: ["Percentage & Flat Discounts", "First-Order Promo Codes", "Minimum Order Value Rules", "BOGO & Tiered Promotions", "Festive Flash Sale Timers"]
              },
              {
                title: "Role-Based Admin Dashboard",
                icon: BarChart3,
                points: ["Sales & Revenue Analytics", "Customer Cohort Insights", "Staff Roles & Access Permissions", "Product & Banner CMS", "Exportable Sales & Tax Reports"]
              },
              {
                title: "Security & Sub-Second Speed",
                icon: Lock,
                points: ["SSL Encryption & Data Security", "Core Web Vitals Optimized", "DDoS & Firewall Protection", "Automated Database Backups", "PCI-DSS Compliance Ready"]
              }
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div key={idx} className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00] mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-3">{feature.title}</h3>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {feature.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 6. H2: B2B eCommerce Development ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
                <Building2 className="w-3.5 h-3.5" /> Wholesale & Enterprise
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                B2B eCommerce Development
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                B2B transactions require specialized pricing, credit terms, multi-tier approvals, and bulk order workflows that standard retail carts cannot support.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                We engineer scalable <Link href="/industries/manufacturing" className="text-[#FF3B00] underline hover:text-white">B2B eCommerce platforms</Link> designed for manufacturers, distributors, and wholesalers looking to digitize their dealer network, automate quotation requests (RFQs), and sync with Tally or SAP ERP systems.
              </p>

              <div className="mt-6 space-y-3 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Dealer & Distributor Portals:</strong> Secure login with customer-specific pricing catalogs.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Bulk CSV Ordering & MOQs:</strong> Fast SKU entry, tiered volume discounts, and carton packaging rules.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>GST Compliance & Credit Terms:</strong> Automated tax invoices, e-way bills, and 30/60-day credit lines.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-neutral-900/60 border border-white/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#FF3B00]" /> B2B eCommerce Architecture Stack
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">Tiered Wholesale Price Matrix</div>
                  <div className="text-neutral-400 mt-1">Different rates for Master Distributors, Regional Dealers, and Commercial Accounts.</div>
                </div>
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">RFQ & Quotation Workflow</div>
                  <div className="text-neutral-400 mt-1">Buyers request custom price quotes for large order volumes with one-click admin approval.</div>
                </div>
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">Direct ERP & Accounting Sync</div>
                  <div className="text-neutral-400 mt-1">Bi-directional ledger synchronization with Tally Prime, Zoho Books, SAP, and Busy.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. H2: D2C eCommerce Development ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 bg-neutral-900/60 border border-white/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#FF3B00]" /> High-Velocity D2C Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">1-Click UPI Checkout</div>
                  <div className="text-neutral-400 mt-1">Instant mobile authorization via GPay & PhonePe reducing checkout drop-offs.</div>
                </div>
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">Abandoned Cart Recovery</div>
                  <div className="text-neutral-400 mt-1">Automated WhatsApp & SMS follow-ups reclaiming 25-35% of lost checkouts.</div>
                </div>
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">Subscription Commerce</div>
                  <div className="text-neutral-400 mt-1">Recurring product replenishment with automated monthly card billing.</div>
                </div>
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">UGC & Verified Reviews</div>
                  <div className="text-neutral-400 mt-1">Customer photo reviews, star ratings, and social proof widgets.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
                <Zap className="w-3.5 h-3.5" /> Direct to Consumer
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                D2C eCommerce Development
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                Direct-to-consumer (D2C) brands require visually stunning, mobile-optimized storefronts engineered for high conversion rates, impulse buying, and brand storytelling.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                We develop high-performance <Link href="/industries/retail" className="text-[#FF3B00] underline hover:text-white">D2C brand websites</Link> that turn social media ad clicks into loyal repeat customers with optimized Core Web Vitals, dynamic upsells, and tight Meta Pixel / Google Analytics 4 integration.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-neutral-300">Fashion & Apparel</span>
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-neutral-300">Beauty & Skincare</span>
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-neutral-300">Health & Organic Food</span>
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-neutral-300">Electronics & Gadgets</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. H2: Multi-Vendor eCommerce Development ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Users className="w-3.5 h-3.5" /> Marketplace Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Multi-Vendor eCommerce Development
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Build the next Amazon, Flipkart, or niche marketplace. We create scalable multi-vendor platforms where independent sellers register, list products, and fulfill orders while you earn automated commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">1. Customer Storefront</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Unified catalog browsing across thousands of sellers with multi-vendor split cart, single payment transaction, and individual shipment tracking.
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Multi-seller product search</div>
                  <div>✓ Unified shopping cart & checkout</div>
                  <div>✓ Seller reviews & ratings</div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Store className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">2. Vendor Self-Service Portal</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Dedicated portal for merchants to manage catalog items, review incoming orders, print shipping labels, track payouts, and view sales performance.
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Product listing & stock control</div>
                  <div>✓ Order dispatch & packing slips</div>
                  <div>✓ Earnings & payout ledger</div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FF3B00]/20 text-[#FF3B00] flex items-center justify-center mb-4">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">3. Master Admin Control Panel</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Total administrative oversight with commission percentage rules, KYC vendor onboarding approval, transaction settlement, and dispute resolution.
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Automated commission calculation</div>
                  <div>✓ Vendor verification & onboarding</div>
                  <div>✓ Platform revenue analytics</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. H2: Shopify eCommerce Development ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
                <ShoppingBag className="w-3.5 h-3.5" /> Hosted Commerce Leader
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Shopify eCommerce Development
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                Shopify is an exceptional hosted platform for brands seeking fast deployment, bank-grade hosting security, and access to a massive app ecosystem.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                As a specialized <Link href="/technology/shopify-development" className="text-[#FF3B00] underline hover:text-white">Shopify development company</Link>, we design custom Liquid themes, build private Shopify apps, configure Indian payment gateways and Shiprocket logistics, and engineer Headless Shopify stores with Next.js frontends.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-white/5">✓ Custom Theme Design & Liquid Coding</div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-white/5">✓ Shopify Plus Enterprise Architecture</div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-white/5">✓ Indian Payment & Shiprocket Setup</div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-white/5">✓ Headless Shopify with Next.js</div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-neutral-900/60 border border-white/10 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Icon icon="logos:shopify" width={28} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Shopify Store Launch Roadmap</h3>
                  <div className="text-xs text-neutral-400">Typically delivered in 2–4 Weeks</div>
                </div>
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF3B00]/20 text-[#FF3B00] font-mono flex items-center justify-center shrink-0">1</span>
                  <div><strong className="text-white">Store Setup & Architecture:</strong> Product taxonomy, variant matrices, and collection structures.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF3B00]/20 text-[#FF3B00] font-mono flex items-center justify-center shrink-0">2</span>
                  <div><strong className="text-white">Custom Liquid Theme:</strong> Pixel-perfect responsive design tailored to your brand identity.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF3B00]/20 text-[#FF3B00] font-mono flex items-center justify-center shrink-0">3</span>
                  <div><strong className="text-white">Gateway & Carrier Hookup:</strong> Razorpay, Paytm, Cashfree, Shiprocket, and WhatsApp notifications.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF3B00]/20 text-[#FF3B00] font-mono flex items-center justify-center shrink-0">4</span>
                  <div><strong className="text-white">SEO & Go-Live:</strong> Schema markup, Google Search Console indexing, and launch verification.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. H2: WooCommerce Development ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 bg-neutral-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Icon icon="logos:woocommerce" width={28} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">WooCommerce Technical Excellence</h3>
                  <div className="text-xs text-neutral-400">WordPress Open-Source Control</div>
                </div>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-neutral-950/80 rounded-xl border border-white/5">
                  <strong className="text-white">Zero Subscription Lock-in:</strong> Complete ownership of your store database, hosting, and files.
                </div>
                <div className="p-3 bg-neutral-950/80 rounded-xl border border-white/5">
                  <strong className="text-white">Custom Plugin Engineering:</strong> Tailored checkout modifiers, custom shipping rules, and wholesale extensions.
                </div>
                <div className="p-3 bg-neutral-950/80 rounded-xl border border-white/5">
                  <strong className="text-white">High-Speed Optimization:</strong> Redis object caching, Cloudflare CDN, and optimized MySQL queries.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
                <Globe className="w-3.5 h-3.5" /> WordPress eCommerce
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                WooCommerce Development
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                For businesses wanting complete control over their hosting, codebase, and content management, WooCommerce on WordPress delivers unparalleled flexibility.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                Our <Link href="/technology/wordpress-development" className="text-[#FF3B00] underline hover:text-white">WooCommerce developers</Link> build lean, lightning-fast stores engineered without code bloat, incorporating customized checkouts, Indian payment gateways, and automated logistics.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/technology/wordpress-development" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Custom WooCommerce Plugins</Link>
                <Link href="/compare/shopify-vs-woocommerce" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Shopify vs WooCommerce Guide</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. H2: eCommerce Payment & Shipping Integration ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Workflow className="w-3.5 h-3.5" /> Connected Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Payment & Shipping Integration
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Your online store shouldn't exist in a silo. We seamlessly integrate payment gateways, automated logistics carriers, ERP accounting software, and WhatsApp notifications into a unified workflow.
            </p>
          </div>

          {/* Connected Flow Banner */}
          <div className="bg-neutral-950/80 border border-white/10 rounded-3xl p-6 md:p-8 mb-10">
            <div className="text-xs font-mono uppercase text-[#FF3B00] mb-2 text-center">
              Automated eCommerce Operations Pipeline
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 py-4 text-xs font-mono">
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">Customer Order</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">Gateway Webhook</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">GST Invoice & Tally Sync</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">Shiprocket AWB</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-emerald-500/20 border border-emerald-500/40 px-3 py-2 rounded-xl text-emerald-300 font-bold">WhatsApp Delivery Alerts</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Gateways</div>
              <h3 className="text-base font-bold text-white mb-3">Online Payments</h3>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 Razorpay Direct API</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 Cashfree Payments</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 PayU & Paytm Gateway</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 Stripe (International Cards)</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">⚡ UPI Intent, QR & NetBanking</div>
              </div>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Logistics</div>
              <h3 className="text-base font-bold text-white mb-3">Shipping & Tracking</h3>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 Shiprocket API Hub</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 Delhivery Direct</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 Blue Dart Express API</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 India Post Speed Post</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📍 Automated AWB & Manifests</div>
              </div>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Accounting</div>
              <h3 className="text-base font-bold text-white mb-3">CRM & ERP Systems</h3>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 Tally Prime API Sync</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 Zoho Books & Inventory</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 SAP Business One</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 Busy Accounting Software</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🔄 Multi-Warehouse Stock Logic</div>
              </div>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Marketing</div>
              <h3 className="text-base font-bold text-white mb-3">Alerts & Analytics</h3>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">💬 WhatsApp Business API</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📱 Fast2SMS / MSG91 OTP</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📧 Automated PDF Invoices</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📈 Google Analytics 4 & Pixel</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🛒 Abandoned Cart Recovery</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. H2: eCommerce Website Development Process ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Workflow className="w-3.5 h-3.5" /> Proven Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Development Process
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              We follow a disciplined 8-step engineering lifecycle to ensure your online store is delivered on schedule, within budget, and optimized for sales from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: "01", title: "Business & Requirement Analysis", desc: "We evaluate your products, SKUs, sales processes, target buyers, payment gateway preferences, and logistics requirements." },
              { num: "02", title: "eCommerce Architecture & Platform", desc: "We select the optimal platform (Shopify, WooCommerce, or Custom Next.js) and map product taxonomy and database schemas." },
              { num: "03", title: "UI/UX Design & Wireframing", desc: "We design conversion-optimized storefront wireframes, sticky cart interactions, and frictionless mobile checkout experiences." },
              { num: "04", title: "Frontend Development", desc: "Our engineers build responsive, sub-second loading storefront pages with Next.js/React, Tailwind CSS, and optimized media assets." },
              { num: "05", title: "Backend & API Development", desc: "We build secure APIs, database logic, user authentication, inventory tracking, and role-based administrative dashboards." },
              { num: "06", title: "Payment & Shipping Integration", desc: "We hook up Razorpay, Cashfree, UPI Intent, Shiprocket, Delhivery, Tally Prime ERP, and automated WhatsApp alert triggers." },
              { num: "07", title: "Testing & SEO Setup", desc: "We conduct stress testing under transaction load, audit Core Web Vitals, and configure Product & FAQPage Schema markup." },
              { num: "08", title: "Deployment & Post-Launch Support", desc: "We launch on secure cloud infrastructure, link your domain, submit XML sitemaps to Google, and provide ongoing maintenance." }
            ].map((step, idx) => (
              <div key={idx} className="bg-neutral-900/50 border border-white/5 hover:border-[#FF3B00]/30 p-6 rounded-2xl transition flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-extrabold font-mono text-[#FF3B00]">{step.num}</span>
                  <h3 className="text-base font-bold text-white mt-2">{step.title}</h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 13. H2: Technologies We Use ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Cpu className="w-3.5 h-3.5" /> Modern Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technologies We Use
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              We select modern, battle-tested technologies based on your business volume, performance goals, and operational complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Frontend</div>
              <h3 className="text-sm font-bold text-white mb-2">Storefront UI</h3>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Next.js 15 & React</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Tailwind CSS & SCSS</li>
                <li>• Framer Motion</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Backend</div>
              <h3 className="text-sm font-bold text-white mb-2">APIs & Logic</h3>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Node.js & Express</li>
                <li>• Laravel (PHP)</li>
                <li>• RESTful & GraphQL APIs</li>
                <li>• Webhook Handlers</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Databases</div>
              <h3 className="text-sm font-bold text-white mb-2">Data & Cache</h3>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• PostgreSQL</li>
                <li>• MongoDB</li>
                <li>• MySQL Database</li>
                <li>• Redis In-Memory Caching</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Platforms</div>
              <h3 className="text-sm font-bold text-white mb-2">eCommerce Engines</h3>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Shopify Plus & Custom</li>
                <li>• WooCommerce (WP)</li>
                <li>• Custom Next.js Commerce</li>
                <li>• Headless Commerce</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Mobile & Apps</div>
              <h3 className="text-sm font-bold text-white mb-2">Android & iOS</h3>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Flutter Cross-Platform</li>
                <li>• React Native</li>
                <li>• Progressive Web Apps</li>
                <li>• Firebase Push Alerts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 14. H2: eCommerce Website Development Cost in India ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Tag className="w-3.5 h-3.5" /> Pricing & Timelines
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Development Cost in India
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
              The cost of developing an eCommerce website in India depends on the number of products, design complexity, payment and shipping integrations, admin functionality, inventory requirements, third-party APIs and whether the store is built using Shopify, WooCommerce or a custom technology stack. A basic online store may require a significantly smaller development scope than a B2B wholesale platform or multi-vendor marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Basic Tier */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase">Starter Online Store</div>
                <h3 className="text-xl font-bold text-white mt-1">Basic eCommerce Website</h3>
                <div className="mt-4 pb-4 border-b border-white/10">
                  <span className="text-3xl font-extrabold font-mono text-white">₹30,000</span>
                  <span className="text-xs text-neutral-400 font-mono"> – ₹60,000+</span>
                  <div className="text-[11px] text-[#FF3B00] font-mono mt-1">Timeline: Approx. 2–4 Weeks</div>
                </div>
                <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                  Suitable for small businesses and local shops launching their first online catalogue.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Clean product catalogue</div>
                  <div>✓ Shopping cart & checkout</div>
                  <div>✓ Razorpay / UPI gateway</div>
                  <div>✓ Basic admin dashboard</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold text-center block cursor-pointer">
                Choose Basic Plan
              </a>
            </div>

            {/* Professional Tier (Highlighted) */}
            <div className="bg-neutral-900/80 border-2 border-[#FF3B00] rounded-2xl p-6 flex flex-col justify-between relative shadow-[0_0_30px_rgba(255,59,0,0.2)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF3B00] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-0.5 rounded-full font-bold">
                Most Popular
              </div>
              <div>
                <div className="text-xs font-mono text-[#FF3B00] uppercase">Growing D2C Brands</div>
                <h3 className="text-xl font-bold text-white mt-1">Professional eCommerce Website</h3>
                <div className="mt-4 pb-4 border-b border-white/10">
                  <span className="text-3xl font-extrabold font-mono text-white">₹60,000</span>
                  <span className="text-xs text-neutral-400 font-mono"> – ₹1,50,000+</span>
                  <div className="text-[11px] text-emerald-400 font-mono mt-1">Timeline: Approx. 4–8 Weeks</div>
                </div>
                <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                  Suitable for growing brands requiring custom UI/UX, advanced search filters, and automated shipping.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Custom responsive UI/UX</div>
                  <div>✓ Shiprocket & Delhivery APIs</div>
                  <div>✓ WhatsApp & SMS alerts</div>
                  <div>✓ Technical SEO & Schema markup</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-[#FF3B00] hover:bg-[#ff4e1a] text-white rounded-xl text-xs font-bold text-center block shadow-lg shadow-[#FF3B00]/30 cursor-pointer">
                Get Started Now
              </a>
            </div>

            {/* Custom / B2B Tier */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase">Enterprise & B2B</div>
                <h3 className="text-xl font-bold text-white mt-1">Custom eCommerce Platform</h3>
                <div className="mt-4 pb-4 border-b border-white/10">
                  <span className="text-3xl font-extrabold font-mono text-white">₹1,50,000</span>
                  <span className="text-xs text-neutral-400 font-mono"> – ₹5,00,000+</span>
                  <div className="text-[11px] text-[#FF3B00] font-mono mt-1">Timeline: Approx. 8–16+ Weeks</div>
                </div>
                <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                  Suitable for businesses requiring custom workflows, B2B wholesale logic, ERP sync, and multi-warehouse routing.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Wholesale tiered pricing</div>
                  <div>✓ Tally / Zoho / SAP ERP sync</div>
                  <div>✓ Multi-warehouse stock logic</div>
                  <div>✓ 100% bespoke Next.js codebase</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold text-center block cursor-pointer">
                Request Custom Plan
              </a>
            </div>

            {/* Multi-Vendor Tier */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase">Marketplace Model</div>
                <h3 className="text-xl font-bold text-white mt-1">Multi-Vendor Marketplace</h3>
                <div className="mt-4 pb-4 border-b border-white/10">
                  <span className="text-3xl font-extrabold font-mono text-white">₹3,00,000+</span>
                  <div className="text-[11px] text-[#FF3B00] font-mono mt-1">Timeline: Approx. 12–24+ Weeks</div>
                </div>
                <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                  Suitable for startups building Amazon/Flipkart-style multi-seller platforms with automated vendor commissions.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Vendor dashboard & KYC</div>
                  <div>✓ Automated commission splitting</div>
                  <div>✓ Seller payout disbursements</div>
                  <div>✓ Master platform admin panel</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold text-center block cursor-pointer">
                Explore Marketplace
              </a>
            </div>
          </div>
        </section>

        {/* ── 15. H2: Shopify vs WooCommerce vs Custom eCommerce ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Platform Decision Guide
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Shopify vs WooCommerce vs Custom eCommerce
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              No single platform fits every business model. Here is an objective comparison to help you choose the ideal solution:
            </p>
          </div>

          <div className="overflow-x-auto bg-neutral-950/80 border border-white/10 rounded-3xl p-6 md:p-8">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-neutral-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-4">Solution</th>
                  <th className="py-3 px-4">Best For</th>
                  <th className="py-3 px-4">Key Advantages</th>
                  <th className="py-3 px-4">Limitations</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-neutral-300">
                <tr className="hover:bg-white/5 transition">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Icon icon="logos:shopify" width={18} /> Shopify
                  </td>
                  <td className="py-4 px-4">Startups & D2C Brands</td>
                  <td className="py-4 px-4 text-emerald-400">Fast launch, managed hosting security</td>
                  <td className="py-4 px-4 text-neutral-400">Less backend control, recurring monthly app fees</td>
                  <td className="py-4 px-4">
                    <Link href="/technology/shopify-development" className="text-[#FF3B00] hover:underline font-medium">
                      Shopify Services →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Icon icon="logos:woocommerce" width={18} /> WooCommerce
                  </td>
                  <td className="py-4 px-4">Content + Commerce Stores</td>
                  <td className="py-4 px-4 text-emerald-400">100% open source, WordPress ecosystem</td>
                  <td className="py-4 px-4 text-neutral-400">Requires manual hosting & security maintenance</td>
                  <td className="py-4 px-4">
                    <Link href="/technology/wordpress-development" className="text-[#FF3B00] hover:underline font-medium">
                      WooCommerce Services →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Icon icon="logos:nextjs-icon" width={18} /> Custom eCommerce
                  </td>
                  <td className="py-4 px-4">B2B, ERP Sync & High Volume</td>
                  <td className="py-4 px-4 text-[#FF3B00] font-bold">Sub-second speeds, zero transaction cuts, full control</td>
                  <td className="py-4 px-4 text-neutral-400">Higher initial upfront development investment</td>
                  <td className="py-4 px-4">
                    <Link href="/technology/nextjs-development" className="text-[#FF3B00] hover:underline font-medium">
                      Next.js Architecture →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FF3B00]" /> Multi-Vendor
                  </td>
                  <td className="py-4 px-4">Digital Marketplaces</td>
                  <td className="py-4 px-4 text-blue-400">Multiple seller portals, automated commission splits</td>
                  <td className="py-4 px-4 text-neutral-400">More complex architecture & merchant management</td>
                  <td className="py-4 px-4">
                    <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">
                      Marketplace Dev →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-neutral-900/60 border border-white/10 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-2">Which eCommerce platform should you choose?</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              If you want to validate a brand rapidly with minimal initial development time, <strong>Shopify</strong> is a reliable choice. If your business is already centered around WordPress content and you want zero monthly software fees, <strong>WooCommerce</strong> is ideal. If you require custom wholesale pricing, Tally/SAP ERP integration, multi-warehouse automated routing, high-volume transactions without revenue cuts, or proprietary workflows, a <strong>Custom Next.js & Node.js eCommerce build</strong> is the most profitable long-term investment.
            </p>
          </div>
        </section>

        {/* ── 16. H2: eCommerce SEO & Search-Friendly Development ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Search className="w-3.5 h-3.5" /> Organic Discovery
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce SEO & Search-Friendly Development
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              An online store that cannot be found on Google doesn't generate sales. We build search-engine friendly architecture, Product Schema, Core Web Vitals, and AI-search visibility directly into your codebase. Learn about our <Link href="/seo-services-in-patna" className="text-[#FF3B00] underline hover:text-white">SEO services in Patna</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FF3B00]/20 text-[#FF3B00] flex items-center justify-center mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Technical eCommerce SEO</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  We build search-engine friendly architecture from the ground up:
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Clean semantic URLs & H1/H2 hierarchy</div>
                  <div>✓ Product & Category Schema JSON-LD</div>
                  <div>✓ Dynamic XML sitemaps & robots.txt</div>
                  <div>✓ Canonical tags avoiding duplicate filter content</div>
                  <div>✓ Sub-second TTFB & Core Web Vitals 90+</div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Search & AI-Friendly Architecture</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Optimized for search engines and AI assistants to accurately surface your products:
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Crawlable navigation & logical category hierarchy</div>
                  <div>✓ FAQPage schema embedded in server HTML</div>
                  <div>✓ Structured product specification attributes</div>
                  <div>✓ High mobile rendering stability & fast TTFB</div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Entity Authority & Schema</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Entity authority signals structured so search engines recognize your brand:
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Organization & LocalBusiness schema graphs</div>
                  <div>✓ Verified brand entity citations</div>
                  <div>✓ Accurate priceCurrency & availability tags</div>
                  <div>✓ High-authority internal linking network</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 17. H2: eCommerce Development Case Studies ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Award className="w-3.5 h-3.5" /> Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Development Case Studies
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Explore how Webflora Technologies engineered scalable online stores and platforms that delivered measurable commercial outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Case Study 1: RGM Services */}
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FF3B00]/30 transition">
              <div>
                <div className="text-xs font-mono uppercase text-[#FF3B00] mb-2">Custom Product & Business Platform</div>
                <h3 className="text-xl font-bold text-white">RGM Services Platform</h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
                  <strong>Business Problem:</strong> RGM Services needed a scalable digital product catalogue with admin content control and direct WhatsApp customer enquiry routing without third-party marketplace fees.
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  <strong>Solution Built:</strong> Developed a custom Next.js storefront with Node.js/Express APIs, Cloudinary image CDN, JWT role-based admin panel, and instant WhatsApp enquiry integration.
                </p>
                <div className="mt-5 space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Mobile Page Load:</span>
                    <span className="font-mono text-emerald-400 font-bold">0.9 Seconds</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Direct Enquiries:</span>
                    <span className="font-mono text-[#FF3B00] font-bold">+240% Increase</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-400">Tech Stack:</span>
                    <span className="font-mono text-white">Next.js + Node.js + Express + MongoDB</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5">
                <Link href="/case-studies" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF3B00] hover:underline">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Case Study 2: Feedrani D2C */}
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FF3B00]/30 transition">
              <div>
                <div className="text-xs font-mono uppercase text-[#FF3B00] mb-2">D2C Farm-to-Fork Brand</div>
                <h3 className="text-xl font-bold text-white">Feedrani D2C Online Store</h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
                  <strong>Business Problem:</strong> High shopping cart abandonment and slow mobile checkout on a previous platform were hurting ad campaign ROAS.
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  <strong>Solution Built:</strong> Engineered a lightweight Next.js storefront featuring 1-click UPI checkout, automated Shiprocket AWB creation, and WhatsApp order alerts.
                </p>
                <div className="mt-5 space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Checkout Speed:</span>
                    <span className="font-mono text-emerald-400 font-bold">0.8 Seconds</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Cart Conversion Lift:</span>
                    <span className="font-mono text-[#FF3B00] font-bold">+184% Improvement</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-400">Tech Stack:</span>
                    <span className="font-mono text-white">Next.js + Razorpay + Shiprocket API</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5">
                <Link href="/case-studies" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF3B00] hover:underline">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Case Study 3: Krisivarsha Agri */}
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FF3B00]/30 transition">
              <div>
                <div className="text-xs font-mono uppercase text-[#FF3B00] mb-2">B2B Wholesale Portal</div>
                <h3 className="text-xl font-bold text-white">Krisivarsha Agri Portal</h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
                  <strong>Business Problem:</strong> Managing wholesale orders from 200+ regional dealers over phone and WhatsApp caused inventory discrepancies and billing delays.
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  <strong>Solution Built:</strong> Built a custom B2B portal with dealer-specific tiered pricing, bulk CSV ordering, Minimum Order Quantities (MOQs), and live Tally Prime sync.
                </p>
                <div className="mt-5 space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Order Processing:</span>
                    <span className="font-mono text-emerald-400 font-bold">4.5x Faster</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Manual Billing Errors:</span>
                    <span className="font-mono text-[#FF3B00] font-bold">Reduced by 92%</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-400">Tech Stack:</span>
                    <span className="font-mono text-white">Node.js + PostgreSQL + Tally Sync</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5">
                <Link href="/case-studies" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF3B00] hover:underline">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 18. H2: Why Choose Webflora Technologies? ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Award className="w-3.5 h-3.5" /> Our Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Why Choose Webflora Technologies?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Selecting the right eCommerce development company is a high-impact business decision. Here is how Webflora provides measurable commercial value:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Proven Real Projects",
                desc: "We showcase authentic case studies across D2C brands, B2B wholesale portals, and retail platforms with real commercial outcomes."
              },
              {
                title: "Modern Full-Stack Engineering",
                desc: "We build on Next.js 15, React, Node.js, Express, PostgreSQL, MongoDB, and Redis to achieve sub-second speeds and bulletproof stability."
              },
              {
                title: "Business Workflow Integration",
                desc: "We connect your online store seamlessly with payment gateways, Shiprocket/Delhivery logistics, Tally ERP, and WhatsApp automation."
              },
              {
                title: "100% Code Ownership",
                desc: "For custom development projects, you own 100% of your source code, database, and customer data with zero monthly revenue cuts."
              },
              {
                title: "Direct Developer Communication",
                desc: "You collaborate directly with senior eCommerce engineers and technical leads rather than passing messages through layers of account managers."
              },
              {
                title: "Post-Launch Growth & Support",
                desc: "We support your store after go-live with regular security patching, speed audits, conversion rate optimization (CRO), and feature development."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6">
                <div className="w-8 h-8 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] flex items-center justify-center font-bold font-mono text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 19. H2: eCommerce Website Development Company in India ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Globe className="w-3.5 h-3.5" /> Pan-India eCommerce Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Development Company in India
            </h2>
            <div className="mt-6 text-left sm:text-center space-y-3 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                <strong className="text-white font-medium">Webflora Technologies</strong> provides eCommerce website development services for businesses across India. Our team works with startups, retailers, D2C brands, manufacturers, wholesalers and established businesses that want to sell products online or improve an existing eCommerce platform.
              </p>
              <p>
                Depending on the project, we develop Shopify stores, WooCommerce websites and custom eCommerce platforms using modern technologies such as Next.js, React and Node.js.
              </p>
              <p>
                Our eCommerce development services can include product catalogues, shopping carts, checkout systems, payment gateway integration, shipping APIs, inventory management, customer accounts, order management, CRM/ERP integration and custom admin dashboards.
              </p>
              <p>
                Businesses can work with Webflora whether they are launching their first online store, migrating from an existing platform or building a more advanced B2B or marketplace solution.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Regional Stronghold in Patna & Bihar */}
            <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-black border border-[#FF3B00]/30 rounded-3xl p-8 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/15 text-[#FF3B00] text-xs font-mono uppercase mb-4 border border-[#FF3B00]/30">
                <MapPin className="w-3.5 h-3.5" /> Regional Stronghold
              </div>
              <h3 className="text-2xl font-bold text-white">
                <Link href="/it-company-in-patna" className="hover:text-[#FF3B00] transition">
                  eCommerce Website Development in Patna & Bihar
                </Link>
              </h3>
              <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
                As the leading eCommerce website development company based in Patna, Bihar, we empower regional manufacturers, retailers, and wholesalers to expand into national online markets.
              </p>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                If you are looking for an <strong className="text-white">eCommerce website developer in Patna</strong> or an <strong className="text-white">eCommerce website development company in Bihar</strong>, meet our technical team directly at our Patna office.
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-neutral-400 mb-2">Serving Across Bihar:</div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {["Patna", "Boring Road", "Bailey Road", "Kankarbagh", "Danapur", "Rajendra Nagar", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia"].map((city) => (
                    <span key={city} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded text-neutral-300">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Serving Clients Across India */}
            <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 text-xs font-mono uppercase mb-4 border border-blue-500/30">
                <Globe className="w-3.5 h-3.5" /> Serving Clients Across India
              </div>
              <h3 className="text-2xl font-bold text-white">
                <Link href="/locations" className="hover:text-blue-400 transition">
                  Nationwide Remote Engineering
                </Link>
              </h3>
              <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
                We work with ambitious digital brands across India including Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad, Chennai, and Kolkata.
              </p>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Our remote engineering workflow includes weekly sprint video demos, private staging URLs, dedicated communication channels, and real-time project tracking.
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-neutral-400 mb-2">Major Commercial Hubs:</div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {[
                    { name: "Delhi NCR", link: "/locations/delhi" },
                    { name: "Mumbai", link: "/locations/mumbai" },
                    { name: "Bangalore", link: "/locations/bangalore" },
                    { name: "Pune", link: "/locations/pune" },
                    { name: "Hyderabad", link: "/locations/hyderabad" },
                    { name: "Chennai", link: "/locations/chennai" },
                    { name: "Kolkata", link: "/locations/kolkata" },
                  ].map((loc) => (
                    <Link key={loc.name} href={loc.link} className="bg-white/5 hover:bg-white/15 border border-white/10 px-2.5 py-1 rounded text-neutral-300 hover:text-white transition">
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 20. H2: Frequently Asked Questions (100% Crawlable HTML Answers) ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <HelpCircle className="w-3.5 h-3.5" /> Clarifications & Answers
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Clear, transparent answers to common questions about eCommerce website development costs, timelines, platforms, and integrations in India.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqs[idx] ?? false;
              return (
                <div
                  key={idx}
                  className="bg-neutral-900/50 border border-white/5 hover:border-white/15 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] flex items-center justify-center text-xs font-mono font-bold shrink-0">
                        Q
                      </span>
                      {faq.q}
                    </span>
                    <span className="text-neutral-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#FF3B00]" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {/* Crawlable HTML answer element (always present in DOM for search crawlers) */}
                  <div
                    className={`px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <div className="pl-9">{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 21. H2: Start Your eCommerce Project ── */}
        <section id="consultation-form" className="py-16 md:py-24 border-t border-white/5">
          <div className="bg-gradient-to-br from-neutral-950 via-[#0A0A0A] to-neutral-950 border border-[#FF3B00]/30 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3B00]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase mb-4 border border-[#FF3B00]/30">
                  <Sparkles className="w-3.5 h-3.5" /> Let's Build Together
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Start Your eCommerce Project
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                  Looking for an eCommerce website development company for your business? Tell us your requirements and get a complete project scope, architecture plan, and development estimate.
                </p>
                <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  We review what you sell, who your target customers are, and what business integrations you need. Our team provides an itemized proposal within 2 business hours.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>Free technical architecture consultation & store roadmap</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>Fixed timeline & transparent milestone-based quote</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>Direct phone & WhatsApp access to lead eCommerce engineers</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6">
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase font-mono">Direct Phone Line</div>
                    <a href="tel:+918540814729" className="text-sm font-bold text-white hover:text-[#FF3B00] transition">
                      +91 8540814729
                    </a>
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase font-mono">Email Inquiries</div>
                    <a href="mailto:hello@webfloratechnologies.com" className="text-sm font-bold text-white hover:text-[#FF3B00] transition">
                      hello@webfloratechnologies.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Form Card */}
              <div className="lg:col-span-6 bg-neutral-900/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
                {formSuccess ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Consultation Request Received!</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto">
                      Our eCommerce lead developer will review your requirements and get in touch within 2 business hours.
                    </p>
                    <button
                      onClick={() => setFormSuccess(false)}
                      className="px-6 py-2.5 bg-[#FF3B00] text-white text-xs font-bold rounded-xl cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-2">
                      Request an eCommerce Quote
                    </h3>

                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#FF3B00]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#FF3B00]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="rahul@company.com"
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#FF3B00]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">Platform / Solution</label>
                        <select
                          value={formState.projectType}
                          onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF3B00]"
                        >
                          <option value="Custom eCommerce Website">Custom eCommerce (Next.js)</option>
                          <option value="Shopify Store Development">Shopify Store</option>
                          <option value="WooCommerce Development">WooCommerce Store</option>
                          <option value="B2B eCommerce Platform">B2B Wholesale Platform</option>
                          <option value="Multi-Vendor Marketplace">Multi-Vendor Marketplace</option>
                          <option value="eCommerce Mobile App">eCommerce Mobile App</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">Estimated Budget</label>
                        <select
                          value={formState.budget}
                          onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF3B00]"
                        >
                          <option value="₹30,000–₹60,000">₹30,000 – ₹60,000 (Basic)</option>
                          <option value="₹60,000–₹1,50,000">₹60,000 – ₹1,50,000 (Professional)</option>
                          <option value="₹1,50,000–₹5,00,000">₹1,50,000 – ₹5,00,000 (Custom / B2B)</option>
                          <option value="₹3,00,000+">₹3,00,000+ (Multi-Vendor)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">Project Details / Requirements</label>
                      <textarea
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell us what products you sell, estimated SKU count, or specific integrations needed..."
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#FF3B00]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-3.5 bg-[#FF3B00] hover:bg-[#ff4e1a] text-white rounded-xl text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-[#FF3B00]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {formLoading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request an eCommerce Quote</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Master Internal Linking Ecosystem ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="bg-neutral-950/90 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-mono uppercase mb-3 border border-white/10">
                <Globe className="w-3.5 h-3.5 text-[#FF3B00]" /> Webflora Digital Network
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Explore Related Services, Technologies & Solutions
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                Discover our interconnected digital engineering ecosystem across Bihar and India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xs">
              
              {/* Column 1: Core Services */}
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase font-mono tracking-wider text-xs flex items-center gap-2 pb-2 border-b border-white/10">
                  <Briefcase className="w-4 h-4 text-[#FF3B00]" /> Core Development Services
                </h4>
                <div className="space-y-2">
                  <Link href="/seo-services-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → SEO Services in Patna
                  </Link>
                  <Link href="/it-company-in-patna/website-development-company-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Website Development Company in Patna
                  </Link>
                  <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Mobile App Development Company in Patna
                  </Link>
                  <Link href="/it-company-in-patna/software-development-company-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Custom Software Development in Patna
                  </Link>
                  <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → AI Automation & Workflow Integration
                  </Link>
                  <Link href="/it-company-in-patna/digital-marketing-agency-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Digital Marketing Agency in Patna
                  </Link>
                  <Link href="/it-company-in-patna/ai-chatbot-company-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → AI Chatbot Development in Patna
                  </Link>
                  <Link href="/attendance-management-software" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Attendance Management Software
                  </Link>
                </div>
              </div>

              {/* Column 2: Technologies & Comparisons */}
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase font-mono tracking-wider text-xs flex items-center gap-2 pb-2 border-b border-white/10">
                  <Code2 className="w-4 h-4 text-[#FF3B00]" /> Technologies & Platforms
                </h4>
                <div className="space-y-2">
                  <Link href="/technology/shopify-development" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Shopify Store Development
                  </Link>
                  <Link href="/technology/wordpress-development" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → WordPress & WooCommerce Development
                  </Link>
                  <Link href="/technology/nextjs-development" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Next.js Web Development
                  </Link>
                  <Link href="/technology/react-development" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → React.js Frontend Engineering
                  </Link>
                  <Link href="/technology/flutter-development" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Flutter Mobile App Development
                  </Link>
                  <Link href="/compare/shopify-vs-woocommerce" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Shopify vs WooCommerce Comparison
                  </Link>
                  <Link href="/compare/wordpress-vs-nextjs" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → WordPress vs Next.js Architecture
                  </Link>
                  <Link href="/compare/custom-software-vs-saas" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Custom Software vs SaaS Cost Breakdown
                  </Link>
                </div>
              </div>

              {/* Column 3: Industries & Guides */}
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase font-mono tracking-wider text-xs flex items-center gap-2 pb-2 border-b border-white/10">
                  <Building2 className="w-4 h-4 text-[#FF3B00]" /> Industries & Resources
                </h4>
                <div className="space-y-2">
                  <Link href="/industries/retail" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Retail & eCommerce Digital Transformation
                  </Link>
                  <Link href="/industries/manufacturing" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Manufacturing ERP & B2B Portals
                  </Link>
                  <Link href="/pricing-guides/website-development-cost-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Website Development Cost in Patna
                  </Link>
                  <Link href="/pricing-guides/mobile-app-cost-in-india" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Mobile App Development Cost in India
                  </Link>
                  <Link href="/case-studies" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Verified Client Case Studies
                  </Link>
                  <Link href="/why-webflora" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Why Choose Webflora Technologies
                  </Link>
                  <Link href="/contact" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Contact Our Engineering Team
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
