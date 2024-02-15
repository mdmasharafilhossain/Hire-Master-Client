import Marquee from "react-fast-marquee";
import bhLogo from "../../assets/sponsors/bh_logo_2015.png";
import codeRexLogo from "../../assets/sponsors/CodeRex-Logo.png";

import hubspotLogo from "../../assets/sponsors/hubspotlogo-web-color.png";
import jetpackLogo from "../../assets/sponsors/Jetpack_Horizontal_RGB_500.png";
import wooCommerceLogo from "../../assets/sponsors/logo-woocommerce-black.png";
import radiusLogo from "../../assets/sponsors/radiustheme_logo.png";
import stackedLogo from "../../assets/sponsors/SC_STACKED_CMYK.jpg";
import storepressLogo from "../../assets/sponsors/storepress_logo_trasnparent.png";
import themeumLogo from "../../assets/sponsors/themeum-logo-e1560331031299.png";
import weDevsLogo from "../../assets/sponsors/weDevs-Logo-1-e1560330968188.png";
import WPDeveloperLogo from "../../assets/sponsors/WPDeveloper-Logo-e1560438875792.png";

const sponsors = [
  { name: "BH", logo: bhLogo },
  { name: "CodeRex", logo: codeRexLogo },

  { name: "HubSpot", logo: hubspotLogo },
  { name: "Jetpack", logo: jetpackLogo },
  { name: "WooCommerce", logo: wooCommerceLogo },
  { name: "Radius", logo: radiusLogo },
  { name: "Stacked", logo: stackedLogo },
  { name: "Storepress", logo: storepressLogo },
  { name: "Themeum", logo: themeumLogo },
  { name: "weDevs", logo: weDevsLogo },
  { name: "WPDeveloper", logo: WPDeveloperLogo },
];

const Sponsors = () => {
  return (
    <div className='mx-auto my-12 md:my-24'>
      <div className=' mb-10 space-y-2'>
        <h1 className='text-3xl md:text-5xl font-bold text-center'>Sponsors</h1>
        <p className='text-lg mx-auto max-w-xs sm:max-w-3xl md:text-2xl font-semibold text-center text-gray-600'>
          Thanks to these incredible sponsors for supporting our mission and
          making it all possible.
        </p>
      </div>
      <Marquee
        speed={35}
        delay={0}
        loop={0}
        gradientColor='248 251 253'
        gradientWidth={200}
        className='flex items-center'
      >
        {sponsors.map((sponsor, idx) => (
          <div className='' key={idx}>
            <img className='w-56 mr-10' src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Sponsors;
