import { nanoid } from 'nanoid';
import overViewIcon from '../assets/images/overview-icon.png';
import cardCoinIcon from '../assets/images/card-coin-icon.png';
import eyeIcon from '../assets/images/eye-icon.png';
import invoiceIcon from '../assets/images/invoice-icon.png';
import lovelyIcon from '../assets/images/lovely-icon.png';
import messageIcon from '../assets/images/message-icon.png';
import sellingIcon from '../assets/images/selling-icon.png';
import headShot from '../assets/images/head-shot.jpg';
import AvailableListingGridView from '../pages/DashboardOverview/AvailableListingGridView';
import OverviewScreenHeader from '../pages/DashboardOverview/OverviewScreenHeader';

const RANDOM_PRICE_GENERATOR = `$${Math.floor(Math.random() * 99999)}`;
export let GridViewTableBody: any;

export const SITE_ROUTES = {
  overViewListView: '/dashboard/list-view',
  overViewGridView: '/dashboard/grid-view',
  dashboard: '/dashboard/',
  addListing: '/dashboard/add-listing'
};

export const SIDEBAR_MENU = [
  { id: nanoid(), label: 'Overview', icon: overViewIcon },
  { id: nanoid(), label: 'Messages', icon: messageIcon },
  { id: nanoid(), label: 'Selling', icon: sellingIcon },
  { id: nanoid(), label: 'Invoices', icon: invoiceIcon },
  { id: nanoid(), label: 'Watching', icon: eyeIcon },
  { id: nanoid(), label: 'Buying', icon: cardCoinIcon },
  { id: nanoid(), label: 'Saved searches', icon: lovelyIcon }
];

export const LOGIN_USER = {
  fullName: 'Dagana Lois',
  headShot
};

export const GridViewTableHead = [
  { id: nanoid(), tHead: 'Listing number' },
  { id: nanoid(), tHead: 'Niches & States' },
  { id: nanoid(), tHead: 'Monetization' },
  { id: nanoid(), tHead: 'Price' },
  { id: nanoid(), tHead: 'Listing created' },
  { id: nanoid(), tHead: 'Action' }
];

GridViewTableBody = [
  {
    listingNumber: nanoid(),
    nichesAndStates: 'Websites',
    status: 'For sale',
    monetization: 'E-commerce',
    price: RANDOM_PRICE_GENERATOR,
    listingCreated: 'Listing created',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni culpa adipisci quaerat dolore corrupti assumenda ratione quae laborum eveniet! In saep accusantium maiores nam, corporis vero dolor autem? Sequi.',
    url: ''
  },
  {
    listingNumber: nanoid(),
    nichesAndStates: 'Websites',
    status: 'For sale',
    monetization: 'E-commerce',
    price: RANDOM_PRICE_GENERATOR,
    listingCreated: 'Listing created',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni culpa adipisci quaerat dolore corrupti assumenda ratione quae laborum eveniet! In saep accusantium maiores nam, corporis vero dolor autem? Sequi.',
    url: ''
  },
  {
    listingNumber: nanoid(),
    nichesAndStates: 'Websites',
    status: 'For sale',
    monetization: 'E-commerce',
    price: RANDOM_PRICE_GENERATOR,
    listingCreated: 'Listing created',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni culpa adipisci quaerat dolore corrupti assumenda ratione quae laborum eveniet! In saep accusantium maiores nam, corporis vero dolor autem? Sequi.',
    url: ''
  },
  {
    listingNumber: nanoid(),
    nichesAndStates: 'Websites',
    status: 'Investors',
    monetization: 'E-commerce',
    price: RANDOM_PRICE_GENERATOR,
    listingCreated: 'Listing created',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni culpa adipisci quaerat dolore corrupti assumenda ratione quae laborum eveniet! In saep accusantium maiores nam, corporis vero dolor autem? Sequi.',
    url: ''
  },
  {
    listingNumber: nanoid(),
    nichesAndStates: 'Websites',
    status: 'For sale',
    monetization: 'E-commerce',
    price: RANDOM_PRICE_GENERATOR,
    listingCreated: 'Listing created',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni culpa adipisci quaerat dolore corrupti assumenda ratione quae laborum eveniet! In saep accusantium maiores nam, corporis vero dolor autem? Sequi.',
    url: ''
  },
  {
    listingNumber: nanoid(),
    nichesAndStates: 'Websites',
    status: 'For sale',
    monetization: 'E-commerce',
    price: RANDOM_PRICE_GENERATOR,
    listingCreated: 'Listing created',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni culpa adipisci quaerat dolore corrupti assumenda ratione quae laborum eveniet! In saep accusantium maiores nam, corporis vero dolor autem? Sequi.',
    url: ''
  },
  {
    listingNumber: nanoid(),
    nichesAndStates: 'Websites',
    status: 'Investors',
    monetization: 'E-commerce',
    price: RANDOM_PRICE_GENERATOR,
    listingCreated: 'Listing created',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni culpa adipisci quaerat dolore corrupti assumenda ratione quae laborum eveniet! In saep accusantium maiores nam, corporis vero dolor autem? Sequi.',
    url: ''
  },
  {
    listingNumber: nanoid(),
    nichesAndStates: 'Websites',
    status: 'Investors',
    monetization: 'E-commerce',
    price: RANDOM_PRICE_GENERATOR,
    listingCreated: 'Listing created',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni culpa adipisci quaerat dolore corrupti assumenda ratione quae laborum eveniet! In saep accusantium maiores nam, corporis vero dolor autem? Sequi.',
    url: ''
  }
];

export const ListViewTableHead = [
  { id: nanoid(), tHead: 'Type' },
  { id: nanoid(), tHead: 'Industry' },
  { id: nanoid(), tHead: 'Site age' },
  { id: nanoid(), tHead: 'Net Profit' },
  { id: nanoid(), tHead: 'Monetization' }
];
export const ListViewTableBody = [
  { id: nanoid(), tBody: 'Ecommerce' },
  { id: nanoid(), tBody: 'Ecommerce' },
  { id: nanoid(), tBody: 'Ecommerce' },
  { id: nanoid(), tBody: 'Ecommerce' },
  { id: nanoid(), tBody: 'Ecommerce' }
];

export const OverViewScreenCard = [
  {
    label: 'All Listings',
    total: GridViewTableBody.length,
    url: SITE_ROUTES.overViewGridView
  },
  {
    label: 'Watched Listings',
    total: GridViewTableBody.length,
    url: ''
  }
];
