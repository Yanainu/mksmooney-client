
const getPhotoUrl = () => {
  const config = useRuntimeConfig();

  const getFormattedUrl = (imageDataObject) => {
    const url = imageDataObject?.data?.attributes?.url;
    return `${config.public.baseURL}${url}`;
  }

  return { 
    getFormattedUrl
  };
}

export default getPhotoUrl;
