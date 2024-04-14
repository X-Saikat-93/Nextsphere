import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function HeroAccordion() {
    return (
      <Accordion type='single' collapsible className=' w-3/4 mx-auto'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            How do I start learning a new language?
          </AccordionTrigger>
          <AccordionContent>
            Start by selecting the language you want to learn from the list of
            available languages. Then, follow the guided lessons and exercises
            provided to build your language skills. 🌈
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            Is there a free trial available? 😣
          </AccordionTrigger>
          <AccordionContent>
            Yes, there is a free trial available for new users. You can sign up
            and start learning immediately with access to a limited selection of
            lessons. Upgrade to a premium subscription for full access to all
            lessons and features. 🙌🏻
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>
            How can I practice speaking with native speakers?
          </AccordionTrigger>
          <AccordionContent>
            You can join our community forums where you can connect with native
            speakers and language enthusiasts. Additionally, some lessons offer
            speaking exercises where you can practice your pronunciation and
            conversational skills.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>Can I track my progress?</AccordionTrigger>
          <AccordionContent>
            Yes, you can track your progress through your user profile. We
            provide detailed statistics on your learning activities, including
            lessons completed, time spent, and proficiency levels achieved.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
};


