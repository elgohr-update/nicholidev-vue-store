import { urlStore } from './store'
import { StorefrontModule } from '@vue-storefront/module'
import { beforeEachGuard } from './router/beforeEach'
import { StorageManager } from '@vue-storefront/core/store/lib/storage-manager'

export const cacheStorage = StorageManager.init('url')

export const UrlModule: StorefrontModule = function (app, store, router, moduleConfig, appConfig) {
  store.registerModule('url', urlStore)
  router.beforeEach(beforeEachGuard)
}
