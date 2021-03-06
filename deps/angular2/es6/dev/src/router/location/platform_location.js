/**
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 *
 * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
 * agnostic.
 * This means that we can have different implementation of `PlatformLocation` for the different
 * platforms
 * that angular supports. For example, the default `PlatformLocation` is {@link
 * BrowserPlatformLocation},
 * however when you run your app in a WebWorker you use {@link WebWorkerPlatformLocation}.
 *
 * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
 * when
 * they need to interact with the DOM apis like pushState, popState, etc...
 *
 * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
 * by
 * the {@link Router} in order to navigate between routes. Since all interactions between {@link
 * Router} /
 * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
 * class
 * they are all platform independent.
 */
export class PlatformLocation {
    /* abstract */ get pathname() { return null; }
    /* abstract */ get search() { return null; }
    /* abstract */ get hash() { return null; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fbG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL2xvY2F0aW9uL3BsYXRmb3JtX2xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbIlBsYXRmb3JtTG9jYXRpb24iLCJQbGF0Zm9ybUxvY2F0aW9uLnBhdGhuYW1lIiwiUGxhdGZvcm1Mb2NhdGlvbi5zZWFyY2giLCJQbGF0Zm9ybUxvY2F0aW9uLmhhc2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUNIO0lBS0VBLGNBQWNBLENBQUNBLElBQUlBLFFBQVFBLEtBQWFDLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQ3RERCxjQUFjQSxDQUFDQSxJQUFJQSxNQUFNQSxLQUFhRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNwREYsY0FBY0EsQ0FBQ0EsSUFBSUEsSUFBSUEsS0FBYUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFTcERILENBQUNBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgY2xhc3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IGFuIGFwcGxpY2F0aW9uIGRldmVsb3Blci4gSW5zdGVhZCwgdXNlXG4gKiB7QGxpbmsgTG9jYXRpb259LlxuICpcbiAqIGBQbGF0Zm9ybUxvY2F0aW9uYCBlbmNhcHN1bGF0ZXMgYWxsIGNhbGxzIHRvIERPTSBhcGlzLCB3aGljaCBhbGxvd3MgdGhlIFJvdXRlciB0byBiZSBwbGF0Zm9ybVxuICogYWdub3N0aWMuXG4gKiBUaGlzIG1lYW5zIHRoYXQgd2UgY2FuIGhhdmUgZGlmZmVyZW50IGltcGxlbWVudGF0aW9uIG9mIGBQbGF0Zm9ybUxvY2F0aW9uYCBmb3IgdGhlIGRpZmZlcmVudFxuICogcGxhdGZvcm1zXG4gKiB0aGF0IGFuZ3VsYXIgc3VwcG9ydHMuIEZvciBleGFtcGxlLCB0aGUgZGVmYXVsdCBgUGxhdGZvcm1Mb2NhdGlvbmAgaXMge0BsaW5rXG4gKiBCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbn0sXG4gKiBob3dldmVyIHdoZW4geW91IHJ1biB5b3VyIGFwcCBpbiBhIFdlYldvcmtlciB5b3UgdXNlIHtAbGluayBXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9ufS5cbiAqXG4gKiBUaGUgYFBsYXRmb3JtTG9jYXRpb25gIGNsYXNzIGlzIHVzZWQgZGlyZWN0bHkgYnkgYWxsIGltcGxlbWVudGF0aW9ucyBvZiB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX1cbiAqIHdoZW5cbiAqIHRoZXkgbmVlZCB0byBpbnRlcmFjdCB3aXRoIHRoZSBET00gYXBpcyBsaWtlIHB1c2hTdGF0ZSwgcG9wU3RhdGUsIGV0Yy4uLlxuICpcbiAqIHtAbGluayBMb2NhdGlvblN0cmF0ZWd5fSBpbiB0dXJuIGlzIHVzZWQgYnkgdGhlIHtAbGluayBMb2NhdGlvbn0gc2VydmljZSB3aGljaCBpcyB1c2VkIGRpcmVjdGx5XG4gKiBieVxuICogdGhlIHtAbGluayBSb3V0ZXJ9IGluIG9yZGVyIHRvIG5hdmlnYXRlIGJldHdlZW4gcm91dGVzLiBTaW5jZSBhbGwgaW50ZXJhY3Rpb25zIGJldHdlZW4ge0BsaW5rXG4gKiBSb3V0ZXJ9IC9cbiAqIHtAbGluayBMb2NhdGlvbn0gLyB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gYW5kIERPTSBhcGlzIGZsb3cgdGhyb3VnaCB0aGUgYFBsYXRmb3JtTG9jYXRpb25gXG4gKiBjbGFzc1xuICogdGhleSBhcmUgYWxsIHBsYXRmb3JtIGluZGVwZW5kZW50LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGxhdGZvcm1Mb2NhdGlvbiB7XG4gIGFic3RyYWN0IGdldEJhc2VIcmVmRnJvbURPTSgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IG9uUG9wU3RhdGUoZm46IFVybENoYW5nZUxpc3RlbmVyKTogdm9pZDtcbiAgYWJzdHJhY3Qgb25IYXNoQ2hhbmdlKGZuOiBVcmxDaGFuZ2VMaXN0ZW5lcik6IHZvaWQ7XG5cbiAgLyogYWJzdHJhY3QgKi8gZ2V0IHBhdGhuYW1lKCk6IHN0cmluZyB7IHJldHVybiBudWxsOyB9XG4gIC8qIGFic3RyYWN0ICovIGdldCBzZWFyY2goKTogc3RyaW5nIHsgcmV0dXJuIG51bGw7IH1cbiAgLyogYWJzdHJhY3QgKi8gZ2V0IGhhc2goKTogc3RyaW5nIHsgcmV0dXJuIG51bGw7IH1cblxuICBhYnN0cmFjdCByZXBsYWNlU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkO1xuXG4gIGFic3RyYWN0IHB1c2hTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgZm9yd2FyZCgpOiB2b2lkO1xuXG4gIGFic3RyYWN0IGJhY2soKTogdm9pZDtcbn1cblxuLyoqXG4gKiBBIHNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIHRoZSBldmVudCBmcm9tIG9uUG9wU3RhdGUgb3Igb25IYXNoQ2hhbmdlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXJsQ2hhbmdlRXZlbnQgeyB0eXBlOiBzdHJpbmc7IH1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxDaGFuZ2VMaXN0ZW5lciB7IChlOiBVcmxDaGFuZ2VFdmVudCk6IGFueTsgfVxuIl19