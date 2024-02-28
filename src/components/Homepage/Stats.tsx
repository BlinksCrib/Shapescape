import { useState, useEffect } from "react";
import { Stat } from "../../utlis/Icons";
// import sdg1 from '../../assets/sdg1.png'
// import sdg2 from '../../assets/sdg2.png'
// import sdg3 from '../../assets/sdg3.png'
// import sdg4 from '../../assets/sdg4.png'
// import sdg5 from '../../assets/sdg5.png'
// import sdg6 from '../../assets/sdg6.png'
// import sdg7 from '../../assets/sdg7.png'
// import sdg8 from '../../assets/sdg8.png'
// import sdg9 from '../../assets/sdg9.png'
// import sdg10 from '../../assets/sdg10.png'
// import sdg11 from '../../assets/sdg11.png'
// import sdg12 from '../../assets/sdg12.png'
// import sdg13 from '../../assets/sdg13.png'
// import sdg14 from '../../assets/sdg14.png'

const slides = [
  {
    tags: "11%",
    body: "increase in knowledge recall when taught through gamification",
    num: "01",
  },
  {
    tags: "28 million",
    body: "people have played our games",
    num: "02",
  },
  {
    tags: "100+",
    body: "games published",
    num: "03",
  },
  //   {
  //     title: (
  //       <>
  //         ZERO <br /> HUNGER
  //       </>
  //     ),
  //     body: 'We assist farmers to close the yield gaps in the production of healthy food and inturn increase their farm income',
  //     color: '#DCA63A',
  //     colors: '#BA861D',
  //     ims: sdg2,
  //     num: 2
  //   },
  //   {
  //     title: (
  //       <>
  //         GOOD HEALTH &<br /> WELL-BEING
  //       </>
  //     ),
  //     body: 'Our technologies help farmers produce nutritious crop varieties aimed at promoting good health & well-being for all at all ages',
  //     color: '#4C9E38',
  //     colors: '#358621',
  //     ims: sdg3,
  //     num: 3
  //   },
  //   {
  //     title: (
  //       <>
  //         QUALITY <br /> EDUCATION
  //       </>
  //     ),
  //     body: 'We transfer knowledge to our farmers via new models for agricultural extension, ag-tech, and financial inclusion',
  //     color: '#C31222',
  //     colors: '#A60A18',
  //     ims: sdg4,
  //     num: 4
  //   },
  //   {
  //     title: (
  //       <>
  //         GENDER <br /> EQUALITY
  //       </>
  //     ),
  //     body: 'Integration of women at community level helps us to achieve neutrality, and increased food productivity',
  //     color: '#FE3A20',
  //     colors: '#F02106',
  //     ims: sdg5,
  //     num: 5
  //   },
  //   {
  //     title: (
  //       <>
  //         CLEAN WATER
  //         <br /> AND SANITATION
  //       </>
  //     ),
  //     body: 'We help improve water quality by introducing modern-irrigation technologies to farmers',
  //     color: '#27BDE2',
  //     colors: '#0E9CBF',
  //     ims: sdg6,
  //     num: 6
  //   },
  //   {
  //     title: (
  //       <>
  //         DECENT WORK AND
  //         <br /> ECONOMIC GROWTH
  //       </>
  //     ),
  //     body: 'We ensure youth involvement at community level to help increase productivity and reduce rural poverty',
  //     color: '#A21B43',
  //     colors: '#7B1533',
  //     ims: sdg7,
  //     num: 7
  //   },
  //   {
  //     title: (
  //       <>
  //         INDUSTRY INNOVATION <br /> AND INFRASTRUCTURE
  //       </>
  //     ),
  //     body: 'By providing financial,techno-logical and technical support to farmers we increase crop value, and improve food safety',
  //     color: '#FE6925',
  //     colors: '#E84901',
  //     ims: sdg8,
  //     num: 8
  //   },
  //   {
  //     title: (
  //       <>
  //         REDUCED <br /> INEQUALITY
  //       </>
  //     ),
  //     body: 'We promote equal rights to economic resources, and provide technology, markets and financial services to our farmers',
  //     color: '#DD1868',
  //     colors: '#BF1359',
  //     ims: sdg9,
  //     num: 10
  //   },
  //   {
  //     title: (
  //       <>
  //         SUSTAINABLE CITIES <br /> AND COMMUNITIES
  //       </>
  //     ),
  //     body: 'By facilitating investment in rural agriculture, we assist in reducing the effect of uncontrollable urbanization',
  //     color: '#FD9D25',
  //     colors: '#EF8500',
  //     ims: sdg10,
  //     num: 11
  //   },
  //   {
  //     title: (
  //       <>
  //         RESPONSIBLE <br /> CONSUMPTION <br /> AND PRODUCTION
  //       </>
  //     ),
  //     body: 'We provide solutions that reduce postharvest losses, eliminate wastes and better use of crop residues',
  //     color: '#C08B2F',
  //     colors: '#946719',
  //     ims: sdg11,
  //     num: 12
  //   },
  //   {
  //     title: (
  //       <>
  //         CLIMATE <br /> ACTION
  //       </>
  //     ),
  //     body: 'We integrate GAP at community level, to promote consciousness of climate change mitigation and adaptation in farmers',
  //     color: '#36763A',
  //     colors: '#26602A',
  //     ims: sdg12,
  //     num: 13
  //   },
  //   {
  //     title: (
  //       <>
  //         PEACE JUSTICE AND <br /> STRONG INSTITUTIONS
  //       </>
  //     ),
  //     body: 'We provide legal identities, promote inclusiveness, & help reduce violence by adopting a farmer cooperative model',
  //     color: '#00689D',
  //     colors: '#014F77',
  //     ims: sdg13,
  //     num: 16
  //   },
  //   {
  //     title: (
  //       <>
  //         PARTNERSHIP FOR <br /> THE GOALS
  //       </>
  //     ),
  //     body: 'Our farmers provide safe, sufficient, and affordable food for all by leveraging on our Global network of Partners',
  //     color: '#1A486A',
  //     colors: '#0B2D46',
  //     ims: sdg14,
  //     num: 17
  //   },
];

const Stats = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      setSlideIndex((prev) => {
        return prev >= slides.length - 1 ? 0 : prev + 1;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-between items-center w-[80%]">
          <div className="bg-[#f3f6fa] h-[80vh] lg:w-[48%] rounded-2xl py-8 px-10 flex justify-center items-center flex-col text-center">
            <p className="font-medium">Some cool stats</p>
            <div className="my-[4rem]"><h1 className="font-bold text-7xl">{slides[slideIndex].tags}</h1>
            <p className="font-medium mt-3">{slides[slideIndex].body}</p></div>
            <button className="border border-[#041c3b] rounded-full px-6 py-1">
              {slides[slideIndex].num} / 0{slides.length}
            </button>

            {/* <img src={slides[slideIndex].ims} alt='woman farming' /> */}
            {/* <div
                className='red'
                style={{ backgroundColor: slides[slideIndex].color }}
              >
                <div className='top'>
                  <span className='num'>{slides[slideIndex].num}</span>
                  <h4 className='title'>{slides[slideIndex].title}</h4>
                </div>
                <div
                  className='bottom'
                //   style={{ backgroundColor: slides[slideIndex].colors }}
                >
                  <p>{slides[slideIndex].body}</p>
                </div>
              </div> */}
          </div>
          <div className="bg-[#cdf462] h-[80vh] lg:w-[48%] rounded-2xl flex justify-center items-center flex-col">
            <Stat />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
