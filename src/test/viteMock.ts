// src/test/viteMock.ts
declare global {
  interface ImportMetaEnv {
    VITE_SITE_URL: string;
    VITE_SITE_NAME: string;
    VITE_TWITTER_HANDLE: string;
    VITE_LINKEDIN_PROFILE: string;
    MODE: string;
    DEV: boolean;
    PROD: boolean;
    SSR: boolean;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

// Mock import.meta
(global as any).import = {
  meta: {
    env: {
      VITE_SITE_URL: 'https://home.intellisyncsolutions.io',
      VITE_SITE_NAME: 'IntelliSync Solutions',
      VITE_TWITTER_HANDLE: '@intellisync',
      VITE_LINKEDIN_PROFILE: 'https://www.linkedin.com/company/intellisync',
      MODE: 'test',
      DEV: false,
      PROD: false,
      SSR: false
    }
  }
};

export {};
