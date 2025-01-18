import { Component } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  faqs: FAQ[] = [
    {
      question: 'What flavors of ice cream do you offer?',
      answer: 'We offer a wide variety of flavors including vanilla, chocolate, strawberry, mint chocolate chip, cookies and cream, and many seasonal specialties. Check our menu for the current selection!',
      isExpanded: false
    },
    {
      question: 'Are your ice creams gluten-free?',
      answer: 'Many of our ice cream flavors are gluten-free, but not all. We clearly label our gluten-free options in the store and on our menu. Always inform our staff about any allergies or dietary restrictions.',
      isExpanded: false
    },
    {
      question: 'Do you offer dairy-free or vegan options?',
      answer: 'Yes, we have a selection of dairy-free and vegan ice cream options made with alternative milk bases like almond, coconut, or oat milk. These are clearly labeled in our store.',
      isExpanded: false
    },
    {
      question: 'Can I order ice cream cakes?',
      answer: 'We offer custom ice cream cakes for all occasions. Please place your order at least 48 hours in advance for custom cakes.',
      isExpanded: false
    },
    {
      question: 'Do you deliver?',
      answer: 'We offer delivery through select third-party delivery services. Check our website or call the store for current delivery options in your area.',
      isExpanded: false
    }
  ];

  toggleFAQ(faq: FAQ) {
    faq.isExpanded = !faq.isExpanded;
  }
}

