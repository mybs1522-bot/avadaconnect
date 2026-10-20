import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Read .env.local if not already in process.env
if (!process.env.NEXT_PUBLIC_SUPABASE_URL && fs.existsSync(".env.local")) {
  const envContent = fs.readFileSync(".env.local", "utf8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        process.env[key] = val;
      }
    }
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing SUPABASE credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const tenantId = process.env.NEXT_PUBLIC_TENANT_ID || "tenant_avadaspace";

const reviews = [
  {
    id: "rev-1-avadaspace",
    tenant_id: tenantId,
    name: "Aman Singhania",
    role: "Villa Owner, Alibaug",
    content: "The consultation call with AVADASPACE literally saved us over ₹6 Lakhs! Their team broke down actual material rates and itemized the BOQ so our contractor couldn't inflate prices on the structural package.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=AmanSinghania",
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    id: "rev-2-avadaspace",
    tenant_id: tenantId,
    name: "Rishi Vardhan",
    role: "Duplex Renovation, Mumbai",
    content: "Loved the direct, transparent approach by AVADASPACE. No pushing expensive vendor tie-ups—just pure functional design, ingenious spatial flow, and sustainable material alternatives.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=RishiVardhan",
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: "rev-3-avadaspace",
    tenant_id: tenantId,
    name: "Shruti & Vikram Malhotra",
    role: "Penthouse Clients, Pune",
    content: "AVADASPACE gave us exceptional guidelines on selecting contractors and structuring milestone payment clauses. Their turnkey oversight ensured our handover happened right on schedule without cost overruns.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=ShrutiVikram",
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: "rev-4-avadaspace",
    tenant_id: tenantId,
    name: "Kabir Sen",
    role: "Apartment Buyer, Bangalore",
    content: "Within 20 minutes of review, AVADASPACE identified a critical structural column conflict in our builder's floor plan that would have ruined our living room lighting. Truly world-class space planning.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=KabirSen",
    created_at: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
  {
    id: "rev-5-avadaspace",
    tenant_id: tenantId,
    name: "Tanya Kapoor",
    role: "Luxury Homeowner, Gurugram",
    content: "AVADASPACE taught us how to systematically audit site progress and verify MEP and HVAC ducting before sealing false ceilings. Their site coordination standards are the best in the industry.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=TanyaKapoor",
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: "rev-6-avadaspace",
    tenant_id: tenantId,
    name: "Sahil Deshmukh",
    role: "Private Residence, Goa",
    content: "Collaborating with AVADASPACE was effortless. Having their principal designers available for critical decision points gave us absolute peace of mind throughout our coastal build.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=SahilDeshmukh",
    created_at: new Date(Date.now() - 86400000 * 6).toISOString(),
  },
  {
    id: "rev-7-avadaspace",
    tenant_id: tenantId,
    name: "Meghna Nair",
    role: "Architectural Enthusiast, Kochi",
    content: "No fluff, just deep architectural expertise on micro-climate responsive designs and weather-resistant materials for heavy monsoon areas. AVADASPACE is worth every rupee.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=MeghnaNair",
    created_at: new Date(Date.now() - 86400000 * 7).toISOString(),
  },
  {
    id: "rev-8-avadaspace",
    tenant_id: tenantId,
    name: "Ravi Teja",
    role: "Commercial Studio, Hyderabad",
    content: "The BOQ and procurement audit by AVADASPACE was immaculate. We eliminated several redundant specifications in our commercial HVAC and acoustic quotes. Total game changer.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=RaviTeja",
    created_at: new Date(Date.now() - 86400000 * 8).toISOString(),
  },
  {
    id: "rev-9-avadaspace",
    tenant_id: tenantId,
    name: "Dhruv Merchant",
    role: "Townhouse Owner, Ahmedabad",
    content: "We were about to overspend heavily on imported Italian marble until AVADASPACE curated stunning Indian composite stones that look identical and cost 60% less with zero maintenance headaches.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=DhruvMerchant",
    created_at: new Date(Date.now() - 86400000 * 9).toISOString(),
  },
  {
    id: "rev-10-avadaspace",
    tenant_id: tenantId,
    name: "Kritika Malhotra",
    role: "Apartment Renovation, Delhi",
    content: "Clear, visionary, and detail-oriented. AVADASPACE re-imagined our 4-BHK master suite to maximize natural daylighting, cross-ventilation, and seamless hidden storage.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=KritikaMalhotra",
    created_at: new Date(Date.now() - 86400000 * 10).toISOString(),
  },
  {
    id: "rev-11-avadaspace",
    tenant_id: tenantId,
    name: "Varun Sharma",
    role: "Self-Builder, Chandigarh",
    content: "AVADASPACE's turnkey budgeting guidance and contractor evaluation checklists saved us months of headaches. Their structural layout optimization was precision engineering at its finest.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=VarunSharma",
    created_at: new Date(Date.now() - 86400000 * 11).toISOString(),
  },
  {
    id: "rev-12-avadaspace",
    tenant_id: tenantId,
    name: "Simran Johar",
    role: "Boutique Cafe Founder, Mumbai",
    content: "AVADASPACE transformed our commercial space into a visually captivating, ergonomic haven. Vendor management was smooth and the tactile material selection received endless compliments.",
    rating: 4,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=SimranJohar",
    created_at: new Date(Date.now() - 86400000 * 12).toISOString(),
  },
  {
    id: "rev-13-avadaspace",
    tenant_id: tenantId,
    name: "Karan Oberoi",
    role: "Farmhouse Estate, Alibaug",
    content: "Unmatched aesthetic sensibility combined with solid civil engineering rigor. AVADASPACE delivered our weekend retreat with immaculate attention to landscape integration.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=KaranOberoi",
    created_at: new Date(Date.now() - 86400000 * 13).toISOString(),
  },
  {
    id: "rev-14-avadaspace",
    tenant_id: tenantId,
    name: "Ananya & Dev Mehta",
    role: "Lakeview Villa, Udaipur",
    content: "From initial concept renders to final turnkey handoff, AVADASPACE exceeded every expectation. Their lighting design and bespoke custom joinery transformed our home into a work of art.",
    rating: 5,
    status: "approved",
    avatar_url: "https://api.dicebear.com/9.x/avataaars/svg?seed=AnanyaDev",
    created_at: new Date(Date.now() - 86400000 * 14).toISOString(),
  },
];

async function seed() {
  console.log(`Seeding 14 reviews for tenant: ${tenantId}...`);
  const { error: delErr } = await supabase.from("reviews").delete().eq("tenant_id", tenantId);
  if (delErr) {
    console.error("Delete error:", delErr);
    process.exit(1);
  }

  const { data, error: insErr } = await supabase.from("reviews").insert(reviews).select();
  if (insErr) {
    console.error("Insert error:", insErr);
    process.exit(1);
  }

  console.log(`Successfully seeded ${data?.length} approved reviews into Supabase for ${tenantId}!`);
}

seed();
