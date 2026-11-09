// =============================================================================
//  サイト共通データ（運営会社・問い合わせ窓口・法務ページの日付）
//  会社情報や窓口が変わったら、ここだけ直せば全ページに反映されます。
// =============================================================================

export const SERVICE_NAME = 'ぽちぱちパニック';

export interface Operator {
  name: string;
  nameEn: string;
  url: string;
  representative: string;
  address: string;
}

/** 運営会社。先頭が主たる運営者（個人情報の管理責任者・販売事業者）。 */
export const OPERATORS: Operator[] = [
  {
    name: 'LIVE RUSH株式会社',
    nameEn: 'LIVE RUSH Inc.',
    url: 'https://liverush.co.jp/',
    representative: '広川 準',
    address: '〒106-6012 東京都港区六本木1-6-1 泉ガーデンタワー',
  },
  {
    name: 'ENKA株式会社',
    nameEn: 'ENKA Co., Ltd.',
    url: 'https://enka2024.co.jp/',
    representative: '尾崎 遥',
    address: '〒106-6012 東京都港区六本木1-6-1 泉ガーデンタワー',
  },
];

export const PRIMARY_OPERATOR = OPERATORS[0];

/** お問い合わせ窓口 */
export const CONTACT = {
  email: 'info@liverush.co.jp',
  responseNote: '内容を確認のうえ、原則として3営業日以内にご返信します（土日祝日・年末年始を除く）。',
};

/** 法務ページの制定日・最終改定日（表示用） */
export const LEGAL_DATES = {
  privacy: { established: '2026年11月9日' },
  terms: { established: '2026年11月9日' },
  tokushoho: { established: '2026年11月9日' },
};

/** フッターなどに出す法務・サポートページ */
export const LEGAL_LINKS = [
  { path: 'terms/', label: '利用規約' },
  { path: 'privacy/', label: 'プライバシーポリシー' },
  { path: 'tokushoho/', label: '特定商取引法に基づく表記' },
  { path: 'contact/', label: 'お問い合わせ' },
];
