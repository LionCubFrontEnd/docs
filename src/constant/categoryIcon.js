import { FcBusiness, FcIdea, FcCalendar, FcInspection } from 'react-icons/fc';

const CATEGORY_CONTEXTS = [
  {
    id: 'business',
    name: 'Business',
    icon: FcBusiness,
  },
  {
    id: 'design-pattern',
    name: 'design-pattern',
    icon: FcIdea,
  },
  {
    id: 'leet-code',
    name: 'leet-code',
    icon: FcInspection,
  },
  {
    id: 'meet',
    name: '面试',
    icon: FcCalendar,
  },
];
export default CATEGORY_CONTEXTS;
