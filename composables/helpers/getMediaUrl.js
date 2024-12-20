
const getMediaUrl = () => {
  const config = useRuntimeConfig();

  const getFormattedUrl = (imageDataObject) => {
    const url = imageDataObject?.url;
    return `${config.public.baseURL}${url}`;
  }

  return { 
    getFormattedUrl
  };
}

export default getMediaUrl;
