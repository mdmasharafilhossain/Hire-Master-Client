import hubspotLogo from "../../assets/sponsors/hubspotlogo-web-color.png";
import jetpackLogo from "../../assets/sponsors/Jetpack_Horizontal_RGB_500.png";
import wooCommerceLogo from "../../assets/sponsors/logo-woocommerce-black.png";
import radiusLogo from "../../assets/sponsors/radiustheme_logo.png";
import stackedLogo from "../../assets/sponsors/SC_STACKED_CMYK.jpg";
import bhLogo from "../../assets/sponsors/bh_logo_2015.png";
import { Card, CardBody, Image, Stack, Heading } from "@chakra-ui/react";

const sponsors = [
  { name: "BH", logo: bhLogo },
  { name: "HubSpot", logo: hubspotLogo },
  { name: "Jetpack", logo: jetpackLogo },
  { name: "WooCommerce", logo: wooCommerceLogo },
  { name: "Radius", logo: radiusLogo },
  { name: "Stacked", logo: stackedLogo },
];

const FairSponsors = () => {
  return (
    <>
      <h2 className='text-2xl md:text-3xl font-bold text-center mt-10 md:mt-24'>
        Event Organizers
      </h2>
      <div className='px-2 mt-10 md:px-5 grid grid-cols-1 md:grid-cols-3 items-center justify-center max-w-7xl mx-auto gap-6'>
        {sponsors.map(sponsor => (
          <Card
            key={sponsor}
            direction={{ sm: "row" }}
            overflow='hidden'
            variant='outline'
            className='flex justify-center items-center'
          >
            <div className='md:w-full'>
              <Image
                objectFit='cover'
                className='w-[180px] md:w-[200px] md:h-[40px]'
                src={sponsor?.logo}
                alt='Caffe Latte'
              />
            </div>

            <Stack>
              <CardBody>
                <Heading size='sm'>{sponsor?.name}</Heading>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FairSponsors;
