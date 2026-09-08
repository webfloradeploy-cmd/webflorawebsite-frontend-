"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Factory
} from "lucide-react";
import WhyChooseSection from "../Components/WhyChooseSection";
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

// Interactive Lifecycle Node Stepper
const lifecycleStages = [
  { id: "customers", label: "Customers", icon: Users, desc: "Shoppers discover your products via organic Google search, social media, and marketing channels." },
  { id: "catalog", label: "Catalog", icon: Package, desc: "Intuitive product pages with high-res galleries, variant selectors, and live inventory availability." },
  { id: "cart", label: "Cart", icon: ShoppingCart, desc: "Instant client-side cart updates, coupon validation, free shipping progress bars, and upsells." },
  { id: "checkout", label: "Checkout", icon: ShieldCheck, desc: "Simple one-page checkout with stored addresses, GST validation, and phone OTP login." },
  { id: "payment", label: "Payment", icon: CreditCard, desc: "Secure Razorpay, UPI QR, Cards, Net Banking, EMI, and COD with automated reconciliation." },
  { id: "order", label: "Order", icon: ShoppingBag, desc: "Automated GST invoice generation, instant WhatsApp & SMS confirmation, and admin alerts." },
  { id: "inventory", label: "Inventory", icon: Boxes, desc: "Real-time stock deduction across multi-warehouse locations with automated low-stock warnings." },
  { id: "shipping", label: "Shipping", icon: Truck, desc: "Automated AWB allocation with Shiprocket, Delhivery, or Blue Dart and label generation." },
  { id: "delivery", label: "Delivery", icon: CheckCircle2, desc: "Live GPS courier tracking, doorstep delivery confirmation, and post-purchase review prompts." },
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
              Live eCommerce Operations Simulator
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
            End-to-End Online Store Architecture
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
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 ${
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
                Free Shipping Qualified
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
                      <button onClick={() => updateQty(item.id, -1)} className="px-2.5 py-1 text-neutral-400 hover:text-white">-</button>
                      <span className="px-2 text-xs font-mono font-bold text-white">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="px-2.5 py-1 text-neutral-400 hover:text-white">+</button>
                    </div>
                    <div className="text-sm font-bold text-white font-mono w-20 text-right">
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
                className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold transition"
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
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isCurrent
                        ? "bg-[#FF3B00]/15 border-[#FF3B00] text-white"
                        : isPassed
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                        : "bg-neutral-900/50 border-white/5 text-neutral-500"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold">0{i + 1}</span>
                      {isPassed && <Check className="w-3 h-3 text-emerald-400" />}
                    </div>
                    <div className="text-xs font-semibold leading-tight">{st}</div>
                  </button>
                );
              })}
            </div>

            {/* Simulated webhook event */}
            <div className="mt-6 bg-black/60 rounded-xl p-4 border border-white/5 text-xs font-mono text-neutral-300 flex items-center justify-between flex-wrap gap-3">
              <div>
                <span className="text-[#FF3B00] font-bold">Webhook Trigger:</span> Current Status is{" "}
                <span className="text-white font-bold underline">{orderStatuses[activeOrderStep]}</span>.
                Automated webhook payload dispatched to CRM & WhatsApp API.
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveOrderStep(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-[11px]"
                >
                  Previous Status
                </button>
                <button
                  onClick={() => setActiveOrderStep(prev => Math.min(orderStatuses.length - 1, prev + 1))}
                  className="px-3 py-1 bg-[#FF3B00] hover:bg-[#ff4e1a] text-white rounded text-[11px]"
                >
                  Advance Stage
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Inventory Logic */}
      {activeTab === "inventory" && (
        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono uppercase">
                <span>SKU: CHAIR-ERG-01</span>
                <span className="text-emerald-400">Warehouse: Patna Hub</span>
              </div>
              <h5 className="text-base font-bold text-white mb-1">Live Stock Availability</h5>
              <div className="text-3xl font-mono font-bold text-white mt-3 flex items-baseline gap-2">
                <span>{stockLevel} Units</span>
                <span className="text-xs text-neutral-400 font-normal">in stock</span>
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Multi-location warehouse auto-deducts 1 unit whenever payment webhook resolves.
              </p>
            </div>
            <button
              onClick={() => setStockLevel(prev => prev + 5)}
              className="mt-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-semibold"
            >
              + Add Restock Shipment (5 units)
            </button>
          </div>

          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-5">
            <div className="text-xs text-neutral-400 mb-2 font-mono uppercase">Automated Trigger</div>
            <h5 className="text-base font-bold text-white mb-2">Low Stock Alert Rules</h5>
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="p-2.5 bg-black/40 rounded-lg border border-white/5 flex items-center justify-between">
                <span>Alert Threshold:</span>
                <span className="font-mono font-bold text-[#FF3B00]">≤ 5 Units</span>
              </div>
              <div className="p-2.5 bg-black/40 rounded-lg border border-white/5 flex items-center justify-between">
                <span>Notification Route:</span>
                <span className="font-mono text-neutral-200">Admin Email & Slack</span>
              </div>
              <div className="p-2.5 bg-black/40 rounded-lg border border-white/5 flex items-center justify-between">
                <span>Status:</span>
                <span className={`font-mono font-bold ${stockLevel <= 5 ? "text-amber-400" : "text-emerald-400"}`}>
                  {stockLevel <= 5 ? "⚠️ LOW STOCK ALERT ACTIVE" : "✅ Stock Level Healthy"}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="text-xs text-neutral-400 mb-2 font-mono uppercase">Channels Synced</div>
              <h5 className="text-base font-bold text-white mb-2">Omnichannel Sync Engine</h5>
              <div className="space-y-1.5 text-xs text-neutral-300">
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
                  <span>ERP & Inventory Database Sync</span>
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
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedLifecycleIndex, setSelectedLifecycleIndex] = useState(0);
  const [activeIndustryTab, setActiveIndustryTab] = useState("retail");

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
      title: "eCommerce Website Design",
      icon: Laptop,
      link: "/it-company-in-patna/website-development-company-in-patna",
      desc: "We create clean, responsive and user-friendly ecommerce websites that work across mobile, tablet and desktop devices. The design focuses on helping visitors quickly find products, understand your offerings and complete purchases."
    },
    {
      title: "Custom eCommerce Website Development",
      icon: Code2,
      link: "/technology/nextjs-development",
      desc: "If your business needs functionality that standard ecommerce platforms cannot provide, we develop custom ecommerce websites tailored to your requirements with custom catalogues, tiered pricing, bulk ordering, and custom checkout."
    },
    {
      title: "Online Store Development",
      icon: Store,
      link: "/industries/retail",
      desc: "We build complete online stores with essential features required to sell online: product categories, search, shopping cart, checkout, online payments, order tracking, customer accounts, coupons, reviews, and admin dashboard."
    },
    {
      title: "Shopify eCommerce Development",
      icon: ShoppingBag,
      link: "/technology/shopify-development",
      desc: "Shopify is ideal for businesses that want a hosted ecommerce platform. Our services include store setup, custom theme design, payment/shipping integration, app integration, Shopify SEO, and ongoing support."
    },
    {
      title: "WooCommerce Development",
      icon: Globe,
      link: "/technology/wordpress-development",
      desc: "We develop WooCommerce websites for businesses wanting an online store built on WordPress. Includes custom design, product catalog, payment gateway integration, shipping APIs, speed optimization, and maintenance."
    },
    {
      title: "B2B eCommerce Website Development",
      icon: Building2,
      link: "/industries/manufacturing",
      desc: "B2B ecommerce platforms built with dealer and distributor accounts, wholesale pricing, customer-specific pricing, bulk ordering, minimum order quantities (MOQs), product quotations, GST validation, and ERP integration."
    },
    {
      title: "D2C eCommerce Website Development",
      icon: Zap,
      link: "/industries/retail",
      desc: "For D2C brands, we build storefronts focused on product discovery, mobile shopping, offers, coupons, customer accounts, verified reviews, wishlist, tracking, and marketing analytics."
    },
    {
      title: "Multi-Vendor eCommerce Website Development",
      icon: Users,
      link: "/it-company-in-patna/software-development-company-in-patna",
      desc: "If you want to create an ecommerce marketplace where multiple sellers list and sell products, we build multi-vendor platforms with Admin Panel, Seller Panel, and customer storefront."
    },
    {
      title: "eCommerce Mobile App Development",
      icon: Smartphone,
      link: "/it-company-in-patna/mobile-app-development-company-in-patna",
      desc: "For businesses that need a dedicated mobile shopping experience, we develop native and cross-platform ecommerce applications for Android and iOS with push notifications and live tracking."
    }
  ];

  const faqs = [
    {
      q: "What does an eCommerce website development company do?",
      a: "An eCommerce website development company designs and develops online stores and ecommerce platforms. This can include website design, product catalogues, shopping carts, checkout, payment gateways, order management, inventory, shipping and business integrations."
    },
    {
      q: "How much does an eCommerce website cost in India?",
      a: "The cost depends on the platform, design, number of products, integrations and custom functionality. Basic ecommerce websites may start around ₹30,000 to ₹60,000, while professional websites range from ₹60,000 to ₹1,50,000, and complex custom or marketplace platforms cost from ₹1,50,000 to ₹5,00,000+."
    },
    {
      q: "How long does it take to develop an eCommerce website?",
      a: "A basic ecommerce website can take around 2–4 weeks. Professional websites may take 4–8 weeks, while custom ecommerce platforms require 8–16 weeks, and multi-vendor marketplaces can take 12–24 weeks or more depending on functionality."
    },
    {
      q: "Which platform is best for an ecommerce website?",
      a: "The right platform depends on your requirements. Shopify can be suitable for businesses wanting a managed platform, WooCommerce can work well with WordPress, and custom development (Next.js / Node.js) is useful when you need unique business functionality, high performance, and complete data ownership."
    },
    {
      q: "Can you build a custom eCommerce website?",
      a: "Yes. We can develop custom ecommerce websites with features such as custom pricing, B2B ordering, advanced inventory, multiple warehouses, CRM/ERP integration, custom reports, and specialized checkout workflows."
    },
    {
      q: "Can you develop a Shopify store?",
      a: "Yes. We provide Shopify store development, customization, theme design, payment and shipping setup, app integration, store migration, and Shopify SEO implementation."
    },
    {
      q: "Can you develop a WooCommerce website?",
      a: "Yes. We provide WooCommerce website development, custom design, product setup, payment gateway and shipping integrations, performance optimization, and maintenance."
    },
    {
      q: "Can you build a B2B ecommerce website?",
      a: "Yes. B2B ecommerce websites can include dealer accounts, wholesale pricing, bulk ordering, customer-specific pricing, quotations, GST information, credit limits, and ERP/CRM integration."
    },
    {
      q: "Can you build a multi-vendor ecommerce website?",
      a: "Yes. We can develop marketplace platforms with separate seller accounts, seller dashboards, product approval workflows, commissions, order routing, payments, and master administration."
    },
    {
      q: "Can you integrate payment gateways?",
      a: "Yes. Payment gateway integration can be included based on your selected platform and business requirements, including Razorpay, Cashfree, PayU, Paytm, Stripe, UPI, cards, Net banking, and COD."
    },
    {
      q: "Can you integrate shipping services?",
      a: "Yes. We can integrate suitable shipping and logistics APIs such as Shiprocket, Delhivery, Blue Dart, and India Post for automated shipment creation, delivery tracking, and order updates."
    },
    {
      q: "Can you integrate an ecommerce website with ERP or CRM?",
      a: "Yes. Ecommerce websites can be integrated with CRM, ERP, inventory, accounting (Tally, Zoho, SAP), warehouse, and other business systems through APIs or available integrations."
    },
    {
      q: "Can you develop an ecommerce mobile app?",
      a: "Yes. We can develop ecommerce mobile applications for Android and iOS using Flutter or React Native depending on your requirements."
    },
    {
      q: "Is ecommerce website development SEO-friendly?",
      a: "Yes. Ecommerce websites can be developed with SEO-friendly URLs, page structure, internal linking, mobile responsiveness, XML sitemaps, canonical URLs, and appropriate structured data schemas."
    },
    {
      q: "Do you provide ecommerce website maintenance?",
      a: "Yes. We can provide ongoing technical maintenance, updates, improvements, security support, speed monitoring, and feature development."
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
        
        {/* ── 1. Hero Section ── */}
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Build a professional online store that makes it easy for your customers to discover products, place orders and make payments.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-3 text-sm sm:text-base text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            <strong className="text-white font-semibold">Webflora Technologies</strong> is an <strong className="text-white font-semibold">eCommerce website development company</strong> in India helping startups, retailers, manufacturers, wholesalers, <Link href="/industries/retail" className="text-[#FF3B00] underline">D2C brands</Link> and growing businesses build modern online stores and ecommerce platforms.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-xs sm:text-sm text-neutral-400 max-w-3xl mx-auto leading-relaxed"
          >
            From a small online shop to a large <Link href="/industries/manufacturing" className="text-neutral-200 underline hover:text-[#FF3B00]">B2B ecommerce platform</Link> or <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-neutral-200 underline hover:text-[#FF3B00]">multi-vendor marketplace</Link>, we develop ecommerce websites around your products, customers and business processes. Our ecommerce website development services can include website design, product catalogues, shopping cart, checkout, payment gateway integration, shipping, inventory, order management, customer accounts, CRM/ERP integration and an easy-to-use admin panel.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#consultation-form"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF3B00] hover:bg-[#ff4e1a] text-white text-sm font-bold tracking-wide shadow-[0_0_30px_rgba(255,59,0,0.4)] hover:shadow-[0_0_40px_rgba(255,59,0,0.6)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#consultation-form"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/10 hover:border-white/20 transition flex items-center justify-center gap-2"
            >
              <FileCode2 className="w-4 h-4 text-[#FF3B00]" />
              <span>Request an eCommerce Quote</span>
            </a>
          </motion.div>

          {/* Quick Pillars */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { icon: Zap, title: "Modern & Fast", sub: "Built for smooth shopping", link: "/technology/nextjs-development" },
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

        {/* ── Client Authority Showcase Marquee ── */}
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

        {/* ── 2. What Is eCommerce Website Development? & Lifecycle Stepper ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Compass className="w-3.5 h-3.5" /> What Is eCommerce Development?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What is eCommerce Website Development?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
              <strong className="text-white font-medium">eCommerce website development</strong> is the complete process of building an online store where customers can discover products, add items to a shopping cart, make secure payments, and place orders online. Learn more about our <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-[#FF3B00] underline">website development company in Patna</Link> and <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-[#FF3B00] underline">eCommerce automation services</Link>.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
              Behind the scenes, your ecommerce platform gives your team control over daily operations: managing product catalogues, processing orders, updating stock across warehouses, managing customer accounts, generating invoices, and tracking shipments.
            </p>
          </div>

          {/* Interactive Stepper Pipeline */}
          <div className="bg-neutral-950/80 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] mb-3">
              The Complete eCommerce Value Chain
            </div>
            
            {/* Steps Pills Bar */}
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 pb-4">
              {lifecycleStages.map((stage, idx) => {
                const IconComp = stage.icon;
                const isSelected = selectedLifecycleIndex === idx;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedLifecycleIndex(idx)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all text-center ${
                      isSelected
                        ? "bg-[#FF3B00] border-[#FF3B00] text-white shadow-lg shadow-[#FF3B00]/30 scale-105"
                        : "bg-neutral-900/60 border-white/5 text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <IconComp className="w-5 h-5 mb-1.5" />
                    <span className="text-[11px] font-bold">{stage.label}</span>
                    <span className="text-[9px] opacity-70 font-mono">0{idx + 1}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Details Box */}
            <div className="mt-6 bg-neutral-900/80 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/20 border border-[#FF3B00]/40 flex items-center justify-center text-[#FF3B00] shrink-0">
                  {React.createElement(lifecycleStages[selectedLifecycleIndex].icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#FF3B00]">Stage 0{selectedLifecycleIndex + 1} of 09</div>
                  <h3 className="text-lg font-bold text-white">{lifecycleStages[selectedLifecycleIndex].label} Layer</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
                    {lifecycleStages[selectedLifecycleIndex].desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setSelectedLifecycleIndex(prev => (prev > 0 ? prev - 1 : lifecycleStages.length - 1))}
                  className="px-3.5 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-medium"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setSelectedLifecycleIndex(prev => (prev < lifecycleStages.length - 1 ? prev + 1 : 0))}
                  className="px-3.5 py-2 bg-[#FF3B00] hover:bg-[#ff4e1a] text-white rounded-lg text-xs font-medium"
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Live Interactive Store Simulator Widget ── */}
        <section className="py-12 md:py-16">
          <StoreSimulator />
        </section>

        {/* ── 4. eCommerce Website Development Services ── */}
        <section id="services" className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Layers className="w-3.5 h-3.5" /> What We Build
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Development Services
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-4 font-light">
              Every business sells differently. That's why we develop ecommerce websites based on your products, customers, sales process and future plans.
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
                      <span>Explore {srv.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 5. Essential Features of an eCommerce Website ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Workflow className="w-3.5 h-3.5" /> Core Storefront Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Essential Features of an eCommerce Website
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              A successful ecommerce website should make shopping simple for customers while giving your team control over daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Product Management",
                icon: Package,
                points: ["Products & Categories", "Subcategories & Brands", "Variants, SKUs & Prices", "Discounts & Stock Levels", "High-Res Images & Specifications"]
              },
              {
                title: "Search & Product Filters",
                icon: Search,
                points: ["Filter by Price & Brand", "Filter by Size & Colour", "Category & Availability", "Product Attributes", "Instant Autocomplete Search"]
              },
              {
                title: "Shopping Cart",
                icon: ShoppingCart,
                points: ["Add Products & Change Quantities", "Remove Items", "Instant Price Calculations", "Review Order Before Checkout", "Cross-Sell Recommendations"]
              },
              {
                title: "Checkout",
                icon: ShieldCheck,
                points: ["Customer Information", "Delivery Address & PIN Validation", "Shipping Options", "Coupon Code Validation", "Tax & Order Summary"]
              },
              {
                title: "Payment Gateway Integration",
                icon: CreditCard,
                points: ["Instant UPI (GPay, PhonePe, Paytm)", "Credit & Debit Cards", "Net Banking & Wallets", "Cash on Delivery (COD)", "EMI & Pay Later Options"]
              },
              {
                title: "Order Management",
                icon: ShoppingBag,
                points: ["Complete Lifecycle: New → Confirmed", "Processing → Shipped → Delivered", "Cancellations & Return Handling", "Automated Refund Queues", "GST Tax Invoice Generation"]
              },
              {
                title: "Inventory Management",
                icon: Boxes,
                points: ["Real-time Stock Tracking", "Multi-Warehouse Stock Deductions", "Automated Low-Stock Alerts", "Restock Notification Triggers", "POS & Channel Sync"]
              },
              {
                title: "Customer Management",
                icon: Users,
                points: ["Customer Account Portals", "Contact & Address Book", "Order & Purchase History", "Wishlist & Saved Items", "Loyalty & Repeat Rewards"]
              },
              {
                title: "Shipping & Order Tracking",
                icon: Truck,
                points: ["Shiprocket, Delhivery & Blue Dart APIs", "Automated AWB Creation", "Live Courier Package Tracking", "WhatsApp & SMS Delivery Alerts", "Return Pickup Management"]
              },
              {
                title: "Coupons & Discounts",
                icon: Tag,
                points: ["Discount Codes & Coupons", "Percentage & Flat Discounts", "Product-Specific Offers", "Minimum Order Value Offers", "BOGO & Seasonal Campaigns"]
              },
              {
                title: "Admin Dashboard",
                icon: BarChart3,
                points: ["Manage Products, Categories & Orders", "Customer Directory & Reports", "Inventory & Stock Overview", "Website Content & Coupons", "Role-Based Users & Permissions"]
              },
              {
                title: "Security & Speed",
                icon: Lock,
                points: ["SSL Encryption & Data Security", "Sub-Second Page Loads", "Automated Database Backups", "Core Web Vitals Optimization", "DDoS & Spam Protection"]
              }
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div key={idx} className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
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

        {/* ── 6. Custom eCommerce Website Development Deep-Dive ── */}
        <section className="py-16 md:py-24 border-t border-white/5 bg-gradient-to-b from-transparent via-[#FF3B00]/5 to-transparent rounded-3xl p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
                <Code2 className="w-3.5 h-3.5" /> Built for Your Business
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Custom eCommerce Website Development
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                A standard ecommerce platform may be enough for some businesses. Others need a system built around their own processes.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                Instead of adapting your business to a fixed template, a custom ecommerce website can be developed around the way your business operates. Learn more about our <Link href="/compare/custom-software-vs-saas" className="text-[#FF3B00] underline">custom development vs SaaS comparison</Link>.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/technology/nextjs-development" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Next.js App Router</Link>
                <Link href="/technology/nodejs-development" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Node.js / Express</Link>
                <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Custom REST APIs</Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="text-xs font-mono uppercase text-[#FF3B00] mb-3">Custom eCommerce is useful when you need:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Complex product structures & variations",
                  "Customer-specific & wholesale pricing",
                  "B2B ordering & quote generation",
                  "Dealer & distributor management",
                  "Multiple warehouses & routing",
                  "Advanced inventory synchronization",
                  "ERP & CRM integrations (Tally, SAP, Zoho)",
                  "Custom financial & sales reports",
                  "Specialized checkout workflows",
                  "Subscription-based ordering models"
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

        {/* ── 7. eCommerce Website Development for Different Industries ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Building2 className="w-3.5 h-3.5" /> Industry Verticals
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Development for Different Industries
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              We develop ecommerce websites for different types of businesses. The exact functionality depends on your products and business workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Retail",
                icon: Store,
                desc: "Online stores for physical products, local shops, and retail brands wanting to expand digital sales.",
                link: "/industries/retail"
              },
              {
                title: "Manufacturing",
                icon: Factory,
                desc: "Product catalogues, dealer portals, wholesale ordering, and business integrations for manufacturers.",
                link: "/industries/manufacturing"
              },
              {
                title: "Wholesale & Distribution",
                icon: Boxes,
                desc: "Bulk ordering, customer-specific pricing, credit terms, and distributor management.",
                link: "/industries/manufacturing"
              },
              {
                title: "D2C Brands",
                icon: Zap,
                desc: "Brand-focused online stores designed for direct customer sales, recurring subscriptions, and loyalty.",
                link: "/industries/retail"
              },
              {
                title: "Fashion & Apparel",
                icon: Shirt,
                desc: "Product variants, sizes, colours, visual lookbooks, size charts, and high-conversion product filters.",
                link: "/industries/retail"
              },
              {
                title: "Electronics",
                icon: Tv,
                desc: "Technical specifications, product comparisons, warranty registration, variants, and advanced search.",
                link: "/industries/retail"
              },
              {
                title: "Food & Grocery",
                icon: Apple,
                desc: "Product catalogues, delivery slot selection, delivery pincodes, order management, and payment integration.",
                link: "/industries/retail"
              },
              {
                title: "Multi-Seller Marketplaces",
                icon: Users,
                desc: "Platforms where multiple merchants list products with automated commission splits and vendor dashboards.",
                link: "/it-company-in-patna/software-development-company-in-patna"
              }
            ].map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <Link
                  key={idx}
                  href={ind.link}
                  className="group bg-neutral-900/50 hover:bg-neutral-900/90 border border-white/5 hover:border-[#FF3B00]/30 rounded-2xl p-6 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#FF3B00]/20 border border-white/10 group-hover:border-[#FF3B00]/40 flex items-center justify-center text-[#FF3B00] mb-3 transition">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#FF3B00] transition">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1 text-[11px] text-[#FF3B00]">
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── 8. eCommerce SEO, AEO & GEO Section ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Search className="w-3.5 h-3.5" /> Organic Discovery
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce SEO-Friendly, AEO & GEO-Ready
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              An ecommerce website needs to be discoverable as well as functional. We build search-engine and AI-engine visibility directly into your store. Learn more about our <Link href="/seo-services-in-patna" className="text-[#FF3B00] underline">SEO services in Patna</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FF3B00]/20 text-[#FF3B00] flex items-center justify-center mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">eCommerce SEO-Friendly Structure</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  We consider SEO during development by implementing appropriate technical and structural elements:
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Search-friendly URLs & proper headings</div>
                  <div>✓ Page titles and meta descriptions</div>
                  <div>✓ Internal linking & XML sitemap</div>
                  <div>✓ Robots.txt & canonical URLs</div>
                  <div>✓ Image optimization & mobile-friendly design</div>
                  <div>✓ Product and category page schema structure</div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">AEO — Answer Engine Optimization</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Modern search is not limited to traditional search results. People increasingly use AI-powered answer engines to find products and businesses.
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Clear question and direct answer formats</div>
                  <div>✓ Direct supporting information for shoppers</div>
                  <div>✓ FAQPage and product schema markup</div>
                  <div>✓ Compatibility with AI search summaries</div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">GEO — Generative Engine Optimization</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  We structure important website information clearly so that search engines and AI systems can better understand your brand entity:
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Clear business, services & products information</div>
                  <div>✓ Category & location entity signals</div>
                  <div>✓ Consistent business data across the web</div>
                  <div>✓ Structured data for AI crawlers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. Payment, Shipping, CRM & ERP Integrations ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Workflow className="w-3.5 h-3.5" /> Seamless Connections
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Payment, Shipping, CRM & ERP Integration
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Your ecommerce website connects the online shopping experience with your day-to-day fulfillment and business systems.
            </p>
          </div>

          {/* Workflow Visualization Box */}
          <div className="bg-neutral-950/80 border border-white/10 rounded-3xl p-6 md:p-8 mb-10">
            <div className="text-xs font-mono uppercase text-[#FF3B00] mb-2 text-center">
              Connected eCommerce & ERP Supply Chain
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 py-4 text-xs font-mono">
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">Customer Order</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">Ecommerce Website</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">Inventory Sync</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">GST Invoice</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">Warehouse Dispatch</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">Courier Tracking</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-emerald-500/20 border border-emerald-500/40 px-3 py-2 rounded-xl text-emerald-300 font-bold">Delivered to Customer</span>
            </div>
            <p className="text-center text-xs text-neutral-400 mt-2">
              This automated flow reduces manual data entry, prevents stockouts, and makes order processing effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Gateways</div>
              <h4 className="text-base font-bold text-white mb-3">Online Payments</h4>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 Razorpay</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 Cashfree</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 PayU & Paytm</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 Stripe (Multi-Currency)</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">⚡ UPI, Cards, Net Banking & COD</div>
              </div>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Logistics</div>
              <h4 className="text-base font-bold text-white mb-3">Shipping & Tracking</h4>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 Shiprocket API</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 Delhivery Direct</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 Blue Dart Express</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 India Post Integration</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📍 Automated AWB & Manifests</div>
              </div>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Enterprise</div>
              <h4 className="text-base font-bold text-white mb-3">CRM & ERP Systems</h4>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 Tally & Accounting</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 Zoho CRM & Books</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 SAP & Custom ERP</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 Salesforce Integration</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🔄 Multi-Warehouse Stock Sync</div>
              </div>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Customer Outreach</div>
              <h4 className="text-base font-bold text-white mb-3">Marketing & Alerts</h4>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">💬 WhatsApp Order Alerts</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📱 SMS Gateway Notifications</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📧 Automated Email Invoices</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📈 Google Analytics & Meta Pixel</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🛒 Abandoned Cart Recovery</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. Platform Comparison: Shopify vs WooCommerce vs Custom vs Multi-Vendor ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Platform Decision Guide
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Shopify vs WooCommerce vs Custom eCommerce
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              There is no single platform that is right for every business. We help you select the best approach based on your budget, business model, required features, and future plans.
            </p>
          </div>

          <div className="overflow-x-auto bg-neutral-950/80 border border-white/10 rounded-3xl p-6 md:p-8">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-neutral-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-4">Option</th>
                  <th className="py-3 px-4">Suitable For</th>
                  <th className="py-3 px-4">Main Benefit</th>
                  <th className="py-3 px-4">Webflora Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-neutral-300">
                <tr className="hover:bg-white/5 transition">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Icon icon="logos:shopify" width={18} /> Shopify
                  </td>
                  <td className="py-4 px-4">Startups, D2C and growing stores</td>
                  <td className="py-4 px-4 text-emerald-400">Managed ecommerce platform, fast launch</td>
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
                  <td className="py-4 px-4">WordPress businesses & content stores</td>
                  <td className="py-4 px-4 text-emerald-400">Flexible, customizable, full data control</td>
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
                  <td className="py-4 px-4">Complex requirements, B2B, ERP sync, high volume</td>
                  <td className="py-4 px-4 text-[#FF3B00] font-bold">Sub-second speeds, zero sales cuts, total control</td>
                  <td className="py-4 px-4">
                    <Link href="/technology/nextjs-development" className="text-[#FF3B00] hover:underline font-medium">
                      Custom Tech Stack →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FF3B00]" /> Multi-Vendor
                  </td>
                  <td className="py-4 px-4">Marketplace businesses & merchant networks</td>
                  <td className="py-4 px-4 text-blue-400">Multiple sellers, automated commission splits</td>
                  <td className="py-4 px-4">
                    <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">
                      Marketplace Dev →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 11. Our 8-Step eCommerce Website Development Process ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Workflow className="w-3.5 h-3.5" /> Proven Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Our eCommerce Website Development Process
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              We follow a structured 8-step process to ensure your online store is delivered on time, within budget, and built for sales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: "01", title: "Understand Your Business", desc: "We discuss your products, customers, sales process, payment methods, and business requirements." },
              { num: "02", title: "Plan the Website", desc: "We define the website structure, product categories, platform choice, required integrations, and project scope." },
              { num: "03", title: "UI/UX Design", desc: "We design the storefront, product catalog, search filters, navigation, and seamless checkout experience." },
              { num: "04", title: "Development", desc: "Our team develops the frontend, backend, database, admin panel, and required custom functionality." },
              { num: "05", title: "Integrations", desc: "We connect payment gateways, logistics services, CRM, ERP, and WhatsApp notification systems." },
              { num: "06", title: "Testing", desc: "We test the website across devices and verify products, cart calculations, checkout, payments, and order flows." },
              { num: "07", title: "Launch", desc: "After thorough testing and client approval, your ecommerce website is deployed on secure cloud servers." },
              { num: "08", title: "Support & Improvements", desc: "After launch, we help with ongoing maintenance, performance monitoring, SEO, and feature additions." }
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

        {/* ── 12. Technologies Used for eCommerce Website Development ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Cpu className="w-3.5 h-3.5" /> Technology Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technologies Used for eCommerce Website Development
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              We choose the technology based on your project requirements rather than forcing every ecommerce website into the same rigid stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Frontend</div>
              <h4 className="text-sm font-bold text-white mb-2">Storefront UI</h4>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Next.js & React</li>
                <li>• JavaScript / TypeScript</li>
                <li>• HTML5 & CSS3</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Backend</div>
              <h4 className="text-sm font-bold text-white mb-2">Server & APIs</h4>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Node.js & Express</li>
                <li>• Laravel (PHP)</li>
                <li>• REST APIs</li>
                <li>• GraphQL</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Databases</div>
              <h4 className="text-sm font-bold text-white mb-2">Data & Cache</h4>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• PostgreSQL</li>
                <li>• MongoDB</li>
                <li>• MySQL</li>
                <li>• Redis Caching</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Platforms</div>
              <h4 className="text-sm font-bold text-white mb-2">eCommerce Engines</h4>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Shopify Storefronts</li>
                <li>• WooCommerce (WP)</li>
                <li>• Custom Platforms</li>
                <li>• Headless Commerce</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Mobile Apps</div>
              <h4 className="text-sm font-bold text-white mb-2">Android & iOS</h4>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Flutter Cross-Platform</li>
                <li>• React Native</li>
                <li>• Progressive Web Apps</li>
                <li>• Mobile Push Webhooks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 13. eCommerce Website Development Cost & Timelines in India ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Tag className="w-3.5 h-3.5" /> Pricing & Timelines
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Development Cost in India
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              The cost of an ecommerce website depends on the platform, number of products, design, integrations and custom functionality. The final cost is determined after understanding your requirements and preparing the project scope.
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
                  Suitable for small businesses launching their first online store.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Clean product catalogue</div>
                  <div>✓ Cart & Checkout pipeline</div>
                  <div>✓ Razorpay / UPI Gateway</div>
                  <div>✓ Basic admin management</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold text-center block">
                Choose Basic
              </a>
            </div>

            {/* Professional Tier (Highlighted) */}
            <div className="bg-neutral-900/80 border-2 border-[#FF3B00] rounded-2xl p-6 flex flex-col justify-between relative shadow-[0_0_30px_rgba(255,59,0,0.2)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF3B00] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-0.5 rounded-full font-bold">
                Most Popular
              </div>
              <div>
                <div className="text-xs font-mono text-[#FF3B00] uppercase">Growing Brands</div>
                <h3 className="text-xl font-bold text-white mt-1">Professional eCommerce Website</h3>
                <div className="mt-4 pb-4 border-b border-white/10">
                  <span className="text-3xl font-extrabold font-mono text-white">₹60,000</span>
                  <span className="text-xs text-neutral-400 font-mono"> – ₹1,50,000+</span>
                  <div className="text-[11px] text-emerald-400 font-mono mt-1">Timeline: Approx. 4–8 Weeks</div>
                </div>
                <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                  Suitable for growing brands that need custom design, integrations and more advanced features.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Custom UI/UX Design</div>
                  <div>✓ Payment & Logistics APIs</div>
                  <div>✓ WhatsApp & Email Alerts</div>
                  <div>✓ Technical SEO & Schema</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-[#FF3B00] hover:bg-[#ff4e1a] text-white rounded-xl text-xs font-bold text-center block shadow-lg shadow-[#FF3B00]/30">
                Get Started
              </a>
            </div>

            {/* Custom Tier */}
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
                  Suitable for businesses requiring custom workflows, B2B functionality, ERP/CRM integration or advanced inventory.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Wholesale & Tiered Pricing</div>
                  <div>✓ ERP / CRM Integration</div>
                  <div>✓ Multi-Warehouse Stock Logic</div>
                  <div>✓ Role-Based Admin Controls</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold text-center block">
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
                  Suitable for businesses building an online marketplace with multiple sellers.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Separate Seller Portals</div>
                  <div>✓ Commission Deduction Engine</div>
                  <div>✓ Vendor Payout Automation</div>
                  <div>✓ Master Platform Administration</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold text-center block">
                Explore Marketplace
              </a>
            </div>
          </div>
        </section>

        {/* ── 14. Why Choose Webflora Technologies? ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Award className="w-3.5 h-3.5" /> Our Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Why Choose Webflora Technologies?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Choosing an eCommerce website development company is an important decision because your online store becomes part of your day-to-day business operations. Learn more <Link href="/why-webflora" className="text-[#FF3B00] underline">about our company</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Business-Focused Development",
                desc: "We understand your products, customers, and business requirements before deciding how the website should work."
              },
              {
                title: "Custom Solutions",
                desc: "We can work with Shopify, WooCommerce, or custom Next.js development depending on your needs and budget."
              },
              {
                title: "SEO-Friendly Development",
                desc: "We consider technical SEO, page hierarchy, schema markup, and website structure during development."
              },
              {
                title: "Integration Capabilities",
                desc: "We connect your ecommerce website with payment gateways, shipping carriers, CRM, ERP, and accounting systems."
              },
              {
                title: "Transparent Pricing",
                desc: "We define the project scope, required features, milestones, and estimated cost before development begins."
              },
              {
                title: "Post-Launch Support",
                desc: "We continue supporting your website with regular maintenance, improvements, speed checks, and new functionality."
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

        {/* ── 15. Dual Geographic Coverage: Patna & Bihar + Pan-India ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Local Focus */}
            <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-black border border-[#FF3B00]/30 rounded-3xl p-8 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/15 text-[#FF3B00] text-xs font-mono uppercase mb-4 border border-[#FF3B00]/30">
                <MapPin className="w-3.5 h-3.5" /> Local Business Hub
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                <Link href="/it-company-in-patna" className="hover:text-[#FF3B00] transition">
                  eCommerce Website Development Company in Patna & Bihar
                </Link>
              </h3>
              <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
                Webflora Technologies is an eCommerce website development company based in Patna, Bihar, serving businesses in Patna, Bihar and across India.
              </p>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                If you are looking for an <strong className="text-white">eCommerce website developer in Patna</strong> or an <strong className="text-white">eCommerce website development company in Bihar</strong>, talk to our team about your online store requirements.
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-neutral-400 mb-2">Locally Serving Across Bihar:</div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {["Patna", "Boring Road", "Bailey Road", "Kankarbagh", "Danapur", "Rajendra Nagar", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia"].map((city) => (
                    <span key={city} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded text-neutral-300">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pan-India Focus */}
            <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 text-xs font-mono uppercase mb-4 border border-blue-500/30">
                <Globe className="w-3.5 h-3.5" /> Nationwide Presence
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                <Link href="/locations" className="hover:text-blue-400 transition">
                  eCommerce Development Across India
                </Link>
              </h3>
              <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
                We work with businesses across India that need ecommerce websites and online selling platforms. Our ecommerce development services support businesses from different industries, locations and business models.
              </p>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Whether you are launching your first online store or upgrading an existing ecommerce website, we can help you plan the right solution.
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-neutral-400 mb-2">Active Nationwide Hubs:</div>
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

        {/* ── 16. Frequently Asked Questions (All 15 FAQs) ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Clear, transparent answers to common questions about eCommerce website development costs, timelines, platforms, and integrations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-neutral-900/50 border border-white/5 hover:border-white/15 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
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

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5"
                      >
                        <div className="pl-9">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 17. Master Internal Linking Ecosystem ── */}
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

        {/* ── 18. Start Your eCommerce Project & Quote Form ── */}
        <section id="consultation-form" className="py-16 md:py-24 border-t border-white/5">
          <div className="bg-gradient-to-br from-neutral-950 via-[#0A0A0A] to-neutral-950 border border-[#FF3B00]/30 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3B00]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase mb-4 border border-[#FF3B00]/30">
                  <Sparkles className="w-3.5 h-3.5" /> Start Your Project
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Start Your eCommerce Website Development Project
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                  Your ecommerce website should do more than display products. It should make it easier for customers to discover products, place orders and complete purchases while giving your team the tools needed to manage products, inventory, orders and customers.
                </p>
                <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  Tell us what you want to sell, who your customers are and what your website needs to do. We'll help you plan the right ecommerce solution.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>Free technical scope consultation & store roadmap</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>Fixed timeline & transparent milestone quote</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>Direct phone line with eCommerce developers</span>
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
                      Our ecommerce tech lead will review your requirements and reach out within 2 business hours.
                    </p>
                    <button
                      onClick={() => setFormSuccess(false)}
                      className="px-6 py-2.5 bg-[#FF3B00] text-white text-xs font-bold rounded-xl"
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
                        placeholder="Tell us what products you sell, expected product count, or any specific integrations needed..."
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

      </div>
    </main>
  );
}
