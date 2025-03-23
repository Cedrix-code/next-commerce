immport { Menu } from "./types";

export async functio shopifyFetch<T>({
    cache = 'force-cache',
    header,
    query,
    tags,
    variables
}: {
    cache?: RequestCache,
    header?: HeadersInit,
    query: string,
    tags?: string[],
    variables?: ExtractVariables<T>
}) {
    
}

export async function getMenu(handle: string): Promise<Menu[]> {
  const res = await shopifyFetch<ShopiMMenuOperation>({
    query: getMenuQuery,
    tags: [TAGS.collection],
    variables: {
      handle,
    },
  });

  return res.body?.data?.menu?.items.map(
    (item: { title: string; url: string }) => ({
      title: item.title,
      path: item.url
        .replace(domain, "")
        .replace("/collections", "/search")
        .replace("/pages", ""),
    })
  );
}
