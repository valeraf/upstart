export interface ResultsObject {
  results: Item[];
  pagination: Pagination;
}

export interface Pagination {
  sort: string;
  pageSize: number;
  currentPage: number;
  totalNumberOfResults: number;
  numberOfPages: number;
}

export interface Item {
  summary: string;
  articleFlag?: any;
  buyAndGetFlag: boolean;
  offerAtStoresFlag: boolean;
  discountOffFlag: boolean;
  stock: Stock;
  quantity?: any;
  tenDaysFlag: boolean;
  exchange: boolean;
  video?: any;
  altTag?: any;
  applianceType?: any;
  others?: any;
  onlineDate?: any;
  cityStoreListLA?: any;
  mop?: any;
  discount: number;
  ean?: any;
  price: Price;
  gtin13Type?: any;
  futureStocks?: any;
  classCode?: any;
  classifications?: any;
  averageRating?: any;
  mrp: number;
  volumePrices?: any;
  isAvailableForExp: boolean;
  priceRow?: any;
  baseOptions?: any;
  metadescription?: any;
  buyBackFlag?: any;
  wiiFlag: boolean;
  fiveDaysFlag: boolean;
  quickviewdesc: string;
  yousaveFlag: boolean;
  stickerList?: any;
  emiFlag: boolean;
  productSpecificationData?: any;
  numberOfReviews?: any;
  videoID?: any;
  volumePricesFlag: boolean;
  manufacturerName?: any;
  articleType?: any;
  potentialPromotions?: any;
  productReferences?: any;
  sapCode?: any;
  cityList: any[];
  storeMap?: any;
  categoryID: number;
  promotionFreebieData?: any;
  normal?: any;
  videoTitle?: any;
  isBrandContentAvail?: any;
  fourtyeightHrsFlag: boolean;
  variantType?: any;
  homeDeliveryMsg?: any;
  retailPrice?: any;
  description?: any;
  variantMatrix?: any;
  codFlag: boolean;
  baseProduct?: any;
  offFlag: boolean;
  variantOptions?: any;
  isExpressShipping: boolean;
  reviews?: any;
  homeDeliveryCityList?: any;
  stealDeal: boolean;
  code: string;
  metaalttag?: any;
  url: string;
  isHomeDelivery: boolean;
  picture?: any;
  thumbnail?: any;
  biFlag: boolean;
  manufacturer: string;
  images: Image[];
  videoSourceURL?: any;
  newFlag: boolean;
  purchasable: boolean;
  emiCashBack: boolean;
  multiFreebieFlag: boolean;
  productVoucherData?: any;
  genders?: any;
  specialSKU: boolean;
  cityStoreList: any[];
  couponInsideFlag: boolean;
  details?: any;
  isStorePickup: boolean;
  name: string;
  availableForPickup: boolean;
  thumbnails?: any;
  fifteenDaysFlag: boolean;
  priceRange?: any;
  categories?: any;
  testFreakRating: number;
  metatitle?: any;
  scratchNWin: boolean;
  seometaTitle?: any;
  seometaKeyword?: any;
  seometaDescription?: any;
}

export interface Image {
  galleryIndex?: any;
  imageType: string;
  format: string;
  altText?: any;
  url: string;
}

export interface Price {
  currencyIso: string;
  priceType: string;
  value: number;
  maxQuantity?: any;
  minQuantity?: any;
  formattedValue: string;
}

export interface Stock {
  stockLevelStatus: StockLevelStatus;
  stockLevel: number;
}

export interface StockLevelStatus {
  code: string;
  type: string;
}

export interface QuickViewProps {
    show: boolean;
    item: Item;
}