import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const bearagnosticRelease = {
  versionName: '0.35.46-alpha94',
  versionCode: 94,
  apkFilename: 'Bearagnostic-0.35.46-alpha94.apk',
  apkSha256: '04235d5aec385e2cfb2cd3d4a6427446657b27e1475fc156d00aaf7009c2f742',
  certificateSha256: '503FB4A77B38E7129E20002EC6A0B1D4225FD189BB16E0C71EBAD88ECA88AE90',
  publicPath: '/downloads/Bearagnostic-0.35.46-alpha94.apk',
  appLanguages: ['English', 'ไทย', '日本語'],
  websiteLanguageCount: 16,
  proPriceThb: 249,
  proProductCode: 'bearagnostic_pro_lifetime',
  distribution: ['Benedict Interactive', 'Uptodown'],
} as const;

export type BearagnosticArtifactState =
  | { status: 'verified'; actualSha256: string }
  | { status: 'missing'; actualSha256: null }
  | { status: 'mismatch'; actualSha256: string };

/**
 * Build-time fail-closed verification for the public APK.
 *
 * The website must never expose a download link merely because a file with the
 * expected name exists. The link becomes available only when the exact public
 * file is present AND its SHA-256 equals the frozen Golden APK hash.
 *
 * Resolve from the project root rather than import.meta.url. Astro/Vite can
 * bundle this module into another build location, which makes source-relative
 * import.meta.url paths unreliable during a static production build.
 */
export function getBearagnosticArtifactState(): BearagnosticArtifactState {
  const relativePublicPath = bearagnosticRelease.publicPath.replace(/^\/+/, '');
  const artifactPath = resolve(process.cwd(), 'public', relativePublicPath);

  if (!existsSync(artifactPath)) {
    return { status: 'missing', actualSha256: null };
  }

  const actualSha256 = createHash('sha256')
    .update(readFileSync(artifactPath))
    .digest('hex');

  if (actualSha256 !== bearagnosticRelease.apkSha256) {
    return { status: 'mismatch', actualSha256 };
  }

  return { status: 'verified', actualSha256 };
}
