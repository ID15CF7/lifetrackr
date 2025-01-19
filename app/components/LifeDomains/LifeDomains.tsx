import React from "react";
import LifeDomainItem from "./LifeDomainItem";
import images from '../../../utils/importImages';

const lifeDomains = [
  { domain: "Mental", image: images["Mental.png"], bubbleClass: 'bg-[#005ac3]' },
  { domain: "Physical", image: images["Physical.png"], bubbleClass: 'bg-[#168a00]' },
  { domain: "Finance", image: images["Finance.png"], bubbleClass: 'bg-[#B38A00]' },
  { domain: "Career", image: images["Career.png"], bubbleClass: 'bg-[#6199FF]' },
  { domain: "Family", image: images["Family.png"], bubbleClass: 'bg-[#DF6900]' },
  { domain: "Friends", image: images["Friends.png"], bubbleClass: 'bg-[#0381aa]' },
  { domain: "Leisure", image: images["Leisure.png"], bubbleClass: 'bg-[#7000D8]' },
  { domain: "Growth", image: images["Growth.png"], bubbleClass: 'bg-[#006eac]' },
  { domain: "Romance", image: images["Romance.png"], bubbleClass: 'bg-[#eb5757]' },
  { domain: "Spirituality", image: images["Spirituality.png"], bubbleClass: 'bg-[#5c6bc0]' },
];

const LifeDomains = () => {
  return (
    <section className="w-full flex justify-center my-12">
      <div className="life-domains grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center w-full max-w-5xl">
        <h2 className="text-2xl col-span-full text-center mb-8">Life Domains I'm nurturing</h2>
        {lifeDomains.map(({ domain, image, bubbleClass }) => (
          <LifeDomainItem key={domain} domain={domain} image={image} bubbleClass={bubbleClass} />
        ))}
      </div>
    </section>
  );
};

export default LifeDomains;