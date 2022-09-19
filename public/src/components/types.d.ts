declare module "@formatjs/ecma402-abstract";

interface OavArea {
  id: number;
}

interface OavClientConfig {
  votingCompleteConfig: {
    logo: string;
    shareUrl: string;
    showFooterText: Boolean;
  },
  selectVotingAreaDesktopHTML: string;
  selectVotingAreaMobileHTML: string;

  insecureEmailLoginEnabled: boolean;
  insecureEmailPostcodeMaxLength: number;
  insecureEmailAgeLimit: number;
  insecureEmailLoginPostCodes: Record<number, Array<string>>;
  insecureEmailLoginAreaNames: Record<number, string>;

  lowSecuritySmsLoginEnabled?: boolean;
  lowSecuritySmsUrl?: string;
  lowSecuritySmsText?: string;

  pathToDesignPdfs: string;
  pathToMapImages: string;

  postsHost?: string;

  currencySymbol: string;
  ballotBudgetLogo: string;
  shakeVotingButton: boolean;
  hideLocation: boolean;
  googleMapsApiKey: string;
  googleMapsStaticApiKey: string;
  hideShowPost: boolean;
  dontUserMillions: boolean;
  hideItemSharing: boolean;
  favoriteIconOutline: string;
  favoriteIcon: string;
  welcomeLogo: string;
  localeSetup: Record<string, OavLocationInfo>;
  defaultLanguage: string;
  shareMetaData: OavConfigMetaInformation;
  pageTitle: string;
  googleAnalyticsId: string;
  oneBallotId: number;
  welcomeLocales: Record<string,Record<string,string>>;
  welcomeLocalesByArea: Record<number,Record<string,Record<string,string>>>;
  helpPageLocales: Record<string,Record<string,string>>;
  hideFavoriteButton: boolean;
  lowSecuritySmsLoginMinYearOfBirth?: number;
  lowSecuritySmsLoginMaxYearOfBirth?: number;
}

interface OavConfigFromServer {
  client_config: OavClientConfig;
  areas: Array<OavArea>;
  total_voter_count: number;
  area_voter_count: Record<number,number>;
  auth_url: string;
  cssProperties: Array<Record<string,string>>;
}

interface OavAreaForPostcodes {
  id: number;
  name: string;
}

interface OavLocationInfo {
  latitude: string;
  longitude: string;
}

interface OavItemAttributes {
  id: number;
  idea_id: number;
  price: number;
  image_url: string;
  pdf_url: string;
  name: string;
  locations: string | Array<OavLocationInfo>;
  description: string;
}

interface OavAreaAttributes {
  id: number;
  name: string;
  budget_amount: number;
}

interface OavConfigMetaInformation {
  title: string;
  description: string;
  shareImageUrl: string;
  faviconUrl: string;
}
