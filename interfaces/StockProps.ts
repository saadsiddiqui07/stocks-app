export interface StockProps {
  change_percent: number;
  country_code: string;
  currency: string;
  exchange: string;
  exchange_close: string;
  exchange_open: string;
  google_mid: string;
  last_update_utc: string;
  name: string;
  pre_or_post_market: number;
  pre_or_post_market_change: number;
  pre_or_post_market_change_percent: number;
  previous_close: number;
  price: number;
  symbol: string;
  timezone: string;
  type: string;
  utc_offset_sec: number;
}
