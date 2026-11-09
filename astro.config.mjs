// @ts-check
import { defineConfig } from 'astro/config';

// ============================================================================
//  Cloudflare Pages 公開設定
//  ---------------------------------------------------------------------------
//  公開URL: https://pochipachi.com/
//
//  ▸ SITE … OGP / canonical などの「絶対URL」生成に使われます。
//  ▸ BASE … 独自ドメイン直下で公開するため '/'。
// ============================================================================
const SITE = 'https://pochipachi.com';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
