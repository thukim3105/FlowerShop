import Item from "../components/ui/Item";
import Label from "../components/ui/Label";

function Body() {
  return (
    <div className="w-full bg-[#fbf9f5] py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
          <Label
            string="New Arrivals"
            style="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1b1c1a]"
          />
          <Label
            string="EXPLORE ALL"
            style="uppercase tracking-widest text-xs sm:text-sm text-[#566342]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          <div className="lg:col-span-2">
            <Item
              image="/img/lily.jpg"
              title="Lily"
              description="Soft white petals with elegant green filigree, curated for premium bouquets."
              price="$85"
              layoutType="featured"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            <Item
              image="/img/phalaenopsis-orchids.jpg"
              title="Phalaenopsis orchids"
              description="Delicate orchids that bring a refined touch to any editorial display."
              price="$85"
              layoutType="thumbnail"
            />
            <Item
              image="/img/lavender.jpg"
              title="Lavender"
              description="Calming violet bouquets for atmospheric accents and soft tonality."
              price="$85"
              layoutType="thumbnail"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
