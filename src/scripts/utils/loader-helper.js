import '../components/app-loader';

const LoaderInitiator = {
  async makeRequestWithLoader(loaderContainer, request) {
    const loaderElement = document.createElement('app-loader');

    loaderContainer.appendChild(loaderElement);
    const response = await request();
    loaderContainer.removeChild(loaderElement);

    return response;
  },

  async makeRequestWithMultipleLoader(loaderContainers, request) {
    loaderContainers.forEach((loaderContainer) => {
      const loaderElement = document.createElement('app-loader');
      loaderContainer.appendChild(loaderElement);
    });

    const response = await request();

    loaderContainers.forEach((loaderContainer) => {
      loaderContainer.removeChild(document.querySelector('app-loader'));
    });

    return response;
  },
};

export default LoaderInitiator;
