import { GraduationCap, MapPin } from 'lucide-react';

interface Neighborhood {
  name: string;
  description: string;
  schools: string;
}

const neighborhoods: Neighborhood[] = [
  {
    name: "Bee Cave Woods",
    description: "An established neighborhood of custom homes just north of Bee Caves Road. Families appreciate the larger lots, walkability to schools, and easy access to shopping and restaurants.",
    schools: "Cedar Creek Elementary and Hill Country Middle"
  },
  {
    name: "Davenport Ranch",
    description: "A planned community near Loop 360 and the Pennybacker Bridge, known for golf course access, scenic views, and estate-style homes. Davenport Ranch combines luxury with strong community amenities.",
    schools: "Bridge Point Elementary and Hill Country Middle"
  },
  {
    name: "Lost Creek",
    description: "A long-established, family-friendly neighborhood with rolling hills, a golf course, and greenbelt access. In 2024, residents voted to disannex from the City of Austin, so homeowners no longer pay Austin's city property tax. Lost Creek offers lower taxes while keeping access to Eanes ISD.",
    schools: "Forest Trail Elementary and West Ridge Middle"
  },
  {
    name: "Rivercrest",
    description: "A prestigious neighborhood tucked along Lake Austin, Rivercrest is known for large wooded lots, custom homes, and coveted waterfront properties. Many homes offer private docks or sweeping Hill Country views, while still being minutes from downtown and Westlake.",
    schools: "Bridge Point Elementary and Hill Country Middle"
  },
  {
    name: "Rob Roy",
    description: "One of the largest gated communities in Westlake, Rob Roy features luxury estates on wooded lots with privacy and security. It falls within Austin's limited-purpose jurisdiction rather than full city limits, which means lower city taxes than in full-purpose Austin.",
    schools: "Bridge Point, Barton Creek, or Forest Trail Elementary (depending on section)"
  },
  {
    name: "Rollingwood",
    description: "A small, incorporated city directly adjacent to Zilker Park and downtown. Known for its strong community feel and high property values, Rollingwood levies its own city property tax (separate from Austin) and provides full municipal services.",
    schools: "Eanes Elementary and Hill Country Middle"
  },
  {
    name: "Treemont",
    description: "A compact neighborhood just south of Bee Caves Road, prized for its quiet cul-de-sacs and elegant homes. Its location offers quick access to downtown, Barton Creek, and Zilker Park.",
    schools: "Cedar Creek Elementary and Hill Country Middle"
  },
  {
    name: "West Lake Hills",
    description: "The heart of Westlake, this incorporated city is known for exclusivity, wooded lots, and some of Austin's most iconic Hill Country views. With its own city tax rate (lower than Austin's), West Lake Hills preserves a quiet, natural setting while remaining close to downtown.",
    schools: "Eanes, Cedar Creek, or Bridge Point Elementary (varies by address), feeding into Hill Country Middle"
  },
  {
    name: "West Rim",
    description: "Overlooking Lake Austin, West Rim blends lake access with a suburban neighborhood feel. Many homes enjoy Hill Country or water views, and residents have access to a private neighborhood park and dock.",
    schools: "Bridge Point Elementary and Hill Country Middle"
  },
  {
    name: "Westwood",
    description: "One of the earliest developed neighborhoods in Westlake, Westwood combines mid-century charm with modernized homes on large shaded lots. Its unbeatable location near downtown and Eanes schools makes it highly sought after.",
    schools: "Eanes Elementary and Hill Country Middle"
  },
  {
    name: "Woodhaven",
    description: "A smaller pocket just off Bee Caves Road, with tree-lined streets and a welcoming, community-driven feel. Homes balance luxury finishes with approachable scale, making it attractive to families.",
    schools: "Cedar Creek Elementary and Hill Country Middle"
  },
  {
    name: "Woods of Westlake",
    description: "A family-oriented neighborhood with tree-covered streets and a variety of home styles. Its location provides easy access to both downtown and the Barton Creek Greenbelt, making it popular with active families.",
    schools: "Varies by address"
  }
];

export default function Westlake() {
  return (
    <div className="bg-white">
      <div className="bg-black text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Westlake Neighborhood Guide
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Westlake is one of Austin's most sought-after areas, but what many buyers don't realize is just how unique its neighborhoods truly are. From gated luxury estates and lakefront homes to walkable family neighborhoods and quiet hilltop enclaves, Westlake is a collection of distinct pockets, each with its own lifestyle, setting, and feel. What they share is top-rated Eanes ISD schools and close proximity to downtown.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This page offers a brief overview of some of Westlake's most desirable neighborhoods, including Bee Cave Woods, Davenport Ranch, Lost Creek, Rollingwood, West Lake Hills, Rob Roy, and more. Think of it as a starting point — every area has nuances, from street-by-street character to views, amenities, and tax structures, that are best understood with local insight.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I always recommend driving through these neighborhoods to truly experience what makes each one unique. And when you're making a decision this important, who you hire matters. Having a local expert who knows these pockets well can make all the difference.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you'd like to talk through the neighborhoods or get a more personalized perspective, I'd love to help you explore Westlake and find the right fit for your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {neighborhoods.map((neighborhood, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F5F1EB] to-[#E8DFD3] rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-black flex-shrink-0 mt-1" size={24} />
                <h3 className="text-2xl font-serif text-black">
                  {neighborhood.name}
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {neighborhood.description}
              </p>

              <div className="flex items-start gap-3 pt-4 border-t border-black/10">
                <GraduationCap className="text-black flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">School Zoning:</p>
                  <p className="text-sm text-gray-700">{neighborhood.schools}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black text-white rounded-lg p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Schedule a Westlake Neighborhood Chat
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to explore Westlake in person? Let's talk about which neighborhoods align with your lifestyle, budget, and must-haves. Local insight makes all the difference.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
