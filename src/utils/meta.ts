interface MetaData {
  title: string;
  description: string;
}

export const updateMetaTags = (metadata: MetaData) => {
  const { title, description } = metadata;
  
  if (title) {
    document.title = title;
  }

  if (description) {
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag instanceof HTMLMetaElement) {
      metaDescriptionTag.content = description;
    }
  }
};