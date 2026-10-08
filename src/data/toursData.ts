export interface TourSpot {
  name: string;
  desc: string;
  timing?: string;
}

export interface TourPackage {
  slug: string;
  aliases?: string[];
  title: string;
  badge: string;
  category: 'hills' | 'spiritual' | 'wildlife' | 'city';
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  duration: string;
  distance: string;
  routeOverview: string;
  pickupArea: string;
  destination: string;
  sedanPrice: number;
  suvPrice: number;
  crystaPrice: number;
  spots: TourSpot[];
  itinerary: { time: string; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
  recommendedVehicles: string;
  faqs: { q: string; a: string }[];
  metaDescription: string;
  pageTitle: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    slug: "coimbatore-to-ooty",
    aliases: ["ooty-coonoor-kotagiri"],
    title: "Ooty Nilgiri Hills Day & Multi-Day Tour",
    badge: "Most Popular Hill Tour",
    category: "hills",
    tagline: "Experience the Queen of Hills, Nilgiri tea gardens & Doddabetta peak with certified mountain chauffeurs",
    shortDescription: "Complete day or multi-day cab tour to Ooty covering Doddabetta peak, Botanical Gardens, Tea Factory and lake boating.",
    fullDescription: "Travel comfortably from Coimbatore to Ooty (88 km) through the scenic Nilgiri mountain route via Mettupalayam and Coonoor. Our experienced mountain chauffeurs handle all 36 hairpin curves with utmost safety, ensuring a relaxed holiday for families and couples.",
    startingPrice: 3000,
    duration: "1 Day / 2 Days / 3 Days",
    distance: "88 km one-way (176 km round trip)",
    routeOverview: "Coimbatore → Mettupalayam → Burliar → Coonoor → Ooty → Coimbatore",
    pickupArea: "Doorstep pickup anywhere in Coimbatore (Home, Hotel, Railway Station or CJB Airport)",
    destination: "Ooty (Udhagamandalam), Nilgiris",
    sedanPrice: 3000,
    suvPrice: 4200,
    crystaPrice: 5200,
    spots: [
      { name: "Ooty Lake & Boathouse", desc: "Scenic boating amidst eucalyptus trees and Nilgiri mist", timing: "9:00 AM - 6:00 PM" },
      { name: "Government Botanical Garden", desc: "55-acre heritage garden with fossilized trees and rare flora", timing: "8:30 AM - 6:30 PM" },
      { name: "Doddabetta Peak", desc: "Highest viewpoint in the Nilgiris (2,637 m) overlooking misty valleys", timing: "9:00 AM - 5:30 PM" },
      { name: "Tea Factory & Museum", desc: "Live CTC tea processing and authentic Nilgiri chocolate tasting", timing: "9:00 AM - 6:30 PM" },
      { name: "Rose Garden", desc: "Terraced garden featuring over 20,000 varieties of blooming roses", timing: "9:00 AM - 6:00 PM" }
    ],
    itinerary: [
      { time: "06:00 AM", title: "Coimbatore Doorstep Pickup", desc: "Pickup from your residence or hotel in clean, sanitized AC commercial cab." },
      { time: "08:30 AM", title: "Ascent via Mettupalayam Ghats", desc: "Scenic mountain drive with photo breaks along tea valley viewpoints." },
      { time: "10:30 AM", title: "Doddabetta Peak & Tea Factory", desc: "Breathtaking panoramic valley views followed by fresh tea processing demonstration." },
      { time: "01:30 PM", title: "Lunch Break in Ooty Town", desc: "Enjoy multi-cuisine or traditional Kongu/South Indian lunch." },
      { time: "02:45 PM", title: "Botanical Garden & Ooty Lake", desc: "Leisurely walk across exotic flora and peaceful boating on Ooty lake." },
      { time: "05:30 PM", title: "Downhill Descent", desc: "Safe return drive with certified mountain driver." },
      { time: "08:30 PM", title: "Drop at Coimbatore", desc: "Drop back at your doorstep or railway station." }
    ],
    inclusions: [
      "Dedicated commercial AC vehicle with experienced hill chauffeur",
      "Fuel, toll charges, and vehicle maintenance",
      "Doorstep pickup & drop anywhere in Coimbatore",
      "Flexible photo stops along scenic tea estates"
    ],
    exclusions: [
      "Sightseeing entry tickets and boathouse charges",
      "Meals and personal refreshments",
      "Parking tickets as per actual municipal receipts"
    ],
    recommendedVehicles: "Prime Sedan (1-4 pax), Ertiga SUV (4-6 pax), Innova Crysta (6-7 pax)",
    faqs: [
      { q: "Is the starting price of ₹3,000 fixed for a 1-day Ooty trip?", a: "Yes, our Prime Sedan package starts at ₹3,000 for standard 1-day Ooty sightseeing with transparent inclusions." },
      { q: "Can we customize the stops in Ooty?", a: "Absolutely. You have complete flexibility to modify spots according to your family's preference." }
    ],
    metaDescription: "Book Coimbatore to Ooty cab tour package from ₹3,000. Verified hill chauffeurs, doorstep pickup, sanitized AC fleet with transparent pricing.",
    pageTitle: "Coimbatore to Ooty Taxi Tour Package — C Taxi (From ₹3,000)"
  },
  {
    slug: "coimbatore-to-coonoor",
    title: "Coonoor Tea Estates & Sim's Park Tour",
    badge: "Heritage & Tea Gardens",
    category: "hills",
    tagline: "Explore tranquil tea gardens, Lamb's Rock, Dolphin's Nose & heritage colonial parks in Coonoor",
    shortDescription: "A serene day trip to Coonoor covering Sim's Park, Lamb's Rock, Dolphin's Nose and tea plantation walks.",
    fullDescription: "Coonoor is the quieter, greener sibling of Ooty, situated at an altitude of 1,850 meters. Famous for its sprawling tea estates, Sim's Park botanical garden, and dramatic viewpoints over Catherine Falls, this trip is ideal for travelers looking for peaceful nature and crisp mountain air.",
    startingPrice: 2900,
    duration: "1 Day Tour (8 - 10 Hours)",
    distance: "72 km from Coimbatore",
    routeOverview: "Coimbatore → Mettupalayam → Burliar → Coonoor → Coimbatore",
    pickupArea: "Any location in Coimbatore city",
    destination: "Coonoor, Nilgiris",
    sedanPrice: 2900,
    suvPrice: 3900,
    crystaPrice: 4900,
    spots: [
      { name: "Sim's Park", desc: "12-hectare botanical garden terraced along natural hill contours", timing: "09:00 AM - 06:00 PM" },
      { name: "Lamb's Rock", desc: "Spectacular precipice overlooking Coimbatore plains and tea estates", timing: "09:00 AM - 05:30 PM" },
      { name: "Dolphin's Nose", desc: "Dramatic rock formation offering views of Catherine Falls", timing: "09:00 AM - 05:00 PM" },
      { name: "Highfield Tea Factory", desc: "Heritage 50-year-old tea estate with factory tour and tasting", timing: "09:00 AM - 06:00 PM" }
    ],
    itinerary: [
      { time: "06:30 AM", title: "Morning Departure from Coimbatore", desc: "Comfortable pickup and smooth highway drive to Mettupalayam foothills." },
      { time: "08:45 AM", title: "Sim's Park Visit", desc: "Explore century-old trees, manicured flower beds and rare pine species." },
      { time: "11:30 AM", title: "Lamb's Rock & Dolphin's Nose", desc: "Scenic mountain viewpoints overlooking Catherine Falls and deep gorges." },
      { time: "01:30 PM", title: "Lunch in Coonoor", desc: "Dining at local Nilgiri cafés or vegetarian restaurants." },
      { time: "02:45 PM", title: "Tea Factory & Estate Walk", desc: "Walk through emerald tea bushes and sample fresh green and black teas." },
      { time: "05:00 PM", title: "Return Journey to Coimbatore", desc: "Smooth descent through Burliar and drop at Coimbatore doorstep." }
    ],
    inclusions: [
      "Dedicated commercial AC cab with certified hill driver",
      "Fuel, driver batta, and vehicle parking waiting",
      "Doorstep pickup and return drop"
    ],
    exclusions: ["Park entry tickets and camera fees", "Food expenses"],
    recommendedVehicles: "Prime Sedan or Ertiga SUV",
    faqs: [
      { q: "How long is the drive from Coimbatore to Coonoor?", a: "The drive typically takes about 2 to 2.5 hours depending on morning traffic." }
    ],
    metaDescription: "Coimbatore to Coonoor taxi tour from ₹2,900. Visit Sim's Park, Lamb's Rock, Dolphin's Nose & tea factories with experienced hill drivers.",
    pageTitle: "Coimbatore to Coonoor Cab Tour Package — C Taxi (From ₹2,900)"
  },
  {
    slug: "coimbatore-to-kotagiri",
    title: "Kotagiri & Kodanad Viewpoint Circuit",
    badge: "Misty Valleys & Waterfalls",
    category: "hills",
    tagline: "Unspoiled tea hills, Catherine Falls & breathtaking Kodanad viewpoints over the Mysore plateau",
    shortDescription: "Visit Kotagiri, the oldest Nilgiri hill station, famous for Catherine Falls and Kodanad panoramic viewpoint.",
    fullDescription: "Kotagiri is renowned for enjoying the most equitable climate in the Nilgiris throughout the year. Free from heavy tourist congestion, Kotagiri features rolling tea slopes, Catherine Waterfalls, and the famous Kodanad Viewpoint that looks out onto the Bhavani Sagar reservoir and Mysore plateau.",
    startingPrice: 3100,
    duration: "1 Day Tour (9 - 10 Hours)",
    distance: "76 km from Coimbatore",
    routeOverview: "Coimbatore → Mettupalayam → Aravenu → Kotagiri → Kodanad → Coimbatore",
    pickupArea: "Doorstep pickup in Coimbatore",
    destination: "Kotagiri, Nilgiris",
    sedanPrice: 3100,
    suvPrice: 4300,
    crystaPrice: 5300,
    spots: [
      { name: "Kodanad Viewpoint", desc: "Sweeping panorama of the Moyar river valley and Mysore plateau", timing: "09:00 AM - 05:30 PM" },
      { name: "Catherine Falls View", desc: "Double-cascading waterfall plummeting 250 feet into forest gorges", timing: "09:00 AM - 05:00 PM" },
      { name: "John Sullivan Memorial", desc: "Historic residence of the founder of modern Nilgiri settlements", timing: "10:00 AM - 05:00 PM" },
      { name: "Kodanad Tea Estates", desc: "Expansive private tea gardens with picturesque cloud cover", timing: "Daylight" }
    ],
    itinerary: [
      { time: "06:30 AM", title: "Coimbatore Departure", desc: "Morning pickup and smooth ascent via Mettupalayam-Kotagiri ghat road." },
      { time: "09:00 AM", title: "Catherine Falls Viewpoint", desc: "View the majestic twin falls surrounded by dense shola forests." },
      { time: "11:30 AM", title: "Kodanad Viewpoint", desc: "Experience the cool breeze and panoramic vistas of the Moyar gorge." },
      { time: "01:30 PM", title: "Lunch in Kotagiri Town", desc: "Traditional South Indian lunch break." },
      { time: "03:00 PM", title: "Sullivan Memorial & Tea Trail", desc: "Heritage museum visit and leisurely photo stop in Kotagiri tea slopes." },
      { time: "05:30 PM", title: "Return to Coimbatore", desc: "Descent through scenic Aravenu route and drop at your location." }
    ],
    inclusions: ["Round-trip commercial AC cab", "Experienced mountain chauffeur", "Fuel and driver allowances"],
    exclusions: ["Entry tickets and personal refreshments"],
    recommendedVehicles: "Prime Sedan, Ertiga SUV",
    faqs: [
      { q: "Is Kotagiri less crowded than Ooty?", a: "Yes, Kotagiri is significantly quieter and offers a peaceful tea estate atmosphere." }
    ],
    metaDescription: "Book Coimbatore to Kotagiri & Kodanad viewpoint cab tour from ₹3,100. Scenic tea trails, Catherine Falls & reliable AC taxi service.",
    pageTitle: "Coimbatore to Kotagiri Taxi Tour Package — C Taxi (From ₹3,100)"
  },
  {
    slug: "coimbatore-to-valparai",
    aliases: ["valparai-topslip-safari", "valparai-topslip"],
    title: "Valparai 40 Hairpins & Sholayar Dam Tour",
    badge: "40 Hairpins & Rainforests",
    category: "hills",
    tagline: "40 thrilling hairpin bends, emerald tea hills, Koolangal river & Sholayar dam in the Western Ghats",
    shortDescription: "Adventurous hill journey through 40 hairpin bends, Anamalai tea carpet hills and Sholayar dam.",
    fullDescription: "Valparai is an unpolluted hill retreat in the Anamalai mountain range, 3,500 feet above sea level. The drive from Coimbatore via Pollachi includes 40 thrilling hairpin bends, views of Aliyar Dam, Monkey Falls, and regular sightings of Lion-tailed Macaques and Nilgiri Tahr.",
    startingPrice: 3600,
    duration: "1 Day / 2 Days (Overnight Stay)",
    distance: "105 km from Coimbatore",
    routeOverview: "Coimbatore → Pollachi → Aliyar Dam → 40 Hairpin Ghats → Valparai → Sholayar Dam → Coimbatore",
    pickupArea: "Any pickup point in Coimbatore",
    destination: "Valparai, Coimbatore District",
    sedanPrice: 3600,
    suvPrice: 4800,
    crystaPrice: 5900,
    spots: [
      { name: "Aliyar Dam & Park", desc: "Picturesque reservoir at the foothills with lush gardens", timing: "09:00 AM - 06:00 PM" },
      { name: "40 Hairpin Ghat Bends", desc: "Remarkable mountain road engineering with breathtaking views", timing: "Daylight transit" },
      { name: "Loam's Viewpoint & Carver Marsh", desc: "Vantage lookout point overlooking Aliyar reservoir", timing: "Daylight" },
      { name: "Koolangal River", desc: "Pebble river bed with shallow, crystal-clear natural mountain water", timing: "09:00 AM - 05:00 PM" },
      { name: "Sholayar Dam", desc: "Second deepest reservoir in Asia surrounded by rainforests", timing: "09:00 AM - 05:30 PM" }
    ],
    itinerary: [
      { time: "06:00 AM", title: "Early Morning Departure", desc: "Drive along Pollachi highway lined with lush coconut plantations." },
      { time: "07:30 AM", title: "Aliyar Dam Foothills", desc: "Brief photo stop at Aliyar reservoir before entering the mountain ghat road." },
      { time: "08:15 AM", title: "40 Hairpin Bends Ascent", desc: "Expert mountain driving with stops at Loam's viewpoint and Monkey Falls." },
      { time: "11:00 AM", title: "Valparai Tea Gardens & River", desc: "Drive through emerald tea carpet hills and relaxing stop at Koolangal river." },
      { time: "01:30 PM", title: "Sholayar Dam Visit", desc: "Explore massive Sholayar reservoir surrounded by tropical evergreen forests." },
      { time: "04:30 PM", title: "Descent before Forest Checkpost Closure", desc: "Safe, scenic descent before forest checkpost restrictions." },
      { time: "07:30 PM", title: "Arrival in Coimbatore", desc: "Drop back at your hotel or residence." }
    ],
    inclusions: [
      "Commercial AC vehicle with mountain certified driver",
      "Fuel, 250 km coverage, and hill safety allowance",
      "Chauffeur assistance at forest checkposts"
    ],
    exclusions: ["Forest department entry permits and meals"],
    recommendedVehicles: "Ertiga SUV (Strong hill pull) or Toyota Innova Crysta",
    faqs: [
      { q: "Is forest checkpost timing strictly enforced on the Valparai route?", a: "Yes, the Aliyar checkpost typically closes for uphill traffic by 6:00 PM for wildlife protection." }
    ],
    metaDescription: "Coimbatore to Valparai cab package from ₹3,600. Expert drivers for 40 hairpin bends, Anamalai tea estates, and Sholayar dam.",
    pageTitle: "Coimbatore to Valparai Taxi Tour Package — C Taxi (From ₹3,600)"
  },
  {
    slug: "coimbatore-to-palani",
    aliases: ["palani-temple-pilgrimage"],
    title: "Palani Dhandayuthapani Murugan Temple Pilgrimage",
    badge: "Divine Murugan Pilgrimage",
    category: "spiritual",
    tagline: "Sacred darshan at Palani Murugan Hill Temple with dedicated Adivaram drop & waiting",
    shortDescription: "Hassle-free temple cab package to Palani with waiting at Adivaram and doorstep return.",
    fullDescription: "Palani is one of the revered Six Holy Abodes (Arupadaiveedu) of Lord Murugan. Our pilgrimage taxi service provides early morning departure from Coimbatore, direct drop at Adivaram near the Winch and Ropeway counters, dedicated waiting during your darshan, and safe return.",
    startingPrice: 2800,
    duration: "Same Day Return (7 - 9 Hours)",
    distance: "105 km one-way (210 km round trip)",
    routeOverview: "Coimbatore → Pollachi Road → Udumalpet → Palani Adivaram → Coimbatore",
    pickupArea: "Coimbatore city doorstep",
    destination: "Palani, Dindigul District",
    sedanPrice: 2800,
    suvPrice: 3800,
    crystaPrice: 4800,
    spots: [
      { name: "Palani Hilltop Temple", desc: "Sacred shrine of Lord Dhandayuthapani Swamy atop Sivagiri hill", timing: "06:00 AM - 08:30 PM" },
      { name: "Winch & Ropeway Counters", desc: "Scenic mountain funicular and cable car ascending the 450-foot hill", timing: "06:30 AM - 08:00 PM" },
      { name: "Thiru Avinankudi Temple", desc: "Ancient foothill shrine where Sage Agastya offered prayers", timing: "06:00 AM - 08:00 PM" },
      { name: "Palani Panchamirtham Counters", desc: "Authentic GI-tagged temple offering made from hill bananas and honey", timing: "Temple counters" }
    ],
    itinerary: [
      { time: "06:00 AM", title: "Early Morning Departure", desc: "Early pickup from Coimbatore to reach Palani before peak temple queues." },
      { time: "08:15 AM", title: "Arrival at Palani Adivaram", desc: "Direct drop right at Giri Veedhi or Ropeway ticketing with bags safely kept in car." },
      { time: "08:45 AM", title: "Hilltop Ascent & Darshan", desc: "Ascend via Winch, Ropeway or Elephant Steps for peaceful darshan." },
      { time: "01:00 PM", title: "Panchamirtham & Lunch", desc: "Procure famous Palani Panchamirtham and traditional vegetarian lunch." },
      { time: "02:30 PM", title: "Thiru Avinankudi Darshan", desc: "Visit the sacred foothill temple." },
      { time: "03:30 PM", title: "Return Drive to Coimbatore", desc: "Smooth highway return via Pollachi coconut groves." },
      { time: "06:00 PM", title: "Arrival in Coimbatore", desc: "Drop at your residence or Coimbatore Junction." }
    ],
    inclusions: [
      "Round trip travel in sanitized AC cab (210 km covered)",
      "4 to 5 hours dedicated waiting at Palani Adivaram",
      "Driver batta and fuel included",
      "Senior citizen friendly drop closest to elevator / winch entry"
    ],
    exclusions: ["Temple special darshan tickets and tolls at actuals"],
    recommendedVehicles: "Prime Sedan, Ertiga SUV, Toyota Innova Crysta",
    faqs: [
      { q: "Can the driver wait while we complete special darshan?", a: "Yes, up to 5 hours waiting at Palani Adivaram is included in the package." }
    ],
    metaDescription: "Coimbatore to Palani temple cab package from ₹2,800. Dedicated Adivaram waiting, senior-friendly drops, and transparent round-trip pricing.",
    pageTitle: "Coimbatore to Palani Temple Taxi Package — C Taxi (From ₹2,800)"
  },
  {
    slug: "coimbatore-to-isha-marudhamalai",
    aliases: ["marudhamalai-isha-kovai-kutralam"],
    title: "Marudhamalai, Isha Adiyogi & Kovai Kutralam Circuit",
    badge: "Spiritual & Nature Circuit",
    category: "spiritual",
    tagline: "Holy Murugan darshan, 112ft Adiyogi 3D laser show, and refreshing Siruvani rainforest waterfalls",
    shortDescription: "Western Coimbatore day circuit covering Marudhamalai, Kovai Kutralam falls, and Isha Adiyogi light show.",
    fullDescription: "Experience the spiritual and ecological highlights of Western Coimbatore in one well-paced day tour. Begin with morning darshan at the 12th-century Marudhamalai Hill Temple, cool off at the pristine Kovai Kutralam waterfalls in the Siruvani forest range, and spend the evening at the Isha Yoga Center witnessing the 112-foot Adiyogi Divya Darshanam 3D laser spectacle.",
    startingPrice: 2200,
    duration: "1 Day Full Day Tour (8 - 10 Hours)",
    distance: "90 km round circuit in Western Coimbatore",
    routeOverview: "Coimbatore City → Marudhamalai Temple → Kovai Kutralam Falls → Isha Yoga Center → Coimbatore",
    pickupArea: "Anywhere in Coimbatore",
    destination: "Western Coimbatore Circuit",
    sedanPrice: 2200,
    suvPrice: 3100,
    crystaPrice: 4200,
    spots: [
      { name: "Marudhamalai Murugan Temple", desc: "Ancient 12th-century hill shrine dedicated to Lord Murugan", timing: "06:00 AM - 01:00 PM & 04:00 PM - 08:30 PM" },
      { name: "Kovai Kutralam Waterfalls", desc: "Pristine waterfall originating in the Siruvani rainforest range", timing: "10:00 AM - 03:30 PM (Closed Mondays)" },
      { name: "Isha Yoga Center & Adiyogi", desc: "Iconic 112-foot Adiyogi statue and tranquil Dhyanalinga meditation dome", timing: "06:00 AM - 08:00 PM" },
      { name: "Adiyogi Divya Darshanam", desc: "Award-winning 3D laser projection mapping light and sound show", timing: "07:00 PM - 07:20 PM Daily" }
    ],
    itinerary: [
      { time: "07:30 AM", title: "Morning Pickup & Marudhamalai Temple", desc: "Direct hill drive to Marudhamalai for peaceful morning darshan." },
      { time: "10:30 AM", title: "Kovai Kutralam Waterfalls", desc: "Forest drive to Siruvani foothills for relaxing waterfall baths." },
      { time: "01:30 PM", title: "Kongu Lunch Break", desc: "Authentic vegetarian lunch en route to Velliangiri foothills." },
      { time: "03:00 PM", title: "Isha Yoga Center & Dhyanalinga", desc: "Visit Dhyanalinga, Linga Bhairavi, and theerthakunds." },
      { time: "06:30 PM", title: "Adiyogi 112ft 3D Laser Show", desc: "Witness the magnificent Divya Darshanam projection show." },
      { time: "08:30 PM", title: "Return to Coimbatore", desc: "Smooth evening drive back to your hotel or residence." }
    ],
    inclusions: [
      "Complete 8-10 hour dedicated cab with chauffeur",
      "Fuel, parking waiting, and driver allowance",
      "Guaranteed evening waiting for Adiyogi 3D laser show",
      "Luggage security in trunk while you visit temples"
    ],
    exclusions: ["Kovai Kutralam forest department entry ticket", "Personal expenses"],
    recommendedVehicles: "Prime Sedan, Ertiga SUV, Innova Crysta",
    faqs: [
      { q: "Is waiting for the 7:00 PM Adiyogi light show included?", a: "Yes, our driver waits until the entire Divya Darshanam show concludes before bringing you back." }
    ],
    metaDescription: "Coimbatore to Marudhamalai, Isha Yoga Center Adiyogi & Kovai Kutralam 1-day cab tour. Transparent fare from ₹2,200, laser show waiting included.",
    pageTitle: "Marudhamalai, Isha Adiyogi & Kovai Kutralam Tour — C Taxi (From ₹2,200)"
  },
  {
    slug: "coimbatore-to-topslip-pollachi",
    title: "Pollachi, Topslip Safari & Aliyar Foothills Tour",
    badge: "Wildlife & Countryside",
    category: "wildlife",
    tagline: "Explore Anamalai Tiger Reserve elephant camp, lush Pollachi coconut groves & Aliyar reservoir",
    shortDescription: "Day trip through Pollachi coconut countryside to Topslip wildlife van safari and Aliyar dam.",
    fullDescription: "Escape into the Anamalai Tiger Reserve at Topslip, renowned for its teak forests, elephant training camp, and guided forest van safaris. Combined with a drive through Pollachi's picturesque coconut country and Aliyar Dam gardens, this is one of Coimbatore's finest nature excursions.",
    startingPrice: 2600,
    duration: "1 Day Tour (8 - 9 Hours)",
    distance: "75 km from Coimbatore",
    routeOverview: "Coimbatore → Kinathukadavu → Pollachi → Sethumadai → Topslip → Aliyar Dam → Coimbatore",
    pickupArea: "Doorstep in Coimbatore",
    destination: "Topslip (Anamalai Tiger Reserve)",
    sedanPrice: 2600,
    suvPrice: 3600,
    crystaPrice: 4600,
    spots: [
      { name: "Topslip Forest Safari", desc: "Forest department van safari through dense teak forests", timing: "07:00 AM - 03:00 PM" },
      { name: "Kozhikamuthi Elephant Camp", desc: "Historic camp caring for timber elephants and calves", timing: "08:30 AM - 11:00 AM" },
      { name: "Aliyar Dam & Park", desc: "Sprawling reservoir gardens and boating at the mountain base", timing: "09:00 AM - 06:00 PM" },
      { name: "Pollachi Coconut Country", desc: "Picturesque agricultural farms and canal roads", timing: "Daylight" }
    ],
    itinerary: [
      { time: "06:30 AM", title: "Morning Departure", desc: "Early drive via Pollachi 4-lane highway to reach Topslip checkpost on time." },
      { time: "08:30 AM", title: "Sethumadai & Forest Entry", desc: "Entry into Anamalai Tiger Reserve through forest checkpost." },
      { time: "09:30 AM", title: "Topslip Safari & Elephant Camp", desc: "Forest department safari and visit to Kozhikamuthi camp." },
      { time: "01:00 PM", title: "Lunch in Pollachi", desc: "Traditional Kongu style lunch." },
      { time: "02:30 PM", title: "Aliyar Dam & Garden", desc: "Relaxing walk through Aliyar gardens and reservoir viewpoint." },
      { time: "05:30 PM", title: "Return Drive", desc: "Comfortable drive back to Coimbatore city." }
    ],
    inclusions: ["Dedicated AC cab with chauffeur", "Fuel, 180 km coverage, and driver allowance"],
    exclusions: ["Forest department entry & safari ticket charges", "Tolls at actuals"],
    recommendedVehicles: "Prime Sedan, Ertiga SUV",
    faqs: [
      { q: "Do we need prior permits for Topslip?", a: "Forest department permits are issued at the Sethumadai checkpost on arrival." }
    ],
    metaDescription: "Coimbatore to Pollachi & Topslip wildlife safari taxi package from ₹2,600. Visit Anamalai Tiger Reserve and Aliyar Dam.",
    pageTitle: "Coimbatore to Topslip & Pollachi Taxi Tour — C Taxi (From ₹2,600)"
  },
  {
    slug: "coimbatore-to-munnar",
    title: "Munnar Hills & Tea Plantations Tour",
    badge: "Mist & Waterfalls",
    category: "hills",
    tagline: "Explore lush Eravikulam National Park, Mattupetty Dam, Tea Gardens & Anamudi Peak",
    shortDescription: "2 to 3 days outstation tour to Munnar covering tea museums, Mattupetty dam, and Eravikulam park.",
    fullDescription: "Munnar is Kerala's premier hill station, located 160 km from Coimbatore. Famous for rolling tea carpet slopes, misty peaks, Echo Point, and the endangered Nilgiri Tahr at Eravikulam National Park, our outstation cabs provide a seamless interstate trip with experienced hill drivers.",
    startingPrice: 5800,
    duration: "2 Days / 3 Days Weekend Tour",
    distance: "160 km one-way from Coimbatore",
    routeOverview: "Coimbatore → Pollachi → Udumalpet → Marayoor (Sandalwood) → Munnar → Coimbatore",
    pickupArea: "Coimbatore City Doorstep",
    destination: "Munnar, Idukki District, Kerala",
    sedanPrice: 5800,
    suvPrice: 7600,
    crystaPrice: 9200,
    spots: [
      { name: "Eravikulam National Park", desc: "Home to the Nilgiri Tahr and views of Anamudi peak", timing: "07:30 AM - 04:00 PM" },
      { name: "Mattupetty Dam & Echo Point", desc: "Scenic reservoir with speedboating amidst pine hills", timing: "09:00 AM - 05:30 PM" },
      { name: "KDHP Tea Museum", desc: "Century-old tea making machinery and tea tasting room", timing: "09:00 AM - 05:00 PM" },
      { name: "Marayoor Sandalwood Forests", desc: "Natural sandalwood reserve and prehistoric dolmens en route", timing: "Transit stop" }
    ],
    itinerary: [
      { time: "Day 1 - 06:00 AM", title: "Coimbatore to Munnar Drive", desc: "Scenic drive via Udumalpet and Marayoor sandalwood forests." },
      { time: "Day 1 - 12:30 PM", title: "Hotel Check-in & Lunch", desc: "Arrival in Munnar, hotel drop and relaxation." },
      { time: "Day 1 - 03:00 PM", title: "Mattupetty Dam & Echo Point", desc: "Boating, lake views and photo stops along tea hills." },
      { time: "Day 2 - 08:30 AM", title: "Eravikulam National Park", desc: "Explore Rajamalai hills to spot Nilgiri Tahr and wild flora." },
      { time: "Day 2 - 01:30 PM", title: "Tea Museum & Return Journey", desc: "Visit KDHP tea museum followed by return descent to Coimbatore." }
    ],
    inclusions: [
      "Round trip travel in sanitized AC cab (500 km outstation allowance)",
      "2 days driver batta included",
      "Luggage protection and hotel drops in Munnar"
    ],
    exclusions: ["Kerala state border permit, entry tickets, tolls and parking"],
    recommendedVehicles: "Prime Sedan, Ertiga SUV, Innova Crysta",
    faqs: [
      { q: "Is Kerala interstate road tax included?", a: "Interstate road tax is paid at the state border checkpost as per actual government receipt." }
    ],
    metaDescription: "Coimbatore to Munnar 2-3 days cab package from ₹5,800. Reliable AC fleet, experienced mountain drivers, and transparent pricing.",
    pageTitle: "Coimbatore to Munnar Taxi Tour Package — C Taxi (From ₹5,800)"
  },
  {
    slug: "coimbatore-to-kodaikanal",
    aliases: ["kodaikanal-hills"],
    title: "Kodaikanal 'Princess of Hills' Tour Package",
    badge: "Romantic Mist & Lakes",
    category: "hills",
    tagline: "Explore star-shaped Kodai lake, Pillar Rocks, Pine Forests, and Silver Cascade waterfalls",
    shortDescription: "2 to 3 days holiday package to Kodaikanal covering Kodai lake, Pillar rocks, and Pine forest.",
    fullDescription: "Kodaikanal, known as the Princess of Hills, sits at an altitude of 2,133 meters in the Palani hills. Famous for its star-shaped man-made lake, misty cliff walks at Coaker's Walk, Pillar Rocks, and cinematic Pine Forests, this tour is a favorite for families and couples.",
    startingPrice: 5500,
    duration: "2 Days / 3 Days Weekend Tour",
    distance: "175 km one-way from Coimbatore",
    routeOverview: "Coimbatore → Pollachi / Dharapuram → Palani → Ghat Road → Kodaikanal → Coimbatore",
    pickupArea: "Doorstep in Coimbatore",
    destination: "Kodaikanal, Dindigul District",
    sedanPrice: 5500,
    suvPrice: 7200,
    crystaPrice: 8800,
    spots: [
      { name: "Kodaikanal Lake", desc: "Star-shaped lake with pedalo boating and cycling perimeter", timing: "06:00 AM - 06:00 PM" },
      { name: "Coaker's Walk", desc: "Pedestrian cliff-edge path offering misty valley views", timing: "07:00 AM - 07:00 PM" },
      { name: "Pillar Rocks & Guna Caves", desc: "Three giant granite boulders standing 400 feet high", timing: "09:00 AM - 05:00 PM" },
      { name: "Pine Forest", desc: "Cinematic forest of towering pine trees planted in 1906", timing: "09:00 AM - 06:00 PM" },
      { name: "Silver Cascade Falls", desc: "180-foot natural waterfall along the Kodai ghat road", timing: "Open all day" }
    ],
    itinerary: [
      { time: "Day 1 - 06:00 AM", title: "Coimbatore to Kodaikanal Drive", desc: "Comfortable highway and scenic hill climb with breakfast stop." },
      { time: "Day 1 - 12:00 PM", title: "Hotel Check-in & Lake Leisure", desc: "Arrival at Kodaikanal, lunch, and leisurely cycling around Kodai Lake." },
      { time: "Day 1 - 03:30 PM", title: "Coaker's Walk & Bryant Park", desc: "Evening stroll through botanical gardens and cliff walk." },
      { time: "Day 2 - 09:00 AM", title: "Full Day Kodai Sightseeing", desc: "Visit Pillar Rocks, Green Valley View, Pine Forest, and Guna Caves." },
      { time: "Day 2 - 03:30 PM", title: "Silver Cascade & Return Drive", desc: "Descent via scenic Palani ghat road and smooth return to Coimbatore." }
    ],
    inclusions: [
      "Round trip travel in sanitized AC Prime Sedan or SUV",
      "500 km outstation billing allowance over 2 days",
      "Driver batta for 2 days included (₹500 x 2)"
    ],
    exclusions: ["Hotel stay, food expenses, entry tickets and tolls"],
    recommendedVehicles: "Prime Sedan, Ertiga SUV, or Innova Crysta",
    faqs: [
      { q: "How many kilometers are included in the 2-day Kodaikanal package?", a: "The package includes 500 km outstation coverage over 2 days." }
    ],
    metaDescription: "Coimbatore to Kodaikanal 2-3 days taxi tour package from ₹5,500. Reliable AC fleet, certified hill chauffeurs, transparent pricing.",
    pageTitle: "Coimbatore to Kodaikanal Taxi Tour Package — C Taxi (From ₹5,500)"
  },
  {
    slug: "coimbatore-city-temple-shopping",
    title: "Coimbatore City Heritage & Shopping Circuit",
    badge: "City & Heritage Tour",
    category: "city",
    tagline: "Visit historic Eachanari Vinayagar, Perur Pateeswarar Temple, GD Car Museum & Cross Cut Road",
    shortDescription: "Half day or full day local cab package covering Coimbatore's iconic temples, car museum and silk shopping.",
    fullDescription: "Discover the cultural, industrial, and spiritual heritage of Manchester of South India. This tour takes you to the historic Perur Pateeswarar Temple (built by Karikala Chola), the famous Eachanari Vinayagar Temple, the world-renowned GD Naidu Car Museum, and dedicated waiting for silk saree and textile shopping on Cross Cut Road and RS Puram.",
    startingPrice: 1800,
    duration: "Full Day Tour (6 - 8 Hours)",
    distance: "60 km local city coverage",
    routeOverview: "Coimbatore City → Eachanari Temple → Perur Temple → GD Car Museum → Cross Cut Road Shopping → Coimbatore",
    pickupArea: "Any hotel, residence, or railway station in Coimbatore",
    destination: "Coimbatore City",
    sedanPrice: 1800,
    suvPrice: 2500,
    crystaPrice: 3400,
    spots: [
      { name: "Perur Pateeswarar Temple", desc: "Millennia-old temple with exquisite carved stone pillars and golden hall", timing: "06:00 AM - 01:00 PM & 04:00 PM - 08:30 PM" },
      { name: "Eachanari Vinayagar Temple", desc: "Historic 6-foot Ganesha deity dating back to 1500 AD", timing: "05:30 AM - 08:30 PM" },
      { name: "Gedee Car Museum", desc: "Rare classic and vintage automobiles collected from around the world", timing: "09:00 AM - 05:00 PM (Closed Mondays)" },
      { name: "Cross Cut Road & Gandhipuram", desc: "Famous textile and gold shopping hub with dedicated driver waiting", timing: "10:00 AM - 09:00 PM" }
    ],
    itinerary: [
      { time: "08:30 AM", title: "Morning Pickup", desc: "Pickup from your hotel or residence in comfortable AC cab." },
      { time: "09:15 AM", title: "Eachanari Vinayagar Darshan", desc: "Visit the historic temple on Pollachi road for auspicious morning prayers." },
      { time: "11:00 AM", title: "Perur Pateeswarar Temple", desc: "Marvel at ancient Dravidian stone architecture and historic temple tank." },
      { time: "01:00 PM", title: "Coimbatore Traditional Lunch", desc: "Enjoy authentic Kongu cuisine or traditional vegetarian thali." },
      { time: "02:30 PM", title: "Gedee Car Museum", desc: "Explore vintage cars, micro-cars, and automobile engineering exhibits." },
      { time: "04:30 PM", title: "Textile & Silk Shopping", desc: "Dedicated cab waiting for silk saree and textile shopping in Gandhipuram." },
      { time: "07:30 PM", title: "Drop at Hotel/Residence", desc: "Safe drop with all your shopping bags." }
    ],
    inclusions: ["Dedicated 8-hour AC vehicle with chauffeur", "Fuel and parking waiting included", "Luggage security in trunk"],
    exclusions: ["Museum entry tickets and personal shopping expenses"],
    recommendedVehicles: "Prime Sedan, Ertiga SUV",
    faqs: [
      { q: "Can the driver wait outside shops while we shop for sarees?", a: "Yes, our chauffeur waits at convenient parking spots and assists with your bags." }
    ],
    metaDescription: "Coimbatore city temple and shopping cab tour from ₹1,800. Visit Perur temple, Eachanari, GD Car Museum & Cross Cut Road with C Taxi.",
    pageTitle: "Coimbatore City Temple & Shopping Cab Tour — C Taxi (From ₹1,800)"
  }
];

export function findTourBySlug(slug: string): TourPackage | undefined {
  const cleanSlug = slug.toLowerCase().trim();
  return TOUR_PACKAGES.find(t => 
    t.slug === cleanSlug || (t.aliases && t.aliases.includes(cleanSlug))
  );
}
