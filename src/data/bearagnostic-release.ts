import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const bearagnosticRelease = {
  versionName: '0.35.45-alpha93',
  versionCode: 93,
  apkFilename: 'Bearagnostic-0.35.45-alpha93.apk',
  apkSha256: '09c12a8eb81d1a9353bc588b49639648457a1d502318ba58bc10bd8da7cfb66f',
  certificateSha256: '503FB4A77B38E7129E20002EC6A0B1D4225FD189BB16E0C71EBAD88ECA88AE90',
  publicPath: '/downloads/Bearagnostic-0.35.45-alpha93.apk',
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
 */
export function getBearagnosticArtifactState(): BearagnosticArtifactState {
  const artifactUrl = new URL(`../../public${bearagnosticRelease.publicPath}`, import.meta.url);
  const artifactPath = fileURLToPath(artifactUrl);

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
