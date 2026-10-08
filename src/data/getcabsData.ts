/**
 * C Taxi Data & Pricing Engine (Replicated from GetCabs design system)
 * Client Domain: Ctaxi.co.in
 * Client Phone: 9089223344
 * Client Email: booking@ctaxi.co.in
 */

export const HILL_STATIONS: string[] = [
  'ooty', 'coonoor', 'munnar', 'kodaikanal', 'kodai', 'valparai',
  'yercaud', 'kotagiri', 'anamalai', 'wayanad', 'palani hills',
  'nilgiris', 'masinagudi', 'pykara', 'gudalur', 'topslip', 'agali'
];

export const FIXED_ONEWAY_RATES: Record<string, number> = {
  'annur': 1100,
  'isha': 1100,
  'anaikatti': 1300,
  'mettupalayam': 1400,
  'palladam': 1500,
  'sirumugai': 1500,
  'avinashi': 1600,
  'pollachi': 1600,
  'vana bathrakaliamman': 1600,
  'airport to tiruppur': 1700,
  'puliyampatti': 1800,
  'palakkad': 1900,
  'tirupur': 1900,
  'tiruppur': 1900,
  'airport to palakkad': 2200,
  'sathyamangalam': 2500,
  'kangeyam': 2500,
  'udumalpet': 2500,
  'perundurai': 2900,
  'gobi': 2900,
  'dharapuram': 2950,
  'kotagiri': 2900,
  'coonoor': 2900,
  'erode': 3500,
  'ooty': 3500,
  'palani': 3900
};

export const LOCAL_SUGGESTIONS: string[] = [
  "Gandhipuram, Coimbatore",
  "RS Puram, Coimbatore",
  "Peelamedu, Coimbatore",
  "Saravanampatti, Coimbatore",
  "Coimbatore International Airport (CJB)",
  "Coimbatore Junction Railway Station",
  "Ukkadam Bus Stand, Coimbatore",
  "Singanallur, Coimbatore",
  "Eachanari, Coimbatore",
  "Brookefields Mall, RS Puram",
  "Prozone Mall, Saravanampatti",
  "Isha Yoga Center, Velliangiri Foothills",
  "Marudhamalai Temple, Coimbatore",
  "Mettupalayam, Coimbatore",
  "Ooty (Udhagamandalam)",
  "Pollachi, Tamil Nadu",
  "Tirupur Town, Tamil Nadu",
  "Erode, Tamil Nadu",
  "Palani, Tamil Nadu",
  "Valparai, Tamil Nadu",
  "Munnar, Kerala",
  "Kodaikanal, Tamil Nadu"
];

export interface TourPackageItem {
  title: string;
  category: string;
  duration: string;
  distance: string;
  startingPrice: string;
  img: string;
  content: string;
}

export interface BlogItem {
  title: string;
  category?: string;
  date: string;
  readTime: string;
  badge?: string;
  img: string;
  intro?: string;
  content: string;
}

export const TOUR_PACKAGES_DATA: Record<string, TourPackageItem> = {
    'ooty-coonoor-kotagiri': {
      title: 'Ooty, Coonoor & Kotagiri Nilgiris Package',
      category: 'Nilgiris Hill Special',
      duration: 'Full Day / 2 Days',
      distance: '85 KM to Ooty (3 Hours Drive)',
      startingPrice: '₹2,380',
      img: '/assets/images/dest-ooty.svg',
      content: `
        <div class="tour-detail-container">
          <div class="tour-hero-header">
            <span class="blog-tag-badge">Nilgiris Hill Special</span>
            <h1>Ooty, Coonoor & Kotagiri Nilgiris Tour Package</h1>
            <p style="color:#e2e8f0; font-size:1.05rem;">Experience 36 Hairpin Curves, sprawling tea gardens, cascading waterfalls, and peak viewpoints from Coimbatore.</p>
          </div>

          <div class="tour-specs-strip">
            <div class="tour-spec-item"><span>Total Distance</span><span>85 KM (One Way)</span></div>
            <div class="tour-spec-item"><span>Est. Drive Time</span><span>2.5 to 3.5 Hours</span></div>
            <div class="tour-spec-item"><span>Ghat Road</span><span>36 Hairpin Bends</span></div>
            <div class="tour-spec-item"><span>Ideal Timing</span><span>6:00 AM Departure</span></div>
            <div class="tour-spec-item"><span>Base Fare</span><span>₹2,380 Onwards</span></div>
          </div>

          <div class="guide-section-box">
            <h3>📍 On-The-Way Sightseeing Places</h3>
            <p>Your journey from Coimbatore to the Nilgiris passes through rich agricultural plains and lush mountain foothills:</p>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Bhavani River Banks at Mettupalayam:</strong> Beautiful river views at the base of the Western Ghats.</li>
              <li><strong>Burliyar Fruit Stalls:</strong> Famous roadside stops for exotic fresh hill fruits like Mangosteen, Rambutan, Passion Fruit, and fresh Jackfruit.</li>
              <li><strong>Black Bridge (Wellington):</strong> Historic British military cantonment area with manicured gardens and eucalyptus tree avenues.</li>
              <li><strong>Coonoor Tea Estates:</strong> Sprawling green tea carpets along the road. Great for tea tasting and photo stops.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🛣️ Road Conditions, Curves & Hairpin Bends</h3>
            <div class="road-bends-warning">
              ⚠️ <strong>36 Hairpin Curves Warning:</strong> The Mettupalayam to Coonoor/Ooty ghat road features 36 sharp hairpin bends with steep gradient climbs.
            </div>
            <p><strong>Driving Tips & Road Notes:</strong></p>
            <ul style="margin-left:20px; line-height:1.8;">
              <li>Roads are freshly paved bitumen tar, equipped with convex safety mirrors and reflective cat-eyes.</li>
              <li>Morning mist and afternoon fog are common around Wellington and Doddabetta Peak; all C Taxi vehicles come equipped with high-intensity fog lamps.</li>
              <li>Our drivers are veteran Nilgiris hill specialists trained in gear braking and mountain right-of-way courtesy.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🛕 Popular Temples, Rivers & Waterfalls</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Elk Hill Murugan Temple (Ooty):</strong> Features a grand 40-ft Lord Murugan statue set against lush hill backdrops.</li>
              <li><strong>Catherine Falls (Kotagiri):</strong> A breathtaking double-tiered waterfall cascading from a height of 250 feet.</li>
              <li><strong>Laws Falls (Coonoor):</strong> Scenic waterfall amidst dense forest cover along the Coonoor ghat road.</li>
              <li><strong>Pykara River & Waterfalls:</strong> Pristine river surrounded by pine forests offering speed boat rides and waterfall vistas.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>⏱️ Timings & Operating Hours</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Recommended Departure:</strong> 6:00 AM from Coimbatore to beat Mettupalayam checkpost traffic.</li>
              <li><strong>Ooty Botanical Garden:</strong> 7:00 AM – 6:30 PM</li>
              <li><strong>Doddabetta Peak Viewpoint:</strong> 9:00 AM – 5:30 PM</li>
              <li><strong>Pykara Lake Boating:</strong> 9:30 AM – 5:00 PM</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🍽️ Verified Highway Restaurants & Restrooms</h3>
            <div class="restroom-food-box">
              🧼 <strong>Hygienic Restroom Facilities:</strong> Clean, well-maintained family restrooms are available at designated stops along the highway.
            </div>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Hilltop Pure Veg (Mettupalayam):</strong> Excellent South Indian breakfast with squeaky clean restrooms and spacious parking.</li>
              <li><strong>Cabbages & Condiments (Coonoor):</strong> Cozy continental dining and organic tea room with clean restroom facilities.</li>
              <li><strong>Hotel Annapoorna (Ooty Main Market):</strong> Traditional vegetarian meals with hygienic washrooms.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>💰 Complete Vehicle Tariff Breakdown</h3>
            <div class="price-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Vehicle Type</th>
                    <th>Seating</th>
                    <th>Oneway Drop</th>
                    <th>Full Day Tour (220 KM)</th>
                    <th>Included Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sedan (Dzire / Etios)</strong></td>
                    <td>4 Passengers</td>
                    <td>₹2,380</td>
                    <td>₹3,800</td>
                    <td>Driver Batta + Hill Charges Included</td>
                  </tr>
                  <tr>
                    <td><strong>SUV (Maruti Ertiga / XL6)</strong></td>
                    <td>6 Passengers</td>
                    <td>₹3,800</td>
                    <td>₹5,500</td>
                    <td>Spacious Boot Space + AC + Hill Specialist</td>
                  </tr>
                  <tr>
                    <td><strong>Premium SUV (Innova Crysta)</strong></td>
                    <td>7 Passengers</td>
                    <td>₹4,800</td>
                    <td>₹6,800</td>
                    <td>Reclining Captain Seats + Luxury Suspensions</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style="font-size:0.85rem; color:#64748b; margin-top:10px;">*Tolls, state permits (if applicable), and parking fees paid at actuals. Zero hidden surge fees!</p>
          </div>

          <div class="blog-cta-banner" style="margin-top:24px;">
            <h3>Book Your Ooty, Coonoor & Kotagiri Cab Tour</h3>
            <p style="margin-bottom:16px;">Call C Taxi 24/7 hotline or message on WhatsApp for instant booking confirmation!</p>
            <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center;">
              <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344</a>
              <a href="https://wa.me/919089223344?text=Hi%20Get%20Cabs,%20I%20want%20to%20book%20Ooty%20Tour%20Package" target="_blank" class="btn btn-red" style="padding:12px 24px; background:#25d366; border-color:#25d366;">💬 WhatsApp Booking</a>
            </div>
          </div>
        </div>
      `
    },
    'munnar-hills': {
      title: 'Munnar Tea Hills & Waterfalls Package',
      category: 'Tea Hills & Waterfalls',
      duration: '2 Days / 1 Night',
      distance: '160 KM (4.5 Hours Drive)',
      startingPrice: '₹3,800',
      img: '/assets/images/dest-munnar.svg',
      content: `
        <div class="tour-detail-container">
          <div class="tour-hero-header">
            <span class="blog-tag-badge">Tea Hills & Waterfalls</span>
            <h1>Munnar Tea Hills & Waterfalls Tour Package</h1>
            <p style="color:#e2e8f0; font-size:1.05rem;">Discover sprawling spice plantations, Cheeyappara waterfalls, Marayoor sandalwood forests, and Anamudi Peak views from Coimbatore.</p>
          </div>

          <div class="tour-specs-strip">
            <div class="tour-spec-item"><span>Total Distance</span><span>160 KM (One Way)</span></div>
            <div class="tour-spec-item"><span>Est. Drive Time</span><span>4.5 Hours</span></div>
            <div class="tour-spec-item"><span>Route</span><span>via Udumalpet & Marayoor</span></div>
            <div class="tour-spec-item"><span>Ideal Timing</span><span>5:30 AM Departure</span></div>
            <div class="tour-spec-item"><span>Base Fare</span><span>₹3,800 Onwards</span></div>
          </div>

          <div class="guide-section-box">
            <h3>📍 On-The-Way Sightseeing Places</h3>
            <p>The scenic drive to Munnar via Udumalpet offers incredible ecological diversity:</p>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Udumalpet Cotton Belt & Windmills:</strong> Flat green plains dotted with giant clean-energy wind turbines.</li>
              <li><strong>Amaravathi Dam Crocodile Park:</strong> India's largest mugger crocodile breeding sanctuary near Amaravathi reservoir.</li>
              <li><strong>Chinnar Wildlife Sanctuary:</strong> Border jungle stretch where spotter deer, wild elephants, and giant squirrels are frequently seen crossing the road.</li>
              <li><strong>Marayoor Sandalwood Forests & Jaggery Stalls:</strong> Natural sandalwood forest groves and traditional sugarcane jaggery-making units.</li>
              <li><strong>Lakkam Waterfalls:</strong> Beautiful cascading waterfall right on the Marayoor-Munnar roadside.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🛣️ Road Conditions, Curves & Bends</h3>
            <div class="road-bends-warning">
              ⚠️ <strong>Forest Checkpost & Tea Estate Curves:</strong> Chinnar forest checkpost operates strictly between 6:00 AM and 9:00 PM. Mountain road features narrow S-bends through Marayoor tea estates.
            </div>
            <p><strong>Driving Tips & Road Notes:</strong></p>
            <ul style="margin-left:20px; line-height:1.8;">
              <li>Excellent single-lane and double-lane tarmac; horn usage recommended on blind estate curves.</li>
              <li>Spacious SUV vehicles (Ertiga / Innova Crysta) are highly recommended for family comfort on this 4.5-hour hill drive.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🛕 Popular Temples, Rivers & Waterfalls</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Cheeyappara & Valara Waterfalls:</strong> Seven-step cascading waterfall along the Munnar gap road.</li>
              <li><strong>Subramanya Swamy Temple (Udumalpet):</strong> Revered ancient temple located at the foothills.</li>
              <li><strong>Pamba River Tributaries:</strong> Pristine mountain streams flowing alongside the highway.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>⏱️ Timings & Operating Hours</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Forest Checkpost Hours:</strong> 6:00 AM – 9:00 PM</li>
              <li><strong>Kannan Devan Tea Museum:</strong> 9:00 AM – 5:00 PM</li>
              <li><strong>Eravikulam National Park (Nilgiri Tahr):</strong> 7:30 AM – 4:00 PM</li>
              <li><strong>Mattupetty Dam Boating:</strong> 9:00 AM – 5:30 PM</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🍽️ Verified Highway Restaurants & Restrooms</h3>
            <div class="restroom-food-box">
              🧼 <strong>Hygienic Restroom Facilities:</strong> Clean washrooms available at Udumalpet highway plazas and Marayoor food hubs.
            </div>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Saravana Bhavan (Udumalpet Highway):</strong> Piping hot South Indian breakfast with clean restrooms.</li>
              <li><strong>Marayoor Highway Food Plaza:</strong> Kerala meals, fresh coconut water, and hygienic restrooms.</li>
              <li><strong>Rapsy Restaurant (Munnar Town):</strong> Authentic Malabar biryani and appam stew.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>💰 Complete Vehicle Tariff Breakdown</h3>
            <div class="price-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Vehicle Type</th>
                    <th>Oneway Drop</th>
                    <th>2 Days / 1 Night Tour</th>
                    <th>Included Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sedan (Dzire / Etios)</strong></td>
                    <td>₹3,800</td>
                    <td>₹6,500</td>
                    <td>Driver Batta + Kerala Border Permit Included</td>
                  </tr>
                  <tr>
                    <td><strong>SUV (Maruti Ertiga / XL6)</strong></td>
                    <td>₹5,800</td>
                    <td>₹9,500</td>
                    <td>Spacious 6-Seater + AC + Mountain Driver</td>
                  </tr>
                  <tr>
                    <td><strong>Premium SUV (Innova Crysta)</strong></td>
                    <td>₹7,200</td>
                    <td>₹12,500</td>
                    <td>Captain Seats + Unmatched Comfort</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="blog-cta-banner" style="margin-top:24px;">
            <h3>Book Your Munnar Hill & Waterfall Tour</h3>
            <p style="margin-bottom:16px;">Speak with C Taxi Munnar travel desk for customized hotel + cab itineraries!</p>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344 to Book</a>
          </div>
        </div>
      `
    },
    'kodaikanal-hills': {
      title: 'Kodaikanal Lake & Mountain Peak Package',
      category: 'Princess of Hills',
      duration: 'Full Day / 2 Days',
      distance: '175 KM (4.5 Hours Drive)',
      startingPrice: '₹4,200',
      img: '/assets/images/dest-kodaikanal.svg',
      content: `
        <div class="tour-detail-container">
          <div class="tour-hero-header">
            <span class="blog-tag-badge">Princess of Hills</span>
            <h1>Kodaikanal Lake & Mountain Peak Tour Package</h1>
            <p style="color:#e2e8f0; font-size:1.05rem;">Explore Kodai Lake boating, Pillar Rocks, Coaker's Walk, Pine Forests, and Silver Cascade waterfalls from Coimbatore.</p>
          </div>

          <div class="tour-specs-strip">
            <div class="tour-spec-item"><span>Total Distance</span><span>175 KM (One Way)</span></div>
            <div class="tour-spec-item"><span>Est. Drive Time</span><span>4.5 Hours</span></div>
            <div class="tour-spec-item"><span>Ghat Road</span><span>14 Hairpin Bends</span></div>
            <div class="tour-spec-item"><span>Ideal Timing</span><span>5:30 AM Departure</span></div>
            <div class="tour-spec-item"><span>Base Fare</span><span>₹4,200 Onwards</span></div>
          </div>

          <div class="guide-section-box">
            <h3>📍 On-The-Way Sightseeing Places</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Palani Foot Hills & Temple View:</strong> Panoramic views of the sacred Palani Dhandayuthapani temple hill.</li>
              <li><strong>Batlagundu Junction Fruit Market:</strong> Fresh sweet mangoes, bananas, and local organic produce.</li>
              <li><strong>Dum Dum Rock Viewpoint:</strong> Historical rock formation overlooking the Manjalar Dam reservoir.</li>
              <li><strong>Silver Cascade Waterfalls:</strong> Magnificent 180-foot waterfall located right at the entrance of Kodaikanal.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🛣️ Road Conditions, Curves & Hairpin Bends</h3>
            <div class="road-bends-warning">
              ⚠️ <strong>14 Hairpin Bends Ghat Road:</strong> The Batlagundu to Kodaikanal road ascends smoothly with 14 wide hairpin bends. Safe, wide tar highway.
            </div>
          </div>

          <div class="guide-section-box">
            <h3>🛕 Popular Temples, Rivers & Waterfalls</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Kurinji Andavar Temple:</strong> Dedicated to Lord Murugan, famous for the Kurinji flower that blooms once every 12 years.</li>
              <li><strong>Poombarai Murugan Temple & Village:</strong> Scenic 3000-year-old temple surrounded by stepped garlic farms.</li>
              <li><strong>Bear Shola Falls:</strong> Tranquil waterfall inside a dense reserve forest.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>⏱️ Timings & Operating Hours</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Kodai Lake Boating & Cycling:</strong> 9:00 AM – 6:00 PM</li>
              <li><strong>Bryant Park Botanical Garden:</strong> 9:00 AM – 6:00 PM</li>
              <li><strong>Coaker's Walk & Telescope House:</strong> 7:00 AM – 7:00 PM</li>
              <li><strong>Pillar Rocks Viewpoint:</strong> 9:00 AM – 5:00 PM</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🍽️ Verified Highway Restaurants & Restrooms</h3>
            <div class="restroom-food-box">
              🧼 <strong>Hygienic Restrooms:</strong> Clean restrooms at Hotel Tamil Nadu Batlagundu and Astoria Veg Kodaikanal.
            </div>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Hotel Tamil Nadu (Batlagundu Bypass):</strong> Hygienic restrooms and delicious South Indian breakfast.</li>
              <li><strong>Astoria Veg Restaurant (Kodai Bus Stand):</strong> Pure vegetarian dining with clean facilities.</li>
              <li><strong>Cloud Street Cafe (Seven Road Junction):</strong> Wood-fired pizzas and hot chocolate.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>💰 Complete Vehicle Tariff Breakdown</h3>
            <div class="price-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Vehicle Type</th>
                    <th>Oneway Drop</th>
                    <th>Full Day Tour (350 KM)</th>
                    <th>Included Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sedan (Dzire / Etios)</strong></td>
                    <td>₹4,200</td>
                    <td>₹6,800</td>
                    <td>Driver Batta + Hill Charges Included</td>
                  </tr>
                  <tr>
                    <td><strong>SUV (Maruti Ertiga / XL6)</strong></td>
                    <td>₹6,200</td>
                    <td>₹9,800</td>
                    <td>6 Passenger Seats + Luggage Carrier</td>
                  </tr>
                  <tr>
                    <td><strong>Premium SUV (Innova Crysta)</strong></td>
                    <td>₹7,800</td>
                    <td>₹12,800</td>
                    <td>Luxury Leather Interiors + Smooth Suspension</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="blog-cta-banner" style="margin-top:24px;">
            <h3>Book Kodaikanal Cab Package</h3>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344</a>
          </div>
        </div>
      `
    },
    'yercaud-hills': {
      title: 'Yercaud Shevaroy Hills Gateway Package',
      category: 'Weekend Hill Gateway',
      duration: 'Full Day Tour',
      distance: '195 KM (4 Hours Drive)',
      startingPrice: '₹4,800',
      img: '/assets/images/dest-coonoor.svg',
      content: `
        <div class="tour-detail-container">
          <div class="tour-hero-header">
            <span class="blog-tag-badge">Weekend Hill Gateway</span>
            <h1>Yercaud Shevaroy Hills Gateway Tour Package</h1>
            <p style="color:#e2e8f0; font-size:1.05rem;">Ascend the 20 Hairpin Bends to Shevaroy Hills, Emerald Lake, Pagoda Point, and Killiyur Waterfalls.</p>
          </div>

          <div class="tour-specs-strip">
            <div class="tour-spec-item"><span>Total Distance</span><span>195 KM (One Way)</span></div>
            <div class="tour-spec-item"><span>Est. Drive Time</span><span>4 Hours</span></div>
            <div class="tour-spec-item"><span>Ghat Road</span><span>20 Hairpin Bends</span></div>
            <div class="tour-spec-item"><span>Ideal Timing</span><span>6:00 AM Departure</span></div>
            <div class="tour-spec-item"><span>Base Fare</span><span>₹4,800 Onwards</span></div>
          </div>

          <div class="guide-section-box">
            <h3>📍 On-The-Way Sightseeing Places</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Sankari Bypass Highway:</strong> Smooth 4-lane expressway via Salem route.</li>
              <li><strong>Salem Steel Plant Corridor:</strong> Industrial township views framed by Shevaroy mountain foothills.</li>
              <li><strong>20 Hairpin Bends Viewpoints:</strong> Scenic pull-over spots overlooking Salem city lights.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🛣️ Road Conditions, Curves & Hairpin Bends</h3>
            <div class="road-bends-warning">
              ⚠️ <strong>20 Hairpin Bends Ascent:</strong> Well-engineered 30 KM mountain road with well-banked hairpin turns and LED reflectors.
            </div>
          </div>

          <div class="guide-section-box">
            <h3>🛕 Popular Temples, Rivers & Waterfalls</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Shevaroy Cave Temple:</strong> Sacred cave shrine dedicated to Lord Shevaroyan and Goddess Kaveri located at the highest peak (5,326 ft).</li>
              <li><strong>Killiyur Waterfalls:</strong> Spectacular 300-foot waterfall cascading into the Raja Rajeshwari valley.</li>
              <li><strong>Raja Rajeshwari Temple:</strong> Peaceful spiritual temple surrounded by spice orchards.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>⏱️ Timings & Operating Hours</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Emerald Lake Boating:</strong> 8:30 AM – 5:30 PM</li>
              <li><strong>Lady's Seat & Telescope House:</strong> 9:00 AM – 6:00 PM</li>
              <li><strong>Botanical Garden & Orchidarium:</strong> 9:00 AM – 5:00 PM</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🍽️ Verified Highway Restaurants & Restrooms</h3>
            <div class="restroom-food-box">
              🧼 <strong>Hygienic Restrooms:</strong> Saravana Bhavan Salem Highway Plaza offers clean washrooms and spacious parking.
            </div>
          </div>

          <div class="guide-section-box">
            <h3>💰 Complete Vehicle Tariff Breakdown</h3>
            <div class="price-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Vehicle Type</th>
                    <th>Full Day Tour Rate</th>
                    <th>Included Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sedan (Dzire / Etios)</strong></td>
                    <td>₹4,800</td>
                    <td>Driver Batta + Hill Charges Included</td>
                  </tr>
                  <tr>
                    <td><strong>SUV (Maruti Ertiga / XL6)</strong></td>
                    <td>₹6,800</td>
                    <td>6-Seater Family Comfort</td>
                  </tr>
                  <tr>
                    <td><strong>Premium SUV (Innova Crysta)</strong></td>
                    <td>₹8,500</td>
                    <td>Executive Comfort + Reclining Seats</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="blog-cta-banner" style="margin-top:24px;">
            <h3>Book Yercaud Cab Tour</h3>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344</a>
          </div>
        </div>
      `
    },
    'isha-vellingiri': {
      title: 'Isha Yoga Center & Vellingiri Sacred Package',
      category: 'Spiritual & Wellness',
      duration: 'Half Day / Full Day',
      distance: '30 KM from City (45 Mins)',
      startingPrice: '₹1,200',
      img: '/assets/images/dest-adiyogi.svg',
      content: `
        <div class="tour-detail-container">
          <div class="tour-hero-header">
            <span class="blog-tag-badge">Spiritual & Wellness</span>
            <h1>Isha Yoga Center & Vellingiri Hills Sacred Package</h1>
            <p style="color:#e2e8f0; font-size:1.05rem;">Visit the 112ft Adiyogi Shiva Statue, Dhyanalinga, Perur Pateeswarar Temple, and Kovai Kutralam waterfalls.</p>
          </div>

          <div class="tour-specs-strip">
            <div class="tour-spec-item"><span>Distance</span><span>30 KM from City</span></div>
            <div class="tour-spec-item"><span>Drive Time</span><span>45 Minutes</span></div>
            <div class="tour-spec-item"><span>Road</span><span>Flat Asphalt Road</span></div>
            <div class="tour-spec-item"><span>Ideal Timing</span><span>6 AM or 3 PM</span></div>
            <div class="tour-spec-item"><span>Base Fare</span><span>₹1,200 Onwards</span></div>
          </div>

          <div class="guide-section-box">
            <h3>📍 On-The-Way Sightseeing Places</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Perur Pateeswarar Temple:</strong> 1000-year-old ancient Chola temple featuring carved Kanaka Sabha pillars.</li>
              <li><strong>Noyyal River Banks:</strong> Sacred river flowing through the historical agricultural belt of Coimbatore.</li>
              <li><strong>Thondamuthur Coconut Farms:</strong> Lush green countryside road lined with tall coconut palms.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🛣️ Road Conditions & Drive Profile</h3>
            <p>Smooth double-lane asphalt road via Thondamuthur and Semmedu. Zero hairpin bends or steep climbs. Perfect drive for senior citizens and families.</p>
          </div>

          <div class="guide-section-box">
            <h3>🛕 Popular Temples, Rivers & Waterfalls</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>112-ft Adiyogi Shiva Statue:</strong> Iconic giant steel monument recognized by Guinness World Records. Adiyogi Divya Darshanam 3D Laser Light Show held every evening at 7:00 PM.</li>
              <li><strong>Dhyanalinga & Holy Kunds:</strong> Meditative consecration with Suryakund (for men) and Chandrakund (for women) subterranean holy dip pools.</li>
              <li><strong>Poondi Vellingiri Aandavar Temple:</strong> Foothills temple for the sacred Vellingiri hill pilgrimage.</li>
              <li><strong>Kovai Kutralam Waterfalls:</strong> Pristine Siruvani river waterfall inside reserve forest.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>⏱️ Timings & Operating Hours</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Isha Yoga Gate Open:</strong> 6:00 AM – 8:00 PM</li>
              <li><strong>Adiyogi Light Show:</strong> 7:00 PM – 7:15 PM Daily</li>
              <li><strong>Perur Pateeswarar Temple:</strong> 6:00 AM – 1:00 PM & 4:00 PM – 8:30 PM</li>
              <li><strong>Kovai Kutralam Entry:</strong> 10:00 AM – 3:30 PM (Closed Mondays)</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🍽️ Verified Highway Restaurants & Restrooms</h3>
            <div class="restroom-food-box">
              🧼 <strong>Hygienic Restrooms:</strong> Isha Visitors Welcome Center provides world-class clean restrooms and baby care rooms.
            </div>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Pepper Vine Eatery (Isha Center):</strong> Organic vegetarian snacks, fresh juices, and herbal teas.</li>
              <li><strong>Saravana Bhavan (Perur Junction):</strong> Traditional South Indian tiffin.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>💰 Complete Vehicle Tariff Breakdown</h3>
            <div class="price-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Vehicle Type</th>
                    <th>Half-Day Drop & Wait</th>
                    <th>Full Day City + Isha Package</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sedan (Dzire / Etios)</strong></td>
                    <td>₹1,200</td>
                    <td>₹1,800</td>
                  </tr>
                  <tr>
                    <td><strong>SUV (Maruti Ertiga / XL6)</strong></td>
                    <td>₹1,800</td>
                    <td>₹2,600</td>
                  </tr>
                  <tr>
                    <td><strong>Premium SUV (Innova Crysta)</strong></td>
                    <td>₹2,400</td>
                    <td>₹3,400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="blog-cta-banner" style="margin-top:24px;">
            <h3>Book Isha & Adiyogi Taxi Package</h3>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344</a>
          </div>
        </div>
      `
    },
    'kerala-coastal': {
      title: 'Kerala Coastal Special (Chavakkad, Cherai, Kochi & Alleppey)',
      category: 'Beaches & Backwaters',
      duration: '2 Days / 1 Night',
      distance: '140 KM to 220 KM',
      startingPrice: '₹4,500',
      img: '/assets/images/dest-wayanad.svg',
      content: `
        <div class="tour-detail-container">
          <div class="tour-hero-header">
            <span class="blog-tag-badge">Beaches & Backwaters</span>
            <h1>Kerala Coastal Special (Chavakkad, Cherai, Kochi & Alleppey)</h1>
            <p style="color:#e2e8f0; font-size:1.05rem;">Golden beaches, Fort Kochi heritage, Chinese fishing nets, and Alleppey backwater houseboat cruises.</p>
          </div>

          <div class="tour-specs-strip">
            <div class="tour-spec-item"><span>Destinations</span><span>Chavakkad, Cherai, Kochi, Alleppey</span></div>
            <div class="tour-spec-item"><span>Drive Time</span><span>3.5 to 5 Hours</span></div>
            <div class="tour-spec-item"><span>Highway</span><span>NH 544 Express Highway</span></div>
            <div class="tour-spec-item"><span>Base Fare</span><span>₹4,500 Onwards</span></div>
          </div>

          <div class="guide-section-box">
            <h3>📍 On-The-Way Sightseeing Places</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Palakkad Gap Highway:</strong> Mountain gap in the Western Ghats connecting Tamil Nadu and Kerala.</li>
              <li><strong>Bharatapuzha River (River Nila):</strong> Sacred ancient river crossing at Shoranur / Thrissur route.</li>
              <li><strong>Thrissur Cultural Hub:</strong> Vadakkunnathan Temple grounds & heritage town.</li>
              <li><strong>Fort Kochi Chinese Fishing Nets:</strong> Historic 14th-century Chinese fishing cantilever structures at sunset.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🛣️ Road Conditions & Highway Profile</h3>
            <p>Pristine 4-lane NH 544 express highway via Walayar checkpost. Smooth flat road with zero hairpin curves. All C Taxi vehicles carry valid Kerala State Tourist Taxi Entry Permits.</p>
          </div>

          <div class="guide-section-box">
            <h3>🛕 Popular Beaches, Rivers & Backwaters</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Chavakkad Beach & Floating Park:</strong> Famous Azhimukham river-sea confluence beach.</li>
              <li><strong>Cherai Beach:</strong> Golden sand beach where backwaters and sea run side by side.</li>
              <li><strong>Vembanad Lake & Alleppey Backwaters:</strong> Traditional Kerala houseboat cruise through palm-fringed canals.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🍽️ Verified Highway Restaurants & Restrooms</h3>
            <div class="restroom-food-box">
              🧼 <strong>Hygienic Restrooms:</strong> Kuttanad Highway Plazas & Shell Fuel Stations offer clean washrooms.
            </div>
          </div>

          <div class="guide-section-box">
            <h3>💰 Complete Vehicle Tariff Breakdown</h3>
            <div class="price-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Vehicle Type</th>
                    <th>Oneway Drop</th>
                    <th>2 Days / 1 Night Tour</th>
                    <th>Included Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sedan (Dzire / Etios)</strong></td>
                    <td>₹4,500</td>
                    <td>₹8,500</td>
                    <td>Driver Batta + Kerala Tax Permit Included</td>
                  </tr>
                  <tr>
                    <td><strong>SUV (Maruti Ertiga / XL6)</strong></td>
                    <td>₹6,800</td>
                    <td>₹11,800</td>
                    <td>Spacious 6-Seater + AC</td>
                  </tr>
                  <tr>
                    <td><strong>Premium SUV (Innova Crysta)</strong></td>
                    <td>₹8,800</td>
                    <td>₹15,200</td>
                    <td>Reclining Captain Chairs + Highway Luxury</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="blog-cta-banner" style="margin-top:24px;">
            <h3>Book Kerala Coastal & Backwater Tour</h3>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344</a>
          </div>
        </div>
      `
    },
    'pilgrimage-heritage': {
      title: 'Guruvayur, Madurai & Trichy Grand Pilgrimage Package',
      category: 'Heritage Pilgrimage',
      duration: '2 Days / 1 Night',
      distance: '140 KM to 215 KM',
      startingPrice: '₹3,800',
      img: '/assets/images/dest-madurai.svg',
      content: `
        <div class="tour-detail-container">
          <div class="tour-hero-header">
            <span class="blog-tag-badge">Heritage Pilgrimage</span>
            <h1>Guruvayur, Madurai & Trichy Grand Pilgrimage Tour</h1>
            <p style="color:#e2e8f0; font-size:1.05rem;">Visit Guruvayur Sree Krishna Temple, Madurai Meenakshi Amman Temple, and Trichy Srirangam Ranganathaswamy Temple.</p>
          </div>

          <div class="tour-specs-strip">
            <div class="tour-spec-item"><span>Destinations</span><span>Guruvayur, Madurai, Trichy</span></div>
            <div class="tour-spec-item"><span>Drive Time</span><span>3.5 to 4 Hours per Sector</span></div>
            <div class="tour-spec-item"><span>Highways</span><span>NH 44 & NH 83 Expressways</span></div>
            <div class="tour-spec-item"><span>Base Fare</span><span>₹3,800 Onwards</span></div>
          </div>

          <div class="guide-section-box">
            <h3>📍 Key Temple Shrines & Sightseeing</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Guruvayur Sree Krishna Temple & Punnathur Kottai:</strong> Holy shrine of Lord Guruvayurappan & Elephant Sanctuary with over 50 temple elephants.</li>
              <li><strong>Madurai Meenakshi Amman Temple & Nayakar Mahal:</strong> World-renowned Dravidian architectural marvel with towering gopurams & Vaigai river banks.</li>
              <li><strong>Trichy Srirangam Ranganathaswamy Temple:</strong> Largest functioning Hindu temple complex in the world on Kaveri River island, plus Rockfort Ucchi Pillayar shrine.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🛣️ Highway Conditions & Drive Comfort</h3>
            <p>Direct 4-lane high-speed national expressways (NH 44 to Madurai and NH 83 to Trichy). Ultra-smooth flat roads ideal for family pilgrimages.</p>
          </div>

          <div class="guide-section-box">
            <h3>⏱️ Temple Darshan Timings</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Guruvayur Temple:</strong> 3:00 AM – 12:30 PM & 4:30 PM – 9:15 PM</li>
              <li><strong>Madurai Meenakshi Temple:</strong> 5:00 AM – 12:30 PM & 4:00 PM – 10:00 PM</li>
              <li><strong>Srirangam Temple:</strong> 6:00 AM – 1:00 PM & 3:30 PM – 9:00 PM</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🍽️ Verified Highway Restaurants & Restrooms</h3>
            <div class="restroom-food-box">
              🧼 <strong>Hygienic Restrooms:</strong> Sree Annapoorna Highway Plazas & Murugan Idli Shop provide pristine washrooms.
            </div>
          </div>

          <div class="guide-section-box">
            <h3>💰 Complete Vehicle Tariff Breakdown</h3>
            <div class="price-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Vehicle Type</th>
                    <th>Single Shrine Drop</th>
                    <th>3-City 2-Day Package</th>
                    <th>Included Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sedan (Dzire / Etios)</strong></td>
                    <td>₹3,800</td>
                    <td>₹8,800</td>
                    <td>Driver Allowance Included</td>
                  </tr>
                  <tr>
                    <td><strong>SUV (Maruti Ertiga / XL6)</strong></td>
                    <td>₹5,500</td>
                    <td>₹12,500</td>
                    <td>Spacious 6-Seater Family Car</td>
                  </tr>
                  <tr>
                    <td><strong>Premium SUV (Innova Crysta)</strong></td>
                    <td>₹7,200</td>
                    <td>₹16,200</td>
                    <td>Executive Comfort + Reclining Seats</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="blog-cta-banner" style="margin-top:24px;">
            <h3>Book Pilgrimage Temple Tour</h3>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344</a>
          </div>
        </div>
      `
    },
    'kanyakumari-sunrise': {
      title: 'Kanyakumari Sunrise & Southern Coast Package',
      category: 'Southern Coast Special',
      duration: '2 Days / 1 Night',
      distance: '400 KM (6.5 Hours Drive)',
      startingPrice: '₹10,500',
      img: '/assets/images/dest-mysore.svg',
      content: `
        <div class="tour-detail-container">
          <div class="tour-hero-header">
            <span class="blog-tag-badge">Southern Coast Special</span>
            <h1>Kanyakumari Sunrise & Southern Coast Package</h1>
            <p style="color:#e2e8f0; font-size:1.05rem;">Experience Vivekananda Rock Memorial, 133ft Thiruvalluvar Statue, Kanyakumari Devi Temple, and Triveni Sangam sunrise.</p>
          </div>

          <div class="tour-specs-strip">
            <div class="tour-spec-item"><span>Total Distance</span><span>400 KM (One Way)</span></div>
            <div class="tour-spec-item"><span>Drive Time</span><span>6.5 Hours</span></div>
            <div class="tour-spec-item"><span>Highway</span><span>NH 44 North-South Corridor</span></div>
            <div class="tour-spec-item"><span>Base Fare</span><span>₹10,500 Onwards</span></div>
          </div>

          <div class="guide-section-box">
            <h3>📍 On-The-Way Sightseeing Places</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Tirunelveli Thamirabarani River & Iruttukadai:</strong> Stop at Tirunelveli for world-famous hot wheat halwa.</li>
              <li><strong>Aralvaimozhi Windmill Farms:</strong> Hundreds of wind turbines along the mountain pass.</li>
              <li><strong>Suchindram Thanumalayan Temple:</strong> Famous 17th-century temple dedicated to the Trinity (Brahma, Vishnu, Shiva) with 18-ft Hanuman statue.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🛣️ Highway Conditions</h3>
            <p>Pristine NH 44 4-lane expressway direct from Coimbatore via Karur, Dindigul, Madurai, and Tirunelveli. Smooth high-speed driving.</p>
          </div>

          <div class="guide-section-box">
            <h3>⏱️ Timings & Highlights</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Sunrise at Triveni Sangam:</strong> 6:00 AM</li>
              <li><strong>Ferry to Vivekananda Rock Memorial:</strong> 8:00 AM – 4:00 PM</li>
              <li><strong>Kanyakumari Devi Temple:</strong> 4:30 AM – 12:30 PM & 4:00 PM – 8:30 PM</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>💰 Complete Vehicle Tariff Breakdown</h3>
            <div class="price-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Vehicle Type</th>
                    <th>2 Days / 1 Night Package Rate</th>
                    <th>Included Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sedan (Dzire / Etios)</strong></td>
                    <td>₹10,500</td>
                    <td>Driver Batta + Toll Assistance Included</td>
                  </tr>
                  <tr>
                    <td><strong>SUV (Maruti Ertiga / XL6)</strong></td>
                    <td>₹14,800</td>
                    <td>6 Passenger Seats + Luggage Carrier</td>
                  </tr>
                  <tr>
                    <td><strong>Premium SUV (Innova Crysta)</strong></td>
                    <td>₹18,500</td>
                    <td>Captain Chairs + Highway Comfort</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="blog-cta-banner" style="margin-top:24px;">
            <h3>Book Kanyakumari Tour Package</h3>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344</a>
          </div>
        </div>
      `
    },
    'wildlife-safari': {
      title: 'Mudumalai, Masinagudi, Wayanad & Calicut Safari Package',
      category: 'Wildlife & Safari',
      duration: '2 Days / 1 Night',
      distance: '115 KM to 200 KM',
      startingPrice: '₹4,200',
      img: '/assets/images/dest-valparai.svg',
      content: `
        <div class="tour-detail-container">
          <div class="tour-hero-header">
            <span class="blog-tag-badge">Wildlife & Safari</span>
            <h1>Mudumalai, Masinagudi, Wayanad & Calicut Safari Package</h1>
            <p style="color:#e2e8f0; font-size:1.05rem;">Mudumalai Tiger Reserve jeep safaris, Banasura Sagar Dam, Thamarassery Churam 9 hairpin bends, and Calicut Beach.</p>
          </div>

          <div class="tour-specs-strip">
            <div class="tour-spec-item"><span>Destinations</span><span>Mudumalai, Masinagudi, Wayanad, Calicut</span></div>
            <div class="tour-spec-item"><span>Drive Time</span><span>3.5 to 5.5 Hours</span></div>
            <div class="tour-spec-item"><span>Night Ban</span><span>9:00 PM – 6:00 AM (Forest)</span></div>
            <div class="tour-spec-item"><span>Base Fare</span><span>₹4,200 Onwards</span></div>
          </div>

          <div class="guide-section-box">
            <h3>📍 On-The-Way Sightseeing Places</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Pykara Waterfalls & Dam:</strong> Scenic pine-surrounded river and waterfall stop.</li>
              <li><strong>Bandipur Tiger Reserve Border:</strong> Forest drive where spotted deer, peacocks, wild boars, and elephants are frequently spotted.</li>
              <li><strong>Thamarassery Churam (Wayand-Calicut Ghat Pass):</strong> Iconic 9 hairpin bends mountain pass offering dramatic valley vistas down to Kozhikode coast.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🛣️ Forest Checkpost Rules & Curve Guidance</h3>
            <div class="road-bends-warning">
              ⚠️ <strong>Forest Checkpost Night Travel Ban:</strong> Mudumalai and Bandipur forest checkposts are closed between 9:00 PM and 6:00 AM for wildlife safety. Plan departure before 3:00 PM.
            </div>
          </div>

          <div class="guide-section-box">
            <h3>🛕 Key Highlights & Safaris</h3>
            <ul style="margin-left:20px; line-height:1.8;">
              <li><strong>Mudumalai Elephant Safari & Theppakadu Elephant Camp:</strong> Interactive elephant feeding and forest bus safaris.</li>
              <li><strong>Masinagudi Jungle Jeep Drive:</strong> Off-road open jeep safaris along forest buffer zones.</li>
              <li><strong>Wayanad Banasura Sagar Dam & Edakkal Caves:</strong> India's largest earthen dam and ancient Neolithic cave carvings.</li>
              <li><strong>Calicut Beach & Sweet Meat Street (SM Street):</strong> Kozhikode beach sunset, authentic Malabar Halwa, and Paragon restaurant dining.</li>
            </ul>
          </div>

          <div class="guide-section-box">
            <h3>🍽️ Verified Highway Restaurants & Restrooms</h3>
            <div class="restroom-food-box">
              🧼 <strong>Hygienic Restrooms:</strong> Coffee County Wayanad & Paragon Restaurant Calicut offer clean washrooms.
            </div>
          </div>

          <div class="guide-section-box">
            <h3>💰 Complete Vehicle Tariff Breakdown</h3>
            <div class="price-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Vehicle Type</th>
                    <th>Oneway Drop</th>
                    <th>2 Days / 1 Night Tour</th>
                    <th>Included Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sedan (Dzire / Etios)</strong></td>
                    <td>₹4,200</td>
                    <td>₹9,200</td>
                    <td>Driver Batta + Forest Permit Included</td>
                  </tr>
                  <tr>
                    <td><strong>SUV (Maruti Ertiga / XL6)</strong></td>
                    <td>₹6,500</td>
                    <td>₹12,800</td>
                    <td>Spacious 6-Seater + AC + Jungle Driver</td>
                  </tr>
                  <tr>
                    <td><strong>Premium SUV (Innova Crysta)</strong></td>
                    <td>₹8,500</td>
                    <td>₹16,500</td>
                    <td>Executive Comfort + Reclining Seats</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="blog-cta-banner" style="margin-top:24px;">
            <h3>Book Wildlife Safari & Beach Tour</h3>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344</a>
          </div>
        </div>
      `
    }
  };

export const BLOG_DATA: Record<string, BlogItem> = {
    'ooty-guide': {
      title: 'Top 10 Places to Visit in Ooty from Coimbatore (2026 Cab Guide)',
      category: 'Ooty Hill Guide',
      date: 'July 2026',
      readTime: '5 min read',
      img: '/assets/images/blog-ooty.svg',
      content: `
        <div class="blog-full-article">
          <div class="blog-hero-header">
            <span class="blog-tag-badge" style="position:static; display:inline-block; margin-bottom:12px;">Ooty Hill Guide</span>
            <h1>Top 10 Places to Visit in Ooty from Coimbatore (2026 Cab Guide)</h1>
            <div class="blog-meta-info" style="font-size:0.9rem;">
              <span>📅 July 2026</span> • <span>⏱️ 5 min read</span> • <span>✍️ C Taxi Travel Desk</span>
            </div>
          </div>

          <img src="/assets/images/blog-ooty.svg" alt="Coimbatore to Ooty Cab Travel" class="blog-featured-img" onerror="this.onerror=null; this.src='/assets/images/dest-ooty.svg';" />

          <p>Ooty, known as the <em>Queen of Hill Stations</em>, is located just 85 KM from Coimbatore city. Traveling by cab from Coimbatore to Ooty gives you the flexibility to enjoy breathtaking viewpoints along the Mettupalayam and Coonoor ghat road with 36 hairpin curves.</p>

          <h3 style="font-size:1.4rem; font-weight:800; margin:24px 0 12px 0; color:var(--brand-dark);">1. Ooty Botanical Gardens</h3>
          <p>Spread over 55 acres on the slopes of Doddabetta peak, the Government Botanical Garden features over 1,000 species of exotic plants, ferns, and a 20-million-year-old fossilized tree trunk.</p>

          <h3 style="font-size:1.4rem; font-weight:800; margin:24px 0 12px 0; color:var(--brand-dark);">2. Ooty Lake & Boating Spot</h3>
          <p>Constructed in 1824 by John Sullivan, Ooty Lake is an iconic destination for pedal boating and motorboat rides surrounded by tall eucalyptus trees.</p>

          <h3 style="font-size:1.4rem; font-weight:800; margin:24px 0 12px 0; color:var(--brand-dark);">3. Doddabetta Peak (2,637 meters)</h3>
          <p>The highest mountain peak in the Nilgiris district. Enjoy panoramic 360-degree views of the valley through the Telescope House observatory.</p>

          <h3 style="font-size:1.4rem; font-weight:800; margin:24px 0 12px 0; color:var(--brand-dark);">4. Rose Garden & Tea Park</h3>
          <p>Home to over 20,000 varieties of roses, making it one of the largest rose collections in India.</p>

          <div class="blog-cta-banner">
            <h3>Ready for an Ooty Trip from Coimbatore?</h3>
            <p style="margin-bottom:16px;">Book a Sedan for ₹2,380 or an Innova SUV for ₹3,800. Driver Batta included with zero hidden costs!</p>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344 to Book Ooty Cab</a>
          </div>

          <h3 style="font-size:1.4rem; font-weight:800; margin:24px 0 12px 0; color:var(--brand-dark);">5. Coonoor Tea Estates & Sim's Park</h3>
          <p>En route from Mettupalayam to Ooty, stop by Coonoor for lush green tea garden photography, fresh factory tea tasting, and Sim's Park botanical displays.</p>

          <h3 style="font-size:1.4rem; font-weight:800; margin:24px 0 12px 0; color:var(--brand-dark);">Cab Fare Breakdown (Coimbatore to Ooty)</h3>
          <ul style="margin-left:20px; line-height:1.8;">
            <li><strong>Oneway Sedan (Dzire / Etios):</strong> ₹2,380 ~ ₹2,560 (85 KM + ₹500 Batta + ₹400 Hill Charge)</li>
            <li><strong>Oneway SUV (Ertiga / Innova):</strong> ₹3,800 ~ ₹4,100</li>
            <li><strong>Round Trip (Day Package):</strong> ₹15/KM + ₹500 Driver Batta</li>
          </ul>
        </div>
      `
    },
    'airport-guide': {
      title: 'Coimbatore Airport Taxi Booking: Fast 24/7 Pickups & Fixed Fares',
      category: 'Airport Taxi',
      date: 'July 2026',
      readTime: '4 min read',
      img: '/assets/images/blog-tips.svg',
      content: `
        <div class="blog-full-article">
          <div class="blog-hero-header">
            <span class="blog-tag-badge" style="position:static; display:inline-block; margin-bottom:12px;">Airport Taxi</span>
            <h1>Coimbatore Airport Taxi Booking: Fast 24/7 Pickups & Fixed Fares</h1>
            <div class="blog-meta-info" style="font-size:0.9rem;">
              <span>📅 July 2026</span> • <span>⏱️ 4 min read</span> • <span>✍️ C Taxi Dispatch Desk</span>
            </div>
          </div>

          <img src="/assets/images/blog-tips.svg" alt="Coimbatore Airport Taxi Service" class="blog-featured-img" onerror="this.onerror=null; this.src='/assets/images/dest-ooty.svg';" />

          <p>Coimbatore International Airport (CJB) located in Peelamedu connects thousands of business and leisure travelers daily. Getting a reliable taxi with zero surge pricing is crucial for early morning or late night flights.</p>

          <h3>Why Choose C Taxi for Airport Transfers?</h3>
          <ul style="margin-left:20px; line-height:1.8;">
            <li><strong>10-Minute Instant Dispatch:</strong> Our cabs are stationed near Peelamedu, Hopes College, Gandhipuram, and RS Puram.</li>
            <li><strong>Zero Surge Fees:</strong> Unlike app aggregators, C Taxi maintains fixed transparent ₹28/KM pricing 24 hours a day.</li>
            <li><strong>Flight Delay Monitoring:</strong> Provide your flight number and our driver waits for you at the CJB arrival gate without extra waiting penalties.</li>
          </ul>

          <div class="blog-cta-banner">
            <h3>Need an Immediate Airport Pickup or Drop?</h3>
            <p style="margin-bottom:16px;">Call our 24/7 hotline <strong>9089223344</strong> for immediate vehicle assignment in under 10 minutes!</p>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344 Now</a>
          </div>
        </div>
      `
    },
    'oneway-vs-round': {
      title: 'Oneway Cabs vs Round Trip Travel: Save Up to 40% On Intercity Travel',
      category: 'Fare Hacks',
      date: 'July 2026',
      readTime: '6 min read',
      img: '/assets/images/fleet-sedan.svg',
      content: `
        <div class="blog-full-article">
          <div class="blog-hero-header">
            <span class="blog-tag-badge" style="position:static; display:inline-block; margin-bottom:12px;">Fare Hacks</span>
            <h1>Oneway Cabs vs Round Trip Travel: Save Up to 40% On Intercity Travel</h1>
            <div class="blog-meta-info" style="font-size:0.9rem;">
              <span>📅 July 2026</span> • <span>⏱️ 6 min read</span> • <span>✍️ C Taxi Billing Team</span>
            </div>
          </div>

          <img src="/assets/images/fleet-sedan.svg" alt="Oneway Cabs Coimbatore" class="blog-featured-img" onerror="this.onerror=null; this.src='/assets/images/dest-ooty.svg';" />

          <p>Traditional outstation taxis charge return kilometer fares regardless of whether you need the cab for the journey back. C Taxi Oneway Intercity Service eliminates return charges completely!</p>

          <h3>Cost Comparison Example: Coimbatore to Tirupur (55 KM)</h3>
          <p><strong>Traditional Outstation Taxi (Round Trip Charges):</strong> 110 KM @ ₹15/KM + ₹300 Driver Batta = ₹1,950+</p>
          <p><strong>C Taxi Oneway Fare:</strong> 55 KM @ ₹28/KM + ₹300 Driver Batta = <strong>₹1,710 ~ ₹1,840</strong> (Save money and pay only for actual distance traveled!)</p>

          <div class="blog-cta-banner">
            <h3>Book Your Oneway Cab Today</h3>
            <p style="margin-bottom:16px;">Oneway drops available from Coimbatore to Chennai, Bangalore, Salem, Erode, Tirupur, Madurai & Kerala.</p>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344 to Book</a>
          </div>
        </div>
      `
    },
    'hill-drives': {
      title: 'Best Hill Station Drives from Coimbatore: Valparai, Kodaikanal & Munnar',
      category: 'Outstation Tours',
      date: 'July 2026',
      readTime: '5 min read',
      img: '/assets/images/blog-valparai.svg',
      content: `
        <div class="blog-full-article">
          <div class="blog-hero-header">
            <span class="blog-tag-badge" style="position:static; display:inline-block; margin-bottom:12px;">Outstation Tours</span>
            <h1>Best Hill Station Drives from Coimbatore: Valparai, Kodaikanal & Munnar</h1>
            <div class="blog-meta-info" style="font-size:0.9rem;">
              <span>📅 July 2026</span> • <span>⏱️ 5 min read</span> • <span>✍️ C Taxi Tour Desk</span>
            </div>
          </div>

          <img src="/assets/images/blog-valparai.svg" alt="Hill Drives Outstation Cabs" class="blog-featured-img" onerror="this.onerror=null; this.src='/assets/images/dest-ooty.svg';" />

          <p>Coimbatore is surrounded by Western Ghats mountain destinations. Hiring an experienced hill station driver ensures comfort, safety, and smooth navigation through foggy hairpin bends.</p>

          <h3>1. Valparai (105 KM • 40 Hairpin Bends)</h3>
          <p>A serene tea estate sanctuary with Lion-tailed Macaque sightings and Aliyar Dam views.</p>

          <h3>2. Munnar (160 KM • Tea Valley Gateway)</h3>
          <p>Famous for Anamudi Peak, Mattupetty Dam, and sprawling spice plantations.</p>

          <h3>3. Kodaikanal (175 KM • Princess of Hill Stations)</h3>
          <p>Explore Kodai Lake, Pillar Rocks, and Coaker's Walk with family SUV comfort.</p>

          <div class="blog-cta-banner">
            <h3>Book Your Hill Station SUV Tour</h3>
            <p style="margin-bottom:16px;">Innova Crysta & Ertiga Prime SUVs available with veteran hill drivers.</p>
            <a href="tel:9089223344" class="btn btn-yellow" style="padding:12px 24px;">📞 Call 9089223344</a>
          </div>
        </div>
      `
    }
  };

export const PAGE_TEMPLATES: Record<string, { title: string; content: string }> = {
    'privacy-policy': {
      title: 'Privacy Policy',
      content: `
        <div class="policy-doc">
          <h2>C Taxi Privacy Policy</h2>
          <p style="color:var(--text-muted);">Last Updated: July 2026 • Official Policy Document</p>
          
          <div class="policy-highlight-box">
            🔒 <strong>Commitment to Confidentiality:</strong> C Taxi respects your personal data. We do NOT share, sell, or disclose your phone numbers, name, or trip locations to external third parties or telemarketing agencies.
          </div>

          <h3>1. Data We Collect</h3>
          <p>To provide accurate taxi dispatch and driver assignment in Coimbatore, C Taxi collects:</p>
          <ul>
            <li><strong>Customer Contact Details:</strong> Phone number and customer name provided during web booking or phone call to 9089223344.</li>
            <li><strong>Trip Information:</strong> Pickup address, landmark, destination drop point, requested travel date, and preferred vehicle type (Sedan / SUV / Traveller).</li>
            <li><strong>GPS & Route Data:</strong> Live GPS coordinates utilized solely by the assigned driver during active ride navigation.</li>
          </ul>

          <h3>2. How We Use Your Data</h3>
          <p>Your details are strictly used for:</p>
          <ul>
            <li>Dispatching closest driver to your pickup location in Coimbatore.</li>
            <li>Sending booking confirmation SMS, driver contact details, and vehicle registration numbers.</li>
            <li>Customer support resolution and fare calculation transparency.</li>
          </ul>

          <h3>3. Data Protection & Security</h3>
          <p>All online reservation details are stored securely. Payment information handled directly with drivers via cash or UPI is verified immediately with zero stored card details.</p>

          <h3>4. Contact Data Officer</h3>
          <p>For privacy queries or request for data removal, contact C Taxi at <strong>booking@ctaxi.co.in</strong> or call <strong>9089223344</strong>.</p>
        </div>
      `
    },
    'terms-conditions': {
      title: 'Terms & Conditions',
      content: `
        <div class="policy-doc">
          <h2>Terms & Conditions of Service</h2>
          <p style="color:var(--text-muted);">Effective July 2026 • C Taxi</p>

          <h3>1. Booking & Fare Structure</h3>
          <ul>
            <li><strong>Local Rides:</strong> Transparent ₹28/KM pricing for local city rides without peak surge charges.</li>
            <li><strong>Oneway Rides:</strong> ₹28/KM + Driver Batta (₹500 for Ooty route, ₹300 for other intercity routes) + ₹400 Hill Charge where applicable.</li>
            <li><strong>Outstation Round Trip:</strong> Charged at ₹15/KM (up & down cumulative mileage) + ₹300-₹500 daily Driver Batta. Minimum daily mileage benchmark is 250 KM per day as per Tamil Nadu commercial rules.</li>
          </ul>

          <h3>2. Tolls, Parking & State Permits</h3>
          <p>Highway toll booth charges, airport entry/parking fees, and inter-state permit taxes (e.g. Kerala / Karnataka permits) are extra at actuals payable by the passenger or added to the final invoice.</p>

          <h3>3. Passenger Luggage & Vehicle Capacity</h3>
          <ul>
            <li><strong>4-Seater Sedan:</strong> Maximum 4 passengers + 3 medium suitcases.</li>
            <li><strong>6-Seater SUV:</strong> Maximum 6 passengers + 4 medium suitcases.</li>
            <li><strong>7-Seater Innova:</strong> Maximum 7 passengers + 4 large suitcases.</li>
          </ul>

          <h3>4. Safety & Conduct</h3>
          <p>Smoking, consumption of alcohol, or illegal substances inside C Taxi vehicles is strictly prohibited. Drivers hold full rights to terminate rides in cases of unruly behavior.</p>
        </div>
      `
    },
    'cancellation-policy': {
      title: 'Cancellation & Refund Policy',
      content: `
        <div class="policy-doc">
          <h2>Cancellation & Refund Policy</h2>
          <p style="color:var(--text-muted);">Transparent & Customer-Friendly Policy</p>

          <div class="policy-highlight-box">
            ✅ <strong>100% Free Cancellation:</strong> Cancel your booking free of charge anytime prior to driver vehicle dispatch!
          </div>

          <h3>1. Cancellation Guidelines</h3>
          <ul>
            <li><strong>Before Driver Dispatch:</strong> Zero cancellation fee.</li>
            <li><strong>After Driver Arrives at Pickup Location:</strong> If the ride is cancelled after the driver has reached your pickup spot in Coimbatore, a nominal ₹100 driver arrival fee applies.</li>
          </ul>

          <h3>2. Pre-Paid & Advance Booking Refunds</h3>
          <p>For advance outstation or airport reservations where advance payment was made, full refunds are processed within 24 business hours directly to your UPI/Bank account.</p>

          <h3>3. Extreme Weather & Hill Road Closures</h3>
          <p>In case of unexpected weather landslides, government road closures, or Nilgiris ghat road bans on Ooty / Valparai routes, C Taxi provides 100% fee waiver and immediate re-routing support.</p>
        </div>
      `
    },
    'faq': {
      title: 'Frequently Asked Questions (FAQ)',
      content: `
        <div class="policy-doc">
          <h2>C Taxi Frequently Asked Questions</h2>
          <p style="margin-bottom:20px; color:var(--text-muted);">Everything you need to know about Coimbatore cab booking, rates, and outstation trips.</p>

          <div class="contact-card-box">
            <h3 style="margin-top:0;">1. How fast can I get a cab in Coimbatore?</h3>
            <p>Our cabs are stationed across Gandhipuram, Peelamedu, RS Puram, Saravanampatti, Singanallur, and Coimbatore Airport. Standard pickup time is 5 to 10 minutes!</p>

            <h3>2. How are Oneway Intercity fares calculated?</h3>
            <p>Oneway fares are billed strictly at ₹28 per KM for actual travel distance plus applicable Driver Batta (₹500 for Ooty, ₹300 for non-hill routes). You pay ZERO return charges.</p>

            <h3>3. Are there extra night surge charges for city local rides?</h3>
            <p>No! C Taxi does NOT charge night surge multipliers for local city transfers in Coimbatore.</p>

            <h3>4. Can I book an Innova Crysta for an Ooty family trip?</h3>
            <p>Yes! We specialize in Innova Crysta and Ertiga SUV hill station trips with experienced hill mountain drivers.</p>

            <h3>5. How do I book instantly?</h3>
            <p>Call our 24/7 hotline directly at <strong style="color:var(--brand-red);">9089223344</strong> or fill out the booking form on the main page.</p>
          </div>
        </div>
      `
    },
    'contact-us': {
      title: 'Contact C Taxi',
      content: `
        <div class="policy-doc">
          <h2>Contact Us - C Taxi</h2>
          <p>We are available 24 hours a day, 7 days a week to assist your travel needs.</p>

          <div class="contact-info-list">
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <strong>24/7 Hotline</strong>
                <div style="font-size:1.1rem; color:var(--brand-red); font-weight:800; margin-top:2px;">9089223344</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">Instant Call Booking</div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <strong>Coimbatore Dispatch Office</strong>
                <div style="font-size:0.9rem; margin-top:2px;">Gandhipuram Taxi Stand & Peelamedu Airport Rd, Coimbatore - 641001</div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div>
                <strong>Email Support</strong>
                <div style="font-size:0.9rem; margin-top:2px;">booking@ctaxi.co.in</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">Quick Email Response</div>
              </div>
            </div>
          </div>

          <div class="contact-card-box" style="margin-top:24px;">
            <h3>Send Direct Message / Query</h3>
            <form id="direct-contact-form" onsubmit="event.preventDefault(); alert('Thank you! C Taxi team will call you back at 9089223344 shortly.');">
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px; margin-bottom:12px;">
                <input type="text" placeholder="Your Name" required style="padding:10px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.95rem; width:100%;" />
                <input type="tel" placeholder="Your Phone Number" required style="padding:10px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.95rem; width:100%;" />
              </div>
              <textarea placeholder="Trip requirements or questions..." rows="4" required style="padding:10px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.95rem; width:100%; margin-bottom:12px;"></textarea>
              <button type="submit" class="btn btn-red" style="padding:10px 24px;">Submit Direct Query</button>
            </form>
          </div>
        </div>
      `
    },
    'tariff': {
      title: 'C Taxi Official Tariff Card',
      content: `
        <div class="policy-doc">
          <h2>C Taxi Official Tariff Card</h2>
          <p style="margin-bottom:16px; color:var(--text-muted);">Transparent, fixed fare structure across local city rides, hourly rentals, and outstation drops in Coimbatore.</p>

          <div class="policy-highlight-box" style="margin-bottom:20px;">
            ❄️ <strong>Mandatory AC Comfort:</strong> Air Conditioning is enabled by default for all Mini & Sedan rides (unless specifically requested off by the customer).
          </div>

          <h3 style="color:var(--brand-dark); font-size:1.2rem; margin-bottom:10px;">1. Local City Rides (Mini / Sedan Cabs)</h3>
          <p style="line-height:1.7; margin-bottom:10px;">Instant local city rides and point-to-point drop services within Coimbatore with verified local professional drivers.</p>
          <ul style="line-height:1.8; margin-left:20px; margin-bottom:20px;">
            <li><strong>Standard Transparent Rates:</strong> Fixed upfront taxi pricing with zero surge pricing or meter tampering.</li>
            <li><strong>District Border Outskirts Surcharge:</strong> Outer area trips include a standard adjustment (+₹100 to ₹150) for areas including <em>Karumathampatti, Karanampettai, Paapampatti, Ganeshapuram / Kovilpalayam, Karamadai, Booluvampatti / Pooluvapatti, Ettimadai, Kinathukadavu</em>.</li>
          </ul>

          <h3 style="color:var(--brand-dark); font-size:1.2rem; margin-bottom:10px;">2. Hourly & Daily Rental Packages</h3>
          <ul style="line-height:1.8; margin-left:20px; margin-bottom:20px;">
            <li><strong>Hourly Rental Package:</strong> <strong style="color:var(--brand-red);">₹350 / Hour</strong> (Includes 10 KM free per hour; Additional distance @ ₹25/KM).</li>
            <li><strong>Package A (10 Hours / 100 KM Day Package):</strong> <strong style="color:var(--brand-red);">₹3,000 flat</strong> (Extra KM: ₹10/KM).</li>
            <li><strong>Package B (12 Hours / 100 KM Day Package):</strong> <strong style="color:var(--brand-red);">₹3,500 flat</strong> (Extra time: ₹150/hr for time exceeding 10 hours).</li>
          </ul>

          <h3 style="color:var(--brand-dark); font-size:1.2rem; margin-bottom:10px;">3. One-Way Drop Tariffs (From Gandhipuram, Ukkadam & Railway Station)</h3>
          <div style="overflow-x:auto; margin-bottom:20px;">
            <table class="tariff-table" style="width:100%; border-collapse:collapse; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; font-size:0.95rem;">
              <thead>
                <tr style="background:#1e293b; color:#ffffff; text-align:left;">
                  <th style="padding:10px;">Destination Drop Point</th>
                  <th style="padding:10px;">Distance</th>
                  <th style="padding:10px;">Net Drop Fare</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #e2e8f0;"><td>Annur</td><td>30 KM</td><td><strong style="color:var(--brand-red);">₹1,100</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;"><td>Isha Yoga Center</td><td>33 KM</td><td><strong style="color:var(--brand-red);">₹1,100</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0;"><td>Anaikatti</td><td>30 KM</td><td><strong style="color:var(--brand-red);">₹1,300</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;"><td>Mettupalayam</td><td>37 KM</td><td><strong style="color:var(--brand-red);">₹1,400</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0;"><td>Palladam / Sirumugai</td><td>39 - 40 KM</td><td><strong style="color:var(--brand-red);">₹1,500</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;"><td>Avinashi / Pollachi / MTP Vana Bathrakaliamman Kovil</td><td>42 - 43 KM</td><td><strong style="color:var(--brand-red);">₹1,600</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0;"><td>Airport to Tiruppur</td><td>46 KM</td><td><strong style="color:var(--brand-red);">₹1,700</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;"><td>Puliyampatti</td><td>49 KM</td><td><strong style="color:var(--brand-red);">₹1,800</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0;"><td>Palakkad / Tiruppur Town</td><td>52 - 55 KM</td><td><strong style="color:var(--brand-red);">₹1,900</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;"><td>Airport to Palakkad</td><td>61 KM</td><td><strong style="color:var(--brand-red);">₹2,200</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0;"><td>Sathyamangalam / Kangeyam / Udumalpet</td><td>70 KM</td><td><strong style="color:var(--brand-red);">₹2,500</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;"><td>Perundurai / Gobi / Kotagiri / Coonoor</td><td>70 - 83 KM</td><td><strong style="color:var(--brand-red);">₹2,900</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0;"><td>Dharapuram</td><td>85 KM</td><td><strong style="color:var(--brand-red);">₹2,950</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;"><td>Erode</td><td>100 KM</td><td><strong style="color:var(--brand-red);">₹3,500</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0;"><td>Ooty Bus Stand Only</td><td>87 KM</td><td><strong style="color:var(--brand-red);">₹3,500</strong></td></tr>
                <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;"><td>Palani</td><td>110 KM</td><td><strong style="color:var(--brand-red);">₹3,900</strong></td></tr>
              </tbody>
            </table>
          </div>

          <h3 style="color:var(--brand-dark); font-size:1.2rem; margin-bottom:10px;">4. Distance-Based Round Trip & Long Drop Rules</h3>
          <ul style="line-height:1.8; margin-left:20px; margin-bottom:20px;">
            <li><strong>Oneway drops under 100 KM:</strong> Calculated at round-trip mileage @ <strong>₹17 / KM</strong> (Go + Return).</li>
            <li><strong>Oneway drops over 130 KM:</strong> Calculated at round-trip mileage @ <strong>₹14 / KM</strong> (Go + Return) plus <strong>₹400 Driver Batta</strong>.</li>
          </ul>

          <h3 style="color:var(--brand-dark); font-size:1.2rem; margin-bottom:10px;">5. General Exclusions & Rules</h3>
          <ul style="line-height:1.8; margin-left:20px; margin-bottom:20px;">
            <li><strong>Tolls, Parking & State Permits:</strong> Toll gate charges, parking fees, and interstate permit fees are not included and must be paid directly by the customer at actuals.</li>
            <li><strong>Net Driver Rate:</strong> Fares represent net driver earnings with zero driver commissions deducted.</li>
          </ul>

          <div style="text-align:center; margin-top:24px;">
            <a href="tel:9089223344" class="btn btn-red" style="padding:12px 28px; font-size:1rem; display:inline-block;">📞 Call 9089223344 to Book Cab</a>
          </div>
        </div>
      `
    },
    'popular-routes': {
      title: 'Popular Routes from Coimbatore (Fixed Fares)',
      content: `
        <div class="policy-doc">
          <h2>Popular Intercity & Outstation Drop Routes</h2>
          <p style="margin-bottom:16px;">Fixed net drop rates for Mini & Sedan cabs from Coimbatore hubs.</p>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:16px; margin-top:20px;">
            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
              <h4 style="font-size:1.1rem; color:var(--brand-dark); margin-bottom:4px;">Coimbatore ➔ Ooty Bus Stand</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">87 KM • Nilgiris Hill Route</p>
              <div style="font-size:1.2rem; color:var(--brand-red); font-weight:800; margin:8px 0;">₹3,500</div>
              <a href="tel:9089223344" class="btn btn-red" style="padding:6px 12px; font-size:0.8rem; display:inline-block;">Book Ooty Cab</a>
            </div>

            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
              <h4 style="font-size:1.1rem; color:var(--brand-dark); margin-bottom:4px;">Coimbatore ➔ Pollachi</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">43 KM • Express Corridor</p>
              <div style="font-size:1.2rem; color:var(--brand-red); font-weight:800; margin:8px 0;">₹1,600</div>
              <a href="tel:9089223344" class="btn btn-red" style="padding:6px 12px; font-size:0.8rem; display:inline-block;">Book Pollachi Cab</a>
            </div>

            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
              <h4 style="font-size:1.1rem; color:var(--brand-dark); margin-bottom:4px;">Coimbatore ➔ Palani</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">110 KM • Temple Highway</p>
              <div style="font-size:1.2rem; color:var(--brand-red); font-weight:800; margin:8px 0;">₹3,900</div>
              <a href="tel:9089223344" class="btn btn-red" style="padding:6px 12px; font-size:0.8rem; display:inline-block;">Book Palani Cab</a>
            </div>

            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
              <h4 style="font-size:1.1rem; color:var(--brand-dark); margin-bottom:4px;">Coimbatore ➔ Erode</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">100 KM • Highway Express</p>
              <div style="font-size:1.2rem; color:var(--brand-red); font-weight:800; margin:8px 0;">₹3,500</div>
              <a href="tel:9089223344" class="btn btn-red" style="padding:6px 12px; font-size:0.8rem; display:inline-block;">Book Erode Cab</a>
            </div>

            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
              <h4 style="font-size:1.1rem; color:var(--brand-dark); margin-bottom:4px;">Coimbatore ➔ Sathyamangalam</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">70 KM • Highway Route</p>
              <div style="font-size:1.2rem; color:var(--brand-red); font-weight:800; margin:8px 0;">₹2,500</div>
              <a href="tel:9089223344" class="btn btn-red" style="padding:6px 12px; font-size:0.8rem; display:inline-block;">Book Sathyamangalam Cab</a>
            </div>

            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
              <h4 style="font-size:1.1rem; color:var(--brand-dark); margin-bottom:4px;">Coimbatore ➔ Coonoor</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">70 KM • Hill Route</p>
              <div style="font-size:1.2rem; color:var(--brand-red); font-weight:800; margin:8px 0;">₹2,900</div>
              <a href="tel:9089223344" class="btn btn-red" style="padding:6px 12px; font-size:0.8rem; display:inline-block;">Book Coonoor Cab</a>
            </div>
          </div>
        </div>
      `
    },
    'oneway-routes': {
      title: 'Discounted Oneway Routes',
      content: `
        <div class="policy-doc">
          <h2>Coimbatore Oneway Taxi Service</h2>
          <p>Pay strictly for distance traveled. Zero Return Fare Policy on all standard one-way routes!</p>
          <div class="policy-highlight-box">
            🚕 All Oneway fares include vehicle rate and transparent per-KM billing with zero hidden extras.
          </div>
          <div style="margin-top:20px; text-align:center;">
            <p>Use our main page Oneway Fare Calculator for live instant price estimates.</p>
            <a href="tel:+919089223344" class="btn btn-red" style="padding:12px 28px; font-size:1rem; margin-top:10px; display:inline-block;">📞 Call 9089223344 for Instant Oneway Booking</a>
          </div>
        </div>
      `
    },
    'blogs': {
      title: 'C Taxi Travel Blogs & Articles',
      content: `
        <div class="policy-doc">
          <h2>Coimbatore Travel Blogs & Cab Guides</h2>
          <p style="margin-bottom:24px;">Explore our travel guides, route tips, and money-saving cab hacks.</p>
          <div id="blogs-full-list" class="blogs-grid"></div>
        </div>
      `
    },
    'tour-packages': {
      title: 'Popular Tour Packages & Outstation Trips',
      content: `
        <div class="policy-doc">
          <h2>Coimbatore Outstation Tour Packages</h2>
          <p style="margin-bottom:24px;">Handcrafted holiday packages with on-the-way sightseeing, temple & river stops, road curve advice, hygienic dining hubs, and fixed vehicle pricing.</p>
          <div id="modal-packages-full-list" class="tour-packages-grid"></div>
        </div>
      `
    }
  };
