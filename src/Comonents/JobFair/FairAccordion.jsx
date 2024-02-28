import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const FairAccordion = () => {
  return (
    <>
      <div className='mt-10 md:mt-24 mb-10 text-3xl font-bold text-center'>
        FAQ
      </div>
      <div className='mx-auto flex flex-col-reverse md:flex-row justify-between max-w-7xl items-center px-2 md:px-5'>
        <div className='w-1/2 hidden lg:flex'>
          <img
            className='w-3/4 mx-auto rounded-2xl overflow-hidden'
            src='https://i.ibb.co/6XJz9hd/question-mark-1872665-640.jpg'
            alt=''
          />
        </div>
        <div className='w-full lg:w-1/2 flex text-center justify-center items-center'>
          <Accordion allowToggle w='full'>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    fontWeight='semibold'
                    fontSize={18}
                  >
                    How can I participate in an event?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                To participate in an event, click the event you are interested.
                You can register for the event through the registration link
                provided on the event details page.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    fontWeight='semibold'
                    fontSize={18}
                  >
                    How can I add an event to my interested list?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                To add an event to your interested list, click the icon bottom
                to event image. Also you can add an event to your interested
                list by clicking the button Add to Interested List from event
                details page.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    fontWeight='semibold'
                    fontSize={18}
                  >
                    How can I add an event?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                As a sponsor, you can add an event by clicking on the `Add
                Event` button from the job-fair homepage also from on the
                sponsor dashboard. You will need to provide all the necessary
                details for the event.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    fontWeight='semibold'
                    fontSize={18}
                  >
                    How can I manage my event?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                You can manage your event by going to the `My Events` section on
                the sponsor dashboard. Here, you can edit event details, view
                registrations, and manage event.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    fontWeight='semibold'
                    fontSize={18}
                  >
                    How can I see the job seekers interested in my event?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                To see the job seekers interested in your event, navigate to the
                `Interested List` section on the event details page. This will
                show you a list of job seekers who have added your event to
                their interested list.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FairAccordion;
