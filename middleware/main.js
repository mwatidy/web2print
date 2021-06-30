export default async function ({ store }) {

 

    if (!store.state.designer.assetsLoaded) {
        await store.dispatch('designer/loadAssets')
    }

}