/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_SITE_NAME: string;
  readonly VITE_TWITTER_HANDLE: string;
  readonly VITE_LINKEDIN_PROFILE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
