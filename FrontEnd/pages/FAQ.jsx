import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
const FAQ = () => {
  return (
    <div className='w-screen px-10 mx-auto max-w-7xl overflow-x-hidden'>
        <div className="flex flex-col h-[80vh] justify-center">
            <h1 className="text-6xl md:text-5xl font-bold mb-5 text-gray-600 text-center">
              Frequently Asked Questions
            </h1>
            <div className="pt-12 flex flex-col items-start text-lg w-2/4">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger>What is SponsorshipWala?</AccordionTrigger>
                <AccordionContent>
                    SponsorshipWala is a non-profit organization which helps ypu to get Sponsorships from various comapanies whithout cold mailing and with a higher assurance of getting Sponsorship 
                </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger>Who are the Companies we can get sponsorships from?</AccordionTrigger>
                <AccordionContent>
                    We have a bunch of comapies like ABC, CDE, XYZ, Armani, Gucci, Google, Meta, etc.
                </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    </div>
  )
}

export default FAQ