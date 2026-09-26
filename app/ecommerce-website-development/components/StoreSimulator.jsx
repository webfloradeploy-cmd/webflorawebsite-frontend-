"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  ShoppingBag,
  ShoppingCart,
  Truck,
  Boxes,
  BarChart3,
  Check,
  Zap,
  Lock,
  RefreshCw
} from "lucide-react";

export default function StoreSimulator() {
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
                    ? "bg-[#d93200] text-white shadow-lg shadow-[#d93200]/25 font-semibold"
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
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-[#FF3B00]" />
                Cart Items ({cartItems.reduce((a, b) => a + b.qty, 0)})
              </h4>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                Free Shipping Qualified (&gt; ₹5,000)
              </span>
            </div>

            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-neutral-900/70 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 hover:border-white/20 transition"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-neutral-800 border border-white/10 flex items-center justify-center text-[#FF3B00] shrink-0">
                      <Icon icon={item.image} width={22} height={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-white truncate">{item.name}</div>
                      <div className="text-xs text-neutral-400 font-mono mt-0.5">
                        ₹{item.price.toLocaleString("en-IN")} each
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    <div className="flex items-center bg-neutral-800/90 rounded-lg border border-white/10 overflow-hidden">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="px-3 py-1 text-neutral-300 hover:text-white hover:bg-white/10 transition cursor-pointer font-bold"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-2.5 text-xs font-mono font-bold text-white">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="px-3 py-1 text-neutral-300 hover:text-white hover:bg-white/10 transition cursor-pointer font-bold"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white font-mono text-right min-w-[80px]">
                      ₹{(item.price * item.qty).toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-1">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Apply coupon (try 'WEBFLORA')"
                aria-label="Coupon Code"
                className="flex-1 bg-neutral-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF3B00]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-neutral-800 hover:bg-[#d93200] text-white rounded-xl text-xs font-semibold transition cursor-pointer shrink-0"
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
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-2 font-semibold">
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
                className="w-full py-3.5 bg-[#d93200] hover:bg-[#c22d00] text-white rounded-xl text-sm font-bold tracking-wide shadow-lg shadow-[#d93200]/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
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
                <div className="text-[11px] text-neutral-300 mt-0.5">Order ID: <span className="font-mono text-emerald-400">{orderId}</span></div>
                <div className="text-[10px] text-neutral-400 mt-1">Invoice generated & WhatsApp notification triggered automatically.</div>
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
                <span className="text-xs font-mono uppercase text-[#FF3B00] font-semibold">Tracking Order #{orderId}</span>
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
                        ? "bg-[#d93200] border-[#d93200] text-white shadow-lg shadow-[#d93200]/25"
                        : isPassed
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-neutral-950/60 border-white/5 text-neutral-400"
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
              <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">Warehouse 1: Delhi NCR Hub</div>
              <div className="text-2xl font-bold text-white mt-2 font-mono">{stockLevel} Units Available</div>
              <p className="text-xs text-neutral-400 mt-2">
                Real-time stock deduction triggered upon checkout authorization.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 pt-3 border-t border-white/5 font-semibold">
              Status: In Stock (Safe Threshold &gt; 5)
            </div>
          </div>

          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">Warehouse 2: Patna Regional Hub</div>
              <div className="text-2xl font-bold text-white mt-2 font-mono">14 Units Available</div>
              <p className="text-xs text-neutral-400 mt-2">
                Automated multi-warehouse routing allocates nearest fulfillment center by pincode.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 pt-3 border-t border-white/5 font-semibold">
              Status: Operational & Fast Dispatch
            </div>
          </div>

          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">Multi-Channel Sync</div>
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
            <div className="text-[11px] font-mono text-neutral-400 pt-3 border-t border-white/5 font-semibold">
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
              <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">{stat.label}</div>
              <div className={`text-2xl font-bold font-mono mt-2 ${stat.color}`}>{stat.val}</div>
              <div className="text-[11px] text-neutral-400 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
