export const usePage = async () => {
  useSeoMeta({title: 'default title'})
  const { data, pending, error, refresh } = await useAsyncData(
    'mountains',
    () => $fetch('https://api.nuxtjs.dev/mountains')
  )
  // @ts-ignore
  useSeoMeta({title: unref(data)[0].title })


  return { data, error, refresh }
}
